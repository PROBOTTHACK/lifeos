import React from 'react'
import { useState } from 'react'
import { useTasks } from '../../../context/TaskContext'
import DigitalTimeInput from '../../../components/ui/DigitalTimeInput';

export default function CreateTaskCard() {
    const { dispatch } = useTasks();
    const [title, setTitle] = useState("");
    const [workSeconds, setWorkSeconds] = useState(3600);
    const [breakMinutes, setBreakMinutes] = useState(15);
    const [totalSessions, setTotalSessions] = useState(2);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim()) return;

        const newTask = {
            id: Date.now().toString(),
            title,
            description: "",
            status: "todo",

            pomodoroConfig:{
                workMinutes: workSeconds / 60,
                breakMinutes: Number(breakMinutes),
                totalSessions: Number(totalSessions),
            },

            pomodoroRuntime: {
                currentSession: 1,
                secondsRemaining: workSeconds,
                isRunning: false,
                mode: "work",
                
            },
            subtodos: [],
            resources: [],
            deepMinutesLogged: 0,

        }
        dispatch({
            type: "ADD_TASK",
            payload: newTask,
        })

        // Reset form
        setTitle("");
        setWorkSeconds(3600);
        setBreakMinutes(15);
        setTotalSessions(2);
    }


  return (
     <form
    onSubmit={handleSubmit}
    className="bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
    <h2 className="text-lg font-semibold">Create Task</h2>

    {/* Title */}
    <input
      type="text"
      placeholder="Task title..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30"
    />

  {/* Work Timer */}
  <div className="pt-4">
      <p className="text-xs text-neutral-500 mb-2">Work Duration</p>

      <div className="flex justify-center py-4 border border-white/10 rounded-xl bg-black/30">
        <DigitalTimeInput
          value={workSeconds}
          onChange={setWorkSeconds}
        />
      </div>
    </div>

    {/* Break + Sessions */}
    <div className="grid grid-cols-2 gap-4 pt-2">
      <div>
        <p className="text-xs text-neutral-500 mb-1">Break (minutes)</p>
        <input
          type="number"
          value={breakMinutes}
          onChange={(e) => setBreakMinutes(e.target.value)}
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <p className="text-xs text-neutral-500 mb-1">Sessions</p>
        <input
          type="number"
          value={totalSessions}
          onChange={(e) => setTotalSessions(e.target.value)}
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2"
        />
      </div>
    </div>

    {/* Add Button */}
    <button
      type="submit"
      className="w-full mt-2 bg-white text-black font-medium py-3 rounded-xl hover:bg-neutral-200 transition">
      Add Task
    </button>
  </form>
  )
}
