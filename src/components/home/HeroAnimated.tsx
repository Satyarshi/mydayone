"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <Hero />
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-white" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [0, -100]);
  const clip2 = useTransform(scrollY, [0, 1500], [100, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["0%", "170%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <>
      <motion.div
        className="sticky top-0 h-screen w-full flex justify-center items-center overflow-visible "
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage: "url(/whiteCircle.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex md:flex-row flex-col  justify-center items-center absolute w-full md:-ml-10 gap-x-10">
          <p className="text-white text-nowrap font-thin text-xl  ">Welcome to</p>
          <img
            src="/mydayone.png"
            alt="Overlay Image"
            className="w-96 "
          />
          <p className="text-white text-nowrap font-thin text-xl">Est. 2023</p>
        </div>
        <div className="flex flex-col justify-center items-center absolute w-full md:-ml-10 gap-x-10 text-white text-xl text-center top-[70vh] md:top-[90vh] gap-5  ">
        Transform Learning into Measurable Success with <br /> myDayOne.
        <Scroller/>
        </div>

      </motion.div>
    </>
  );
};
const Scroller = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [200, 300], [1, 0]);

  const translateY = useTransform(scrollY, [0, 300], [0, 60]); // Moves down by 60px

  return (
    <motion.div
      className="md:absolute md:right-1 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="flex items-center gap-4">

      <div className="relative w-8 h-14 border-2 border-gray-500 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-2 mt-2  w-3 h-3 bg-gray-500 rounded-full"
          style={{ y: translateY }}
          />
      </div>
      <p className="text-white text-sm font-thin">
      Scroll to Explore
      </p>
          </div>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/1733896498200.jpg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3 rounded-3xl"
      />
      <ParallaxImg
        src="/1734405392023.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3 rounded-3xl"
      />
      <ParallaxImg
        src="/1734586718479.jpg"
        alt="Orbiting satellite"
        start={-200}
        end={-150}
        className="ml-auto w-1/3 rounded-3xl"
      />
      <ParallaxImg
        src="/1734076313225.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12 rounded-3xl"
      />
    </div>
  );
};

interface ParallaxImgProps {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
