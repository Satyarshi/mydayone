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
            className="w-[500px] h-auto"
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
          <div className="my-4">
            <ul className="text-left mb-10 text-[#7B7E85] text-lg space-y-4">
              <li className="flex items-start text-base">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-2 w-4 h-4 mt-1"
                />
                <div >
                  <p className="text-lg"><span className="font-semibold text-lg">Hyper-Personalized Learning Journeys: </span>Tailored plans for each employee to maximize growth and impact.</p>
                </div>
              </li>
              <li className="flex items-start text-base">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-2 w-4 h-4 mt-1"
                />
                <div >
                  <p className="text-lg"><span className="font-semibold text-lg">Real-Time Insights: </span>Intuitive dashboards to track progress and make smarter decisions.</p>
                </div>
              </li>
              <li className="flex items-start text-base">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-2 w-4 h-4 mt-1"
                />
                <div >
                  <p className="text-lg"><span className="font-semibold text-lg">Scalable Development: </span> Streamline learning for your entire workforce without losing personalization.</p>
                </div>
              </li>
              <li className="flex items-start text-base">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-2 w-4 h-4 mt-1"
                />
                <div >
                  <p className="text-lg"><span className="font-semibold text-lg">Boost Engagement: </span>Keep employees motivated and invested with immersive experiences.</p>
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
