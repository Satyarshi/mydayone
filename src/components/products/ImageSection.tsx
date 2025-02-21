import React from "react";
import Image from "next/image";
import HeroSection from "../HeroSection";

interface ImageSectionProps {
  shinyText?: string;
  heading: string;
  subheading: string;
  buttonText: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  shinyText,
  heading,
  subheading,
  buttonText,
}) => {
  return (
    <section className="flex flex-col items-center text-center py-5">
      <HeroSection 
        shinyText={shinyText || undefined}
        heading={heading}
        subheading={subheading}
        buttonText={buttonText}
      />
      
      {/* Image Section */}
      <div className="relative w-full flex justify-center">
        <Image src="/mDOMock (1).png" alt="image" width={1024} height={758} />
      </div>
    </section>
  );
};

export default ImageSection;
