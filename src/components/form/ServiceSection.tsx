"use client";
import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageTitle from "../Title/ImageTitle";
import { useState } from "react";

const ServiceSection: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [serviceValue, setServiceValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setServiceValue(event.target.value);
  };
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = {
      name: (e.target as HTMLFormElement).Name.value,
      companyName: (e.target as HTMLFormElement).companyName.value,
      email: (e.target as HTMLFormElement).email.value,
      phone: (e.target as HTMLFormElement).phone.value,
      employeeHeadCount: (e.target as HTMLFormElement).employeeHeadCount.value,
      services: (e.target as HTMLFormElement).services.value,
      message: (e.target as HTMLFormElement).message.value,
    };

    const emailDomain = formData.email.split("@")[1];
    const publicDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "icloud.com"]; 

    if (publicDomains.some(domain => emailDomain.endsWith(domain))) {
      toast.error("Please use a business email address.", {
      position: "top-center",
      autoClose: 2000,
      });
      return;
    }
    console.log(formData);
    fetch("http://localhost:8123/api/form-submit", {
      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Form submitted successfully!", {
            position: "top-center",
            autoClose: 2000,
          });
        } else {
          toast.error("Failed to submit form. Please try again.", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      })
      .catch(() => {
        toast.error("An error occurred. Please try again.", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  return (
    <section className=" flex items-start py-36 justify-between mx-20 ">
      {/* Background Heading */}
      <div className=" w-1/2">
        <ImageTitle
          description={
            <>
             Our innovative tech solutions, <span className="font-semibold text-gray-800"> SPARCLE </span>and <span className="font-semibold text-gray-800">talentSCOPE</span> revolutionize talent readiness and assessment in organizations. SPARCLE, powered by <span className="font-semibold text-gray-800">iTRAS (intelligent Talent Readiness Acceleration System)</span>, boosts readiness in core areas like role-based skills, leadership, product and process knowledge, and onboarding. talentSCOPE is an intelligent suite assessing skills, competencies, behaviors, product/process knowledge, and aptitude.
            </>
          }
          image="/Connect.svg"
          title="Comprehensive Products & Services to Drive Your Success Forward"
          oreintation="left"
        />
      </div>
  
      {/* CTA Button */}
      
      <div className="max-w-xl w-1/2 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-2xl">
        <form className="space-y-6" onSubmit={handleSubmit} >
          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="Name"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
          </div>

          {/* Email and Phone Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Phone no. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
          </div>

          {/* Employee HeadCount */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-2 text-left">
              Employee Headcount <span className="text-red-500">*</span>
            </label>
            <select
              name="employeeHeadCount"
              value={selectedValue}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              required

            >
              <option value="" disabled>
                Select employee headcount 
              </option>
              <option value="upto 100">upto 100</option>
              <option value="101-1000">101-1000</option>
              <option value="1001-5000">1001-5000</option>
              <option value="more than 5000">More than 5000</option>
            </select>
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-2 text-left">
              Services & Products Interested in <span className="text-red-500">*</span>
            </label>
            <select
              name="services"
              value={serviceValue}
              onChange={handleServiceChange}
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              required

            >
              <option value="" disabled>
                Select services
              </option>
              <option value="Sparcle">SPARCLE</option>
              <option value="talentScope">talentScope</option>
              <option value="Service">Service</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Needs/Challenges Textarea */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-left">
              Tell us more about your needs or challenges
            </label>
            <textarea
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              rows={3}
              name="message"
              placeholder="Start typing here ..."
            ></textarea>
          </div>

          {/* Checkbox */}
          {/* <div className="flex items-center space-x-2">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy & Terms
              </a>
              .
            </label>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#7030A0] text-white py-3 px-8 rounded-xl hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServiceSection;
