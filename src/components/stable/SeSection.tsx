import React from "react";
import ImageTitle from "../Title/ImageTitle";

const SeSection: React.FC = () => {
  const plans = [
    {
      title: "Readiness",
      description:
        "Enhanced readiness performance with co-created, culturally aligned solutions",
    },
    {
      title: "Expertise",
      description: "Real-world expertise backed by cutting-edge methodologies.",
    },
    {
      title: "Outcomes",
      description:
        "Immediate and sustained outcomes tailored to your business needs.",
    },
    {
      title: "Simplification",
      description:
        "Simplified processes with digital tools for For learners, leaders and learning facilitators",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center md:w-11/12 w-full px-4 pb-10 mx-auto bg-[#fbfbfc]">
      {/* Background Text */}

      {/* Foreground Content */}
      <div className="flex flex-col items-center text-center pt-8 pb-16 relative md:px-16">
        <ImageTitle
          image="/Benefits.svg"
          title="Why Choose MyDayOne ?"
          description="Our customisable solutions are designed to address your organization's most pressing talent readiness challenges, ensuring that each initiative is strategically aligned with your long-term goals."
        />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-4 shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl bg-white text-left`}
            >
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="text-gray-500 md:text-base text-sm mt-2">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeSection;
