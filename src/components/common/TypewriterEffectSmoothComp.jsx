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
    </div>
  );
}
