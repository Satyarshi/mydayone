import React from "react";
import Link from "next/link";
import ImageTitle from "../Title/ImageTitle";

const PricingSection: React.FC = () => {
  return (
    <div className="relative py-5">
      <div className="text-center pt-8 pb-16">
        <ImageTitle
          image="/Pricing.svg"
          title="Choose Your Perfect Plan"
          description="Simple Pricing. Unlimited Potential."
        />

        {/* Pricing Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
          {/* Standard Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-xl font-bold mb-4 price-card">Basic</h2>
              <img src="/Price1.png" alt="standard price" className="w-full" />
              <div className="text-gray-600 my-4 price-text">
                Get started with...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For small ", bold: "teams" },
                  { text: "One pre ", bold: "assessment" },
                  {
                    text: "Standard Individual Development Plans",
                    bold: " (IDPs)",
                  },
                  { text: "Personalized ", bold: "consultation" },
                  { text: "1 month Continuous ", bold: "peer feedback module" },
                  { text: "Free onboarding ", bold: "consultation" },
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
              <h2 className="text-xl font-bold mb-4 price-card">Pro</h2>
              <img src="/Price2.png" alt="plus price" className="w-full" />
              <div className="text-gray-600 my-4 price-text">
                All Basic features and...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For ", bold: "Growing organizations" },
                  { text: "One Pre and post ", bold: "assessments" },
                  { text: "Continuous ", bold: "mini-assessments" },
                  {
                    text: "3 months Continuous ",
                    bold: "peer feedback module",
                  },
                  {
                    text: "Role based Individual Development Plans ",
                    bold: "(IDPs)",
                  },
                  { text: "Free onboarding ", bold: "consultation" },
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
              <img src="/Price3.png" alt="company price" className="w-full" />
              <div className="text-gray-600 my-4 price-text">
                All Pro features and...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For ", bold: "Large-scale organizations" },
                  { text: "Custom", bold: " integrations" },
                  { text: "Priority ", bold: "support" },
                  {
                    text: "Comprehensive solutions for ",
                    bold: "organizational needs",
                  },
                  { text: "Learning", bold: " reinforcements" },
                  {
                    text: "Continuous ",
                    bold: "peer feedback module",
                  },
                  { text: "Group ", bold: "consultation session" },
                  { text: "Role-based ", bold: "permissions" },
                  { text: "Free onboarding ", bold: "consultation" },
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
