import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Importamos useLocation
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  // Dynamic tabs
  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive
      ? "font-bold text-csgirlies-pink text-lg hover:text-csgirlies-pink-light transition-colors"
      : "font-medium text-white text-lg hover:text-csgirlies-pink transition-colors";
  };

  return (
    <header className={`bg-black py-4 relative border-b border-white/5 ${className || ''}`}>
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {isMobile ? (
          <>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to="/" onClick={handleNavigation} className="flex justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="CS Girlies Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            
            <div className="w-8" />
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 py-4 z-50 animate-fade-in">
                <nav className="flex flex-col space-y-4 px-6">
                  <Link to="/" onClick={handleNavigation} className={getLinkClass("/")}>
                    HOME
                  </Link>
                  <Link to="/resources" onClick={handleNavigation} className={getLinkClass("/resources")}>
                    RESOURCES
                  </Link>
                  <Link to="/our-story" onClick={handleNavigation} className={getLinkClass("/our-story")}>
                    OUR STORY
                  </Link>
                  <Link to="/donate" onClick={handleNavigation} className={getLinkClass("/donate")}>
                    DONATE
                  </Link>
                  <Link to="/hackathon" onClick={handleNavigation} className={getLinkClass("/hackathon")}>
                    HACKATHON
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          /* PC VIEW BLOCK CENTER */
          <div className="w-full grid grid-cols-3 items-center">
            
            {/* LEFT */}
            <div className="flex items-center space-x-6 lg:space-x-8 justify-start">
              <Link to="/" className={getLinkClass("/")}>
                HOME
              </Link>
              <Link to="/resources" className={getLinkClass("/resources")}>
                RESOURCES
              </Link>
              <Link to="/our-story" className={getLinkClass("/our-story")}>
                OUR STORY
              </Link>
              <Link to="/donate" className={getLinkClass("/donate")}>
                DONATE
              </Link>
            </div>
            
            {/* CENTER */}
            <div className="flex justify-center">
              <Link to="/">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden transition-transform hover:scale-105 shrink-0">
                  <img 
                    src="/logo.png" 
                    alt="CS Girlies Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
            
            {/* RIGHT */}
            <div className="flex items-center justify-end">
              <Link to="/hackathon" className={getLinkClass("/hackathon")}>
                HACKATHON
              </Link>
            </div>

          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;