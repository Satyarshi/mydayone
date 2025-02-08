"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageTitle from "../Title/ImageTitle";

const ServiceSection: React.FC = () => {
  useEffect(() => {
    Aos.init({ offset: 200 });
  }, []);

  return (
    <section className="relative py-12 w-full bg-white mt-10">
      <div className="container mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
        <ImageTitle
          image="/Insight.svg"
          title="Enhance Talent Readiness with Continuous Improvement"
          description=""
        />

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] mt-10 md:mx-28">
          {/* First card - Large card with nested grid */}
          <div
            className="relative p-2 rounded-xl flex flex-col justify-center"
            data-aos="zoom-in-left"
            data-aos-duration="500"
          >
            {/* Nested grid inside the first card */}
            <div className="grid  gap-4 w-full h-full">
              {/* Top section - large video section */}
              <div
                className="bg-gray-400 h-[300px] flex items-center justify-center rounded-xl overflow-hidden bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(/buildings.png)" }}
              ></div>

              {/* Bottom section - smaller cards */}
              <div className="grid grid-col-1 sm:grid-cols-2  gap-4">
                {/* Left bottom card */}
                <div
                  className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <div className="text-4xl text-left font-bold">70%</div>
                  <div className="text-left">
                    <div className="text-xl font-bold">Experiential</div>
                    <div className="text-gray-500">
                      Readiness through on-the-job experiences. This
                      personalization is driven by data and insights, ensuring
                      that each role holder’s readiness path is tailored,
                      ensuring maximum relevance and impact.
                    </div>
                  </div>
                </div>

                {/* Right bottom card - grid for two smaller cards */}
                <div className="grid gap-4">
                  {/*sm:grid-rows-2*/}
                  {/* Right bottom card - Why 360-Degree Feedback Matters */}
                  <div
                    className="flex-wrap flex justify-around items-center"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <div className="w-5/12 aspect-square rounded-xl flex justify-center items-center bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-5xl"
                      />
                    </div>
                    <div className="w-5/12 aspect-square rounded-xl flex justify-center items-center bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                      <FontAwesomeIcon icon={faFacebook} className="text-5xl" />
                    </div>
                    <div className="w-5/12 aspect-square rounded-xl flex justify-center items-center bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                      <FontAwesomeIcon icon={faXTwitter} className="text-5xl" />
                    </div>
                    <div className="w-5/12 aspect-square rounded-xl flex justify-center items-center bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                      <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
                    </div>
                  </div>
                  <div
                    className="bg-white p-4 text-left rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <span className="text-base font-semibold text-gray-600">
                      IDP Automation
                    </span>
                    <p className="text-gray-500 text-sm">
                      Create, track and monitor Individual Development Plans in
                      real-time with easy-to-use dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second card */}
          <div
            className="p-6 rounded-xl flex flex-col justify-center"
            data-aos="zoom-in-left"
            data-aos-duration="500"
            data-aos-delay="50"
          >
            <div className="grid gap-4 h-full">
              {/* Purple card - 95% */}
              <div className="bg-purple-600 h-[430px] text-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between text-left">
                <div className="text-5xl font-bold">20%</div>
                <div>
                  <p className="text-2xl font-bold mt-2">Exposure</p>
                  <p className="text-lg">
                    Partnering with senior executives for exposure to strategic
                    decision-making and leadership development.
                  </p>
                </div>
              </div>

              {/* Mastering Talent Development card */}
              <div className="flex flex-col justify-center">
                <div className="w-full p-4 text-left bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30">
                  <div className="h-[180px]  w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="/sparcleProduct2.png"
                      alt="Placeholder"
                      className=" w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-md font-semibold mb-2">
                    Multidiscplinary Approach and Best Practices
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Third card */}
          <div
            className="p-6 rounded-xl flex flex-col justify-center"
            data-aos="zoom-in-left"
            data-aos-duration="500"
            data-aos-delay="50"
          >
            <div className="grid gap-6 h-full">
              <div
                className="w-full p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30"
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/sparcleProduct3.png"
                    alt="Placeholder"
                    className=" w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-md text-left font-semibold mb-2">
                  Hyper Personalized Talent Readiness Journey
                </h2>
              </div>
              <div
                className="w-full p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30"
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/sparcleProduct4.png"
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-md text-left font-semibold mb-2">
                  Comprehensive solutions for skilling, scaling and talent
                  development.
                </h2>
              </div>
              <div
                className="bg-white p-4 rounded-xl text-left shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                data-aos="zoom-in-left"
                data-aos-duration="500"
              >
                <span className="text-lg">
                  Behavioral Intelligence Integration
                </span>
                <p className="text-gray-500 text-sm">
                  Use AI to analyze, customise and predict development needs,
                  aligning with individual and organizational goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row of small cards */}
        <div className="p-5 sm:p-0 text-left sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <span>Continuous Reinforcement Tools</span>
            <p className="text-gray-500 text-sm">
              Engage with micro-learning, gamification and continuous nudges to
              embed skills effectively.
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <span>Hyper-Personalized Talent Readiness Journey</span>
            <p className="text-gray-500 text-sm">
              Engage learners with hyper-personalized journeys tailored to their
              roles, KPIs and career paths.
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <span>Customizable Skill Assessments</span>
            <p className="text-gray-500 text-sm">
              Self, manager and 360° team feedback for a well-rounded view of
              capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
