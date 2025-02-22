"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageTitle from "../Title/ImageTitle";
import ProgressRing from "../home/ProgressRing";

const ServiceSection: React.FC = () => {
  useEffect(() => {
    Aos.init({ offset: 200 });
  }, []);

  return (
    <section className="relative py-12 w-full mt-10">
      <div className="container mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
        <ImageTitle
          image="/Insight.svg"
          title="Enhance Talent Readiness with Continuous Improvement"
          description=""
        />

        <div className="flex flex-wrap justify-center gap-6 p-6">
          {/* Main Sections */}
          <div className="flex flex-col gap-4 max-w-7xl w-full md:flex-row">
            <div className="flex flex-wrap gap-6 justify-center">
              <div
                className="bg-gradient-to-b from-[#C7397C] to-[#73319F] text-white p-6 rounded-2xl w-72 shadow-lg min-h-96 flex flex-col justify-between"
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className="flex justify-center items-center w-full">
                  <ProgressRing
                    percentage={70}
                    color="text-[#7030A0]"
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
                className="bg-white p-6 rounded-2xl w-72 shadow-lg flex flex-col justify-between"
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
                    decision-making and leadership development.
                  </p>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-2xl w-72 shadow-lg flex flex-col justify-between"
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
              <div className="flex gap-4 additional-features">
                <div
                  className="p-3 mx-2 text-left bg-gray-100 rounded-3xl shadow-lg cursor-pointer hover:shadow-lg transition"
                  data-aos="zoom-in-left"
                  data-aos-duration="500"
                  data-aos-delay="50"
                >
                  <div className="h-[150px] bg-gray-300 rounded-2xl mb-3 overflow-hidden">
                    <img
                      src="/about-img-1.svg"
                      alt="Placeholder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-md font-medium mb-1">
                    Hyper Personalized Talent Readiness Journey
                  </h2>
                </div>
                <div
                  className="p-3 mx-2 text-left bg-gray-100 rounded-3xl shadow-lg cursor-pointer hover:shadow-lg transition"
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
                  <h2 className="text-md font-medium mb-1">
                    Comprehensive solutions for skilling, scaling and talent
                    development
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div
              className="bg-white p-4 rounded-xl shadow-md w-64 md:w-80 text-sm text-left"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="50"
            >
              <h3 className="font-semibold">Continuous Reinforcement Tools</h3>
              <p className="mt-1">
                Engage with micro-learning, gamification and continuous nudges
                to embed skills effectively.
              </p>
            </div>
            <div
              className="bg-white p-4 rounded-xl shadow-md w-64 md:w-80 text-sm text-left"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="50"
            >
              <h3 className="font-semibold">
                Hyper-Personalized Talent Readiness Journey
              </h3>
              <p className="mt-1">
                Engage learners with hyper-personalized journeys tailored to
                their roles, KPIs and career paths.
              </p>
            </div>
            <div
              className="bg-white p-4 rounded-xl shadow-md w-64 md:w-80 text-sm text-left"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="50"
            >
              <h3 className="font-semibold">Customizable Skill Assessments</h3>
              <p className="mt-1">
                Self, manager and 360° team feedback for a well-rounded view of
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
