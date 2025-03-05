import React from "react";
import ImageTitle from "../Title/ImageTitle";
import Link from "next/link";

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Growth-Driven Talent Strategies",
    description: "Attract, assess, and develop the talent you need.",
  },
  {
    title: "Leadership Development",
    description: "Equip leaders with future-focused readiness.",
  },
  {
    title: "Performance Engineering",
    description:
      "Hyper-personalize performance and align work with enterprise goals.",
  },
  {
    title: "Culture & Change Management",
    description: "Build an adaptive, high-performing culture for your teams.",
  },
  {
    title: "Organisation Development",
    description:
      "Sustain scalability with custom OD frameworks, processes, and policies.",
  },
];

const BenefitCard: React.FC<Benefit> = ({ title, description }) => (
  <div className="bg-white p-4 rounded-xl shadow-md drop-shadow-md w-64 md:w-80 text-sm text-left flex-shrink-0 m-2">
    <h3 className="text-base font-semibold">{title}</h3>
    <p className="text-gray-600 text-sm mt-2">{description}</p>
  </div>
);

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center">
      {/* Heading */}

      <ImageTitle
        image="/Benefits.svg"
        title={`Why Choose MyDayOne ?`}
        description="Our custom solutions are designed to address your organization's most pressing talent development challenges, ensuring that each initiative is strategically aligned with your long-term goals."
        oreintation=""
      />
      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {benefits.slice(3, 5).map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>

      {/* Button */}
      <Link href="/form#service-form">
        <button className="mt-8 bg-[#7030A0] text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition">
          Get in Touch
        </button>
      </Link>
    </section>
  );
};

export default BenefitsSection;
