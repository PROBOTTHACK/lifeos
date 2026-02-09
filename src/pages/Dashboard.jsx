import React from 'react'
import { Navbar } from '../components/Navbar'

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold font-mono">
          Dashboard
        </h1>
      </main>
    </div>
  )
}

export default Dashboard