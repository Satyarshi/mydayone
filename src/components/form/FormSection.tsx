"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageTitle from "../Title/ImageTitle";

interface FormSectionProps {
  apiEndpoint: string;  // API URL for form submission
  pdfPath: string;      // Path to the PDF file
  downloadName: string; // Name for the downloaded file
  description: string;  // Description for the form
}
const FormSection: React.FC<FormSectionProps> = ({ apiEndpoint, pdfPath, downloadName,description }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName: (e.target as HTMLFormElement).firstName.value,
      lastName: (e.target as HTMLFormElement).lastName.value,
      email: (e.target as HTMLFormElement).email.value,
      phone: (e.target as HTMLFormElement).phone.value,
      companyName: (e.target as HTMLFormElement).companyName.value,
      companyEmail: (e.target as HTMLFormElement).companyEmail.value,
      designation: (e.target as HTMLFormElement).designation.value,
    };

    try {
      const response = await fetch(apiEndpoint, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        (e.target as HTMLFormElement).reset(); // Reset form on success
      } else {
        if (result.error === "Email already exists. Please use a different email.") {
          toast.error("Email already exists. Try a different one.", {
            position: "top-center",
            autoClose: 2000,
          });
        } else {
          toast.error("Failed to submit form. Please try again.", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = downloadName; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col items-center pt-36">
      <div className="md:px-32 ">
        <ImageTitle
          description={description}
          image="/Connect.svg"
          title="Comprehensive Services to Drive Your Success Forward"
        />
      </div>
      <img src="/Active Indicator.svg" alt="line" className="my-8" />
      <div className="w-full max-w-3xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">Email*</label>
              <input type="email" name="email" className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">Phone No.*</label>
              <input type="text" name="phone" className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]" required />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">First Name*</label>
              <input type="text" name="firstName" className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">Last Name*</label>
              <input type="text" name="lastName" className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]" required />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">Company Name</label>
              <input type="text" name="companyName" className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">Company Email</label>
              <input type="text" name="companyEmail" className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-left">Designation</label>
            <input type="text" name="designation" className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]" />
          </div>
          <button
            type="submit"
            className={`w-full bg-[#7030A0] text-white py-3 px-8 rounded-xl hover:bg-purple-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {/* 🔹 Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            className="w-full mt-4 bg-[#7030A0] text-white py-3 px-8 rounded-xl hover:bg-purple-700"
          >
            Download the Resource
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default FormSection;
