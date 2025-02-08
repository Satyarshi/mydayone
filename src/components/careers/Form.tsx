"use client";
import { address } from "framer-motion/client";
import React from "react";
import { toast } from "react-toastify";

const Form: React.FC<{ job: string }> = ({ job }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Convert file to base64
    const convertToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result as string);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    };

    const data = {
      job: formData.get("job"),
      name: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      address: formData.get("address") || "",
      cv: formData.get("cv")
        ? await convertToBase64(formData.get("cv") as File)
        : null,
    };

    console.log(data);

    fetch("http://localhost:8123/api/job-submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => {
            if (response.ok) {
            toast.success("Form submitted successfully!");
            } else {
            toast.error("Failed to submit form. Please try again.");
            }
        })
        .catch(() => {
            toast.error("An error occurred. Please try again.");
        } )  
    // Add your form submission logic here, e.g., sending data to an API
  };

  return (
    <div className="lg:w-1/3 w-full bg-white">
      <h2 className="text-2xl font-semibold mb-6">Apply</h2>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-2xl p-8"
      >
        <div className="mb-4">
          <input type="text" className="hidden" name="job" value={job} readOnly />
          <label
            className="block text-[#344346] font-semibold text-sm mb-2"
            htmlFor="firstName"
          >
            First name
          </label>
          <input
            className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#344346] font-semibold text-sm mb-2"
            htmlFor="lastName"
          >
            Last name
          </label>
          <input
            className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#344346] font-semibold text-sm mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#344346] font-semibold text-sm mb-2"
            htmlFor="email"
          >
            Phone 
          </label>
          <input
            className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
            type="number"
            name="phoneNumber"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#344346] font-semibold text-sm mb-2"
            htmlFor="cv"
          >
            CV
          </label>
          <input
            className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
            type="file"
            id="cv"
            name="cv"
            accept="application/pdf"
          />
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-[#344346]">
              I agree to the{" "}
              <a href="#" className="text-blue-500">
                Privacy & Terms
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#7030A0] text-white p-3 hover:bg-purple-700 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-2xl"
        >
          Apply now
        </button>
      </form>
    </div>
  );
};

export default Form;
