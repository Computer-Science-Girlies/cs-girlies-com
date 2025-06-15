import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ResourceItem {
  title: string;
  description: string;
  link: string;
  category: string;
}

export default function Resources() {
  // Sample resource data - in a real site, this might come from a CMS or API
  const resources: ResourceItem[] = [
    {
      title: "CS50: Introduction to Computer Science",
      description: "Harvard University's introduction to computer science and programming. Free, comprehensive, and beginner-friendly.",
      link: "https://cs50.harvard.edu/x/",
      category: "Learning"
    },
    {
      title: "freeCodeCamp",
      description: "A nonprofit organization that offers free coding classes and projects, certification, and job opportunities.",
      link: "https://www.freecodecamp.org/",
      category: "Learning"
    },
    {
      title: "Women Who Code",
      description: "A global nonprofit dedicated to inspiring women to excel in technology careers.",
      link: "https://www.womenwhocode.com/",
      category: "Community"
    },
    {
      title: "Girls Who Code",
      description: "Organization working to close the gender gap in technology by teaching girls programming.",
      link: "https://girlswhocode.com/",
      category: "Community"
    },
    {
      title: "Codecademy",
      description: "Interactive platform that offers free coding classes in programming languages like Python, Java, JavaScript, and more.",
      link: "https://www.codecademy.com/",
      category: "Learning"
    },
    {
      title: "LeetCode",
      description: "Platform for technical interview preparation with coding challenges and competitions.",
      link: "https://leetcode.com/",
      category: "Interview Prep"
    },
    {
      title: "Hack Club",
      description: "Network of high school coding clubs and makers around the world.",
      link: "https://hackclub.com/",
      category: "Community"
    },
    {
      title: "Women in Tech Scholarships",
      description: "Curated list of scholarships specifically for women pursuing tech education and careers.",
      link: "https://www.computerscience.org/scholarships-and-grants/women-computer-science/",
      category: "Scholarships"
    }
  ];

  // Group resources by category
  const categories = [...new Set(resources.map(item => item.category))];
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Curated learning materials, communities, and opportunities to help you succeed in tech.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-french-rose">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter(resource => resource.category === category)
                  .map((resource, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-6 transition-transform hover:-translate-y-1">
                      <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                      <p className="mb-4 text-gray-300">{resource.description}</p>
                      <a 
                        href={resource.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-french-rose hover:underline flex items-center"
                      >
                        Visit Resource
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 px-4 bg-french-rose">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Community for More Resources</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get access to exclusive resources, study groups, and mentorship opportunities by joining our active Discord community!
          </p>
          <a 
            href="https://discord.com/servers/computer-science-girlies-1116490225615634503" 
            className="bg-white text-french-rose font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            JOIN THE DISCORD
          </a>
        </div>
      </section>

      {/* Submit Resource */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-french-rose">Have a Resource to Share?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            We're always looking to expand our resource collection! If you know of a great resource that would benefit our community, 
            let us know on our Discord server.
          </p>
        </div>
      </section>
    </div>
  );
}
