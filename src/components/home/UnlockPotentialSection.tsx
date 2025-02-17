import React from "react";
import Footer from "./Footer";
import Link from "next/link";
import { div } from "framer-motion/client";

interface Props {
  ctaText: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const UnlockPotentialSection: React.FC<Props> = ({
  buttonText,
  description,
  link,
  title,
  ctaText,
}) => {
  return (
    <>
      <div className="container mx-auto bg-[#fbfbfc]">

        <div className="flex flex-col my-4 md:my-10">
          <section className=" flex flex-col items-center justify-center text-center py-3">
            <div className="w-auto md:w-[1224px] relative mx-auto ">
              {/* Background Image */}
              <div className="absolute inset-0 w-full">
                <img
                  src="/Container.svg"
                  alt="Purple Background"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Text Content */}
              <div className="relative py-16 px-8 rounded-xl">
                {/* <div className="mb-4">
              <button className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-full">
                {ctaText}
              </button>
            </div> */}
                <h1 className="text-4xl md:text-4xl font-bold mb-4 text-[#222222]">
                  {title}
                </h1>
                <p className="text-lg text-[#7B7E85] mb-6 max-w-xl mx-auto">
                  {description}
                </p>
                <Link href={link}>
                  {" "}
                  <button className="bg-[#70319F] text-white font-semibold px-6 py-3 rounded-xl">
                    {buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <hr className="border border-[#DEDEDE] mx-2" />
      </div>
    </>
  );
};

export default UnlockPotentialSection;
