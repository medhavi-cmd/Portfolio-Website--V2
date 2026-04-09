import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navLinks = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <>
       <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 m-0">
      
      {/* container */}
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
      
           {/* Logo */}
        <div className="text-xl font-semibold tracking-wide cursor-pointer">
          <span className="text-cyan-300">&lt;</span>
          <span className="text-white">Medhavi</span>
          <span className="text-cyan-300">/&gt;</span>
        </div>

        {/* navigation links */}
          <div>
            <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    onClick={() => {
                      setActive(link);
                    }}
                    className={`cursor-pointer transition-all duration-300 ${
                      active === link ? "text-white" : "hover:text-cyan-300"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
