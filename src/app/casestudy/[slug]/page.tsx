import React from "react";
import HeroSection from "@/components/case-study/HeroSection";
import TextSection from "@/components/case-study/SolutionSection";
import { caseStudySolution, caseStudyResult } from "@/components/Data";
import connectMongo from "@/lib/mongodb";
import CaseStudyModel from "@/model/CaseStudy";
import { Category } from "@/model/Blog";
import { redirect } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
export const dynamic = 'force-dynamic';
type tParams = Promise<{ slug: string }>;
interface CaseStudyPageParams {
  params: tParams;
}

async function getCaseStudy(slug: string) {
  await connectMongo();
  const caseStudy = await CaseStudyModel.findOne({ slug }).populate('category').populate({
    path: 'relatedCases', // Populate the relatedCases field
    populate: {
      path: 'category', // Nested population for the category field inside relatedCases
    }
  }).exec();
  console.log(caseStudy)
  if (!caseStudy) {
    redirect('/404');
  }
  const categoryNames = caseStudy.category.map((category: any) => category.name);
  return {
    ...caseStudy.toObject(),
    category: categoryNames,
  };
}

export const metadata = {
  title: "MyDayOne | Case Study",
  description: "Explore the latest trends, tips and insights that drive business success.",
  keywords: "Case Study, Trends, Tips, Insights",
};


const CaseStudy: React.FC<CaseStudyPageParams> = async ({ params }) => {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);
  return (
    <>
      {/* Hero Section */}
      <PageHeader title={caseStudy.title} description={caseStudy.description} />
      <section className="flex justify-center flex-col items-center p-4 overflow-hidden" style={{ background: "url(/bgGrid.png)" }}>
        <h1 className="text-4xl font-bold text-black mb-4 ">
          {caseStudy.title}
        </h1>

        {/* Subheading Section */}
        <p className="text-lg text-gray-500 mb-8 max-w-3xl text-center">
          {caseStudy.description}
        </p>

        <HeroSection />
      </section>

      {/* Problem Section */}
      <section className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Column: Problem Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-black mb-6">Problem</h2>
          <div className="blog-content"
        dangerouslySetInnerHTML={{ __html: caseStudy.problem }}>
            </div>
          <h2 className="text-3xl font-semibold text-black mb-6">Solution</h2>
          <div className="blog-content"
        dangerouslySetInnerHTML={{ __html: caseStudy.solution }}>
            </div>

          <h2 className="text-3xl font-semibold text-black mb-6">Outcome</h2>
          <div className="blog-content"
        dangerouslySetInnerHTML={{ __html: caseStudy.result }}>
            </div>


        </div>

        {/* Right Column: Related Case Studies Section */}
        <div className="lg:w-1/3">
          <h3 className="text-2xl font-semibold text-black mb-6">
            Related Case Studies
          </h3>
          {caseStudy?.relatedCases.map((cases, index) => (
            <Link key={index} href={`/casestudy/${cases.slug}`}>
              <div key={index} className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl p-6 mb-6">
                <div className="text-sm text-gray-500 mb-2">Company Descriptor</div>
                <h4 className="text-lg font-bold text-black mb-2">{cases.title}</h4>
                <div className="flex space-x-2 text-sm text-gray-400">
                  {cases.category.map((indicator, i) => (
                    <span key={i}>
                      {indicator.name}
                      {i < cases.category.length - 1 && (
                        <span className="mx-1">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
