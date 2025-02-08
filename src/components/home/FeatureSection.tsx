import React from "react";
import ImageTitle from "../Title/ImageTitle";

const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-3 w-full mb-16 px-2 bg-white md:flex-row md:justify-center">
      <div className="container mx-auto text-center relative z-10 flex flex-col md:flex-row items-center justify-around">
        {/* Left Side - Image */}

        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/Image.svg"
            alt="Person with laptop"
            className="w-[300px] h-auto"
          />
        </div>

        {/* Right Side - Features */}
        <div className="max-w-2xl text-left relative">
          {/* Heading */}
          <ImageTitle
            image="/features.svg"
            title="Unlock Your True Talent Readiness Potential"
            description=""
            oreintation="left"
          />

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <img
                src="/feature-1.png.svg"
                alt="Customized Learning Paths"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Customizable Talent Acceleration Paths
                </h3>
                <p className="text-[#67687A] text-lg">
                  Adaptable journeys aligned with roles.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <img
                src="/feature-2.png.svg"
                alt="Insightful Analytics"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Insightful Analytics
                </h3>
                <p className="text-[#67687A] text-lg">
                  Real-time tracking to refine learning strategies.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <img
                src="/7067626 1.png"
                alt="Effortless Integration"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Effortless Integration
                </h3>
                <p className="text-[#67687A] text-lg">
                  Integrates smoothly with current platforms.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start">
              <img
                alt="Clear ROI Metrics"
                src="/data-analysis-graph-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-business-bussines-vol-1-pack-infographics-illustrations-3962174 1.png"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Clear ROI Metrics
                </h3>
                <p className="text-[#67687A] text-lg">
                  Concrete results that reflect readiness levels.
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
