"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import ImageTitle from "../Title/ImageTitle";

interface IJobOpening {
  position: string;
  salary: number;
  location: string;
  role: string;
  link: string;
}

interface HeroSectionProps {
  jobOpenings: IJobOpening[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ jobOpenings }) => {

  if (jobOpenings.length===0) return (
    <>
    <section className="relative py-3 w-full bg-white">
      <div className="relative container mx-auto text-center z-50 overflow-visible my-20 mt-32">
        {/* Background Images */}
        <img
          src="/employees-placeholder.svg"
          alt="img1"
          className="absolute top-[-93px] left-[120px] z-0 cimg1 invisible md:visible"
        />
        <img
          src="/employees-placeholder (1).svg"
          alt="img1"
          className="absolute top-[-80px] left-[250px] z-0 cimg2 invisible md:visible"
        />
        <img
          src="/employees-placeholder (2).svg"
          alt="img1"
          className="absolute top-[20px] left-[120px] z-0 cimg3 invisible md:visible"
        />
        <img
          src="/employees-placeholder (3).svg"
          alt="img1"
          className="absolute top-[-93px] right-[200px] z-0 cimg4 invisible md:visible"
        />
        <img
          src="/employees-placeholder (4).svg"
          alt="img1"
          className="absolute top-[-30px] right-[100px] z-0 cimg5 invisible md:visible"
        />
        <img
          src="/employees-placeholder (5).svg"
          alt="img1"
          className="absolute top-[50px] right-[150px] z-0  invisible md:visible"
        />
        {/* Background heading */}
        <div className="mb-10 ">
          <ImageTitle image="/Careers.svg" title="Join Us in Creating What's Next" description="Discover opportunities to make an impact in a dynamic and
            collaborative environment."/>
         
        </div>

        <div>
          <h1 className="text-3xl text-wrap  font-bold text-[#111827] ">
            Sorry no Openings available at the moment
          </h1>
          <p>Please Check Again Later</p>
        </div>
        
      </div>
    </section>
    </>
  );
  const [activeTab, setActiveTab] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState<IJobOpening[]>([]);

  // Filter job listings based on the active tab
  let roles:string[] =["All"];
  jobOpenings.forEach((job) => {
    if (!roles.includes(job.role)) {
      roles.push(job.role);
    }
  });
  useEffect(() => {
    const filteredJobs = jobOpenings.filter((job) => {
      if (activeTab === "All") return true;
      return job.role.includes(activeTab);
    });
    console.log("filteredJobs",filteredJobs);
    console.log("activeTab",activeTab);
    setFilteredJobs(filteredJobs);
  }
,[activeTab]);


  return (
    <section className="relative py-3 w-full bg-white">
      <div className="relative container mx-auto text-center z-50 overflow-visible my-20 mt-32">
        {/* Background Images */}
        <img
          src="/employees-placeholder.svg"
          alt="img1"
          className="absolute top-[-93px] left-[120px] z-0 cimg1 invisible md:visible"
        />
        <img
          src="/employees-placeholder (1).svg"
          alt="img1"
          className="absolute top-[-80px] left-[250px] z-0 cimg2 invisible md:visible"
        />
        <img
          src="/employees-placeholder (2).svg"
          alt="img1"
          className="absolute top-[20px] left-[120px] z-0 cimg3 invisible md:visible"
        />
        <img
          src="/employees-placeholder (3).svg"
          alt="img1"
          className="absolute top-[-93px] right-[200px] z-0 cimg4 invisible md:visible"
        />
        <img
          src="/employees-placeholder (4).svg"
          alt="img1"
          className="absolute top-[-30px] right-[100px] z-0 cimg5 invisible md:visible"
        />
        <img
          src="/employees-placeholder (5).svg"
          alt="img1"
          className="absolute top-[50px] right-[150px] z-0  invisible md:visible"
        />
        {/* Background heading */}
        <div className="mb-10 ">
          <ImageTitle image="/Careers.svg" title="Join Us in Creating What's Next" description="Discover opportunities to make an impact in a dynamic and
            collaborative environment."/>
         
        </div>

        {/* Filter tabs */}
        <div className="flex flex-col space-y-4 mb-8 mx-auto sm:flex-row sm:space-y-0 sm:space-x-4 justify-center ">
          {roles.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full w-full sm:w-auto ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid of career cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <Link key={index} href={`/careers/${job.link}`}>
                <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 min-h-40 rounded-3xl text-left cursor-pointer">
                  <h3 className="text-xl font-bold mb-2">{job.position}</h3>
                  <p className="text-gray-700">₹{job.salary}</p>
                  <p className="text-gray-500">
                    {job.location} | {job.role}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No jobs available for the selected category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
