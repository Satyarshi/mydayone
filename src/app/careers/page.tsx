import React from "react";
import HeroSection from "@/components/careers-main/Herosection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import connectMongo from "@/lib/mongodb";
import JobOpening from "@/model/JobOpenings";
import PageHeader from "@/components/ui/PageHeader";
export const dynamic = "force-dynamic";

const getAllJobOpenings = async () => {
  await connectMongo();
  const jobOpenings = await JobOpening.find();
  return {
    jobOpenings: jobOpenings.map((jobOpening) => ({
      position: jobOpening.position,
      salary: jobOpening.salary,
      location: jobOpening.location,
      role: jobOpening.role,
      link: jobOpening.slug,
    })),
  };
};

export const metadata = {
  title: "MyDayOne | Careers",
  description: "Join our team of professionals who are passionate about helping businesses grow.",
  keywords: "Careers, Job Openings, Team, Professionals",
};

const CareersMain: React.FC = async () => {
  const jobOpenings = await getAllJobOpenings();
  return (
    <>
      {/* Hero Section */}
      <PageHeader title="Careers" description="Join our team of professionals who are passionate about helping businesses grow." />
      <section className="flex justify-center items-center overflow-hidden mt-24">
        <HeroSection jobOpenings={jobOpenings.jobOpenings} />
      </section>
      <UnlockPotentialSection buttonText="Explore Solutions" ctaText="Ready to Elevate Your Organization?" description="Partner with MyDayOne to drive innovation, growth and engagement across your workforce. The future of learning starts here" title="Unlock Your Potential" link="/form#service-form"  />

    </>
  );
};

export default CareersMain;
