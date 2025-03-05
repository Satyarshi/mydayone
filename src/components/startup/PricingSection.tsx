import React from "react";
import Link from "next/link";
import ImageTitle from "../Title/ImageTitle";

const PricingSection: React.FC = () => {
  return (
    <div className="relative py-5">
      <div className="text-center pt-8 pb-16">
        <ImageTitle
          image="/Pricing.svg"
          title="Choose From Our Services"
          description="Custom Solutions, Transparent Pricing"
        />

        {/* Pricing Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
          {/* Standard Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-lg font-bold mb-4 price-card leading-9">
                Advisory & Consulting
              </h2>
              <img
                src="/startup-price-1.svg"
                alt="standard price"
                className="w-full"
              />
              <div className="text-gray-600 my-4 price-text">
                Outcome-driven, expert-led solutions
              </div>
            </div>
            <hr className="mb-5" />
            <div>
              <Link href="/form#service-form">
                <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-lg font-bold mb-4 price-card leading-9">
                Digital Tools & Assessments
              </h2>
              <img
                src="/startup-price-2.svg"
                alt="plus price"
                className="w-full"
              />
              <div className="text-gray-600 my-4 price-text">
                 Leverage proprietary resources
              </div>
            </div>
            <hr className="my-6" />
            <div>
              <Link href="/form#service-form">
                <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>

          {/* Company Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80 z-20 flex flex-col h-full">
            <div className="flex-grow text-center">
              <h2 className="text-lg font-bold mb-4 price-card leading-9">
                Workshops & Development
              </h2>
              <img
                src="/startup-price-3.svg"
                alt="company price"
                className="w-full"
              />
              <div className="text-gray-600 my-4 price-text">
                Designed for maximum impact
              </div>
            </div>
            <hr className="my-6" />
            <div>
              <Link href="/form#service-form">
                <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                  Get a Quote
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
