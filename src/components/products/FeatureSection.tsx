"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import "aos/dist/aos.css";
import ImageTitle from "../Title/ImageTitle";
const FeatureSection: React.FC = () => {
  useEffect(() => {
    Aos.init({ offset: 100 });
  }, []);

  return (
    <section className="relative pb-12 w-full bg-white ">
      <div className="container mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
        <ImageTitle
          image="/Features.png"
          title="Unlock Innovation in Talent Talent Readiness Journey"
          description=""
        />

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] mt-10 md:mx-28">
          {/* First card - updating classes to match InsightSection */}
          <div
            className="relative p-6 rounded-xl flex flex-col justify-start"
            data-aos="zoom-in-left"
            data-aos-duration="500"
          >
            <div className="grid gap-4 w-full">
              {/* Top section - large video section */}
              <div
                className="bg-gray-400 h-[300px] flex items-center justify-center rounded-xl overflow-hidden bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(/sparcleVidThumb.png)" }}
              >
                <div>
                  <div className="w-min m-auto bg-purple-700 rounded-full p-5 shadow-md">
                    <PlayIcon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white">
                    Watch Sparcle in Action: The Ultimate Skills Accelerator
                  </p>
                </div>
              </div>

              {/* Bottom section - smaller cards */}
              <div className="grid grid-col-1 sm:grid-cols-2  gap-4">
                {/* Left bottom card */}
                <div
                  className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] h-auto flex flex-col justify-between"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <div className="text-4xl text-left font-bold">35%</div>
                  <div className="text-left">
                    <div className="text-3xl font-bold">Acceleration</div>
                    <div className="text-gray-500 mt-1">
                      Companies leveraging AI-driven learning solutions prepared
                      leadership roles 35% faster compared to traditional
                      methods.
                    </div>
                  </div>
                </div>

                {/* Right bottom card - grid for two smaller cards */}
                <div className="grid gap-4">
                  {/*sm:grid-rows-2*/}
                  {/* Right bottom card - Why 360-Degree Feedback Matters */}
                  <div
                    className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src="/sparcleProduct1.png"
                        alt="Placeholder"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h2 className="text text-left font-semibold mb-2">
                      Customizable program underpinned by applied
                      behavioral science
                    </h2>
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

          {/* Second card - updating classes */}
          <div
            className="p-6 rounded-xl flex flex-col justify-start"
            data-aos="zoom-in-left"
            data-aos-duration="500"
            data-aos-delay="50"
          >
            <div className="grid gap-4">
              {/* Purple card - 95% */}
              <div className="bg-purple-600 h-[430px] text-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between text-left">
                <div className="text-5xl font-bold">70%</div>
                <div>
                  <p className="text-2xl font-bold mt-2">Organizations</p>
                  <p className="text-lg">
                    reported a 40% improvement in leadership readiness with
                    Sparcle
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
                    IDP Development Best Practices
                  </h2>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="w-full p-4 text-left bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30">
                  <h2 className="text-md font-semibold mb-2">
                    Seamless Workflow Integration:
                  </h2>
                  <p className="text-gray-500 text-xs">
                    Simplify operations by linking Sparcle with your existing
                    tools like HRIS and LMS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third card - updating classes */}
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
                  The Future of HR: AI and Hyper-Personalized Learning
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
                  Comprehensive solution for role based development.
                </h2>
              </div>
              <div
                className="bg-white p-4 rounded-xl text-left shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                data-aos="zoom-in-left"
                data-aos-duration="500"
              >
                <span className="text-sm">Behavioral AI Integration</span>
                <p className="text-gray-500 text-sm">
                  Analyze, customize and predict development needs to align with
                  individual and organizational goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - updating classes */}
        <div className="p-5 sm:p-0 text-left mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:mx-28">
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

export default FeatureSection;
