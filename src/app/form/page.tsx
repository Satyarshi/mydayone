import React from "react";
import ServiceSection from "@/components/form/ServiceSection";
import { SubmitForm } from "../actions/form-submit";

export const metadata = {
  title: "MyDayOne | Contact us",
  description: "We are a team of professionals who are passionate about helping businesses grow.",
  keywords: "Form, Professionals, Business, Growth",
};

const Form: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ServiceSection saveFunction={SubmitForm}/>
      </section>
    </>
  );
};

export default Form;
