import React from "react";
import FormSection from "@/components/form/FormSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import { SubmitForm } from "../actions/mdj";

export const metadata = {
  title: "MyDayOne | Contact us",
  description:
    "We are a team of professionals who are passionate about helping businesses grow.",
  keywords: "Form, Professionals, Business, Growth",
};

const Form: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <FormSection
          saveFunction={SubmitForm}
          pdfPath="/SBMDJ F1.pdf"
          downloadName="Manager_Development_Journey.pdf"
          description={`Here is an exciting "Strengths based Manager Development Journey". Please fill the details to download the journey.`}
        />
      </section>
      <UnlockPotentialSection
        buttonText="Join Us"
        ctaText="Schedule a Demo"
        description="Ready to Maximize Your Workforce Potential?"
        title="Schedule a Demo"
        link="/form#service-form"
      />
    </>
  );
};

export default Form;
