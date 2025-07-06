
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LINKS } from '@/lib/constants';

const resourcesData = [
  {
    "category": "Career & General",
    "resources": [
      {
        "title": "GitHub Copilot for Students",
        "description": "GitHub Copilot is an AI pair programmer that helps you write code faster. It's free for students with a school email.",
        "url": "https://www.youtube.com/watch?v=4QAYC1M0epA",
        "author": "@michellexcomputer"
      },
      {
        "title": "Developer Roadmaps",
        "description": "Community-driven roadmaps, guides, and other educational content to help guide developers in picking a path and guide their learnings.",
        "url": "https://roadmap.sh/",
        "author": "@laura"
      },
      {
        "title": "Linux Journey",
        "description": "A free, handy guide to learning Linux.",
        "url": "https://linuxjourney.com/",
        "author": "@laura"
      },
      {
        "title": "Coding Interview University",
        "description": "A complete computer science study plan to become a software engineer.",
        "url": "https://github.com/jwasham/coding-interview-university",
        "author": "@laura"
      }
    ]
  },
  {
    "category": "Portfolio & Hosting",
    "resources": [
      {
        "title": "GitHub Pages",
        "description": "Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.",
        "url": "https://pages.github.com/",
        "author": "@laura"
      },
      {
        "title": "Surge.sh",
        "description": "Static web publishing for Front-End Developers. Simple, single-command web publishing.",
        "url": "https://surge.sh/",
        "author": "@laura"
      },
      {
        "title": "Heroku",
        "description": "A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
        "url": "https://www.heroku.com/pricing",
        "author": "@laura"
      },
      {
        "title": "Namecheap",
        "description": "A popular domain name registrar and web hosting company.",
        "url": "https://www.namecheap.com/",
        "author": "@laura"
      },
      {
        "title": "Itch.io",
        "description": "An open marketplace for independent digital creators with a focus on independent video games.",
        "url": "https://itch.io/docs/creators/pricing",
        "author": "@laura"
      }
    ]
  },
  {
    "category": "Python",
    "resources": [
      {
        "title": "Full Python Course for Beginners",
        "description": "A full-length Python course for beginners from freeCodeCamp.",
        "url": "https://youtu.be/_uQrJ0TkZlc",
        "author": "@michellexcomputer"
      },
      {
        "title": "Phonebook Project (OOP)",
        "description": "A tutorial on building a phonebook project using Object-Oriented Programming principles in Python.",
        "url": "https://www.loom.com/share/ad69e941ee00436c870bca159a7c1b97?sid=bf97f14e-2c2b-415d-9070-c08d1de85f80",
        "author": "@riri"
      },
      {
        "title": "Corey Schafer Python Tutorials",
        "description": "A comprehensive series of Python tutorials covering everything from fundamentals to advanced topics.",
        "url": "https://youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7&si=GMhXPOIzP2w9ImcH",
        "author": "Blue"
      },
      {
        "title": "Official Python 3 Tutorial",
        "description": "The official documentation and tutorial for Python 3.",
        "url": "https://docs.python.org/3/tutorial/index.html",
        "author": "@wry"
      },
      {
        "title": "Sun Valley ttk Theme",
        "description": "A modern theme for Tkinter to make your GUI applications look better.",
        "url": "https://github.com/rdbende/Sun-Valley-ttk-theme",
        "author": "@wry"
      },
      {
        "title": "Python Simplified",
        "description": "A YouTube channel with simple tutorials on various Python topics, including GUI, ML, and automation.",
        "url": "https://youtube.com/@PythonSimplified?si=7G6pnvn7ayqIElv6",
        "author": "bea"
      },
      {
        "title": "Real Python: Sequences",
        "description": "A deep dive into Python sequences, one of the main categories of data types.",
        "url": "https://realpython.com/python-sequences/",
        "author": "@laura"
      },
      {
        "title": "Python for Everybody",
        "description": "A free book and course that teaches Python from the ground up.",
        "url": "https://www.py4e.com/book",
        "author": "EMarieHasADHD"
      }
    ]
  },
  {
    "category": "Java & DSA",
    "resources": [
      {
        "title": "Core Java by Durgasir",
        "description": "A comprehensive playlist covering the fundamentals of Core Java.",
        "url": "https://www.youtube.com/watch?v=eTXd89t8ngI&list=PLd3UqWTnYXOmx_J1774ukG_rvrpyWczm0",
        "author": "John"
      },
      {
        "title": "Data Structures & Algorithms by Kunal Kushwaha",
        "description": "A complete course on Data Structures and Algorithms in Java.",
        "url": "https://www.youtube.com/watch?v=6iCHf7OZn6c&list=PL6Zs6LgrJj3tDXv8a_elC6eT_4R5gfX4d",
        "author": "John"
      },
      {
        "title": "Google Tech Dev Guide - DS&A",
        "description": "Resources hand-picked by Google engineers to brush up on data structures & algorithms.",
        "url": "https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/?no-filter=true#sequence-3",
        "author": "Cally"
      },
      {
        "title": "MOOC.fi Java Programming",
        "description": "A free, open online course on the basics of programming with Java from the University of Helsinki.",
        "url": "https://java-programming.mooc.fi/part-1",
        "author": "Cally"
      },
      {
        "title": "Algorithm Visualizer",
        "description": "An interactive online platform that visualizes algorithms from code.",
        "url": "https://algorithm-visualizer.org/",
        "author": "Cally"
      },
      {
        "title": "Java Tutorial for Beginners",
        "description": "A comprehensive Java tutorial video that covers all the basics.",
        "url": "https://youtu.be/A74TOX803D0?si=WY0LFgjYOLYoQHwt",
        "author": "@Annabelle"
      }
    ]
  },
  {
    "category": "Websites & Repos",
    "resources": [
      {
        "title": "30 Seconds of Code",
        "description": "A curated collection of short JavaScript code snippets for all your development needs.",
        "url": "https://www.30secondsofcode.org/js/p/1/",
        "author": "@laura"
      },
      {
        "title": "Free Programming Books",
        "description": "A massive collection of freely available programming books.",
        "url": "https://github.com/EbookFoundation/free-programming-books",
        "author": "Cookie"
      },
      {
        "title": "Build Your Own X",
        "description": "Step-by-step guides for re-creating your favorite technologies from scratch.",
        "url": "https://github.com/codecrafters-io/build-your-own-x",
        "author": "@laura"
      },
      {
        "title": "Oh My Git!",
        "description": "An open-source game that helps you learn Git.",
        "url": "https://ohmygit.org/",
        "author": "@laura"
      },
      {
        "title": "Codédex",
        "description": "A game-based platform to learn how to code.",
        "url": "https://www.codedex.io/",
        "author": "@laura"
      },
      {
        "title": "Tech Interview Handbook",
        "description": "Curated coding interview preparation materials for software engineers.",
        "url": "https://github.com/yangshun/tech-interview-handbook",
        "author": "@laura"
      },
      {
        "title": "Papers with Code",
        "description": "A free and open resource with Machine Learning papers, code, datasets, and evaluation tables.",
        "url": "https://paperswithcode.com/",
        "author": "@laura"
      },
      {
        "title": "OverAPI",
        "description": "A collection of cheat sheets for various programming languages and technologies.",
        "url": "https://overapi.com/",
        "author": "@laura"
      }
    ]
  }
];

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(resourcesData[0]?.category || '');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000); // Update time every minute
    return () => clearInterval(timer);
  }, []);

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  const activeResources = resourcesData.find(cat => cat.category === activeTab)?.resources || [];

  return (
    <div className="bg-black min-h-screen font-roboto-mono text-white p-4">
      <Navbar />
      <div className="border-2 border-csgirlies-pink mt-8 font-righteous">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-csgirlies-pink p-2 text-csgirlies-pink">
          <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">JOIN OUR DISCORD</a>
          <h1 className="text-2xl">CSG_RESOURCES</h1>
          <span>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Panel (Tabs) */}
          <div className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-csgirlies-pink">
            {resourcesData.map(item => (
              <div
                key={item.category}
                onClick={() => handleTabClick(item.category)}
                className={`p-2 cursor-pointer ${activeTab === item.category ? 'bg-csgirlies-pink text-black' : 'text-csgirlies-pink'}`}>
                {item.category.toUpperCase()}
              </div>
            ))}
          </div>

          {/* Right Panel (Content) */}
          <div className="w-full md:w-2/3 p-4 text-csgirlies-pink">
            <div className="h-96 overflow-y-auto pr-2 custom-scrollbar">
              {activeResources.map((resource, index) => (
                <div key={index} className="mb-4">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white">
                    {resource.title}
                  </a>
                  <p className="text-sm mt-1">{resource.description}</p>
                  <p className="text-xs text-right">{'>'} {resource.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-csgirlies-pink p-2 text-center text-csgirlies-pink">
          <p>Select a category to view resources. Or press CTRL+C to exit.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;

