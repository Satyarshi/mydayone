import React from "react";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "./AnimatedShinyTextDemo";

interface HeroSectionProps {
  shinyText: string;
  heading: string;
  subheading: string;
  buttonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  shinyText,
  heading,
  subheading,
  buttonText,
}) => {
  return (
    <>
      {/* Headline Section */}
      <div className=" bg-[#fff] py-5  rounded-lg text-xs inline-block">
        <AnimatedShinyTextDemo text={shinyText}  />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>

      {/* Subheading Section */}
      <p className="text-lg text-gray-600 mb-8 max-w-5xl">{subheading}</p>

      {/* CTA Button */}
      <Link href="/form#service-form">
        <button className="bg-[#7030A0] text-white py-3 px-8 rounded-xl mb-12 hover:bg-purple-700">
          {buttonText}
        </button>
      </Link>
    </>
  );
};

export default HeroSection;
