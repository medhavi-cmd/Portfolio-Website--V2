// import { Badge } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "../UI/Button";
import Badge from "../UI/Badge";
// import { Link } from "react-router-dom";

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
       <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
      
      {/* container */}
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* logo */}
           {/* Logo */}
        <div className="text-xl font-semibold tracking-wide cursor-pointer">
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">Medhavi</span>
          <span className="text-cyan-400">/&gt;</span>
        </div>

        <Badge text="Hello, I'm Medhavi" className="text-sm text-gray-300" />
        <Button text="Resume" variant="outline" onClick={() => window.open("/resume.pdf", "_blank")} />
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
                      active === link ? "text-white" : "hover:text-white"
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
