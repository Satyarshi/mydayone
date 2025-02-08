"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection: React.FC = () => {
  useEffect(() => {
    Aos.init({ offset: 200 });
  }, []);
  return (
    <section className="flex flex-col items-center text-center" >
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {/* First card - Large card with nested grid */}
        <div
          className="p-6 rounded-xl flex"
          data-aos="zoom-in-left"
          data-aos-duration="500"
          data-aos-delay="50"
        >
          <div className="bg-purple-600 text-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-center">
            <div className="text-5xl font-bold">95%</div>
            <p className="text-2xl font-bold mt-2">More</p>
            <p className="text-lg">
              visibility into your talent development processes and completion
              rates.
            </p>
          </div>
        </div>

        {/* Second card */}
        <div
          className="p-6 rounded-xl flex flex-col justify-center"
          data-aos="zoom-in-left"
          data-aos-duration="500"
          data-aos-delay="50"
        >
          <div
            className="grid grid-rows-[1fr_2fr] gap-4 h-full"
          >
            {/* Purple card - 95% */}
            <div className="bg-gray-400 flex items-center justify-center rounded-xl h-full">
              {/* Video/Image placeholder */}
              <span className="text-white text-xl">
                Video/Image Placeholder
              </span>
            </div>

            {/* Mastering Talent Development card */}
            <div className="flex flex-col justify-center">
              <div className="w-full p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30">
                <div className="h-[250px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder-image.svg"
                    alt="Placeholder"
                    className="opacity-50"
                  />
                </div>
                <h2 className="text-md font-semibold mb-2">Hello</h2>
                <p className="text-gray-500 text-sm">nothing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third card */}
        <div
          className="p-6 rounded-xl flex flex-col justify-center"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-delay="50"
        >
          <div className="grid grid-rows-[1fr_1fr] gap-4 h-full">
            {/* Purple card - 95% */}
            <div className="bg-purple-600 text-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-center">
              <div className="text-5xl font-bold">95%</div>
              <p className="text-2xl font-bold mt-2">More</p>
              <p className="text-lg">
                visibility into your talent development processes and completion
                rates.
              </p>
            </div>

            {/* Mastering Talent Development card */}
            <div className="flex flex-col justify-center">
              <div className="w-full p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30">
                <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder-image.svg"
                    alt="Placeholder"
                    className="opacity-50"
                  />
                </div>
                <h2 className="text-md font-semibold mb-2">Hello</h2>
                <p className="text-gray-500 text-sm">nothing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
