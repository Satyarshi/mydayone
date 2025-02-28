import React from "react";
import ImageTitle from "../Title/ImageTitle";

const ProcessSection: React.FC = () => {
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
          <ImageTitle
            image="/Process.png"
            title="How We Deliver Tangible Impact ?"
            description=""
            oreintation="left"
          />

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
                  Deep dive into your organization’s current state and your
                  priorities.
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
                  Co-Create
                </h3>
                <p className="text-[#67687A] text-lg">
                  Hyper Personalised, participant co-created solutions.
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
                  Implement
                </h3>
                <p className="text-[#67687A] text-lg">
                  Practical programs backed by industry expertise.
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
                  Regular progress reviews with outcome-focused reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
