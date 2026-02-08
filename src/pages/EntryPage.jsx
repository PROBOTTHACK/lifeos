import React from 'react'
import GetStartButton from '../components/common/GetStartButton'
import { TypewriterEffectSmoothComp } from '../components/common/TypewriterEffectSmoothComp'
import { Spotlight } from '../components/ui/Spotlight'
import { BackgroundBeams } from '../components/ui/BackgroundBeams'
import { Link } from 'react-router-dom'

function EntryPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0">
        <Spotlight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 rotate-80" />
        <BackgroundBeams />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-6">
        
        {/* Text */}
        <div className="max-w-4xl mt-20">
          <TypewriterEffectSmoothComp />
          <p className="mt-1 text-gray-400">
            <span className="sm:hidden">
              Clarity, focus, and consistency for your life.
            </span>
            <span className="hidden sm:inline">
              A system to bring clarity, focus, and consistency to your life.
            </span>
</p>
        </div>

        {/* Button (slightly below, not drifting) */}
        <div className="mt-8">
          <GetStartButton to="/dashboard" />
        </div>

      </div>

    </div>
  );
}

export default EntryPage 