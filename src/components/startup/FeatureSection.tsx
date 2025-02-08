import React from "react";
import ImageTitle from "../Title/ImageTitle";

const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-3 w-full mb-16 px-2 bg-white md:flex-row md:justify-center">
      <div className="container mx-auto text-center relative z-10 flex flex-col md:flex-row items-center justify-around">
        {/* Left Side - Image */}

        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/servicesec2.png"
            alt="Person with laptop"
            className="h-auto"
          />
        </div>

        {/* Right Side - Features */}
        <div className="max-w-2xl text-left relative">
          {/* Heading */}
          <ImageTitle image="/Process.png" title="Tailored Solutions for Lasting Change" description="" oreintation="left" />


          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-x-2">
              <div>
              <div className="text-white text-xl bg-purple-800 h-10 w-10 flex justify-center items-center rounded-lg ">
                <i className="fa-solid fa-1 w-full before:h-full before:flex before:justify-center before:items-center"></i>
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
              <div className="text-white text-xl bg-purple-800 h-10 w-10 flex justify-center items-center rounded-lg ">
                <i className="fa-solid fa-2 w-full before:h-full before:flex before:justify-center before:items-center"></i>
              </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Design
                </h3>
                <p className="text-[#67687A] text-lg">
                  Real-time tracking to refine learning strategies.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start  gap-x-2">
            <div>
              <div className="text-white text-xl bg-purple-800 h-10 w-10 flex justify-center items-center rounded-lg ">
                <i className="fa-solid fa-3 w-full before:h-full before:flex before:justify-center before:items-center"></i>
              </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Deploy
                </h3>
                <p className="text-[#67687A] text-lg">
                  Deploy and integrate learning paths, assessments, and feedback loops.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start  gap-x-2">
            <div>
              <div className="text-white text-xl bg-purple-800 h-10 w-10 flex justify-center items-center rounded-lg ">
                <i className="fa-solid fa-4 w-full before:h-full before:flex before:justify-center before:items-center"></i>
              </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Measure
                </h3>
                <p className="text-[#67687A] text-lg">
                  Measure and refine through iterative improvements.
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
