import React from "react";

const ClientSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/client-section.svg"
        alt="client"
        className="w-full object-cover client"
      />

      {/* "Trusted by Leading Brands" Foreground Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-start top-0 ">
        <img
          src="/Our clients.svg"
          alt="clients"
          className="absolute left-1/2 transform -translate-x-1/2 z-0 top-6"
        />

        <div className="absolute top-12 text-center md:top-20 lg:top-20 sm:top-20">
          <h1 className="text-[#EBE6FA] text-4xl md:text-5xl lg:text-6xl font-bold">
            Trusted by Leading Companies
          </h1>
          <p className="text-white text-sm sm:text-lg mt-10">
            MyDayOne has partnered with some of the most reputable companies
            across industries to deliver impactful talent development programs
            that drive business success.
          </p>
          <img
            src="/companys-logo.svg"
            alt="company's logo"
            className="mt-20 pt-8 company-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
