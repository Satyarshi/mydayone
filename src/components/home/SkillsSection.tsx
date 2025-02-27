"use client";
import React, { useRef } from "react";
import ImageTitle from "../Title/ImageTitle";

const SkillsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll handler functions for arrows
  const scrollLeft = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft === 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
      }
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      if (
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth
      ) {
        scrollRef.current.scrollLeft = 0;
      }
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center text-center md:w-11/12 w-full px-4 pb-10 mx-auto bg-[#fbfbfc]">
      <div className="container mx-auto text-center z-10">
        {/* Title and Description */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-6 justify-center mb-5">
          <div className="lg:flex-1">
            <ImageTitle
              image="/Skills.svg"
              title="Building Essential Competencies and Skills for Growth and Success"
              oreintation="left"
              description=""
            />
          </div>

          <p className="text-[#7B7E85] text-base md:text-lg lg:max-w-2xl mx-auto text-justify lg:flex-[0.7]">
            We focus on enhancing core competencies and skills that empower
            readiness and talent acceleration to achieve higher productivity,
            foster collaboration and drive organizational success. Our approach
            nurtures key competencies and skills needed to thrive in today’s
            dynamic work environment.
          </p>
        </div>
        <hr className="border border-[#DEDEDE]" />
        {/* Skills Carousel */}
        <div className="flex items-center justify-center gap-2 mt-5 w-full mx-auto text-xs md:text-sm">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="text-[#9C27B0] bg-transparent border-2 border-[#9C27B0] rounded-full p-2 hover:bg-[#9C27B0] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Skill Buttons Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide no-scrollbar gap-4 snap-x snap-mandatory items-center justify-start scroll-smooth relative scroll-home"
          >
            {[
              "Prioritisation",
              "Problem Solving",
              "Communication",
              "Team Management",
              "Leadership",
              "Adaptability",
              "Creativity",
              "Critical Thinking",
              "Prioritisation",
              "Problem Solving",
              "Communication",
              "Team Management",
              "Leadership",
              "Adaptability",
              "Creativity",
              "Critical Thinking",
              "Prioritisation",
              "Problem Solving",
              "Communication",
              "Team Management",
              "Leadership",
              "Adaptability",
              "Creativity",
              "Critical Thinking",
              "Prioritisation",
              "Problem Solving",
              "Communication",
              "Team Management",
              "Leadership",
              "Adaptability",
              "Creativity",
              "Critical Thinking",
            ].map((skill, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-[#9C27B0] text-[#111827] rounded-[5px] font-semibold snap-start shrink-0 skills"
              >
                {skill}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="text-[#9C27B0] bg-transparent border-2 border-[#9C27B0] rounded-full p-2 hover:bg-[#9C27B0] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
