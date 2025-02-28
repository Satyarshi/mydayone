import React from "react";
import Link from "next/link";
import ImageTitle from "../Title/ImageTitle";

interface BenefitsSectionProps {
  title: string;
  descriptionTitle: string;
  descriptionText: string;
  listItems: {
    title: string;
    para: string;
  }[];
  height?: string;
  };


const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  descriptionTitle,
  descriptionText,
  listItems,
  height = "auto", // Default height
}) => {
  return (
    <section className="relative benefits pb-20" style={{ "--benefits-height": height } as React.CSSProperties}>
      {/* Content Container */}
      <div className=" flex flex-col items-center justify-center product-content">
        <div className=" text-center pt-15 md:mx-20 lg:px-0 top-56">
          {/* Title Section */}
          <ImageTitle image="/Benefits.svg" title={title} description="" />

          {/* Description */}
          <div className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="text-left lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#111827] mb-5">
                {descriptionTitle}
              </h2>
              <p className="text-justify text-[#7B7E85] mb-8 text-base sm:text-base">
                {descriptionText}
              </p>
              <ul className="text-left mb-10 text-[#7B7E85] sm:text-lg space-y-4">
                {listItems.map((feature, index) => (
                  <li key={index} className="flex items-start text-base">
                    <img
                      src="/check.svg"
                      alt="Check Icon"
                      className="mr-3 w-5 h-5"
                    />
                      <div>
                    <span className="font-semibold">
                    {feature.title}
                    </span> 
                    {feature.para}
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
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/sparcleHero1.png"
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
