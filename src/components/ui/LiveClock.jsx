import { useEffect, useState } from "react";
import CoolGridBackground from "./CoolGridBackground";
import { cn } from "@/lib/utils"; // optional, remove if you don’t use cn

export default function LiveClock({ className = "" }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  const day = time.toLocaleDateString([], { weekday: "long" });
  const date = time.toLocaleDateString([], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section
      className={cn(
        "relative w-full text-white overflow-hidden",
        className
      )}
    >


      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4">
        
        {/* Day + Date */}
        <div className="text-sm tracking-widest uppercase text-neutral-400 font-sans">
          {day} · {date}
        </div>

        {/* Time */}
        <div className="flex items-end font-mono leading-none ">
          <TimeBlock value={pad(time.getHours())} />
          <Colon />
          <TimeBlock value={pad(time.getMinutes())} />
          <Colon />
          <TimeBlock value={pad(time.getSeconds())} small />
        </div>

      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function TimeBlock({ value, small }) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        font-bold
        tabular-nums
        ${small ? "text-[6vw]" : "text-[6vw]"}
      `}
    >
      {value}
    </span>
  );
}


function Colon() {
  return (
    <span
      className="
        inline-flex
        items-center
        justify-center
        w-[2ch]
        text-[6vw]
        font-bold
        opacity-70
      "
    >
      :
    </span>
  );
}
