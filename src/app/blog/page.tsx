import React from "react";
import HeroSection from "@/components/blog/HeroSection";
import BrowsePost from "@/components/blog/BrowsePost";
import connectMongo from "@/lib/mongodb";
import { Blog as BLog,Category } from "@/model/Blog";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "MyDayOne | Blog",
  description: "Explore the latest trends, tips and insights that drive business success.",
  keywords: "Blog, Trends, Tips, Insights",
};  

async function getAllBlogWithCategories() {
  await connectMongo();
  const blog = await BLog.find().populate('category', 'name')
  let temp = blog.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0].toJSON()
  let latestBlog = {...temp,category: temp.category.map((category) => category.name).join(', ')};
  
  const categoryNames = await Category.find();
  return {
    blog: blog.map((blog) => ({
      title: blog.title,
      description: blog.description,
      category: (blog.category.map((category) => category.name)).join(', '),
      featuredImage: blog.featuredImage,
      readTime: blog.readTime,
      slug: blog.slug,
      content: blog.content,
      author: blog.author,
    })),
    category: categoryNames.map((category) => category.name),
    latestBlog: latestBlog,
    popularBlogs: blog.filter((blog) => blog.isPopular).map((blog) => ({
      title: blog.title,
      slug: blog.slug,
      readTime: blog.readTime,
      category: (blog.category.map((category) => category.name)).join(', '),
      author: blog.author,
    })),
  };

}



export const dynamic = "force-dynamic";
const Blog: React.FC = async() => {
  const data = await getAllBlogWithCategories();
  console.log(data.popularBlogs)
  return (
    <>
    <PageHeader title="Blog" description="Explore the latest trends, tips and insights that drive business success." />
      <section className="flex justify-center items-center p-4 overflow-y-hidden mt-16">
        <HeroSection latestBlog={data.latestBlog } popularBlogs={data.popularBlogs} />
      </section>

      <section className="flex justify-center items-center p-4 overflow-hidden pt-0 px-20">
        <BrowsePost blogs={data.blog} categories={data.category}/>
      </section>
    </>
  );
};

export default Blog;