"use client";
import { TypewriterEffectSmooth } from "../ui/TypewriterEffect";

export function TypewriterEffectSmoothComp() {
  const words = [
    {
      text: "Optimize",
    },
    {
      text: "your",
    },
    {
      text: "Life",
    },
    {
      text: "with",
    },
    {
      text: "Life OS.",
      className: "text-indigo-600 dark:text-indigo-500",
    },
  ];
  return (
    <div className="flex flex-col items-center text-center">
      
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-300 font-normal text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-center max-w-xl ">
        A system to bring clarity, focus, and consistency to your life.
      </p>
    </div>
  );
}
