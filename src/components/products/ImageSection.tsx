import React from "react";
import Image from "next/image";
import HeroSection from "../HeroSection";
import { HeroVideo } from "../HeroVideo";

interface ImageSectionProps {
  shinyText?: string;
  heading: string;
  subheading: string;
  buttonText: string;
  image?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  shinyText,
  heading,
  subheading,
  buttonText,
  image,
}) => {
  return (
    <section className="flex flex-col items-center text-center py-5">
      {image && (
        <div className="relative w-full flex justify-center">
          <Image src={image} alt="image" width={180} height={50} />
        </div>
      )}
      <HeroSection 
        shinyText={shinyText || undefined}
        heading={heading}
        subheading={subheading}
        buttonText={buttonText}
      />
      
      {/* Image Section */}
      <div className="relative w-8/12 flex justify-center">
        <HeroVideo />
      </div>
    </section>
  );
};

export default ImageSection;
