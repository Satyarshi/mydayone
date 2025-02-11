import React from "react";
import ImageTitle from "../Title/ImageTitle";

const WhoSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center text-center md:text-left md:py-12 w-full md:mb-28 bg-white relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around relative z-10 px-4">
        {/* Left Side - Text Content */}
        <div className="max-w-2xl">
          {/* Heading */}
          <div className=" mb-6">
            <ImageTitle
              image="/Who.svg"
              title="Empowering Ambitious Talent to Achieve Their Potential"
              description=""
              oreintation="left"
            />
          </div>

          {/* Description */}
          <p className="text-[#7B7E85] text-lg mb-6 text-left ">
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
          <img
            src="/newwho.svg"
            alt="Growth Illustration"
            className="w-[300px] md:w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
