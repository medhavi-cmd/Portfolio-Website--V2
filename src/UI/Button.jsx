import React from 'react'

const Button = ({text, variant = "primary", icon, onClick}) => {
    const baseStyle =
    "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300";

    const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20",
    outline:  "border border-white/20 text-white hover:bg-white/10",
    };


  return (
    <button
    className={`${baseStyle} ${variants[variant]}`}
    onClick={onClick}>

    {/* icon if available */}
    {icon && 
    <span>{icon}</span>}

    {/* text */}
    <span>{text}</span>
  </button>
)
}
export default Button;
