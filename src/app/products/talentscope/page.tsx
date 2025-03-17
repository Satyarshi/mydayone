import React from "react";
import BenefitsSection from "@/components/products/BenefitsSection";
import ProductSkills from "@/components/products/ProductSkills";
import PricingSection from "@/components/products/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import ServiceSection from "@/components/products/ServiceSection";
import SolutionSection from "@/components/products/SolutionSection";
import ImageSection from "@/components/products/ImageSection2";
import InsightSection from "@/components/products/InsightSection";
import { productsData,solution } from "@/components/Data";
import BlogsSection from "@/components/home/BlogSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import PageHeader from "@/components/ui/PageHeader";
// import BlogSection from "@/components/blog-main/BlogSection";

export const metadata = {
  title: "MyDayOne | talentSCOPE",
  description: "Smarter Feedback. Stronger Teams",
  keywords: "Feedback, Teams, Smarter, Stronger",
};

const Product1: React.FC = () => {
  return (
    <>
      <PageHeader
        title="talentSCOPE"
        description="Smarter Feedback. Stronger Teams"
      />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center p-4 overflow-hidden mt-10 md:mt-24">
        <ImageSection
          heading={productsData.heroSection.heading}
          subheading={productsData.heroSection.subheading}
          buttonText={productsData.heroSection.buttonText}
          image="/talentscope2.svg"
        />
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <InsightSection />
      </section>

      <TextRevealDemo text={`Smarter Feedback. Stronger Teams`} />

      {/* Benefits Section */}
      <section className="overflow-hidden">
        <BenefitsSection
          title={productsData.benefitsSection.title}
          descriptionTitle={productsData.benefitsSection.descriptionTitle}
          descriptionText={productsData.benefitsSection.descriptionText}
          listItems={productsData.benefitsSection.listItems}
          height="1750px"
        />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center py-4 px-2 md:px-28 overflow-hidden">
        <ProductSkills
          title={productsData.skillsSection.title}
          description={productsData.skillsSection.description}
        />
      </section>

      {/* Solution Section */}
      <section className="flex flex-col justify-center items-center py-4 md:px-10">
        <SolutionSection pages={productsData.pages} />
      </section>

      {/* Services Section */}
      <section className="flex justify-center items-center md:px-10 mt-5">
        <ServiceSection pages={solution.talentscop}/>
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <PricingSection />
      </section>
      <BlogsSection />
      <UnlockPotentialSection
        buttonText="Join Us"
        ctaText="Start today"
        description="Simplify assessments and accelerate growth with talentSCOPE ."
        title="Ready to Transform Feedback into Action?"
        link="/form#service-form"
      />
    </>
  );
};

export default Product1;
