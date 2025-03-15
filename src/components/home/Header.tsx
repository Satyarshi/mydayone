"use client";
import React, { useState, useEffect,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

interface HeaderProps {
  showCareers: boolean;
}

const Header: React.FC<HeaderProps> = ({ showCareers }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const serviceDropDownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 884);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 1500);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        serviceDropDownRef.current &&
        !serviceDropDownRef.current.contains(event.target as Node)
      ) {
        setIsServiceDropdownOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
    setIsServiceDropdownOpen(false);
  };

  const isActive = (linkPath: string): string => {
    if (linkPath === "/products") {
      return pathname.startsWith("/product") ? "text-[#8f04f7]" : "text-current";
    }
    if (linkPath === "/service") {
      return pathname.startsWith("/service") ? "text-[#8f04f7]" : "text-current";
    }
    return pathname === linkPath ? "text-[#8f04f7]" : "text-current";
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsServiceDropdownOpen(false);
  };

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-[1000] p-4 transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : pathname == "/" ? "bg-transparent text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image src="/mydayone.png" alt="My DayOne" width={100} height={100} />
          </Link>
        </div>

        {isMobile ? (
          <div>
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        ) : (
          <nav className="flex space-x-12">
            <Link href="/" className={`${isActive("/")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
              Home
            </Link>
            <div className="relative" ref={dropDownRef}>
              <button className={`${isActive("/products")} hover:text-[#8f04f7]`} onClick={toggleDropdown}>
                Products
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg z-20">
                  <Link href="/products/sparcle" className="block px-4 py-2 hover:bg-gray-200 text-black" onClick={handleLinkClick}>
                    SPARCLE
                  </Link>
                  <Link href="/products/talentscope" className="block px-4 py-2 hover:bg-gray-200 text-black" onClick={handleLinkClick}>
                    talentSCOPE
                  </Link>
                </div>
              )}
            </div>
            {/* <Link href="/service/stable" className={`${isActive("/service/stable")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
              Service
            </Link> */}
            <div className="relative"  ref={serviceDropDownRef}>
              <button className={`${isActive("/service")} hover:text-[#8f04f7]`} onClick={toggleServiceDropdown}>
                Service
              </button>

              {isServiceDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg z-20 w-max min-w-[150px]">
                  <Link href="/service/startup" className="block px-4 py-2 hover:bg-gray-200 text-black" onClick={handleLinkClick}>
                    Startup
                  </Link>
                  <Link href="/service/stable" className="block px-4 py-2 hover:bg-gray-200 text-black" onClick={handleLinkClick}>
                    Stable Enterprise
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className={`${isActive("/about")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
              About
            </Link>
            {showCareers && (
              <Link href="/careers" className={`${isActive("/careers")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
                Careers
              </Link>
            )}
            <Link href="/blog" className={`${isActive("/blog")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
              Blog
            </Link>
          </nav>
        )}

        {!isMobile && (
          <div className="flex space-x-8 items-center">
            <Link href="/form">
              <button className="bg-[#7030a0] text-white px-4 py-2 rounded">Contact Us</button>
            </Link>
          </div>
        )}

        {isMobile && (
          <div
            className={`fixed inset-0 bg-white z-50 p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-between items-center mb-6 text-black">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={toggleSidebar}>
                <AiOutlineClose size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 text-black">
              <Link href="/" className={`${isActive("/")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
                Home
              </Link>
              <Link href="/about" className={`${isActive("/about")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
                About
              </Link>
              {/* <Link href="/service/stable" className={`${isActive("/service/stable")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
                Service
              </Link> */}
              <div className="relative">
                <button className={`${isActive("/service")} hover:text-[#8f04f7]`} onClick={toggleServiceDropdown}>
                  Service
                </button>
                {isServiceDropdownOpen && (
                  <div className="mt-2 space-y-2">
                    <Link href="/service/startup" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                      Startup
                    </Link>
                    <Link href="/service/stable" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                      Stable Enterprise
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button className={`${isActive("/products")} hover:text-[#8f04f7]`} onClick={toggleDropdown}>
                  Products
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 space-y-2">
                    <Link href="/products/sparcle" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                      SPARCLE
                    </Link>
                    <Link href="/products/talentscope" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                      talentSCOPE
                    </Link>
                  </div>
                )}
              </div>
              {showCareers && (
                <Link href="/careers" className={`${isActive("/careers")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
                  Careers
                </Link>
              )}
              <Link href="/blog" className={`${isActive("/blog")} hover:text-[#8f04f7]`} onClick={handleLinkClick}>
                Blog
              </Link>
            </nav>
            <div className="mt-8">
              <Link href={"/form"} className="bg-[#7030a0] text-white px-4 py-2 rounded w-full mt-4" onClick={handleLinkClick}>Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
