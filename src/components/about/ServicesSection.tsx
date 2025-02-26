"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageTitle from "../Title/ImageTitle";
import ProgressRing from "../home/ProgressRing";
import { motion } from "framer-motion";

const featureCards = [
  {
    title: "Continuous Reinforcement Tools",
    description:
      "Engage with micro-learning, gamification and continuous nudges to embed skills effectively.",
  },
  {
    title: "Hyper-Personalized Talent Readiness Journey",
    description:
      "Engage learners with hyper-personalized journeys tailored to their roles, KPIs and career paths.",
  },
  {
    title: "Customizable Skill Assessments",
    description:
      "Self, manager and 360° team feedback for a well-rounded view of capabilities.",
  },
];

const ServiceSection: React.FC = () => {
  const [animationValues, setAnimationValues] = useState<{ x: string[] }>({
    x: ["0%", "-50%"],
  });
  useEffect(() => {
    Aos.init({ offset: 200 });
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Larger screens
        setAnimationValues({ x: ["0%", "-30%"] });
      } else {
        // Smaller screens
        setAnimationValues({ x: ["0%", "-50%"] });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-12 w-full mt-10">
      <div className="container mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
        <ImageTitle
          image="/INSIGHTS.svg"
          title="Enhance Talent Readiness with Continuous Improvement"
          description=""
        />

        <div className="flex flex-wrap justify-center gap-6 p-6">
          {/* Main Sections */}
          <div className="flex flex-col gap-4 max-w-7xl w-full md:flex-row">
            <div className="flex md:flex-nowrap flex-wrap gap-6 justify-center">
              <div
                className="bg-gradient-to-b from-[#C7397C] to-[#73319F] text-white p-6 rounded-2xl w-72 shadow-lg min-h-96 flex flex-col justify-between"
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className="flex justify-center items-center w-full ">
                  <ProgressRing
                    percentage={70}
                    color="text-white"
                    textColor="#fff"
                    strokeWidth={5}
                    size={160}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-left">
                    Experiential
                  </h2>
                  <p className="text-base mt-2 text-left">
                    Readiness through on-the-job experiences. This
                    personalization is driven by data and insights, ensuring
                    that each role holder’s readiness path is tailored, ensuring
                    maximum relevance and impact.
                  </p>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-2xl w-72 shadow-lg flex flex-col min-h-96 justify-between"
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className="flex justify-center items-center w-full">
                  <ProgressRing
                    percentage={20}
                    color="text-[#7030A0]"
                    strokeWidth={5}
                    size={160}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-left">Exposure</h2>
                  <p className="text-base mt-2 text-left">
                    Partnering with senior executives for exposure to strategic
                    decision-making and leadership development. Gain first-hand
                    insights into high-impact business strategies and cultivate
                    the skills needed to drive organizational success.
                  </p>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-2xl w-72 min-h-96 shadow-lg flex flex-col justify-between"
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className="flex justify-center items-center w-full">
                  <ProgressRing
                    percentage={10}
                    color="text-[#7030A0]"
                    strokeWidth={5}
                    size={160}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-left">Education</h2>
                  <p className="text-base mt-2 text-left">
                    Role-specific, organization-contextualized, formal education
                    programs, hyper-personalized to ensure readiness is
                    accelerated through deployment of various formal learning
                    methodologies.
                  </p>
                </div>
              </div>
              <div className="md:w-1/4">
                <div
                  className="p-2  mb-4 text-left bg-gray-100 rounded-3xl shadow-lg cursor-pointer hover:shadow-lg transition"
                  data-aos="zoom-in-left"
                  data-aos-duration="500"
                >
                  <div className="h-[150px] bg-gray-300 rounded-2xl mb-3 overflow-hidden">
                    <img
                      src="/about-img-1.svg"
                      alt="Placeholder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-sm font-medium mb-1">
                    Hyper Personalized Talent Readiness Journey
                  </h2>
                </div>
                <div
                  className="p-3  text-left bg-gray-100 rounded-3xl shadow-lg cursor-pointer hover:shadow-lg transition"
                  data-aos="zoom-in-left"
                  data-aos-duration="500"
                  data-aos-delay="50"
                >
                  <div className="h-[150px] bg-gray-300 rounded-2xl mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src="/about-img-2.svg"
                      alt="Placeholder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-sm font-medium mb-1">
                    Comprehensive solutions for skilling, scaling and talent
                    development
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}

          <div className="flex flex-wrap justify-center gap-6">
            {/* Additional Features Carousel */}
            <div className="overflow-hidden w-1/4 max-w-[50%] md:w-1/2 flex justify-center relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
              <motion.div
                className="flex space-x-6"
                animate={animationValues}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {[...featureCards, ...featureCards].map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white p-4 rounded-xl shadow-md w-64 md:w-80 text-sm text-left flex-shrink-0 m-2`}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="50"
                  >
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-1">{feature.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
