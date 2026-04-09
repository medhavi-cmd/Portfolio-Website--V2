import { ArrowBigRight, Download } from "lucide-react";
import Badge from "../UI/Badge";
import Button from "../UI/Button";
import Navbar from "./Navbar";
import SocialButtons from "../UI/SocialButtons";
import {  Activity, Mail } from "lucide-react";

const LeftSection = () => {

  // fix the icons and links for social media
  const socialLinks = [
    { name: "GitHub", url: "/", icon: <Activity size={20} /> },
    { name: "LinkedIn", url: "/", icon: <Activity size={20} /> },
    { name: "Email", url: "/", icon: <Mail size={20} /> },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <Badge text="Hello, I'm Medhavi" showDot={true} className="mb-4" />

      <h1 className="font-bold leading-tight text-white text-5xl sm:text-6xl lg:text-7xl">
        {" "}
        Full-Stack Developer
      </h1>
      <h1 className="font-bold leading-tight text-cyan-300 text-5xl ">
        {" "}
        & Software Engineer in Progress
      </h1>

      <p className="text-gray-300 mt-6 max-w-lg text-lg">
       I build full-stack web applications focusing on scalable architecture and high-performance frontend execution.
      </p>
      <p className="text-gray-300 mt-2 max-w-lg text-lg">
        
        Working with React, Node.js and modern web technologies.
      </p>

      <div className="flex items-center gap-4 mt-6 ">
        <Button
          text="Download Resume"
          icon={<Download size={16} />}
          variant="primary"
          onClick={() => window.open("/resume.pdf", "_blank")}
        />

        <Button
          text="View Projects"
          icon={<ArrowBigRight size={16} />}
          variant="outline"
          onClick={() => window.open("/projects", "_blank")}
        />
      </div>

      <div className="flex items-center gap-4 mt-6 ">
        {socialLinks.map((link) =>{
          return <SocialButtons key={link.name} icon={link.icon} link={link.url} />;
        })}
      </div>
    </div>
  );
};

export default LeftSection;
