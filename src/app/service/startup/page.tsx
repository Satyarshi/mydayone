import React from "react";
import FeatureSection from "@/components/startup/FeatureSection";
import PricingSection from "@/components/startup/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import SolutionSection from "@/components/startup/SolutionSection";
import HeroSection from "@/components/HeroSection";
import { test } from "@/components/Data";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import PageHeader from "@/components/ui/PageHeader";
import BenefitsSection from "@/components/startup/BenefitsSection";
import ClientSection from "@/components/home/ClientSection";
import ResultSection from "@/components/startup/ResultSection";
import StatsSection from "@/components/startup/StatsSection";

export const metadata = {
  title: "MyDayOne | SPARCLE",
  description: "Revolutionize Talent Development with AI Precision",
  keywords: "AI, Talent Development, Revolutionize, Precision",
};

const Product1: React.FC = () => {
  return (
    <>
      <PageHeader
        title="SPARCLE"
        description="Revolutionize Talent Development with AI Precision"
      />
      <section className="flex justify-center items-center p-4 md:px-24 overflow-hidden">
        <div className="flex flex-col items-center text-center pt-10 md:py-20">
          <HeroSection
            shinyText="Services that Drive Growth"
            heading="Empowering Start-Ups with People & Performance Excellence"
            subheading="We help start-ups scale with ready talent, leadership, and people process solutions—crafted by industry veterans, backed by science, and Hyper Personalised for your needs."
            buttonText="Get yourself a world class HR & OD team "
          />
        </div>
      </section>

      {/* Client Section */}
      <section className="overflow-hidden mb-10">
        <ClientSection />
      </section>

      <section className="overflow-hidden">
        <FeatureSection />
      </section>

      <TextRevealDemo
        text={`From Growth to Greatness—We Help You Scale the Right Way`}
      />

      {/* Skills Section */}
      <section className="flex justify-center items-center py-4 px-2 md:px-28 overflow-hidden">
        <BenefitsSection />
      </section>

      {/* Result Section */}
      <section className="flex justify-center items-center p-10 pb-0 overflow-hidden">
        <ResultSection />
      </section>

      <section className="flex justify-center items-center py-4 px-2 md:px-28 overflow-hidden">
        <StatsSection />
      </section>

      {/* Solution Section */}

      <section className="flex flex-col justify-center items-center py-4 mt-10 md:px-10 ">
        <SolutionSection pages={test} />
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <PricingSection />
      </section>

      <UnlockPotentialSection
        buttonText="Let’s Talk"
        ctaText="Start today"
        description="Let’s co-create your roadmap to success."
        title="Ready to Scale with the Right People Strategy?"
        link="/form#service-form"
      />
    </>
  );
};

export default Product1;
