"use client";
import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import ImageTitle from "../Title/ImageTitle";
import { image } from "framer-motion/client";
import { release } from "os";

const pages = [
  {
    id: 1,
    image: "/sparcleHero6.png",
    title: "End to end Readiness Solutions for Enhanced Workforce Performance",
    heading: "Readiness Program Design",
    description:
      "SPARCLE assists in creating bespoke learning programs tailored to the specific needs of your workforce. From content creation to delivery, we ensure that the learning experience aligns with business objectives and employee skill levels.",
    stats: [
      { label: "95%", text: "faster implementation of feedback processes." },
      {
        label: "80%",
        text: "of learners report better alignment with readiness goals.",
      },
    ],
  },
  {
    id: 2,
    heading: "Tailored product for every stage of readiness",
    title: "Next level Development",
    image: "/sparcleHero6.png",
    description:
      "Enhanced integration to streamline your feedback processes and align business outcomes with talent readiness",
    stats: [
      {
        label: "90%",
        text: "improved team readiness through the feedback loop.",
      },
      {
        label: "85%",
        text: "of learners achieve faster readiness with tailored plans.",
      },
    ],
  },
];

const ProgressBars = ({
  activePage,
  onBarClick,
}: {
  activePage: number;
  onBarClick: (index: number) => void;
}) => (
  <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
    {pages.map((page, index) => (
      <div
        key={page.id}
        onClick={() => onBarClick(index)}
        className={`w-1 h-8 md:w-2 md:h-10 rounded-full cursor-pointer transition-colors duration-300 ${
          activePage === index ? "bg-purple-600" : "bg-purple-300"
        }`}
      />
    ))}
  </div>
);

const SectionPage = ({ page }: { page: any }) => (
  <div className="section-page flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 h-[600px] ">
    <div className="w-0 md:w-1/3  rounded-lg flex items-center justify-center h-48 lg:h-auto">
      <img
        src={page.image}
        alt={page.title}
        className="object-contain h-auto w-full"
        style={{ height: "auto" }}
      />
    </div>
    <div className=" relative px-4 w-full lg:w-2/3 text-left min-h-[500px] flex flex-col">
      <div>
        <div className="max-w-[700px]">
          <ImageTitle
            description=""
            image="/Solutions.svg"
            title={page.title}
            oreintation="left"
          />
        </div>
        <h2 className="text-xl md:text-2xl t= font-semibold text-[#4A4A4A]">
          {page.heading}
        </h2>
        <p className=" text-gray-500">{page.description}</p>
      </div>
      <div className="mt-4 flex flex-row space-y-0 space-x-4">
        {page.stats.map((stat: any, idx: number) => (
          <div
            key={idx}
            className="shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-4 rounded-3xl text-left cursor-pointer w-full md:w-80"
          >
            <p className="text-2xl font-bold">{stat.label}</p>
            <p className="text-gray-600">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const VerticalSwiper = () => {
  const [activePage, setActivePage] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleBarClick = (index: number) => {
    setActivePage(index);
    swiperInstance?.slideTo(index);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Progress Bars */}

      {/* Swiper Component */}
      <Swiper
        direction={"horizontal"}
        loop={false}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActivePage(swiper.activeIndex)}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000 }}
        className=" w-full max-w-[90vw] "
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>
            <SectionPage page={page} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ProgressBars activePage={activePage} onBarClick={handleBarClick} />
    </div>
  );
};

export default VerticalSwiper;
