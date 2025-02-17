import React from "react";
import ImageTitle from "../Title/ImageTitle";
import Link from "next/link";
import connectMongo from "@/lib/mongodb";
import { Blog as BLog } from "@/model/Blog";

async function getPopularBlogs() {
    await connectMongo();
    const blogs = await BLog.find({ isPopular: true })
        .populate("category", "name")
        .sort({ createdAt: -1 });

    return blogs.map((blog) => ({
        title: blog.title,
        slug: blog.slug,
        readTime: blog.readTime,
        category: blog.category.map((category) => category.name).join(", "),
        author: blog.author,
        image: blog.featuredImage || "https://placehold.co/1920x1080",
    }));
}

export const dynamic = "force-dynamic";

const Blog: React.FC = async () => {
    const blogs = await getPopularBlogs();

    return (
        <div className="relative py-5 bg-gradient-to-b from-[#fbfbfc] to-gray-50 px-2">
            {/* Page Title */}
            <div className="relative text-center pt-8 pb-16">
                <ImageTitle
                    description="Explore the latest trends, tips and insights that drive business success."
                    image="/blogs.svg"
                    title="Insights and Strategies for Your Readiness"
                />

                {/* Blog Cards */}
                <div className="flex justify-center gap-6 mt-10 flex-wrap text-justify">
                    {blogs.map((blog, index) => (
                        <div key={index} className="group w-full md:w-1/3 lg:w-1/4 p-4 bg-white rounded-3xl shadow-md cursor-pointer hover:shadow-xl transition transform hover:-translate-y-2 relative z-30">
                            <Link  href={`/blog/${blog.slug}`} passHref>
                                <div className="w-full bg-gray-200 rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="aspect-video w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h2 className="text-lg font-semibold mb-2 truncate">{blog.title}</h2>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{blog.category}</p>
                                <div className="text-sm text-gray-500 flex justify-between items-center">
                                    <span>{blog.readTime}</span>
                                    <span>By {blog.author}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <p className="text-gray-700 text-md font-semibold mt-12">
                    Looking for more?{" "}
                    <Link href="/blogs" className="text-purple-600 hover:underline">
                        See all blogs.
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Blog;
