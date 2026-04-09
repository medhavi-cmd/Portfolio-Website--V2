import React from 'react'

const Badge = ({ text, showDot = true }) => {
  return (
     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">

    {/* dot */}
      { showDot &&
      <span className='w-2 h-2 rounded-full bg-cyan-500'></span>
      }
    {/* text */}
      <span className='text-cyan-300 text-sm font-medium'>{text}</span>
    </div>
  )
}

export default Badge
