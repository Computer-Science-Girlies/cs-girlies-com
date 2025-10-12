
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className={`bg-black py-4 relative ${className || ''}`}>
      <div className="cs-container flex items-center justify-between">
        {isMobile ? (
          <>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to="/" className="flex justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="CS Girlies Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            
            <div className="w-8" /> {/* Spacer for layout balance */}
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 py-4 z-50 animate-fade-in">
                <nav className="cs-container flex flex-col space-y-4">
                  <Link to="/" className="font-bold text-csgirlies-pink text-lg hover:text-csgirlies-pink-light transition-colors">
                    HOME
                  </Link>
                  <Link to="/donate" className="font-medium text-white text-lg hover:text-csgirlies-pink transition-colors">
                    DONATE
                  </Link>
                  <Link to="/resources" className="font-medium text-white text-lg hover:text-csgirlies-pink transition-colors">
                    RESOURCES
                  </Link>
                  <Link to="/hackathon" className="font-medium text-white text-lg hover:text-csgirlies-pink transition-colors">
                    HACKATHON!!
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex items-center space-x-6">
              <Link to="/" className="font-bold text-csgirlies-pink text-lg md:text-xl hover:text-csgirlies-pink-light transition-colors">
                HOME
              </Link>
              <Link to="/donate" className="font-medium text-white text-lg hover:text-csgirlies-pink transition-colors">
                DONATE
              </Link>
            </div>
            
            <Link to="/" className="flex justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="CS Girlies Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link to="/resources" className="font-medium text-white text-lg hover:text-csgirlies-pink transition-colors">
                RESOURCES
              </Link>
              <Link to="/hackathon" className="font-medium text-white text-lg hover:text-csgirlies-pink transition-colors">
                HACKATHON!!
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
