import React from "react";
import HeroSection from "@/components/about/BlogsSection";
import ClientSection from "@/components/home/ClientSection";
import ServiceSection from "@/components/about/ServicesSection";
import SolutionSection from "@/components/products/SolutionSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import BlogsSection from "@/components/home/BlogSection";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "MyDayOne | About Us",
  description: "We are a team of professionals who are passionate about helping businesses grow.",
  keywords: "About Us, Business, Professionals, Growth",
};
const About: React.FC = () => {
  return (
    <>
    <PageHeader title="About Us" description="We are a team of professionals who are passionate about helping businesses grow." />
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden mt-16">
        <HeroSection />
      </section>

      {/* Client Section */}
      <section className="overflow-hidden">
        <ClientSection />
      </section>

      {/* Services Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ServiceSection />
      </section>

      {/* Services Section */}
      {/* <section className="flex justify-center items-center p-10 overflow-hidden mt-[-80px]">
        <SolutionSection pages={[]} />
      </section> */}
      <BlogsSection />
      <UnlockPotentialSection buttonText="Explore Solutions" ctaText="Ready to Elevate Your Organization?" description="Partner with MyDayOne to drive innovation, growth and engagement across your workforce. The future of learning starts here" title="Unlock Your Potential" link="/form#service-form"  />
      </>
  );
};

export default About;
