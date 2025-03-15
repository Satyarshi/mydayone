"use client";
import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import ImageTitle from "../Title/ImageTitle";
import Image from "next/image";

interface Stat {
  label: string;
  text: string;
}

interface Page {
  id: number;
  heading: string;
  title: string;
  image: string;
  description: string;
  stats: Stat[];
}

interface VerticalSwiperProps {
  pages: Page[]; // Type for pages prop
}

const ProgressBars = ({
  activePage,
  onBarClick,
  pages,
}: {
  activePage: number;
  onBarClick: (index: number) => void;
  pages: Page[]; // Declare the type for the `pages` prop here
}) => (
  <div className=" invisible md:visible flex flex-col items-center justify-center space-y-2 md:space-y-4">
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

const SectionPage = ({ page }: { page: Page }) => (
  <div className="section-page flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 h-[880px] sm:h-[620px] bg-[#fbfbfc] ">
    <div className="w-0 md:w-1/3 rounded-lg lg:flex lg:items-start lg:justify-center hidden">
      <Image
        src={page.image}
        alt={page.title}
        className="object-contain"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
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
        <p className=" text-gray-500 text-base lg:text-lg">
          {page.description}
        </p>
      </div>
      <div className="mt-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
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

const VerticalSwiper = ({ pages }: VerticalSwiperProps) => {
  const [activePage, setActivePage] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleBarClick = (index: number) => {
    setActivePage(index);
    swiperInstance?.slideTo(index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 mx-2 md:mx-8">
      {/* Progress Bars */}

      {/* Swiper Component */}
      <Swiper
        direction={"horizontal"}
        loop={false}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActivePage(swiper.activeIndex)}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000 }}
        className="max-h-[900px] w-full max-w-[90vw] "
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>
            <SectionPage page={page} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ProgressBars
        activePage={activePage}
        onBarClick={handleBarClick}
        pages={pages}
      />
    </div>
  );
};

export default VerticalSwiper;
