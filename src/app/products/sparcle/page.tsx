import React from "react";
import BenefitsSection from "@/components/products/BenefitsSection";
import ProductSkills from "@/components/products/ProductSkills";
import PricingSection from "@/components/products/PricingSection2";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import ServiceSection from "@/components/products/ServiceSection";
import SolutionSection from "@/components/products/SolutionSection";
import ImageSection from "@/components/products/ImageSection";
import FeatureSection from "@/components/products/FeatureSection";
import { productData,page } from "@/components/Data";
import ResourceSection from "@/components/products/ResourceSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import PageHeader from "@/components/ui/PageHeader";
import BlogsSection from "@/components/home/BlogSection";


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
          heading={productData.heroSection.heading}
          subheading={productData.heroSection.subheading}
          buttonText={productData.heroSection.buttonText}
        />
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <FeatureSection />
      </section>

      <TextRevealDemo
        text={`Revolutionize Talent Readiness with AI Precision`}
      />

      {/* Benefits Section */}
      <section className="overflow-hidden">
        <BenefitsSection
          title={productData.benefitsSection.title}
          descriptionTitle={productData.benefitsSection.descriptionTitle}
          descriptionText={productData.benefitsSection.descriptionText}
          listItems={productData.benefitsSection.listItems}
        />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center py-4 px-2 md:px-28 overflow-hidden">
        <ProductSkills
          title={productData.skillsSection.title}
          description={productData.skillsSection.description}
        />
      </section>

      {/* Solution Section */}

      <section className="flex flex-col justify-center items-center py-4 md:px-10 ">
        <SolutionSection pages={page} />
      </section>

      {/* Services Section */}
      <section className="flex justify-center items-center md:px-10 ">
        <ServiceSection />
      </section>


      {/* Pricing Section */}
      <section className="flex justify-center items-center p-4 mt-20 overflow-hidden">
        <PricingSection />
      </section>

      <BlogsSection />
    
      <UnlockPotentialSection buttonText="Join Us" ctaText="Start today" description="Book Your Free Demo Today!" title="See SPARCLE in Action" link="/form#service-form"  />
      </>
  );
};

export default Product1;
