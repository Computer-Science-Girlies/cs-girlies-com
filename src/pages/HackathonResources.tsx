import React, { useEffect, useState } from 'react';
import Window from '@/components/Window';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { LINKS } from '@/lib/constants';
import hackathonResourcesData from '@/data/hackathon-resources.json';

interface Resource {
  link: string;
  description: string;
}

interface ResourceData {
  featuredResources: Resource[];
  categories: Record<string, Resource[]>;
  totalResources: number;
  lastUpdated: string;
}

const HackathonResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [featuredExpanded, setFeaturedExpanded] = useState<boolean>(false);
  const resources = hackathonResourcesData as ResourceData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const getDisplayLink = (link: string) => {
    if (isValidUrl(link)) {
      return link;
    }
    // For non-URL links, try to make them searchable
    return `https://www.google.com/search?q=${encodeURIComponent(link)}`;
  };

  const getDisplayText = (link: string) => {
    if (isValidUrl(link)) {
      try {
        const url = new URL(link);
        if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
          return '🎬 YouTube Video';
        }
        if (url.hostname.includes('github.com')) {
          return '💻 GitHub Repository';
        }
        return `🔗 ${url.hostname}`;
      } catch (_) {
        return link;
      }
    }
    return link;
  };

  const categoryKeys = Object.keys(resources.categories);

  return (
    <div className="bg-black min-h-screen font-roboto-mono text-white p-4 md:p-8 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(white 0.5px, transparent 0)',
          backgroundSize: '15px 15px',
        }}
      ></div>
      
      <div className="relative min-h-screen pt-4">
        {/* Header Window */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-dark border-2 border-csgirlies-pink rounded-lg shadow-lg">
            <div className="bg-black text-gray-400 px-4 py-2 flex items-center justify-between rounded-t-md">
              <div className="flex items-center space-x-4 overflow-x-auto">
                <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
                  <img src="/logo.png" alt="CS Girlies Logo" className="h-5 w-5" />
                  <span className="font-bold text-white">CS Girlies</span>
                </Link>
                <Link to="/hackathon" className="hover:text-white transition-colors">Back to Hackathon</Link>
                <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="hidden md:inline hover:text-white transition-colors">Join Discord</a>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
              </div>
            </div>
            <div className="text-center py-8 px-4">
              <h1 className="font-righteous text-4xl md:text-7xl font-bold mb-4">HACKATHON RESOURCES</h1>
              <p className="text-base md:text-xl mb-4">Your beginner-friendly toolkit for building something weird 🛠️</p>
              <p className="text-sm md:text-base text-csgirlies-pink-light">{resources.totalResources} resources • Last updated {resources.lastUpdated}</p>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-8">
          <div 
            onClick={() => setFeaturedExpanded(!featuredExpanded)}
            className="cursor-pointer"
          >
            <Window title="⭐ featured_hackathon_resources.exe">
              <div className="py-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-righteous text-lg md:text-xl text-csgirlies-pink">Featured Hackathon Resources ⭐</h3>
                  <div className="text-xs text-csgirlies-pink-light">
                    {featuredExpanded ? '▼ Click to collapse' : '▶ Click to expand'}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-2">Handpicked guides specifically for hackathon beginners</p>
              </div>
            </Window>
          </div>
        </div>

        {/* Featured Resources Expanded */}
        {featuredExpanded && (
          <div className="mb-8 relative z-50">
            <Window title="featured_resources_expanded.txt">
              <div className="py-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-righteous text-2xl text-csgirlies-pink">Featured Hackathon Resources</h2>
                  <button 
                    onClick={() => setFeaturedExpanded(false)}
                    className="text-gray-400 hover:text-white text-xl font-bold"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-4">
                  {resources.featuredResources.map((resource, index) => (
                    <div key={index} className="border-l-2 border-csgirlies-pink pl-4 py-2 hover:border-csgirlies-pink-light transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-black text-sm mb-1">{resource.description}</h4>
                          <p className="text-xs text-gray-400 font-mono">{getDisplayText(resource.link)}</p>
                        </div>
                        <a 
                          href={getDisplayLink(resource.link)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-csgirlies-pink hover:bg-csgirlies-pink-dark text-white px-4 py-2 rounded text-sm font-bold transition-colors self-start md:self-center"
                        >
                          Open Resource →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Window>
          </div>
        )}

        {/* Terminal Window with Tips */}
        <div className="mb-8">
          <Window title="💡 beginner_tips.sh">
            <div className="text-sm py-4">
              <p className="text-green-400 mb-2">$ cat beginner_hackathon_tips.txt</p>
              <div className="pl-4 space-y-2 text-gray-300">
                <p>• <span className="text-csgirlies-pink">Start small:</span> Pick 1-2 technologies max for your first hackathon</p>
                <p>• <span className="text-csgirlies-pink">Use templates:</span> Don't build everything from scratch</p>
                <p>• <span className="text-csgirlies-pink">Ask for help:</span> Our Discord community is here for you</p>
                <p>• <span className="text-csgirlies-pink">Focus on learning:</span> Winning is nice, but growth is the real prize</p>
                <p>• <span className="text-csgirlies-pink">Have fun:</span> Build something that makes YOU excited</p>
              </div>
              <p className="text-green-400 mt-4">$ // You've got this! 💪</p>
            </div>
          </Window>
        </div>

        {/* Selected Category Resources - Positioned at top */}
        {selectedCategory && (
          <div className="mb-8 relative z-50">
            <Window title={`${selectedCategory}_resources.txt`}>
              <div className="py-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-righteous text-2xl text-csgirlies-pink">{selectedCategory} Resources</h2>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="text-gray-400 hover:text-white text-xl font-bold"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {resources.categories[selectedCategory].map((resource, index) => (
                    <div key={index} className="border-l-2 border-csgirlies-pink-dark pl-4 py-2 hover:border-csgirlies-pink transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-black text-sm mb-1">{resource.description}</h4>
                          <p className="text-xs text-gray-400 font-mono">{getDisplayText(resource.link)}</p>
                        </div>
                        <a 
                          href={getDisplayLink(resource.link)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white px-4 py-2 rounded text-sm font-bold transition-colors self-start md:self-center"
                        >
                          Open Resource →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Window>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categoryKeys.map((category, index) => (
            <div 
              key={category} 
              className={`relative z-${10 + index}`}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            >
              <Window title={`${category.toLowerCase().replace(/\//g, '_')}.exe`}>
                <div className="py-4 cursor-pointer hover:bg-gray-900 transition-colors rounded">
                  <h3 className="font-righteous text-lg md:text-xl mb-2 text-csgirlies-pink">{category}</h3>
                  <p className="text-sm text-gray-300 mb-3">{resources.categories[category].length} resources</p>
                  <div className="text-xs text-csgirlies-pink-light">
                    {selectedCategory === category ? '▼ Click to collapse' : '▶ Click to expand'}
                  </div>
                </div>
              </Window>
            </div>
          ))}
        </div>

        {/* Quick Links Window */}
        <div className="mb-8">
          <Window title="quick_links.html">
            <div className="py-4">
              <h3 className="font-righteous text-xl mb-4 text-csgirlies-pink">Essential Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="https://csgirlies.devpost.com" target="_blank" rel="noopener noreferrer" className="block p-3 border border-csgirlies-pink-dark hover:border-csgirlies-pink rounded transition-colors">
                  <span className="font-bold text-csgirlies-pink">📝 Register for Hackathon</span>
                  <p className="text-xs text-gray-400 mt-1">Official Devpost page</p>
                </a>
                <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="block p-3 border border-csgirlies-pink-dark hover:border-csgirlies-pink rounded transition-colors">
                  <span className="font-bold text-csgirlies-pink">💬 Join Our Discord</span>
                  <p className="text-xs text-gray-400 mt-1">Get real-time help & connect</p>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block p-3 border border-csgirlies-pink-dark hover:border-csgirlies-pink rounded transition-colors">
                  <span className="font-bold text-csgirlies-pink">💻 GitHub</span>
                  <p className="text-xs text-gray-400 mt-1">Host your code</p>
                </a>
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="block p-3 border border-csgirlies-pink-dark hover:border-csgirlies-pink rounded transition-colors">
                  <span className="font-bold text-csgirlies-pink">🔍 Stack Overflow</span>
                  <p className="text-xs text-gray-400 mt-1">When you're stuck</p>
                </a>
              </div>
            </div>
          </Window>
        </div>
      </div>
      
      <Footer className="relative z-50" />
    </div>
  );
};

export default HackathonResourcesPage;