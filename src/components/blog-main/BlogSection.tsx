import React from "react";
interface BlogSectionProps {
content: string;
}
const BlogSection: React.FC<BlogSectionProps> = ({content}:BlogSectionProps) => {
  const caseStudyTitles: string[] = [
    "See How This Company Improved CTR by 30% and Saved 15% Costs on Operations",
    "Discover How This Firm Boosted Revenue by 25% with Automation",
    "Case Study: Reducing Operational Costs by 20% Through Streamlined Processes",
  ];

  // Array of indicators for each case study
  const caseStudyIndicators: string[] = ["Indicator", "Indicator", "Indicator"];
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-start px-3 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Column: Problem Section */}

      <div className="lg:w-1/2">
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
       </div>
      {/* Right Column: Related Case Studies Section */}
      <div className="lg:w-1/3 sticky top-5">
      <div className="">

        <h3 className="text-2xl font-semibold text-black mb-6">
          Related Case Studies
        </h3>

        {/* Render Case Study Cards Dynamically */}
        {caseStudyTitles.map((title, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl p-6 mb-6"
          >
            <div className="text-sm text-gray-500 mb-2">Company Descriptor</div>
            <h4 className="text-lg font-bold text-black mb-2">{title}</h4>
            <div className="flex space-x-2 text-sm text-gray-400">
              {caseStudyIndicators.map((indicator, i) => (
                <span key={i}>
                  {indicator}
                  {i < caseStudyIndicators.length - 1 && (
                    <span className="mx-1">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
