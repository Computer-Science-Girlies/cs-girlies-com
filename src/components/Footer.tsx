
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { LINKS } from "@/lib/constants";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`bg-black py-12 border-t border-gray-800 ${className || ''}`}>
      <div className="cs-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="mb-4 md:mb-0">
            <div className="w-12 h-12   rounded-full flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="CS Girlies Logo" 
                className="w-12 h-12"
              />
            </div>
          </Link>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <Link to="/" className="text-sm md:text-base hover:text-csgirlies-pink">
              HOME
            </Link>
            <Link to="/donate" className="text-sm md:text-base hover:text-csgirlies-pink">
              DONATE
            </Link>
            <Link to="/resources" className="text-sm md:text-base hover:text-csgirlies-pink">
              RESOURCES
            </Link>
            <Link to="/our-story" className="text-sm md:text-base hover:text-csgirlies-pink">
              OUR STORY
            </Link>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <a href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-csgirlies-pink">
              <Instagram size={20} />
            </a>
            <a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-csgirlies-pink">
              <Linkedin size={20} />
            </a>
            <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-csgirlies-pink">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 CS Girlies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
