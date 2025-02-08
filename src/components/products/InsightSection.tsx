"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import "aos/dist/aos.css";
import ImageTitle from "../Title/ImageTitle";
import { cn } from "@/lib/utils";
const InsightSection: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative pb-12 w-full bg-white ">
      <div className="container mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
        <ImageTitle
          image="/Insight.svg"
          title="Features That Power Transformation"
          description=""
        />

        <div className="flex mx-2 md:mx-28 flex-wrap md:flex-nowrap ">
          <div className="md:w-1/2  flex flex-col">
            <div
              className="bg-gray-400 h-[300px] m-2 flex flex-wrap md:flex-nowrap items-center justify-center rounded-xl overflow-hidden bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: "url(/video_img.svg)" }}
              data-aos="zoom-in-left"
              data-aos-duration="500"
              data-aos-delay="50"
            >
              <div>
                <div className="w-min m-auto bg-purple-700 rounded-full p-5 shadow-md">
                  <PlayIcon className="w-10 h-10 text-white" />
                </div>
                <p className="text-white">
                  See talentSCOPE in Action: From Feedback to Performance
                </p>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap ">
              <div className="md:w-1/2">
                <div
                  className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] m-2 flex flex-col justify-between h-full"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <div className="text-4xl text-left font-bold">2x</div>
                  <div className="text-left">
                    <div className="text-4xl font-bold">Growth</div>
                    <div className="text-gray-500">
                      with talenScope's streamlined tools, designed to
                      accelerate feedback-driven readiness.
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-2 md:mt-0">
                <div
                  className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] m-2"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="/tru360Product2.svg"
                      alt="Placeholder"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h2 className="text text-left font-semibold mb-2">
                    Situation Judgment Tests / Mini Cases
                  </h2>
                </div>
                <div
                  className="bg-white p-4 text-left rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] m-2"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <span className="text-base font-semibold text-gray-600">
                    Real-Time Dashboards
                  </span>
                  <p className="text-gray-500 text-sm">
                    Monitor progress and drive actionable insights with our
                    intuitive dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-wrap md:flex-nowrap ">
            <div className="md:w-1/2 md:h-full">
              <div
                className={cn(
                  "bg-purple-600 md:h-[60%] text-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between text-left m-2"
                )}
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className="text-5xl font-bold">95%</div>
                <div>
                  <p className="text-4xl font-bold mt-2">Less</p>
                  <p className="text-lg">
                    reduction in manual effort with talentSCOPE’s automation
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  " p-3 m-2 text-left md:h-[40%] bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30"
                )}
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className="h-[180px]  w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/tru360Product3.svg"
                    alt="Placeholder"
                    className=" w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-md font-semibold mb-2">
                  The Role of 360-Degree Feedback in Leadership Development
                </h2>
              </div>
            </div>
            <div className="md:w-1/2">
              <div
                className={cn(
                  "w-full p-4 md:h-[38%] m-2 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30"
                )}
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className=" w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/tru360Product.svg"
                    alt="Placeholder"
                    className=" w-full aspect-[5/3] object-cover"
                  />
                </div>
                <h2 className="text-md text-left font-semibold mb-2">
                  Situation Judgment Tests / Mini Cases
                </h2>
              </div>
              <div
                className={cn(
                  "w-full md:h-[38%] p-4 m-2 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30"
                )}
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <div className=" w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/tru360Product4.svg"
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-md text-left font-semibold mb-2">
                  Continuous Feedback for Continuous Growth
                </h2>
              </div>
              <div
                className={cn(
                  " w-full md:h-[22%] m-2 bg-white p-4 rounded-xl text-left shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                )}
                data-aos="zoom-in-left"
                data-aos-duration="100"
              >
                <span className="text-lg">Participant-Assessor Mapping</span>
                <p className="text-gray-500 text-sm">
                  Enables activity-specific mapping for tailored feedback and
                  better alignment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row of small cards */}
        <div className="p-5 sm:p-0 text-left mt-10 sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <span>Customizable Workflows</span>
            <p className="text-gray-500 text-sm">
              Adapt workflows to your unique needs, from progress tracking to
              reporting.
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <span>Seamless Integration</span>
            <p className="text-gray-500 text-sm">
              Link with existing HR and business systems for uninterrupted
              operations
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <span>MCQ-Based Assessment</span>
            <p className="text-gray-500 text-sm">
              Adds variety to assessment formats, enhancing engagement and
              insight depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
