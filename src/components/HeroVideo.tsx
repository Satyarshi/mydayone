import HeroVideoDialog from "./ui/hero-video-dialog";

export function HeroVideo() {
    return (
      <div className="relative">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/uRzHHHz4Ypg?si=hDlDh9rAYkapz4P0"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    );
  }