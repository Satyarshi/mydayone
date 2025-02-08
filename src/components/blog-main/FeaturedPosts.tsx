import React from "react";
import ImageTitle from "../Title/ImageTitle";
import Link from "next/link";
import connectMongo from "@/lib/mongodb";
import { Blog as BLog, Category } from "@/model/Blog";

async function getAllBlogWithCategories() {
    await connectMongo();
    const blog = await BLog.find().populate('category', 'name')
    let temp = blog.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0].toJSON()
    let latestBlog = { ...temp, category: temp.category.map((category) => category.name).join(', ') };

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
const Blog: React.FC = async () => {
    const data = await getAllBlogWithCategories();
    const blogs = data.popularBlogs
    return (
        <>
            <div className="relative py-12 mt-20">


                {/* Foreground Content */}
                <div className="relative text-center pt-8 pb-16">

                    <ImageTitle description="Explore the latest trends, tips and insights that drive business success." image="/blogs.svg" title="Insights and Strategies for Your Growth" />

                    {/* Blog Cards */}
                    <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
                        {blogs.map((blog, index) => (
                            <Link key={index} href={`/blog/${blog.slug}`}>
                                <div className="w-[300px] h-[320px] p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30">
                                    <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                                        <img
                                            src="/placeholder-image.svg"
                                            alt="Placeholder"
                                            className="opacity-50"
                                        />
                                    </div>
                                    <h2 className="text-md font-semibold mb-2 w-[80%]">
                                        {blog.title}
                                    </h2>
                                    
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Footer Link */}
                    <p className="text-[#344346] text-md font-semibold mt-12">
                        Looking for more?{" "}
                        <a href="/blogs" className="text-[#9030A0]">
                            See all blogs.
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Blog;