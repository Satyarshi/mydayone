import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section relative py-12 w-full text-white">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start mt-28 md:mt-24 px-10 footer">
        {/* Logo and Address */}
        <div className="flex flex-col mr-5">
          <p className="font-bold text-md"> Start Talent Readiness Journey with</p>
          <img src="/footer-logo.svg" alt="myDayOne" className="ml-2 w-52" />
          <div className="ml-6">
            <p className="font-bold">for</p>
            <p><span className="text-red-500">-</span> <span className="font-bold">I</span>ndividuals</p>
            <p><span className="text-red-500">-</span> <span className="font-bold">L</span>eaders</p>
            <p><span className="text-red-500">-</span> <span className="font-bold">T</span>eams</p>
            <p><span className="text-red-500">-</span> <span className="font-bold">O</span>rganisations</p>
          </div>
        </div>

        {/* Company */}
        <div className="flex justify-between gap-4 pl-4 company">
          {/* Services */}
          <div className="w-full md:w-1/3">
          <div className="md:m-auto md:w-fit">
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href={'/products/sparcle'}> MyDayOne Sparcle</Link></li>
              <li><Link href={'/products/talentscope'}> MyDayOne talentScope</Link></li>
            </ul>
          </div>
          </div>
          {/* Legal */}
          <div className="w-full md:w-1/3">
          <div className="md:m-auto md:w-fit">

            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/service"}>Sevices</Link></li>
              <li><Link href={"/about"}>About</Link></li>
              <li><Link href={"/blog"}>Blogs</Link></li>
              <li><Link href={"/careers"}>Careers</Link></li>
            </ul>
          </div>
          </div>
          <div className="md:w-1/3">
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="list-none space-y-2">
              <div className="flex gap-4">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  Corporate Office:
                  Chromium, HD036, CTS No 106/1-5, JVLR, Near L&T Junction, Milind Nagar, Powai, Mumbai 400076</p>
              </div>
              <div className="flex gap-4">
                <i className="fa-solid fa-envelope"></i>
                <p>
                  enquire@mydayoneai.com
                </p>
              </div>

            </ul>
          </div>
        </div>

        {/* Social Media and Language Dropdown */}
        <div className="social-media flex flex-col gap-4 pl-4">
          <div className="flex gap-4 md:-mt-10 items-center">
            <p className="font-bold">LinkedIn - </p>
            <a  href="https://www.linkedin.com/company/mydayonecompany/" className="social-icon">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-10" />
            </a>
           
          </div>

          {/* Language Dropdown */}
          <div className="language-selector invisible">
            <button className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-full">
              <img
                src="/android-globe.svg"
                alt="Language"
                className="inline mr-2"
              />
              English - En
              <img
                src="/chevron-down.svg"
                alt="Dropdown"
                className="inline ml-8"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
