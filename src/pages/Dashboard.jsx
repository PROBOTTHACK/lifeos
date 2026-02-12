import React from "react";
import { Navbar } from "../components/Navbar";
import CoolGridBackground from "../components/ui/CoolGridBackground";
import LiveClock from "../components/ui/LiveClock";
import MainFocusCard from "../features/focus/components/MainFocusCard";

function Dashboard() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      <CoolGridBackground size={80} opacity={0.09} />
      <Navbar />

      <main className="flex flex-col items-center pt-32 gap-10">
        <LiveClock />
        <MainFocusCard />
      </main>
    </div>

  );
}

export default Dashboard;
