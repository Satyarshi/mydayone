import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    username: "Situation Judgement Tests",
  },
  {
    username: "Skill assessment",
  },
  {
    username: "Continuous feedback",
  },
  {
    username: "Case studies",
  },
  {
    username: "MCQ based assessment",
  },
  {
    username: "In Basket Exercise",
  },
  {
    username: "Interviews",
  },
  {
    username: "Automated workflow",
  },
  {
    username: "Assessor Led workflow",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ username }: { username: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] border-[#9C27B0] text-[#111827] marquee hover:text-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        {" "}
        {/* Center horizontally */}
        <div className="flex flex-col items-center">
          {" "}
          {/* Center text container */}
          <p className="text-md font-medium text-center dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-start overflow-hidden rounded-lg bg-backgroun mt-5">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
