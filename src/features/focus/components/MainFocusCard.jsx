import React from 'react'
import {useActiveTask} from '../hooks/useActiveTask'


export default function MainFocusCard() {
    const activeTask = useActiveTask();
    if (!activeTask) {
    return (
      <div className="mt-10 text-neutral-500 text-center">
        No active focus selected.
      </div>
    );
  }
  const {
    title,
    description,
    pomodoroConfig,
    pomodoroRuntime,
  } = activeTask;

  const progress =
    pomodoroRuntime.currentSession /
    pomodoroConfig.totalSessions;

  return (
    
    <div className="w-full max-w-3xl rounded-2xl border border-white/20 bg-neutral-900/60 backdrop-blur-sm p-8 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Current Focus
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            {title}
          </h2>
          <p className="mt-1 text-sm text-neutral-400">
            {description}
          </p>
        </div>

        {/* Expand button (no logic yet) */}
        <button className="text-xs text-neutral-400 hover:text-white transition">
          Expand
        </button>
      </div>

      {/* Pomodoro Info */}
      <div className="mt-6 grid grid-cols-3 gap-12 text-sm text-neutral-300">
        <div>
          <p className="text-neutral-500">Work</p>
          <p className="font-medium mt-1">
            {pomodoroConfig.workMinutes} min
          </p>
        </div>
        <div>
          <p className="text-neutral-500">Break</p>
          <p className="font-medium mt-1">
            {pomodoroConfig.breakMinutes} min
          </p>
        </div>
        <div>
          <p className="text-neutral-500">Sessions</p>
          <p className="font-medium mt-1">
            {pomodoroRuntime.currentSession} /{" "}
            {pomodoroConfig.totalSessions}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-white transition-all rounded-3xl"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs text-neutral-500">
          Mode: {pomodoroRuntime.mode.toUpperCase()}
        </p>

        <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition">
          {pomodoroRuntime.isRunning ? "Resume Focus" : "Start Focus"}
        </button>
      </div>
    </div>
  );
}

