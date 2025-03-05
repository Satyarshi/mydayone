"use client";
import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import ImageTitle from "../Title/ImageTitle";
import Link from "next/link";

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
  listItems: {
    para: string;
  }[];
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
    <div className="w-0 md:w-1/3 rounded-lg lg:flex lg:items-start lg:justify-center h-48 lg:h-auto hidden">
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
        <div className="text-left w-full">
          <ul className="text-left text-[#7B7E85] sm:text-lg">
            {page.listItems.map((feature, index) => (
              <li key={index} className="flex items-start text-base mt-5">
                <img
                  src="/check.svg"
                  alt="Check Icon"
                  className="mr-3 mt-1 w-5 h-5 max-w-[20px] max-h-[20px]"
                />
                <div dangerouslySetInnerHTML={{ __html: feature.para }} />
              </li>
            ))}
          </ul>
        </div>
        <Link href="/form#service-form">
          <button className="bg-[#7030A0] text-white font-semibold py-3 px-6 rounded-xl hover:bg-purple-700 transition my-8">
            {page.description}
          </button>
        </Link>
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
        className="max-h-[600px] w-full max-w-[90vw] "
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
