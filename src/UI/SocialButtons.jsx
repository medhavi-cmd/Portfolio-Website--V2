import React from 'react'

const SocialButtons = ({ icon, link='/' }) => {
  return (
    <div>
      <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
    >
      <span className="text-white/70 group-hover:text-cyan-400 transition-all duration-300">
        {icon}
      </span>
    </a>
    </div>
  )
}

export default SocialButtons;

