import React from "react";
import ImageTitle from "../Title/ImageTitle";

const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-3 w-full mb-16 px-2 md:flex-row md:justify-center">
      <div className="container mx-auto text-center relative z-10 flex flex-col md:flex-row items-center justify-around">
        {/* Left Side - Image */}

        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/service-process.svg"
            alt="Person with laptop"
            className="h-auto"
          />
        </div>

        {/* Right Side - Features */}
        <div className="max-w-2xl text-left p-5 relative">
          {/* Heading */}
          <ImageTitle
            image="/process1.svg"
            title="Hyper-Personalised Solutions for Sustained Readiness"
            description=""
            oreintation="left"
          />

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-x-2">
              <div>
                <div className="h-10 w-10 flex justify-center items-center">
                  <img src="/bg-1.svg" alt="1" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Diagnose
                </h3>
                <p className="text-[#67687A] text-lg">
                  Diagnose current challenges with our Whole System approach.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start  gap-x-2">
              <div>
                <div className="h-10 w-10 flex justify-center items-center">
                  <img src="/bg-2.svg" alt="2" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">Design</h3>
                <p className="text-[#67687A] text-lg">
                  Customised development architecture to drive desired outcomes.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start  gap-x-2">
              <div>
                <div className="h-10 w-10 flex justify-center items-center">
                  <img src="/bg-3.svg" alt="3" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">Deploy</h3>
                <p className="text-[#67687A] text-lg">
                  Deploy and integrate assessments, readiness journeys and
                  feedback loops.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start  gap-x-2">
              <div>
                <div className="h-10 w-10 flex justify-center items-center">
                  <img src="/bg-4.svg" alt="4" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Measure
                </h3>
                <p className="text-[#67687A] text-lg">
                  Measure and refine through continuous feedback and iterative
                  improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
