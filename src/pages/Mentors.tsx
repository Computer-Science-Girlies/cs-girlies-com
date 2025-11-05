import React from 'react';
import Window from '@/components/Window';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { LINKS } from '@/lib/constants';

type Mentor = {
  name: string;
  role: string;
  bio: string;
  calendly: string;
  tags: string[];
  avatar?: string;
};

const mentors: Mentor[] = [
  {
    name: 'Satyam Singh',
    role: 'SWE @ Bree (YC) • 40x Hackathon Wins',
    bio: '40x hackathon winner and SWE at Bree (YC) who helps you craft winning strategies, prototype fast, and deliver standout demos.',
    calendly: 'https://calendly.com/klausss/30min',
    tags: ['Hackathon Strategy', 'Rapid Prototyping', 'Startups & YC'],
  },
  {
    name: 'Sai Baba Kotha',
    role: 'AI/ML Engineer @ Optum',
    bio: 'AI/ML engineer guiding you on practical ML, AWS workflows, and shipping clean web/app builds with clear technical writing.',
    calendly: 'https://calendly.com/kothasaibaba460/cs-girlies-hackathon',
    tags: ['AI/ML Basics', 'AWS & Cloud', 'Web/App Dev'],
  },
  {
    name: 'Samhita Kolluri',
    role: 'Generative AI • Agentic LLMs • Data Engineering',
    bio: 'GenAI practitioner specializing in agentic LLMs and RAG with strong data engineering—get your AI stack production‑ready.',
    calendly: 'https://calendly.com/samhita-kolluri/30min',
    tags: ['Agentic AI & LLMs', 'RAG & Retrieval', 'Data Engineering'],
  },
  {
    name: 'Demi Oshin',
    role: 'PhD Researcher • Engineer • Musician',
    bio: 'Researcher‑engineer who helps you turn ideas into compelling products and pitches through storytelling and user‑centered design.',
    calendly: 'https://calendly.com/demiaoshin/cs-girlies-hackathon-mentoring',
    tags: ['Storytelling & Pitch', 'Product Design/UX', 'Research Methods'],
  },
  {
    name: 'Mirza Abdullah Tariq',
    role: 'Hackathon Winner • Entrepreneurial Coach',
    bio: 'Startup‑minded engineer who shapes ideas into clear value props and demos that resonate with judges.',
    calendly: 'https://calendly.com/mirzaabdullaht1/',
    tags: ['Startup & PMF', 'Hackathon Judging', 'AI Product Strategy'],
  },
];

const MentorsPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-roboto-mono text-white p-4 md:p-8 relative flex flex-col">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(white 0.5px, transparent 0)',
          backgroundSize: '15px 15px',
        }}
      ></div>

      <div className="relative w-full max-w-7xl mx-auto flex-1">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="CS Girlies Logo" className="h-6 w-6" />
            <span className="font-bold text-white">CS Girlies</span>
          </Link>
        </div>

        <Window
          title="Mentors.md"
          titleActions={
            <button
              type="button"
              onClick={() => window.history.back()}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Go Back
            </button>
          }
        >
          <div className="py-8">
            <h1 className="font-righteous text-4xl md:text-6xl text-center mb-3">Find a Mentor</h1>
            <p className="text-center text-gray-300 mb-8 text-sm md:text-base">Book a 1:1 session with our mentors.</p>

            {mentors.length === 0 ? (
              <div className="text-center text-gray-300 py-16">
                <p className="mb-2">Mentor roster coming soon.</p>
                <p>
                  Join our{' '}
                  <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="underline text-csgirlies-pink">
                    Discord
                  </a>{' '}
                  to get help in the meantime!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {mentors.map((m) => (
                  <div key={m.name} className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-5 flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-righteous text-xl mb-1">{m.name}</h3>
                      <p className="text-csgirlies-pink text-sm font-bold mb-2">{m.role}</p>
                      <p className="text-sm text-gray-200 mb-4">{m.bio}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {m.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-black text-white border border-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-900 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={m.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white font-bold text-sm transition-all duration-300 transform hover:scale-105"
                    >
                      Schedule on Calendly
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Window>
      </div>

      <div className="-mx-4 md:-mx-8 pt-8 md:pt-10 lg:pt-12 mt-auto">
        <Footer className="relative z-50 w-full" />
      </div>
    </div>
  );
};

export default MentorsPage;
