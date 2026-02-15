import React from 'react'
import CoolGridBackground from '../components/ui/CoolGridBackground'
import CreateTaskCard from '../features/tasks/components/CreateTaskCard'
import { Navbar } from '../components/Navbar'
import { useTasks } from '../context/TaskContext'
import TaskCard from '../features/tasks/components/TaskCard'

function Tasks() {
  const { state } = useTasks();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <CoolGridBackground size={80} opacity={0.09} />
      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-12">
        
        <div>
          <h1 className="text-4xl font-semibold tracking-tight mb-2">
            Tasks
          </h1>
          <p className="text-neutral-500 text-sm">
            Plan your deep work sessions.
          </p>
        </div>

        <CreateTaskCard />

        <div className="space-y-6">
          <h2 className="text-xl font-medium text-neutral-300">
            All Tasks
          </h2>

          {state.tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

      </main>
  </div>
    
  )
}

export default Tasks