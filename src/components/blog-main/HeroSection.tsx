import React from "react";
import { AnimatedShinyTextDemo } from "../AnimatedShinyTextDemo";

interface HeroSectionProps {
  title:string;
  description: string;
  category:string;// Changed to ObjectId and reference to Category
  featuredImage:string;
  readTime:string;
  author: string;
}


const HeroSection: React.FC<HeroSectionProps> = ({author,category,description,featuredImage,readTime,title}:HeroSectionProps) => {
  return (
    <section className="flex flex-col items-center text-center py-5">
      {/* Headline Section */}
      <div className="mt-6 bg-[#fff] px-3 py-5 rounded-lg text-xs inline-block">
        <AnimatedShinyTextDemo
          text={`All Posts`}
        />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 px-4">
        {title}
      </h1>

      {/* Author, Date and Read Time */}
      <div className="flex flex-wrap items-center justify-center text-gray-400 mb-6 space-x-4 text-sm sm:text-base">
        <span>{author}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        <span>{category}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        <span>{readTime}</span>
      </div>

      {/* Image Section */}
      
      { featuredImage && 
      <div className="relative w-full flex justify-center px-4 aspect-video">
        <img src={featuredImage} alt="" />
      </div>}
    </section>
  );
};

export default HeroSection;
