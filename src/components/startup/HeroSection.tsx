import React from "react";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "../AnimatedShinyTextDemo";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-20">
      {/* Headline Section */}
      <div className="mt-6 bg-[#fff] px-3 py-5 rounded-lg text-xs inline-block">
        <AnimatedShinyTextDemo
          text={`What’s new? Instantly issue virtual card’s`}
        />
      </div>
      <h1 className="text-4xl font-bold text-black mb-4">
        Empowering Talent Development with Tailored Solutions
      </h1>

      {/* Subheading Section */}
      <p className="text-lg text-gray-500 mb-8 max-w-3xl">
        Unlock the full potential of your workforce with MyDayOne’s customized
        learning and development services. We offer comprehensive solutions to
        meet every stage of your talent journey—from onboarding and upskilling
        to performance tracking and continuous growth.
      </p>

      {/* CTA Button */}
      <Link href="/form#service-form">
        <button className="bg-[#7030A0] text-white py-3 px-8 rounded-xl mb-12 hover:bg-purple-700">
          Explore Our Services
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
