import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { image } from "framer-motion/client";
import ImageTitle from "../Title/ImageTitle";

interface Props {
  resources:{
    title: string;
    link: string;
    image: string;
    tags: string[];
  }[]
}

const ResourceSection: React.FC<Props> = ({resources}) => {
  // Define resource titles along with their URLs


  const resourceTags: string[] = ["PDF", "Category", "Free"];

  return (
    <div className="relative py-12 px-2 ">
      <div className="text-center pt-8 pb-16 relative">
        <ImageTitle image="/Resources.svg" title="Empower Your Team with Essential Tools" description="Access key documents and guides to drive success and support employee
          growth."/>
        

        {/* Resource Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
          {resources.map((resource, index) => (
            <Link key={index} href={resource.link}>
            <div
              className="w-[300px] p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30 h-80 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="h-[180px] w-full bg-gray-300 rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={resource.image}
                  alt="Placeholder"
                  className="object-cover h-full w-full"
                />
              </div>
              {/* Title */}
              <h2 className="text-md text-left font-semibold mb-2">
                {resource.title}
              </h2>
              {/* Tags */}
              <div className="text-gray-500 text-sm flex justify-start gap-4 mt-auto">
                {resource.tags.map((item, i) => (
                  <span key={i} className="hover-tag font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Link>
          
          ))}
        </div>

        {/* Footer Link */}
        <p className="text-[#344346] text-md font-semibold mt-12">
          Looking for more?{" "}
          <a href="/resources" className="text-[#9030A0]">
            See all resources.
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResourceSection;
