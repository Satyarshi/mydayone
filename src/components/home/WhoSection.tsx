import React from "react";
import ImageTitle from "../Title/ImageTitle";
import Image from "next/image";

const WhoSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center text-center md:w-11/12 w-full px-4 pb-10 mx-auto bg-[#fbfbfc]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left Side - Text Content */}
        <div className="lg:max-w-2xl">
          {/* Heading */}
          <div className=" mb-2">
            <ImageTitle
              image="/Who.svg"
              title="Empowering Ambitious Talent to Achieve Their Potential"
              description=""
              oreintation="left"
            />
          </div>

          {/* Description */}
          <p className="text-[#7B7E85] text-base md:text-lg mb-5 text-left ">
            Our suite is designed for individuals and organizations committed to
            achieve talent readiness aiming to enhance productivity,
            effectiveness and drive impactful results.
          </p>

          {/* Button-Like Labels */}
          <div className="flex flex-wrap gap-3 justify-start text-sm text-left md:justify-start">
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>HR Professionals</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>Managers</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>Corporate Trainers</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>Professional Coaches</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p className="text-left">
                  Enterprises & SMBs Seeking Skill Development
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex justify-center mt-8 md:mt-0">
          <div className="h-auto relative">
            <Image
              src="/newwho.svg"
              alt="Person with laptop"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
