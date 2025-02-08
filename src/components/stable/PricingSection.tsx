import React from "react";
import ImageTitle from "../Title/ImageTitle";
import Link from 'next/link';
const PricingSection: React.FC = () => {
  const images =[
    '/pricingModel (2).svg',
    '/pricingModel (3).svg',
    '/pricingModel (4).svg',
    '/pricingModel (1).svg',
  ]

  return (
    <div className="relative py-12 px-0 md:px-20">
      {/* Background Text */}
      
      {/* Foreground Content */}
      <div className="flex flex-col items-center text-center pt-8 pb-16 relative">
        
        <ImageTitle image="/Pricing.svg" title="Choose Your Perfect Plan" description="Find the right solution hyper personalised to your company’s talent needs and goals."/>
        

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
         {
          images.map((image, index) => (
            <div key={index} className=" p-0 ">
              <div className="flex items-center justify-center m-0 p-0 transition-all duration-300 hover:scale-105 hover:bg-opacity-100 ease-in-out hover:cursor-pointer">
                <img src={image} alt="Pricing Model" className="w-[124rem]" />
              </div>
              
            </div>
          ))
         }
        </div>
        

        <Link href="/form#service-form  " className="mt-8 px-6 py-3 bg-purple-600 text-white  rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
            Let's Get Ahead
        
        </Link>
      </div>
    </div>
  );
};

export default PricingSection;
