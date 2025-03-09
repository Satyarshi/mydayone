"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import "aos/dist/aos.css";
import ImageTitle from "../Title/ImageTitle";
const InsightSection: React.FC = () => {
  useEffect(() => {
    Aos.init({ offset: 100 });
  }, []);

  return (
    <section className="relative pb-12 w-full">
      <div className="container mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
        <ImageTitle
          image="/features.svg"
          title="Transforming Talent for Organizational Growth"
          description=""
        />

        <div className="flex justify-center items-start mt-10 md:mx-28 flex-wrap md:flex-nowrap">
          {/* First card - Large card with nested grid */}
          <div
            className="w-full md:w-1/3 relative p-6 rounded-xl flex flex-col justify-start"
            data-aos="zoom-in-left"
            data-aos-duration="500"
          >
            {/* Nested grid inside the first card */}
            <div className="shadow-lg bg-white rounded-xl p-6 text-left h-max">
              <h2 className="text-lg font-semibold">Solutions</h2>
              <p>
                Comprehensive solutions for <br />
                skilling, scaling, and talent development.{" "}
              </p>
            </div>
          </div>
          <div
            className="w-full md:w-1/3 relative p-6 rounded-xl flex flex-col justify-start"
            data-aos="zoom-in-left"
            data-aos-duration="650"
          >
            {/* Nested grid inside the first card */}
            <div className="shadow-lg bg-white rounded-xl p-6 text-left h-max">
              <h2 className="text-lg font-semibold">Tools</h2>
              <p>
                Proprietary digital tools: 360° assessments, success profiles,
                and hyper-personalized talent readiness journeys.
              </p>
            </div>
          </div>
          <div
            className="w-full md:w-1/3 relative p-6 rounded-xl flex flex-col justify-start"
            data-aos="zoom-in-left"
            data-aos-duration="800"
          >
            {/* Nested grid inside the first card */}
            <div className="shadow-lg bg-white rounded-xl p-6 text-left h-max">
              <h2 className="text-lg font-semibold">Interventions</h2>
              <p>
                Customizable interventions underpinned by iTRAS ( intelligent
                Talent Readiness Acceleration System - our proprietary
                real-world leadership experience, action research, cutting-edge
                talent methodologies).
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full flex justify-center"
          data-aos="zoom-in-left"
          data-aos-duration="500"
        >
          <img src="/service-feature.svg" alt="" />
        </div>
        {/* Bottom row of small cards */}
      </div>
    </section>
  );
};

export default InsightSection;
