import React from "react";
import Link from "next/link";
import ImageTitle from "../Title/ImageTitle";

interface HeroSectionProps {
	latestBlog: {
		title: string;
		description: string;
		slug: string;
		category: string; // comma separated string of categories
		featuredImage?: string;
		readTime?: string;
		author: string;
	};
	popularBlogs: {
		title: string;
		slug: string;
		category: string; // comma separated string of categories
		readTime?: string;
		author: string;
	}[];
}

const HeroSection: React.FC <HeroSectionProps>= ({latestBlog,popularBlogs}) => {
	const popularBlogTitles = [
		"The Future of Remote Work and Hybrid Teams",
		"Top Leadership Strategies for Building Strong Teams",
		"How Technology is Shaping Employee Engagement",
	];

	const blogIndicators = ["Jaroslav Dlašek", "category", "12 min"];
	const latestBlogTitles = ["The Future of Remote Work and Hybrid Teams"];
	const latestBlogTags = ["Jaroslav Dlašek", "12 min"];

	return (
		<section className=" flex flex-col items-center">
			{/* Background Heading */}
			<ImageTitle
				title="Primary Areas We Excel in to Serve You"
				description="Explore the latest trends, tips and insights that drive business success."
				image="/blogs.svg"
			/>

			<div className="text-center pt-8 pb-6">
				{/* Headline Section */}

				{/* Popular and Latest Blog Section */}
				<div className="flex flex-col md:flex-row justify-center w-full mt-8 gap-8">
					{/* Popular Blog Section */}
					<div className="w-full md:w-2/5 p-4">
						<h2 className="text-xl text-left font-semibold mb-3">Popular</h2>
						{popularBlogs.map((blog, index) => (
							<Link href={`/blog/${blog.slug}`} key={index}>
							<div
								key={index}
								className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl p-4 mb-6"
							>
								<h4 className="text-md  text-left text-black mb-2">{blog.title}</h4>
								<div className="flex space-x-2 text-xs text-gray-400">
									<div className="flex justify-center items-center gap-1">
										<div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
										<span className="">{blog.author}</span>
									</div>
									<span className="font-semibold">{blog.category}</span>
									<span>{blog.readTime}</span>
								</div>
							</div>
							</Link>
						))}
					</div>

					{/* Latest Blog Section with Bigger Size */}
					<div className="w-full md:w-3/5 p-4">
						<h2 className="text-xl text-left font-semibold mb-3 ">Latest</h2>
						<div className="flex justify-center gap-4 sm:gap-8  flex-wrap text-justify">
							{latestBlog &&
							<Link href={`/blog/${latestBlog.slug}`}>
								<div
									className="w-full p-3 bg-gray-100 rounded-3xl shadow-md"
								>
									<div className="w-full md:w-auto max-w-[660px] bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
										<img
											src={latestBlog.featuredImage || "https://placehold.co/1920x1080"}
											alt="Placeholder"
											className="w-full h-auto aspect-video object-cover rounded-2xl"
										/>
									</div>
									<h2 className="text-md sm:text-lg font-semibold mb-2">
										{latestBlog.title}
									</h2>
									<p className="text-gray-500 text-sm sm:text-md flex justify-start gap-x-3  font-semibold">

										<span className="hover-tag">
											{latestBlog.author}
										</span>
										<span className="hover-tag text-gray-950">
											{latestBlog.category}
										</span>
										<span className="hover-tag">
											{latestBlog.readTime}
										</span>

									</p>
								</div>
							</Link>
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
