import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 my-20 mt-36 w-full">
        {/* Statistics */}
        <div className="flex flex-wrap items-center justify-center gap-4 gap-y-7 lg:gap-14 md:gap-4">

          <div className="w-full md:w-auto">
            <h2 className="text-5xl md:text-6xl  font-bold text-[#9C27B0]">+130%</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="/android-share.svg" alt="learning" />
              <p className="text-[#0000008A] text-lg md:text-2xl">Talent Readiness</p>
            </div>
          </div>

          <div className="hidden md:block h-24 w-[2px] bg-[#E1BEE7]" />

          <div className="w-full md:w-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-[#9C27B0]">+40K</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="/person-stalker.svg" alt="User" />
              <p className="text-[#0000008A] text-lg md:text-2xl">Active Users</p>
            </div>
          </div>

          <div className="hidden md:block h-24 w-[2px] bg-[#E1BEE7]" />

          <div className="w-full md:w-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-[#9C27B0]">100+</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="/social-buffer.svg" alt="organization" />
              <p className="text-[#0000008A] text-lg md:text-2xl">Organizations</p>
            </div>
          </div>
          
        </div>
    </section>
  );
};

export default StatsSection;
