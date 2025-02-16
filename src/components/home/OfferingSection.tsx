"use client";
import React, { useState, useEffect } from "react";
import ImageTitle from "../Title/ImageTitle";
import { div } from "framer-motion/client";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";

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


  // Content for each tab
  const tabContent: { [key: string]: string } = {
    Products:
      "Our innovative tech solutions, SPARCLE and talentSCOPE, revolutionize talent readiness acceleration and assessment in organizations. SPARCLE, powered by iTRAS (intelligent Talent Readiness Acceleration System), enhances readiness across core areas, including role-based skills and competencies readiness, leadership readiness, product/process knowledge, and onboarding. talentSCOPE is an intelligent suite designed to assess skills, competencies, behaviors, product knowledge, process knowledge, and aptitude.",
    Services:
      "We provide customisable curation of consultation, coaching, content creation, program design, handholding and other bespoke support services tailored to meet unique requirements of your organisation. Our team of professionals is dedicated to ensure your talent and learning programs are more effective, insightful, effortless, hyper personalised at scale and provide desired ROI/outcomes.",
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
                    onClick={() => handleToggle(tab)}
                    className={`text-lg px-4 py-2 rounded-[50px] transition duration-300 ${activeTab === tab
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
          <p className={`text-center text-[#7B7E85] max-w-3xl mx-auto mb-8 text-lg sm:text-lg ${isFading ? "opacity-0" : "opacity-100"
            }`}>
            {tabContent[activeTab]}
          </p>

          <div className="flex items-start justify-center gap-4 flex-wrap md:flex-nowrap ">
            <div className="w-full md:w-[300px] flex items-center justify-center gap-4 flex-col" >
              <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow w-full p-6">

                <AnimatedCircularProgressBar
                  max={100}
                  min={0}
                  value={value}
                  gaugePrimaryColor="rgb(79 70 229)"
                  gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                />
                <p className="mt-4 text-center text-gray-600 text-lg">
                  Insert some key statistic
                </p>
              </div>
              <img
                src="/Meeting.svg"
                alt="Meeting Presentation"
                className="rounded-xl shadow w-full max-h-52 object-cover mt-auto"
              />
            </div>
            <div className="w-full md:w-[456px] flex flex-col items-center justify-center gap-4 overflow-hidden">
            <img
                src="/stats.svg"
                alt="Statistics Graphic"
                className="rounded-xl  object-cover md:w-[456px] "
              />
              <div className="flex items-center w-full justify-center bg-white rounded-xl shadow p-6">
                <p className="text-center text-lg font-semibold">
                  Insert a two-line sentence feature
                </p>
              </div>
            </div>
            <div className="w-full md:w-[315px] flex flex-col gap-4">
            <img
                src="/laptop.svg"
                alt="Meeting Presentation"
                className="rounded-xl w-full object-cover"
              />
              <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6">
                <span className="text-3xl font-bold text-gray-800">000</span>
                <p className="mt-2 text-center text-gray-600 text-lg">
                  Insert key metric name
                </p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6">
                <span className="text-3xl font-bold text-gray-800">000</span>
                <p className="mt-2 text-center text-gray-600 text-lg">
                  Insert key metric name
                </p>
              </div>
            </div >
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfferingSection;
