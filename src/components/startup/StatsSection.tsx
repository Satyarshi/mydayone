import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-10 w-full">
        {/* Statistics */}
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row bg-[#fbfbfc]">

          <div className="w-full md:w-auto">
            <h2 className="text-5xl font-bold text-[#9C27B0]">60%</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <p className="text-[#0000008A] text-lg md:text-2xl max-w-xs text-center">Higher performance of identified talent</p>
            </div>
          </div>

          <div className="hidden lg:block h-24 w-[2px] bg-[#E1BEE7]" />

          <div className="w-full md:w-auto">
            <h2 className="text-5xl font-bold text-[#9C27B0]">82%</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <p className="text-[#0000008A] text-lg md:text-2xl max-w-64 text-center">Retention of key talent</p>
            </div>
          </div>

          <div className="hidden lg:block h-24 w-[3px] bg-[#E1BEE7]" />

          <div className="w-full md:w-auto">
            <h2 className="text-5xl font-bold text-[#9C27B0]">3X</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <p className="text-[#0000008A] text-lg md:text-2xl max-w-xs text-center">Defined, repeatable people processes.</p>
            </div>
          </div>
          
        </div>
    </section>
  );
};

export default StatsSection;
