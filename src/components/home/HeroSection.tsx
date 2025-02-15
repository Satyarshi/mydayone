import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedShinyTextDemo } from "../AnimatedShinyTextDemo";

const HeroSection: React.FC = () => {
  return (
    <section className="snap-start flex flex-col items-center md:w-11/12 w-full mx-auto py-14 px-4">
      <div className="container mx-auto text-center flex flex-col items-center z-10">
        <div className="mt-6 bg-[#fff] px-3 py-1 rounded-lg text-xs inline-block">
          <AnimatedShinyTextDemo text={`Introducing our new product`} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-black mt-5">
          Most Talent Platforms Track Progress. We Drive Results.
        </h1>

        <p className="text-base md:text-lg text-gray-500 mt-5 max-w-5xl">
          At myDayOne, we are working towards enabling organisations with Talent
          Readiness and Assessment to drive performance, effectiveness and
          efficiency consistently. Our solutions are designed to address the
          pain points of skill / competency readiness, leadership readiness,
          onboarding readiness, product/service readiness through a unique blend
          of iTRAS (intelligent Talent Readiness Acceleration System - our
          proprietary real-world leadership experience, action research,
          cutting-edge talent methodologies) and innovative technology-driven
          solutions Al- based agents and hyper-personalized, automated talent
          readiness journeys.
        </p>

        <Link href="/form#service-form">
          <button className="bg-[#7030A0] text-white py-3 px-8 rounded-xl mt-5 hover:bg-purple-700">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
