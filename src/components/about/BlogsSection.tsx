import React from "react";
import Link from "next/link";
import ImageTitle from "../Title/ImageTitle";

const BlogsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center ">
      <ImageTitle
        description=" Explore the latest trends, tips and insights that drive business
        success."
        image="/About.svg"
        title="Insights and Strategies for Talent Readiness"
      />

      {/* Blog Cards */}
      <div className="flex flex-col md:flex-row md:space-x-12 mt-20 items-start justify-center my-8 max-w-5xl px-4">
        <div className="flex-1 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 md:mb-0">
            Begin Your Talent Readiness journey with myDayOne
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Link href="/form#service-form">
              <button className="bg-[#7030a0] text-nowrap text-white py-3 px-3 rounded-xl hover:bg-purple-700">
                Connect with us
              </button>
            </Link>

            <img src="/Group 1.svg" alt="" />
            <p className="text-[#6C8184]">Trusted by 100+ Organisations</p>
          </div>
        </div>
        <p className="flex-1 text-[#7B7E85] text-base max-w-xl mx-auto text-justify">
          In today's rapidly changing work environment, organizations face
          unprecedented challenges in accelerating talent readiness for
          improving leadership and fostering sustainable growth. Our solutions
          are designed to address these pain points of skill/competency
          readiness, leadership readiness, onboarding readiness, product/
          service readiness through a unique blend of iTRAS (intelligent Talent
          Readiness Acceleration System - our proprietary real-world leadership
          experience, action research, cutting-edge talent methodologies) and
          innovative technology-driven solutions Al- based agents and
          hyper-personalized, automated talent readiness journeys.
          <br />
        
        </p>
      </div>
    </section>
  );
};

export default BlogsSection;
