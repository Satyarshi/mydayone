import {FC} from "react";
import HeroSection from "@/components/blog-main/HeroSection";
import BlogSection from "@/components/blog-main/BlogSection";
import connectMongo from "@/lib/mongodb";
import { Blog,Category } from "@/model/Blog";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
export const dynamic ='force-dynamic';

type tParams = Promise<{ slug: string }>;
interface BlogPageProps{
  params: tParams;
}


async function getBlogWithCategories(slug: string) {
  await connectMongo(); 
  const blog = await Blog.findOne({ slug }).populate('category', 'name').exec();

  if (!blog) {
    redirect('/404');
  }
  const categoryNames = blog.category.map((category: any) => category.name);
  return {
    ...blog.toObject(),
    category: categoryNames,
  };
}

export const metadata = {
  title: "MyDayOne | Blog",
  description: "Explore the latest trends, tips and insights that drive business success.",
  keywords: "Blog, Trends, Tips, Insights",
};


const BlogMain: FC<BlogPageProps> = async({params}) => {
  const {slug} =  await params;
  const blog = await getBlogWithCategories(slug);
  if (!blog) {
    redirect('/404');
  }
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection author={blog!.author} category={blog!.category!.join(", ")} description={blog!.description} featuredImage={blog!.featuredImage!} readTime={blog!.readTime!} title={blog!.title!}   />
      </section>

      {/* Blog Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <BlogSection content={blog!.content}/>
      </section>
    </>
  );
};

export default BlogMain;
