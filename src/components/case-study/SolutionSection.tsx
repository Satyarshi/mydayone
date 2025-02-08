import React from "react";
interface SolutionSectionProps {
  title: string;
  description: string;
  listItems: string[];
  additionalText: string;
}

const TextSection: React.FC<SolutionSectionProps> = ({
  title,
  description,
  listItems,
  additionalText,
}) => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Column: Problem Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-semibold text-black mb-6">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* List Section */}
        <div className="bg-[#7030A0] text-white p-6 rounded-2xl">
          <ul className="space-y-4 list-disc list-inside">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 my-6">{additionalText}</p>
        {/* Placeholder Image */}
        <div className="bg-gray-200 flex justify-center items-center h-52 mb-4 rounded-xl">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
        <p className="text-sm text-gray-400 italic mb-8 text-center">
          Gravida egestas hendrerit pretium ultrices
        </p>
      </div>

      <div className="lg:w-1/3"></div>
    </section>
  );
};

export default TextSection;
