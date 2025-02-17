import React from "react";
import ImageTitle from "../Title/ImageTitle";

const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center md:w-11/12 w-full px-4 pb-12 mx-auto bg-[#fbfbfc]">
      <div className="container mx-auto text-center z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Image */}

        <div className="flex justify-center md:justify-start mb-8">
          <img
            src="/Image.svg"
            alt="Person with laptop"
            className="w-[500px] h-auto"
          />
        </div>

        {/* Right Side - Features */}
        <div className="lg:max-w-2xl text-left">
          {/* Heading */}
          <ImageTitle
            image="/features.svg"
            title="Unlock Your True Talent Readiness Potential"
            description=""
            oreintation="left"
          />

          {/* Features List */}
          <div className="mt-2">
            <ul className="text-left text-[#7B7E85] text-base md:text-lg space-y-4">
              <li className="flex items-start text-base">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-2 w-4 h-4 mt-1"
                />
                <div >
                  <p className="text-base md:text-lg"><span className="font-semibold text-base md:text-lg">Customisable Talent Acceleration Paths: </span>Adaptable journeys aligned with roles.</p>
                </div>
              </li>
              <li className="flex items-start text-base">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-2 w-4 h-4 mt-1"
                />
                <div >
                  <p className="text-base md:text-lg"><span className="font-semibold text-base md:text-lg">Insightful Analytics: </span>Real-time tracking to refine learning strategies.</p>
                </div>
              </li>
              <li className="flex items-start text-base">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-2 w-4 h-4 mt-1"
                />
                <div >
                  <p className="text-base md:text-lg"><span className="font-semibold text-base md:text-lg">Effortless Integration: </span> Integrates smoothly with current platforms.</p>
                </div>
              </li>
              <li className="flex items-start text-base">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-2 w-4 h-4 mt-1"
                />
                <div >
                  <p className="text-base md:text-lg"><span className="font-semibold text-base md:text-lg">Clear ROI Metrics: </span>Concrete results that reflect readiness levels.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
