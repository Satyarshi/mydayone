"use client";
import React, { useState, useEffect } from "react";
import ImageTitle from "../Title/ImageTitle";
import { FormData as FormField } from "@/app/actions/mdj";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 5, 0));
    }, duration / 20);

    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [onClose, duration]);

  return (
    <div
      className={`fixed top-20 right-5 rounded-lg shadow-lg border z-10 bg-white`}
    >
      <span
        className={`px-4 py-3 ${
          type === "success" ? "text-green-500" : "text-red-500"
        }`}
      >
        {message}
      </span>
      <button
        className="ml-4 text-xl font-bold text-gray-600 hover:text-gray-800 pr-4 py-3"
        onClick={onClose}
      >
        ×
      </button>
      <div
        className={`h-1 pb-0  ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        }`}
        style={{ width: `${progress}%`, transition: "width 0.2s linear" }}
      />
    </div>
  );
};

interface FormSectionProps {
  saveFunction: (
    formData: FormField
  ) => Promise<{ success: boolean; message: string }>;
  pdfPath: string; // Path to the PDF file
  downloadName: string; // Name for the downloaded file
  description: string; // Description for the form
}
const FormSection: React.FC<FormSectionProps> = ({
  saveFunction,
  pdfPath,
  downloadName,
  description,
}) => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      email: (e.target as HTMLFormElement).email.value,
      phone: (e.target as HTMLFormElement).phone.value,
      firstName: (e.target as HTMLFormElement).firstName.value,
      lastName: (e.target as HTMLFormElement).lastName.value,
      companyName: (e.target as HTMLFormElement).companyName.value,
      companyEmail: (e.target as HTMLFormElement).companyEmail.value,
      designation: (e.target as HTMLFormElement).designation.value,
    };
    try {
      const response = await saveFunction(formData);
      if (response.success) {
        setToast({ message: response.message, type: "success" });
        console.log(response.message);
        handleDownload();
      } else {
        setToast({ message: response.message, type: "error" });
        console.log(response.message);
      }
    } catch (error) {
      setToast({
        message: "An error occurred. Please try again.",
        type: "error",
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
              <label className="block text-sm font-semibold mb-2 text-left">
                Email*
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
                Phone No.*
              </label>
              <input
                type="text"
                name="phone"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Company Email
              </label>
              <input
                type="text"
                name="companyEmail"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-left">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-[#7030A0] text-white py-3 px-8 rounded-xl hover:bg-purple-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Download Now"}
          </button>
        </form>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default FormSection;
