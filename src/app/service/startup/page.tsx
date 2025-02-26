import React from "react";
import BenefitsSection from "@/components/startup/BenefitsSection";
import PricingSection from "@/components/products/PricingSection2";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import SolutionSection from "@/components/products/SolutionSection";
import ImageSection from "@/components/products/ImageSection";
import FeatureSection from "@/components/startup/FeatureSection";
import { startupData,test } from "@/components/Data";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import PageHeader from "@/components/ui/PageHeader";
import ProcessSection from "@/components/startup/ProcessSection ";


export const metadata = {
  title: "MyDayOne | SPARCLE",
  description: "Revolutionize Talent Development with AI Precision",
  keywords: "AI, Talent Development, Revolutionize, Precision",
}; 

const Product1: React.FC = () => {
  return (
    <>
    <PageHeader title="SPARCLE" description="Revolutionize Talent Development with AI Precision" />
      <section className="flex justify-center items-center p-4 overflow-hidden mt-10 md:mt-24">
        <ImageSection
          heading={`Empowering Start-Ups with People & Performance Excellence`}
          subheading={`We help start-ups scale with ready talent, leadership, and people process solutions—crafted by industry veterans, backed by science, and Hyper Personalised for your needs.`}
          buttonText={`Get yourself a world class HR&OD team for your start up without the high cost]`}
        />
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <FeatureSection />
      </section>

      <TextRevealDemo
        text={`From Growth to Greatness—We Help You Scale the Right Way`}
      />

      {/* Benefits Section */}
      <section className="overflow-hidden">
        <BenefitsSection
          title={startupData.benefitsSection.title}
          descriptionTitle={startupData.benefitsSection.descriptionTitle}
          descriptionText={startupData.benefitsSection.descriptionText}
          listItems={startupData.benefitsSection.listItems}
        />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center py-4 px-2 md:px-28 overflow-hidden">
        <ProcessSection />
      </section>

      {/* Solution Section */}

      <section className="flex flex-col justify-center items-center py-4 md:px-10 ">
        <SolutionSection pages={test} />
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center p-4 mt-20 overflow-hidden">
        <PricingSection />
      </section>
    
      <UnlockPotentialSection buttonText="Join Us" ctaText="Start today" description="Book Your Free Demo Today!" title="See SPARCLE in Action" link="/form#service-form"  />
      </>
  );
};

export default Product1;
