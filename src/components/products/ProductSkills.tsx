import React from "react";
import { MarqueeDemo } from "../MarqueeDemo";
import ImageTitle from "../Title/ImageTitle";

interface ProductSkillsProps {
  title: string;
  description: string;
}

const ProductSkills: React.FC<ProductSkillsProps> = ({ title, description }) => {
  return (
    <section className="flex flex-col items-center text-center w-full px-4 pb-10 mx-auto bg-[#fbfbfc] ">
      <div className="container mx-auto text-center z-10">
        {/* Title and Description */}
        <div className="flex flex-col lg:flex-row justify-center mb-8 relative gap-8">
          <div className="relative md:w-full">
            <ImageTitle image="/process1.svg" title={title} description={''} oreintation="left"/>
            
          </div>
          <p className="text-[#7B7E85] text-lg max-w-xl text-justify">
            {description}
          </p>
        </div>
        <hr className="border border-[#DEDEDE]" />
        {/* Marquee to be added below */}
        <MarqueeDemo />
      </div>
    </section>
  );
};

export default ProductSkills;
