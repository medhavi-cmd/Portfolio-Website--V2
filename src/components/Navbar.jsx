import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-center">
      <div className="text-2xl font-bold items-start">My Portfolio
        
      </div>

      <div className="flex items-center justify-between">
         <a href="#" className="hover:text-green transition-all duration-300">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 hover:underline transition-all duration-300">
            About
          </a>
          <a href="#" className="hover:text-green transition-all duration-300">
            Experience
          </a>
          <a href="#" className="hover:text-green transition-all duration-300">
            Projects
          </a>
          <a href="#" className="hover:text-green transition-all duration-300">
            Skills
          </a>
          <a href="#" className="hover:text-aqua transition-all duration-300">
            Contact
          </a>
     
      </div>
    </div>
    </>
  );
};

export default Navbar;
