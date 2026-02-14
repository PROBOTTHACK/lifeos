import React from 'react'
import CoolGridBackground from '../components/ui/CoolGridBackground'
import { Navbar } from '../components/Navbar'

function Tasks() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
          <CoolGridBackground size={80} opacity={0.09} />
          <Navbar />
    </div>
  )
}

export default Tasks