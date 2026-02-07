import React from 'react'
import GetStartButton from '../components/common/GetStartButton'
import { TypewriterEffectSmoothComp } from '../components/common/TypewriterEffectSmoothComp'
import { Spotlight } from '../components/ui/Spotlight'
import { BackgroundBeams } from '../components/ui/BackgroundBeams'
import { Link } from 'react-router-dom'

function EntryPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-8'>
      <div className='mt-40 flex flex-col items-center justify-center'>
        <TypewriterEffectSmoothComp className = 'text-center max-w-4xl mx-auto'/>
        <GetStartButton
        Link to = "/dashboard" 
        className = 'mt-1'/>
      </div>
        
        <Spotlight className= "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 rotate-80"/>
        <BackgroundBeams />
    </div>
  )
}

export default EntryPage 