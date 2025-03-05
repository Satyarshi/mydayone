"use client";
import React from "react";
import ImageTitle from "../Title/ImageTitle";

const ResultSection: React.FC = () => {
  const services = [
    {
      title: "Diagnose",
      description:
        "Deep dive into your organization’s current state and your priorities",
      icon: "/result-1.svg",
      gradient: "hover:bg-gradient-to-b hover:from-yellow-100 to-transparent",
    },
    {
      title: "Co-Create",
      description: "Hyper Personalised, participant co-created solutions",
      icon: "/performance-management.svg",
      gradient: "hover:bg-gradient-to-b hover:from-red-100 to-transparent",
    },
    {
      title: "Implement",
      description: "Practical programs backed by industry expertise",
      icon: "/continuous-learning.svg",
      gradient: "hover:bg-gradient-to-b hover:from-green-100 to-transparent",
    },
    {
      title: "Measure",
      description: "Regular progress reviews with outcome-focused reporting",
      icon: "/result-2.svg",
      gradient: "hover:bg-gradient-to-b hover:from-pink-100 to-transparent",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center md:w-11/12 w-full px-4 mx-auto bg-[#fbfbfc]">
      <div className="flex flex-col items-center text-center pb-16">
        <ImageTitle
          image="/Results.svg"
          description=""
          title="How We Deliver Tangible Impact"
        />
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 transition-all duration-300 rounded-xl ${service.gradient} hover:shadow-xl hover:scale-105 hover:bg-opacity-100 ease-in-out hover:cursor-pointer`}
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-12 w-12"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
