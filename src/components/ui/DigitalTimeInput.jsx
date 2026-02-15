import { useEffect, useState } from "react";

export default function DigitalTimeInput({ value = 0, onChange }) {
  const [h, setH] = useState("00");
  const [m, setM] = useState("00");
  const [s, setS] = useState("00");

  // sync when value changes externally
  useEffect(() => {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    setH(format(hours));
    setM(format(minutes));
    setS(format(seconds));
  }, [value]);

  const update = (hh, mm, ss) => {
    const total =
      parseInt(hh) * 3600 +
      parseInt(mm) * 60 +
      parseInt(ss);

    onChange(total);
  };

  return (
    <div className="flex items-center justify-center font-mono text-5xl font-bold tracking-widest">

      <TimeBlock value={h} setValue={(v) => {
        setH(v);
        update(v, m, s);
      }} max={99} />

      <Colon />

      <TimeBlock value={m} setValue={(v) => {
        setM(v);
        update(h, v, s);
      }} />

      <Colon />

      <TimeBlock value={s} setValue={(v) => {
        setS(v);
        update(h, m, v);
      }} />

    </div>
  );
}

function TimeBlock({ value, setValue, max = 59 }) {

  const handleChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");

    // keep only last 2 digits
    if (input.length > 2) {
      input = input.slice(-2);
    }

    let num = parseInt(input || "0");

    // wrap numbers above max
    if (num > max) {
      num = num % 10;   // 65 -> 5, 78 -> 8
    }

    setValue(format(num));
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      value={value}
      placeholder="00"
      onChange={handleChange}
      className="w-20 bg-transparent text-center border-b border-white/20 focus:border-white outline-none"
    />
  );
}

function Colon() {
  return <span className="mx-2 opacity-60">:</span>;
}

function format(n) {
  return String(n).padStart(2, "0");
}
