import React from "react";
import ClientSection from "@/components/home/ClientSection";
import InsightSection from "@/components/startup/InsightSection";
import ServicesSection from "@/components/startup/ServicesSection";
import PricingSection from "@/components/startup/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import HeroSection from "@/components/HeroSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import { pages } from "@/components/Data";
import PageHeader from "@/components/ui/PageHeader";
import BlogsSection from "@/components/home/BlogSection";
import FeatureSection from "@/components/startup/FeatureSection";
import BenefitsSection from "@/components/startup/BenefitsSection";
import SeSection from "@/components/startup/SeSection";

export const metadata = {
  title: "MyDayOne | Service",
  description:
    "We are a team of professionals who are passionate about helping businesses grow.",
  keywords: "Service, Professionals, Passionate, Grow",
};

const Service: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Service"
        description="We are a team of professionals who are passionate about helping businesses grow."
      />
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 md:px-24 overflow-hidden">
        <div className="flex flex-col items-center text-center md:py-20">
          <HeroSection
            shinyText="Services that Drive Growth"
            heading="Empowering Start-Ups with People & Performance Excellence"
            subheading="We help start-ups scale with ready talent, leadership, and people process solutions—crafted by industry veterans, backed by science, and Hyper Personalised for your needs."
            buttonText="Get yourself a world class HR&OD team for your start up without the high cost"
          />
        </div>
      </section>

      {/* Client Section */}
      <section className="overflow-hidden mb-10">
        <ClientSection />
      </section>

      {/* Service Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <InsightSection />
      </section>

      <TextRevealDemo
        text={`From Growth to Greatness—We Help You Scale the Right Way`}
      />
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <SeSection />
      </section>

      {/* ResultSection */}
      <div className="mb-10">
        <BenefitsSection />
      </div>
      {/* ProcessSection */}
      <FeatureSection />
      {/* Solution Text Section */}

      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ServicesSection />
      </section>

      <section className="flex justify-center items-center p-10 overflow-hidden ">
        <PricingSection />
      </section>
      <BlogsSection />

      <UnlockPotentialSection
        buttonText="Join Us"
        ctaText="Start today"
        description="Ready to Maximize Your Workforce Potential?"
        title="Schedule a Demo"
        link="/form#service-form"
      />
    </>
  );
};

export default Service;
