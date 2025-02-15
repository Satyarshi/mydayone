import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ClientSection from "@/components/home/ClientSection";
import BlogsSection from "@/components/home/BlogSection";
import FeatureSection from "@/components/home/FeatureSection";
import OfferingSection from "@/components/home/OfferingSection";
import SkillsSection from "@/components/home/SkillsSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhoSection from "@/components/home/WhoSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import { SmoothScrollHero } from "@/components/home/HeroAnimated";
import PageHeader from "@/components/ui/PageHeader";

const Home: React.FC = () => {
  return (
    <>
      <PageHeader title="Home" />
      <div className="">
        <SmoothScrollHero />
        <HeroSection />
        <ClientSection />
        <StatsSection />
        <SkillsSection />
        <FeatureSection />
        <WhoSection />
        <OfferingSection />
        <TestimonialSection />
        <BlogsSection />
        <UnlockPotentialSection
          buttonText="Download Now"
          ctaText="Ready to Accelerate Talent Readiness?"
          description="Partner with myDayOne to drive talent readiness, talent assessment across your workforce. The future of talent growth starts here."
          title="Ready to Accelerate Talent Readiness?"
          link="/form#service-form"
        />
      </div>
    </>
  );
};

export default Home;
