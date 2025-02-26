"use client";
import React, { useState, useEffect } from "react";
import ImageTitle from "../Title/ImageTitle";
import { a, div } from "framer-motion/client";
import ProgressRing from "./ProgressRing";

const OfferingSection: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>("Products");
  const [isFading, setIsFading] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  const tabContent: { [key: string]: () => React.JSX.Element } = {
    Products:()=>
    <>
      Our innovative tech solutions, <span className="font-semibold text-gray-800"> SPARCLE </span>and <span className="font-semibold text-gray-800">talentScope</span> revolutionize talent readiness and assessment in organizations. SPARCLE, powered by <span className="font-semibold text-gray-800">iTRAS (intelligent Talent Readiness Acceleration System)</span>, boosts readiness in core areas like role-based skills, leadership, product and process knowledge, and onboarding. talentScope is an intelligent suite assessing skills, competencies, behaviors, product/process knowledge, and aptitude.
    </>,
    Services:()=>
    <>
      We provide customisable curation of consultation, coaching, content creation, program design, handholding and other bespoke support services tailored to meet unique requirements of your organisation. Our team of professionals is dedicated to ensure your <span className="font-semibold text-gray-800">talent and learning programs</span> are more effective, insightful, effortless, <span className="font-semibold text-gray-800">hyper personalised</span> at scale and provide desired ROI/outcomes.
    </>
  };
  const handleToggle = (tabContent: string) => {
    if (tabContent !== activeTab) {
      setIsFading(true);
      setTimeout(() => {
        setActiveTab(tabContent);
        setIsFading(false);
      }, 200); // Match the animation duration
    }
  };
  return (
    <section
      className="relative md:py-14 offer-section bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: "url(/Rectangle.svg)" }}
    >
      <div className="flex flex-col items-center text-center md:w-11/12 w-full px-4 mx-auto">
        <div className=" text-center pt-15">
          <ImageTitle
            image="/Offerings.svg"
            title="Primary Areas We Excel in to Serve You"
            description=""
          />

          {/* Tabs Section */}
          <div className="mt-3 mb-7 relative">
            <div className="flex justify-center gap-4 sm:gap-8 text-base sm:text-2xl relative">
              {["Products", "Services"].map((tab) => (
                <div className="flex flex-col" key={tab}>
                  <button
                    onClick={() => handleToggle(tab)}
                    className={`text-lg px-4 py-2 rounded-[50px] transition duration-300 ${
                      activeTab === tab
                        ? "text-white bg-purple-800"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <p
            className={`text-center text-[#7B7E85] max-w-5xl mx-auto mb-11 text-base md:text-lg ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {tabContent[activeTab]()}
          </p>

          {activeTab === "Products" ? (
            <div className={`flex items-start justify-center gap-4 flex-wrap md:flex-nowrap ${isFading ? "opacity-0" : "opacity-100"}`}>
              <div className="w-full md:w-[280px] flex items-center justify-center gap-4 flex-col">
                <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow w-full p-6">
                  <ProgressRing
                    percentage={78}
                    color="text-[#7030A0]"
                    strokeWidth={5}
                    size={160}
                  />
                  <p className="mt-4 text-center text-gray-600 text-base md:text-lg">
                    Faster Skill Readiness
                  </p>
                </div>
                <img
                  src="/Meeting.svg"
                  alt="Meeting Presentation"
                  className="rounded-xl shadow w-full max-h-52 object-cover mt-auto"
                />
              </div>
              <div className="w-full md:w-[436px] flex flex-col items-center justify-center gap-4 overflow-hidden">
                <img
                  src="/productBento.svg"
                  alt="Statistics Graphic"
                  className="rounded-xl  object-cover md:w-[506px] "
                />
                <div className="flex items-center w-full justify-center bg-white rounded-xl shadow p-6">
                  <p className="text-center text-base md:text-base font-semibold">
                  Revolutionizing how talent readiness is accelerated and
                    assessed in organisations.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[285px] flex flex-col gap-4">
                <img
                  src="/productpic1.png"
                  alt="Meeting Presentation"
                  className="rounded-xl w-full object-cover"
                />
                <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6">
                  <img src="/SPARCLELogo.png" alt="" className="h-10" />
                  <p className="mt-2 text-center text-gray-600 text-base md:text-base">
                    Accelerating Talent Readiness
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6">
                  <img src="/talentscope2.png" alt="" className="h-10" />
                  <p className="mt-2 text-center text-gray-600 text-base md:text-base">
                    Assessing your Talent
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={`${isFading ? "opacity-0" : "opacity-100"}`}>
              <div className="flex items-start justify-center  flex-wrap md:flex-nowrap mt-10 gap-4">
                <div>
                  <img
                    src="/serviceTab1.png"
                    alt=""
                    className="max-h-[200px]"
                  />
                </div>
                <div className="bg-white text-black rounded-xl shadow p-6 h-[200px] w-[200px] flex flex-col justify-end">
                  <p className="font-bold text-gray-800 text-5xl text-left">
                    3x
                  </p>
                  <p className="text-left text-base">
                    More defined and repeatable people processes
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center flex-wrap md:flex-nowrap mt-4 gap-4">
                <div className="w-[200px] bg-white text-black rounded-xl shadow p-6 h-[200px] flex flex-col items-center justify-center">
                  <ProgressRing
                    percentage={60}
                    color="text-[#7030A0]"
                    strokeWidth={5}
                    size={140}
                  />
                  <p className="text-sm">
                    Higher Performance of Identified Talent
                  </p>
                </div>
                <div>
                  <img
                    src="/serviceTab2.png"
                    className="max-h-[200px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;
