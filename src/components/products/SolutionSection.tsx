"use client";
import React, { useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import ImageTitle from "../Title/ImageTitle";

// Define the types for the `pages` prop and individual page structure
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
  pages, // Pass pages as a prop to ProgressBars
}: {
  activePage: number;
  onBarClick: (index: number) => void;
  pages: Page[]; // Declare the type for the `pages` prop here
}) => (
  <div className=" invisible md:visible flex flex-col items-center justify-center space-y-2 md:space-y-4">
    {/* Use the `pages` prop here */}
    {pages.map((page: Page, index: number) => (
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
  <div className="section-page flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 bg-[#fbfbfc]">
    <div className="relative px-4 w-full lg:w-2/3 min-h-[550px]">
      <ImageTitle
        description={page.description}
        image="/Solutions.svg"
        title={page.title}
        oreintation="left"
      />
      <div className="mt-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        {page.stats.map((stat: Stat, idx: number) => (
          <div
            key={idx}
            className="shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-4 rounded-3xl text-left cursor-pointer w-full md:w-80"
          >
            <p className="text-2xl font-bold">{stat.label}</p>
            <p className="text-gray-600 text-base md:text-lg">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full lg:w-1/3 rounded-lg flex items-center justify-center h-48 lg:h-auto invisible lg:visible">
      <img
        src={page.image}
        alt="skills"
        className="w-full object-contain"
        style={{ height: "auto" }}
      />
    </div>
  </div>
);

const VerticalSwiper = ({ pages }: VerticalSwiperProps) => {
  if (!pages) {
    pages = [];
  }
  const [activePage, setActivePage] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleBarClick = (index: number) => {
    setActivePage(index);
    swiperInstance?.slideTo(index);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActivePage(swiper.activeIndex);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 mx-2 md:mx-8">
      {/* Progress Bars */}
      <ProgressBars
        activePage={activePage}
        onBarClick={handleBarClick}
        pages={pages}
      />

      {/* Swiper Component */}
      <Swiper
        direction="horizontal" // Ensure direction is horizontal
        loop={false}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6500 }}
        className="max-h-[720px] w-full max-w-[85vw]"
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index} className="bg-[#fbfbfc]">
            <SectionPage page={page} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSwiper;
