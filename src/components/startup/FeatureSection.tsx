import React from "react";
import ImageTitle from "../Title/ImageTitle";


const FeatureSection: React.FC = () => {
  return (
    <section
      className="relative startup pb-20 "
    >
      {/* Content Container */}
      <div className=" flex flex-col items-center justify-center product-content">
        <div className=" text-center pt-15 md:mx-20 lg:px-0 top-56">
          {/* Title Section */}

          {/* Description */}
          <div className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="text-left lg:w-1/2">
              <ImageTitle
                image="/features.svg.svg"
                title={`Features That Power Transformation`}
                description=""
                oreintation="left"
              />
              <ul className="text-left mb-10 text-[#7B7E85] sm:text-lg space-y-4">
                <li className="flex items-start text-base">
                  <img
                    src="/check.svg"
                    alt="Check Icon"
                    className="mr-3 w-5 h-5"
                  />
                  <div>Decades of <span className="font-semibold">real-world leadership experience</span> in people readiness, performance, and change management. Programs that help you grow through your people.</div>
                </li>
                <li className="flex items-start text-base">
                  <img
                    src="/check.svg"
                    alt="Check Icon"
                    className="mr-3 w-5 h-5"
                  />
                  <div>Proprietary <span className="font-semibold">digital tools</span> to amplify program impact.</div>
                </li>
                <li className="flex items-start text-base">
                  <img
                    src="/check.svg"
                    alt="Check Icon"
                    className="mr-3 w-5 h-5"
                  />
                  <div>Real world <span className="font-semibold">optimised processes</span> to ensure costs are affordable.</div>
                </li>
                <li className="flex items-start text-base">
                  <img
                    src="/check.svg"
                    alt="Check Icon"
                    className="mr-3 w-5 h-5"
                  />
                  <div><span className="font-semibold">Culturally sensitive, cost-effective solutions</span> Hyper Personalized for every budget.</div>
                </li>
                <li className="flex items-start text-base">
                  <img
                    src="/check.svg"
                    alt="Check Icon"
                    className="mr-3 w-5 h-5"
                  />
                  <div>A <span className="font-semibold">behaviour-based approach</span> ensuring measurable, lasting impact.</div>
                </li>
                <li className="flex items-start text-base">
                  <img
                    src="/check.svg"
                    alt="Check Icon"
                    className="mr-3 w-5 h-5"
                  />
                  <div><span className="font-semibold">Access to industry stalwarts</span> for specialized assignments.</div>
                </li>
              </ul>
            </div>

            {/* Data Visualization Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/startup-feature.svg"
                alt="graph image"
                className="md:w-[50rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
