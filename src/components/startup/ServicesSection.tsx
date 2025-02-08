'use client';
import React, { useState } from "react";
import ImageTitle from "../Title/ImageTitle";

const ServicesSection: React.FC = () => {
  const services = {
    "For HR & Leaders": [
      {
        title: "Streamline",
        description:
          "Streamlined employee readiness processes and talent management frameworks.",
        icon: "/learning-analytics.svg",
        gradient: "hover:bg-gradient-to-b hover:from-blue-100 to-transparent",
      },
      {
        title: "Integrate",
        description:
          "Integration-ready digital tools for workforce analytics and assessments.",
        icon: "/upskilling.svg",
        gradient: "hover:bg-gradient-to-b hover:from-blue-50 to-transparent",
      },
      {
        title: "Support",
        description: "Hands-on support through admin services and onboarding facilitation.",
        icon: "/leadership-development.svg",
        gradient: "hover:bg-gradient-to-b hover:from-pink-100 to-transparent",
      },
    ],
    "For User and Employees": [
      {
        title: "Define",
        description:
          "Role-specific success profiles and competency frameworks.",
        icon: "/onboarding.svg",
        gradient: "hover:bg-gradient-to-b hover:from-yellow-100 to-transparent",
      },
      {
        title: "Learn",
        description:
          "Blended learning pathways supported by coaching and mentoring.",
        icon: "/performance-management.svg",
        gradient: "hover:bg-gradient-to-b hover:from-red-100 to-transparent",
      },
      {
        title: "Engage",
        description:
          "Gamified experiences to enhance engagement and retention.",
        icon: "/continuous-learning.svg",
        gradient: "hover:bg-gradient-to-b hover:from-green-100 to-transparent",
      },
    ],
  };

  // State to track active category and animation
  const [activeCategory, setActiveCategory] = useState<keyof typeof services>(
    "For HR & Leaders"
  );
  const [isFading, setIsFading] = useState(false);

  // Handle category toggle with fade-out and fade-in animation
  const handleToggle = (category: keyof typeof services) => {
    if (category !== activeCategory) {
      setIsFading(true);
      setTimeout(() => {
        setActiveCategory(category);
        setIsFading(false);
      }, 300); // Match the animation duration
    }
  };

  return (
    <div className="relative ">
      <div className="flex flex-col items-center text-center pb-16">
        <ImageTitle
          image="/Services.svg"
          description=""
          title="Holistic Solutions for Every Talent Need"
        />

        {/* TOGGLE BUTTON */}
        <div className="flex items-center justify-center mt-2 space-x-4">
          {Object.keys(services).map((category) => (
            <button
              key={category}
              onClick={() => handleToggle(category as keyof typeof services)}
              className={`text-lg  px-4 py-2 rounded-[50px] transition duration-300 ${
                activeCategory === category
                  ? "text-white bg-purple-800"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-center pt-4 text-gray-700">
        Simplify Management with myDayOne
        </div>

        {/* Service Cards with Transition */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 mt-10 transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {services[activeCategory].map((service, index) => (
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

export default ServicesSection;
