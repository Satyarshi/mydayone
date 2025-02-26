import React from "react";
import Link from "next/link";
import ImageTitle from "../Title/ImageTitle";

const PricingSection: React.FC = () => {
  return (
    <div className="relative py-5">

      <div className="text-center pt-8 pb-16">
        <ImageTitle image="/Pricing.svg" title="Choose Your Perfect Plan" description="Simple Pricing. Unlimited Potential."/>
    

        {/* Pricing Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
          {/* Standard Plan */}
          <div className=" rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-xl font-bold mb-4 price-card">Starter</h2>
              <img src="/sparcle-price-1.svg" alt="standard price" className="w-full" />
              <div className="text-gray-600 my-4 price-text">
                Get started with...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For small ", bold: "teams" },
                  { text: "One ", bold: "baseline assessment" },
                  { text: "Learning ", bold: "reinforcements" },
                  { text: "Role Based ", bold: "Individual Development Plan (IDP)" },
                  { text : "Free onboarding ", bold: "consultation" },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <img
                      src="/tick.svg"
                      alt="Check Icon"
                      className="mr-3 w-4 h-4"
                    />
                    {feature.bold ? (
                      <span>
                        {feature.text}
                        <span className="font-bold">{feature.bold}</span>
                      </span>
                    ) : (
                      <span>{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-5" />
            <div>
              <Link href="/form#service-form">
                <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-xl mb-4 font-bold price-card">
                Professional
              </h2>
              <img src="/sparcle-price-2.svg" alt="plus price" className="w-full" />
              <div className="text-gray-600 my-4 price-text">
                All Starter features and...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For ", bold: "Growing organisations" },
                  { text: "One Pre and post ", bold: "assessments" },
                  { text: "Continuous ", bold: "Peer feedback module" },
                  { text : "Hyper personalised ", bold: "Readiness Journey" },
                  { text: "Group", bold: " consultation" },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <img
                      src="/tick.svg"
                      alt="Check Icon"
                      className="mr-3 w-4 h-4"
                    />
                    {feature.bold ? (
                      <span>
                        {feature.text}
                        <span className="font-bold">{feature.bold}</span>
                      </span>
                    ) : (
                      <span>{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-5" />
            <div>
              <Link href="/form#service-form">
                <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>

          {/* Company Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-xl font-bold mb-4 price-card">Enterprise</h2>
              <img
                src="/sparcle-price-3.svg"
                alt="company price"
                className="w-full"
              />
              <div className="text-gray-600 my-5 price-text">
                All Professional features and...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For", bold: " Large-scale organisations" },
                  { text: "Custom ", bold: "integrations" },
                  { text: "Priority ", bold: "support" },
                  { text: "Integrated ", bold: "Readiness package" },
                  { text: "Workload ", bold: "management" },
                  { text: "Integration with  ", bold: "succession management" },
                  { text : "9 ", bold: "Box Framework" },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <img
                      src="/tick.svg"
                      alt="Check Icon"
                      className="mr-3 w-4 h-4"
                    />
                    {feature.bold ? (
                      <span>
                        {feature.text}
                        <span className="font-bold">{feature.bold}</span>
                      </span>
                    ) : (
                      <span>{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-5" />
            <div>
              <Link href="/form#service-form">
                <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
