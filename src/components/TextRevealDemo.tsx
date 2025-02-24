import TextReveal from "@/components/ui/text-reveal";
interface TextRevealDemoProps {
  text: string;
}

export const TextRevealDemo: React.FC<TextRevealDemoProps> = ({text}) => {
  return (
    <div className="z-10 flex min-h-5 justify-center rounded-lg dark:bg-black">
      <TextReveal text={text} />
    </div>
  );
}
