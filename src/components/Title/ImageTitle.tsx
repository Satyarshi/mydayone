import React from "react";

interface ImageTitleProps {
	title: string;
	description: string;
	image: string;
	oreintation?: string;
}


const ImageTitle = ({title,description,image,oreintation}:ImageTitleProps ) => {
	return (
		<>
			<div className={`-mt-10 flex flex-col ${oreintation=='left'?"items-start justify-start":oreintation=='right'? 'items-end justify-end':'items-center justify-center' }`}>
				<img src={image} alt="blogs" className="relative top-12" />
					<div className="w-14 rounded-full z-10 border-2 mb-2 border-purple-800 "></div>
					<div className={`${oreintation=='left'?"text-left":oreintation=='right'? 'text-right':'text-center' }  space-y-5 z-10`}>
						<h2 className={`text-4xl text-wrap md:text-5xl font-bold text-[#111827] `}>
							{title}
						</h2>
						<p className="text-gray-500 text-sm md:text-lg ">
							{description}
						</p>
					</div>

			</div>
		</>
	);
};

export default ImageTitle;
