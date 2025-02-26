import React from "react";
import BenefitsSection from "@/components/products/BenefitsSection";
import ProductSkills from "@/components/products/ProductSkills";
import PricingSection from "@/components/products/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import ServicesSection from "@/components/products/ServicesSection";
import SolutionSection from "@/components/products/SolutionSection";
import ImageSection from "@/components/products/ImageSection2";
import InsightSection from "@/components/products/InsightSection";
import { productsData } from "@/components/Data";
import BlogsSection from "@/components/home/BlogSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import PageHeader from "@/components/ui/PageHeader";
// import BlogSection from "@/components/blog-main/BlogSection";

export const metadata = {
  title: "MyDayOne | talentScope",
  description: "Smarter Feedback. Stronger Teams",
  keywords: "Feedback, Teams, Smarter, Stronger",
};

const Product1: React.FC = () => {
  return (
    <>
      <PageHeader title="talentScope" description="Smarter Feedback. Stronger Teams" />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center p-4 overflow-hidden">
        <ImageSection
         
          heading={productsData.heroSection.heading}
          subheading={productsData.heroSection.subheading}
          buttonText={productsData.heroSection.buttonText}
        />
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <InsightSection />
      </section>

      <TextRevealDemo
        text={`Smarter Feedback. Stronger Teams`}
      />

      {/* Benefits Section */}
      <section className="overflow-hidden">
        <BenefitsSection
          title={productsData.benefitsSection.title}
          descriptionTitle={productsData.benefitsSection.descriptionTitle}
          descriptionText={productsData.benefitsSection.descriptionText}
          listItems={productsData.benefitsSection.listItems}
        />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ProductSkills
          title={productsData.skillsSection.title}
          description={productsData.skillsSection.description}
        />
      </section>

      {/* Solution Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden mt-[-80px]">
        <SolutionSection pages={productsData.pages}/>
      </section>

      {/* Services Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ServicesSection />
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <PricingSection />
      </section>
      <BlogsSection/>
        <UnlockPotentialSection buttonText="Join Us" ctaText="Start today" description="Simplify assessments and accelerate growth with talentScope ." title="Ready to Transform Feedback into Action?" link="/form#service-form"  />
    </>
  );
};

export default Product1;
