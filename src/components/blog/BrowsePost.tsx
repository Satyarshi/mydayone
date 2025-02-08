"use client";
import React, { useState } from "react";
import Link from "next/link";

interface BrowsePostProps {
  blogs: {
    title: string;
    description: string;
    slug: string;
    category: string; // comma separated string of categories
    featuredImage?: string;
    readTime?: string;
    author: string;
    content: string;
  }[];
  categories: string[];
}

const BrowsePost: React.FC<BrowsePostProps> = ({ blogs, categories }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [animationKey, setAnimationKey] = useState(0);

  const tabs = ["All", ...categories];

  // Filter blogs based on the selected category tab
  const filteredBlogs =
    activeTab === "All"
      ? blogs
      : blogs.filter((post) => post.category.split(", ").includes(activeTab));

  // Update the animation key when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setAnimationKey((prevKey) => prevKey + 1); // Update key to re-trigger animation
  };

  return (
    <section className="relative pb-4 w-full bg-white">
      <div className="container mx-auto text-center my-10 pt-8">
        <h1 className="text-[#000] text-4xl md:text-5xl font-bold">
          Browse Our Blog Posts
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg mt-4 mb-8">
          Discover posts from a variety of categories to expand your knowledge.
        </p>

        <div className="flex flex-col space-y-4 mb-8 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full w-full sm:w-auto ${
                activeTab === tab ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={`fadeIn flex flex-wrap justify-center gap-4 mt-10`} key={animationKey}>
          {filteredBlogs.map((post, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[31%] p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="w-full bg-gray-300 rounded-2xl flex items-center justify-center">
                  <img
                    src={post.featuredImage || "https://placehold.co/1920x1080"}
                    alt={post.title}
                    className="aspect-video rounded-2xl w-full h-auto object-cover"
                  />
                </div>
                <h2 className="text-md text-left my-2">{post.title}</h2>
                <p className="text-gray-500 text-sm text-left font-semibold">
                  {post.author} · {post.category} · {post.readTime}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowsePost;
