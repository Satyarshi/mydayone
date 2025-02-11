"use client";
import React, { useState } from "react";
import ImageTitle from "../Title/ImageTitle";
import { div } from "framer-motion/client";

const OfferingSection: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>("Products");

  // Content for each tab
  const tabContent: { [key: string]: string } = {
    Products:
      "Our innovative tech solutions, SPARCLE and talentSCOPE, revolutionize talent readiness acceleration and assessment in organizations. SPARCLE, powered by iTRAS (intelligent Talent Readiness Acceleration System), enhances readiness across core areas, including role-based skills and competencies readiness, leadership readiness, product/process knowledge, and onboarding. talentSCOPE is an intelligent suite designed to assess skills, competencies, behaviors, product knowledge, process knowledge, and aptitude.",
    Services:
      "We provide customisable curation of consultation, coaching, content creation, program design, handholding and other bespoke support services tailored to meet unique requirements of your organisation. Our team of professionals is dedicated to ensure your talent and learning programs are more effective, insightful, effortless, hyper personalised at scale and provide desired ROI/outcomes.",
  };

  return (
    <section
      className="relative md:py-14 offer-section bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/Rectangle.svg)" }}
    >
      <div className="flex flex-col items-center justify-center p-4">
        <div className=" text-center pt-15">
          <ImageTitle
            image="/Offerings.svg"
            title="Primary Areas We Excel in to Serve You"
            description=""
          />

          {/* Tabs Section */}
          <div className="mb-10 relative">
            <div className="flex justify-center gap-4 sm:gap-8 text-base sm:text-2xl relative">
              {["Products", "Services"].map((tab) => (
                <div className="flex flex-col" key={tab}>
                  <button
                    className={`transition-all duration-500 ${
                      activeTab === tab
                        ? "text-[#9C27B0] font-semibold pb-2 mb-0"
                        : "text-[#7B7E85] font-semibold hover:text-[#9C27B0] pb-2"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                  <div
                    className={`border-[#9C27B0] border-t-4 w-32 h-2 rounded-xl ${
                      activeTab === tab ? "block" : "invisible"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            {/* Animated underline */}

            <hr className="w-[70%] mx-auto relative top-[-4px]" />
          </div>

          {/* Tab Content */}
          <p className="text-center text-[#7B7E85] max-w-3xl mx-auto mb-8 text-lg sm:text-lg">
            {tabContent[activeTab]}
          </p>

          {/* Product Interface Image */}
          <div className="flex justify-center mt-8">
            <img
              src="/mydayoneProd1.png"
              alt="Product Interface"
              className={`offer-img transition-all duration-500 opacity-100 scale-100`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;
