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
  avatar: string;
  profile?: string;
};

const mentors: Mentor[] = [
  {
    name: 'Panje (PJ) Nambao',
    role: 'Product Strategy • UX Design • Agile Practices',
    bio: 'Helps teams refine ideas, define scope, improve user experience, and turn concepts into well-scoped, user-centered products using product strategy, UX design, systems thinking, and agile practices.',
    calendly: 'https://calendly.com/panjenambao/meet-with-pj',
    avatar: '/photos/mentors/PanjeNambao.png',
    profile: 'https://linkedin.com/in/panje-nambao',
    tags: ['Product Strategy', 'UX Design', 'Systems Thinking'],
  },
  {
    name: 'Fedelika Maxmus',
    role: 'AI & Machine Learning Expert',
    bio: 'AI and machine learning expert, problem solver, and data-driven innovator passionate about helping teams build intelligent solutions that create real-world impact.',
    calendly: 'https://calendly.com/maxfede656/new-meeting',
    avatar: '/photos/mentors/FedelikaMaxmus.jpeg',
    profile: 'https://www.linkedin.com/in/fedelika-maxmus/',
    tags: ['AI', 'Machine Learning', 'Data-Driven Solutions'],
  },
  {
    name: 'Blandina Kakore',
    role: 'Data Analytics • AI • Machine Learning',
    bio: 'Specializes in data analytics, artificial intelligence, and machine learning, helping teams turn ideas into impactful, end-to-end data-driven solutions.',
    calendly: 'https://calendly.com/blandina-kakore/new-meeting',
    avatar: '/photos/mentors/BlandinaKakore.png',
    profile: 'https://www.linkedin.com/in/blandina-kakore-b37201317/',
    tags: ['Data Analytics', 'AI', 'Machine Learning'],
  },
  {
    name: 'Rachael Favour Adebanwo',
    role: 'Software Engineer • Women in Tech Advocate • Community Leader',
    bio: 'Passionate about helping students and beginner developers with web development, project ideation, debugging, and turning ideas into impactful projects.',
    calendly: 'https://calendly.com/rachaelcodesss/cs-girlies-hackathon-2026',
    avatar: '/photos/mentors/RachaelAdebanwo.jpg',
    profile: 'https://www.linkedin.com/in/rachaelcodesss/',
    tags: ['Web Development', 'Project Ideation', 'Debugging'],
  },
  {
    name: 'Amanda Ekata',
    role: 'Full-Stack Mobile Application Developer',
    bio: 'Full-stack mobile application developer specializing in building applications with Flutter and Golang.',
    calendly: 'https://calendly.com/amandaekata/30min',
    avatar: '/photos/mentors/AmandaEkata.jpeg',
    profile: 'https://www.linkedin.com/in/amanda-ekata/',
    tags: ['Flutter', 'Golang', 'Mobile Development'],
  },
  {
    name: 'Rue Chaba',
    role: 'Full-Stack Engineer • Production AI Systems',
    bio: 'A full-stack engineer who grew into building production AI systems without a formal ML background. Mentors on multi-agent architecture, GCP infrastructure, and what that growth path actually looks like.',
    calendly: 'https://calendly.com/rgrmatchaba/mentorship-session-cs-girlies-hackathon-rue',
    avatar: '/photos/mentors/RueChaba.jpg',
    profile: 'https://rumbidzaimatchaba.netlify.app/',
    tags: ['Multi-Agent Architecture', 'GCP', 'Production AI'],
  },
  {
    name: 'Nichole Smith',
    role: 'AI Prototyping • Product & Systems Design',
    bio: 'Helps teams turn ambitious AI and software ideas into clear, buildable prototypes, drawing on a background in mathematics, philosophy, teaching, and product and systems design.',
    calendly: 'https://calendly.com/nichiyes/mentor-session',
    avatar: '/photos/mentors/NicholeSmith.png',
    profile: 'https://www.linkedin.com/in/nicholesuomi/',
    tags: ['AI Prototyping', 'Product Design', 'Systems Design'],
  },
  {
    name: 'Onyeka Okafor',
    role: 'Software Engineering • Data Science • IT',
    bio: "Holds a bachelor's degree in computer science and a master's degree in data science, with professional experience spanning IT, software engineering, and data science.",
    calendly: 'https://calendly.com/0nyeka',
    avatar: '/photos/mentors/OnyekaOkafor.jpg',
    profile: 'https://www.linkedin.com/in/onyekachukwu-okafor-56406b196/',
    tags: ['Software Engineering', 'Data Science', 'IT'],
  },
  {
    name: 'Hana Abbasian',
    role: 'Rapid AI Prototyping • User-Centered Product Development',
    bio: 'Specializes in rapid AI prototyping, helping teams transform ideas into functional MVPs through vibe coding, no-code tools, user-centered design, and iterative product development.',
    calendly: 'https://calendly.com/hanaabbasian82/30min',
    avatar: '/photos/mentors/HanaAbbasian.jpg',
    profile: 'https://www.linkedin.com/in/hana-abbasian-139094265/',
    tags: ['Rapid AI Prototyping', 'No-Code Tools', 'MVP Development'],
  },
  {
    name: 'Anjalee Ramwani',
    role: 'Coding Instructor @ Codingal • Stanford Code in Place Section Leader',
    bio: 'Computer science graduate focused on building GenAI applications, contributing to open source, and competing in international hackathons. Helps learners strengthen their Python and DSA skills and turn ambitious ideas into working projects.',
    calendly: 'https://calendly.com/d/dv2v-8my-dyn/cs-girlies-hackathon',
    avatar: '/photos/mentors/AnjaleeRamwani.jpeg',
    profile: 'https://www.linkedin.com/in/anjalee-ramwani/',
    tags: ['Generative AI', 'Python & DSA', 'Project Development'],
  }
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
                  <div key={m.name} className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent overflow-hidden flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden border-b border-csgirlies-pink/30 bg-gray-900">
                      <img
                        src={m.avatar}
                        alt={`${m.name}, CS Girlies hackathon mentor`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-5 flex flex-1 flex-col">
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
                      <div className="mt-4 flex flex-col sm:flex-row gap-2">
                        {m.profile && (
                          <a
                            href={m.profile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-csgirlies-pink text-csgirlies-pink hover:bg-csgirlies-pink/10 font-bold text-sm transition-colors"
                          >
                            View Profile
                          </a>
                        )}
                        <a
                          href={m.calendly}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center px-4 py-2 rounded-full bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white font-bold text-sm transition-all duration-300 transform hover:scale-105"
                        >
                          Schedule on Calendly
                        </a>
                      </div>
                    </div>
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
