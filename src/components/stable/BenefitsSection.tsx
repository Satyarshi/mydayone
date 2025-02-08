import React from "react";
import Link from "next/link";
import ImageTitle from "../Title/ImageTitle";
const listItems = [
  "Improved alignment between organizational goals and day-to-day work.",
  "Behavioral shifts leading to measurable business outcomes.",
  "Real-time tracking of progress through advanced reporting dashboards.",
]
const BenefitsSection: React.FC = () => {
  return (
    <section className="relative benefits  max-h-[100vh] overflow-hidden">
      {/* Content Container */}
      <div className=" flex flex-col items-center justify-center product-content">
        <div className=" text-center pt-15 md:mx-20 lg:px-0 top-56">
          {/* Title Section */}
         

          {/* Description */}
          <div className="flex flex-col lg:flex-row justify-evenly items-center px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="text-left flex-col items-center justify-center lg:w-1/2">
            <ImageTitle image="/Results.svg" title={'Drive Impactful Outcomes That Matter'} description="" oreintation="left"/>
              <ul className="text-left mb-10 text-[#7B7E85] sm:text-xl  space-y-4">
                {listItems.map((feature, index) => (
                  <li key={index} className="flex items-start text-base">
                    <img
                      src="/Vector.svg"
                      alt="Check Icon"
                      className="mr-3 w-5 h-5"
                    />
                    <div>
                      {feature}
                    </div>
                  </li>
                ))}
              </ul>
              {/* CTA Button */}
              <Link href="/form#service-form">
                <button className="bg-[#7030A0] text-white font-semibold py-3 px-6 rounded-xl hover:bg-purple-700 transition">
                  Experience the Benefits
                </button>
              </Link>
            </div>

            {/* Data Visualization Section */}
            <div className="flex justify-center items-center lg:w-1/2">
              <img
                src="/servicesec1.png"
                alt="graph image"
                className="w-[30rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
