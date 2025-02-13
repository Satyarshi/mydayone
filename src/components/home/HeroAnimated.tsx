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
      <Scroller />
      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-white" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

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
        <img
          src="/mydayone.png"
          alt="Overlay Image"
          className="absolute w-48 md:w-96 "
        />
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
      className="fixed left-1/2 top-[calc(50vh+200px)] -translate-x-1/2 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="relative w-12 h-24 border-4 border-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-2 left-[40%] transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full"
          style={{ y: translateY }}
        />
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
