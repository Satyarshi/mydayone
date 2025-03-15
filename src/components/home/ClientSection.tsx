import React from "react";
import Image from "next/image";

const ClientSection: React.FC = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: "url(/client-section.png)" }}
    >
      {/* Foreground Section */}
      <div className="flex flex-col items-center justify-start top-0 ">
        <div className="flex flex-col items-center my-14">
          <div className="relative">
            {/* <img
              src="/Our clients.svg"
              alt="clients"
              className="absolute left-1/2 transform -translate-x-1/2 z-0 top-[-40px]"
            /> */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-0 top-[-40px] w-[90%]">
              <Image
                src="/Our clients.svg"
                alt="clients"
                width={850}
                height={100}
                className="object-contain"
              />
            </div>
            {/* "Trusted by Leading Brands" Text */}
            <h1 className="text-[#EBE6FA] text-5xl md:text-5xl lg:text-6xl font-bold z-10 px-2">
              Trusted by Leading Brands
            </h1>
          </div>

          {/* Paragraph and Logos */}
          <p className="text-white text-lg mt-6 px-2">
            Over 100+ Companies Trust myDayOne to Boost Talent Readiness &
            Assessment
          </p>
          <div className="!mt-3 md:mt-10 pt-8 w-full max-w-[80vw] z-10">
            <Image
              src="/client logo.svg"
              alt="company's logo"
              width={800}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
