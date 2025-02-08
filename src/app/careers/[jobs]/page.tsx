import React from "react";
import connectMongo from "@/lib/mongodb";
import JobOpening from "@/model/JobOpenings";
import { redirect } from "next/navigation";
import { AnimatedShinyTextDemo } from "@/components/AnimatedShinyTextDemo";
import Form from "@/components/careers/Form";
type tParams = Promise<{ jobs: string }>;
interface JobPageParams {
  params: tParams;
}

const getOpening = async (slug: string): Promise<{
  id: string;
  position: string;
  description: string;
  salary: string;
  whatWeOffer: string;
  whatWeLookFor: string;
  location: string;
  role: string;
  link: string;
}> => {
  await connectMongo();
  const jobOpening = await JobOpening.findOne({ slug }) as {
    _id: string;
    position: string;
    description: string;
    salary: string;
    whatWeOffer: string;
    whatWeLookFor: string;
    location: string;
    role: string;
    slug: string;
  };
  if (!jobOpening) {
    console.log("Job not found");
    console.log("slug", slug);
    redirect('/404');

  }
  return {
    id:jobOpening._id,
    position: jobOpening.position,
    description: jobOpening.description,
    salary: jobOpening.salary,
    whatWeOffer: jobOpening.whatWeOffer,
    whatWeLookFor: jobOpening.whatWeLookFor,
    location: jobOpening.location,
    role: jobOpening.role,
    link: jobOpening.slug,
  };
}



const Careers: React.FC<JobPageParams> = async ({ params }) => {
  const { jobs } = await params;
  const jobOpening = await getOpening(jobs);

  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <section className="flex flex-col items-center text-center ">
          {/* Headline Section */}
          <div className=" bg-[#fff] px-3 py-2 rounded-lg text-xs inline-block">
            <AnimatedShinyTextDemo
              text={`All Careers`}
              link={`/careers`}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {jobOpening.position}
          </h1>

          {/* Subheading Section */}
          <p className="text-lg text-gray-500 mb-8 max-w-3xl">
            {jobOpening.description}
          </p>

          <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
            <div className="w-[300px] h-[200px] p-4 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between hover:bg-[#7030A0] hover:text-white">
              <h1 className="text-3xl font-semibold mb-2 w-[80%]">${jobOpening.salary}</h1>
              <p>Monthly fixed rate</p>
            </div>
            <div className="w-[300px] h-[200px] p-4 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between hover:bg-[#7030A0] hover:text-white">
              <h1 className="text-3xl font-semibold mb-2 w-[80%]">{jobOpening.location}</h1>
              <p>Work from anywhere</p>
            </div>
            <div className="w-[300px] h-[200px] p-4 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between hover:bg-[#7030A0] hover:text-white">
              <h1 className="text-3xl font-semibold mb-2 w-[80%]">{jobOpening.role}</h1>
              <p>Join the best design team</p>
            </div>
          </div>
        </section>
      </section>

      {/* Offer Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <section className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Left Column: Problem Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-black mb-6">
              What We Offer
            </h2>
            <div className="blog-content"
        dangerouslySetInnerHTML={{ __html: jobOpening.whatWeOffer }}>
            </div>
            <h2 className="text-3xl font-semibold text-black mb-6">
              What We Look For
            </h2>
            <div className="blog-content"
        dangerouslySetInnerHTML={{ __html: jobOpening.whatWeLookFor }}>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <Form job={jobOpening.id} />
        </section>
      </section>
    </>
  );
};

export default Careers;
