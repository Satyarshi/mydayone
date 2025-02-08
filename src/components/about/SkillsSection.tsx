import React from "react";

const SkillsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center text-center py-12 w-full bg-white">
      <div className="container mx-auto text-left z-10">
        {/* Title and Description */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 relative">
          <h1
            className="absolute text-[7rem] font-bold opacity-10 skills-heading"
            style={{ top: "-90px" }}
          >
            SKILLS
          </h1>
          <div className="flex items-start w-full md:w-1/2">
            {/* Vertical Colored Bars */}
            <div className="flex flex-col items-center justify-center space-y-2 mr-6 h-[400px]">
              <div className="w-1 h-16 bg-[#9030A069]"></div>
              <div className="w-1 h-16 bg-[#9030A069]"></div>
              <div className="w-1 h-16 bg-[#9030A069]"></div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col space-y-6">
              {/* Section Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
                Tailored Products for Every Stage of Development
              </h1>

              {/* Product Title */}
              <h2 className="text-lg lg:text-xl font-bold text-[#111827]">
                Classic 360 Degrees
              </h2>

              {/* Product Description */}
              <p className="text-[#7B7E85] text-lg max-w-xl">
                A fully digitalized suite offering customizable workflows,
                automatic notifications and easy integration. Perfect for
                companies seeking to optimize 360-degree assessments for skill
                and competency development.
              </p>

              {/* Statistics Section */}
              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                {/* Stat Box 1 */}
                <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl p-6 w-52">
                  <p className="text-3xl font-bold text-black">95%</p>
                  <p className="text-[#7B7E85]">
                    faster implementation of feedback processes.
                  </p>
                </div>

                {/* Stat Box 2 */}
                <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl p-6 w-72">
                  <p className="text-3xl font-bold text-black">80%</p>
                  <p className="text-[#7B7E85]">
                    of learners report better alignment with talent management
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <img src="/Group 1000002944.svg" alt="img" className="w-1/2"/>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
