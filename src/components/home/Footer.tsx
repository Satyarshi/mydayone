"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <footer className="bg-[#fafbfb] py-8">
      <div className="container mx-auto px-20 flex flex-wrap justify-between gap-8">
        {/* Branding Section */}
        <div className="flex-1 min-w-[250px]">
          <img src="/logomyday.svg" alt="myDayOne" className="ml-2 w-52" />
          <p className="mt-2 text-[#7B7E85]">
            Start Your Development journey with myDayOne
          </p>
          <p className="font-bold text-[#7B7E85]">for</p>
          <ul className="text-[#7B7E85]">
            <li>
              - <span className="font-bold">I</span>ndividuals
            </li>
            <li>
              - <span className="font-bold">L</span>eaders
            </li>
            <li>
              - <span className="font-bold">T</span>eams
            </li>
            <li>
              - <span className="font-bold">O</span>rganisations
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-bold mb-5">Socials</h3>
          <p className="text-[#7B7E85]">enquire@mydayoneai.com</p>
          <a href="https://www.linkedin.com/company/mydayonecompany/">
            <button className="mt-2 flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
              <FaLinkedin className="mr-2" />{" "}
              <span className="text-[#7B7E85]">LinkedIn</span>
            </button>
          </a>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-bold mb-5">Quick Links</h3>
          <ul className="text-[#7B7E85] space-y-3">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
            <li>
              <button
                onClick={() => setShowProducts(!showProducts)}
                className="flex items-center"
              >
                Products{" "}
                {showProducts ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </button>
              {showProducts && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="/products/sparcle">SPARCLE</a>
                  </li>
                  <li>
                    <a href="/products/talentscope">talentScope</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/service/startup">Services</a>
            </li>
          </ul>
        </div>

        {/* Location Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-bold mb-5">Location</h3>
          <p className="text-[#7B7E85] max-w-lg">
            Corporate Office: Chromium, HD036, CTS No 106/1-5, JVLR, Near L&T
            Junction, Milind Nagar, Powai, Mumbai 400076
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
