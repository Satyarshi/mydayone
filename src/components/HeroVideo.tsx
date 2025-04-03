import HeroVideoDialog from "./ui/hero-video-dialog";

export function HeroVideo() {
    return (
      <div className="relative">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="/sparcle.mp4"
          thumbnailSrc="/sparcle product mockup.svg"
          thumbnailAlt="Hero Video"
        />
      </div>
    );
  }