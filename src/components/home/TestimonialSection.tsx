"use client";

import React, { useState } from "react";
import ImageTitle from "../Title/ImageTitle";

const TestimonialSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center text-center md:w-11/12 w-full px-4 pb-12 mx-auto">
      
      <div className=" flex flex-col items-center text-center pt-12 mt-14">
        {/* Title */}
        {/* <h1 className="absolute top-[-50px] text-[8rem] font-bold opacity-10 skills-heading">
          SAY'S
        </h1> */}
        <ImageTitle image="/sayâ€™s.svg" title="What People Say About Our Support & Services" description="" />
        

        <div className="w-full relative flex items-center justify-center z-10 mt-5 mx-4">
          {/* Testimonial Text */}
          <div className=" w-full relative flex flex-col items-center justify-center text-center max-w-3xl space-x-4 z-10">
            <div>
              <div className="w-full text-3xl text-gray-800 font-semibold testimonial relative space-y-2">
                <div className="flex justify-center flex-col items-center md:flex-row text-lg md:text-3xl">

                  We Empower Organizations
                  <span
                    className="w-20 hover:w-40 mx-2 transition-width inline-block relative"
                    onMouseEnter={() => setHovered(1)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img
                      src="/man.svg"
                      alt="Person 1"
                      className={`w-full h-8 object-cover rounded-3xl transition-width`}
                    />
                    {hovered === 1 && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 rounded-[1rem] bg-zinc-600 text-white text-sm p-4  shadow-lg z-20 man-hover">
                        {/* Tooltip Arrow */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-zinc-600"></div>
                        <p>
                        "MyDayOne has streamlined our feedback process with AI-driven insights and automation, saving time and enhancing team collaboration. The suite is user-friendly and has been instrumental in improving leadership development."
                        </p>
                        <p className="mt-2 font-bold">Sanjay Verma</p>
                        <p className="text-xs">HR Manager</p>
                      </div>
                    )}
                  </span>
                  And Their
                </div>
                <div className="flex justify-center flex-col items-center md:flex-row text-lg md:text-3xl">
                  teams to  seamlessly
                  <span
                    className="relative mx-0 md:mx-2 w-20 hover:w-40 transition-width inline-block"
                    onMouseEnter={() => setHovered(2)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img
                      src="/woman.svg"
                      alt="Person 2"
                      className={`w-full h-8 object-cover rounded-3xl transition-width`}
                    />
                    {hovered === 2 && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-zinc-600 text-white text-sm p-4 rounded-[1rem] shadow-lg z-20 woman-hover">
                        {/* Tooltip Arrow */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-zinc-600"></div>
                        <p>
                          "MyDayOne revolutionized our workforce development, boosting productivity by 40% and enhancing role-specific skills by 60%. A must-have for any forward-thinking organization!"
                        </p>
                        <p className="mt-2 font-bold">Riya Sharma</p>
                      </div>
                    )}
                  </span>
                  implement and
                </div>
                <div className="text-lg md:text-3xl">
                  manage dynamic Talent Programs
                  with ease.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default TestimonialSection;
