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
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-xl font-bold mb-4 price-card">Starter</h2>
              <img src="/Price21.png" alt="standard price" className="w-full" />
              <div className="text-gray-600 my-4 price-text">
                Get started with...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For small ", bold: "teams" },
                  { text: "One pre-", bold: "360 assessment" },
                  { text: "Learning ", bold: "reinforcements" },
                  // { text: "Set Up Fee – INR 99,000  for one Standard Journey", bold: "" },
                  // { text: "Monthly Licence Fee – INR 999 / licence (concurrent users) ", bold: "" },
                  // { text: "Onboarding Fee – INR 49,000/ upto 20 employees", bold: "" },
                  { text: "Personalized ", bold: "consultation" },
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
              <h2 className="text-xl font-bold mb-4 price-card">
                Professional
              </h2>
              <img src="/Price22.png" alt="plus price" className="w-full" />
              <div className="text-gray-600 my-4 price-text">
                All Standard features and...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For ", bold: "Growing organizations" },
                  { text: "Pre and post ", bold: "360-degree assessments" },
                  { text: "Continuous ", bold: "mini-assessments" },
                  // { text: "Custom Individual Development Plans ", bold: "(IDPs)" },
                  // { text: "Set Up Fee: INR 2,99,000 for 10 customized journeys" },
                  // { text: "Monthly License Fee: INR 1,999 per license (concurrent users)", bold: "" },
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

          {/* Company Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-xl font-bold mb-4 price-card">Enterprise</h2>
              <img
                src="/Price23.png"
                alt="company price"
                className="w-full"
              />
              <div className="text-gray-600 my-4 price-text">
                All Plus features and...
              </div>
              <hr />
              <ul className="text-left mt-6 price-feature">
                {[
                  { text: "For", bold: "Large-scale organizations" },
                  { text: "Custom integrations", bold: "" },
                  { text: "Priority support", bold: "" },
                  { text: "Comprehensive solutions for ", bold: "organizational needs" },
                  { text: "Full ", bold: "compensation package" },
                  { text: "Leadership and executive ", bold: "support" },
                  { text: "Workload ", bold: "management" },
                  { text: "Role-based ", bold: "permissions" },
                  { text: "Personalized ", bold: "consultation sessions" },
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
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
