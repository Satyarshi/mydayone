import React from "react";
import ClientSection from "@/components/home/ClientSection";
import InsightSection from "@/components/stable/InsightSection";
import ServicesSection from "@/components/stable/ServicesSection";
import PricingSection from "@/components/stable/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import HeroSection from "@/components/HeroSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import { pages } from "@/components/Data";
import PageHeader from "@/components/ui/PageHeader";
import BlogsSection from "@/components/home/BlogSection";
import FeatureSection from "@/components/stable/FeatureSection";
import BenefitsSection from "@/components/stable/BenefitsSection";
import SeSection from "@/components/stable/SeSection";

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
        <div className="flex flex-col items-center text-center pt-10 md:py-20">
          <HeroSection
            shinyText="Services that Drive Growth"
            heading="Transforming Talent Readiness for Organizational Growth"
            subheading="Unlock exponential growth with our consulting/coaching expertise, digital tools and tailored services for sustainable talent readiness."
            buttonText="Start With Us"
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
        text={`Redefine What’s Possible for Your Workforce with myDayOne`}
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
