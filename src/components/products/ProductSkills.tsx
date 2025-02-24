import React from "react";
import { MarqueeDemo } from "../MarqueeDemo";
import ImageTitle from "../Title/ImageTitle";

interface ProductSkillsProps {
  title: string;
  description: string;
}

const ProductSkills: React.FC<ProductSkillsProps> = ({ title, description }) => {
  return (
    <section className="relative flex flex-col items-center text-center py-12 w-full ">
      <div className="container mx-auto text-center z-10">
        {/* Title and Description */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 relative">
          <div className="relative md:w-1/2">
            <ImageTitle image="/Process.png" title={title} description={''} oreintation="left"/>
            
          </div>
          <p className="text-[#7B7E85] text-lg max-w-xl mx-auto text-justify">
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
