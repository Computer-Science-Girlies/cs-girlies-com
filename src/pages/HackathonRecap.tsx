import React, { useEffect, useState } from 'react';
import Window from '@/components/Window';
import { Link } from 'react-router-dom';
import CasinoCounter from '@/components/CasinoCounter';
import Footer from '@/components/Footer';
import ScrambleText from '@/components/ScrambleText';
import { LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const HackathonRecap: React.FC = () => {
  const [flagAnimationIndex, setFlagAnimationIndex] = useState(0);

  // Country flags with their country codes for emoji flags
  const countries = [
    { code: "🇳🇵", name: "Nepal" },
    { code: "🇬🇧", name: "United Kingdom" },
    { code: "🇳🇬", name: "Nigeria" },
    { code: "🇩🇪", name: "Germany" },
    { code: "🇵🇰", name: "Pakistan" },
    { code: "🇮🇳", name: "India" },
    { code: "🇺🇸", name: "United States" },
    { code: "🇬🇭", name: "Ghana" },
    { code: "🇩🇿", name: "Algeria" },
    { code: "🇦🇪", name: "UAE" },
    { code: "🇷🇴", name: "Romania" },
    { code: "🇶🇦", name: "Qatar" },
    { code: "🇮🇩", name: "Indonesia" },
    { code: "🇿🇦", name: "South Africa" },
    { code: "🇰🇪", name: "Kenya" },
    { code: "🇸🇩", name: "Sudan" },
    { code: "🇵🇱", name: "Poland" },
  ];

  // Get all participant card images
  const participantCards = [
    "Titelloses 55_20250709122532.png",
    "Titelloses 55_20250709122616.png",
    "Titelloses 55_20250709123237.png",
    "Titelloses 55_20250709123314.png",
    "Titelloses 55_20250709123852.png",
    "Titelloses 55_20250709124051.png",
    "Titelloses 55_20250709125438.png",
    "Titelloses 55_20250709125714.png",
    "Titelloses 55_20250709125751.png",
    "Titelloses 55_20250709130725.png",
    "Titelloses 55_20250709130813.png",
    "Titelloses 55_20250709130904.png",
    "Titelloses 55_20250709132001.png",
    "Titelloses 55_20250709132049.png",
    "Titelloses 55_20250709132130.png",
    "Titelloses 55_20250709132319.png",
    "Titelloses 55_20250709132400.png",
    "Titelloses 55_20250709132430.png",
    "Titelloses 55_20250709132520.png",
    "Titelloses 55_20250709194509.png",
    "Titelloses 55_20250709194628.png",
    "Titelloses 55_20250709194731.png",
    "Titelloses 55_20250709194809.png",
    "Titelloses 55_20250709194849.png",
    "Titelloses 55_20250709194926.png",
    "Titelloses 55_20250709205827.png",
    "Titelloses 55_20250709210233.png",
    "Titelloses 55_20250710000223.png",
    "Titelloses 55_20250710000258.png",
    "Titelloses 55_20250711092845.png",
    "Titelloses 55_20250711092934.png",
    "Titelloses 55_20250711093126.png",
    "Titelloses 55_20250711093356.png",
    "Titelloses 55_20250711093533.png",
    "Titelloses 55_20250711093619.png",
    "Titelloses 55_20250715092127.png",
    "Titelloses 55_20250715092232.png",
  ];

  // Winners
  const winners = [
    {
      place: "🏆 Human Edge Award (Overall Winner)",
      team: "Biancas Jhonson, Rhea Kapadia, Michelle Jhonson",
      project: "Sweet Treatinator",
      description:
        "As first-generation children of immigrants, we wanted to create a bridge between cultural traditions and modern technology. Our own struggles with dessert indecision (cravings ≠ inspiration) led us to build a solution that celebrates culinary heritage while embracing AI. The equation was simple: Childhood Memories + AI = Next-Gen Recipe Preservation",
      tech: ["Figma","next.js", "openai", "react5", "tailwindcss", "typescript"],
      prize: "$500",
      demo: "https://devpost.com/software/sweet-treatinator#updates",
      image: "/projects/human-edge-winner.jpg",
    },
    {
      place: "Chaotic Genius Award 🧠",
      team: "Alexandra Dimitrescu, Bianca Baias, Grozavu Catalina, Georgiana Oniceanu",
      project: "Transylvania Blood Network",
      description:
        "The Transylvania Blood Network is an interactive website that gamifies blood donation awareness and education. It combines blood donation registration, educational content about blood typing and transfusion, interactive games, and cultural storytelling all within a vampire-themed interface inspired by Romanian folklore.",
      tech: ["GitHub Pages", "HTML", "JavaScript"],
      prize: "$100",
      demo: "https://devpost.com/software/transylvania-blood-network",
      image: "/projects/chaotic-genius-transylvania-blood.png",
    },
    {
      place: "Chaotic Genius Award 🧠",
      team: "Haridas Nishitha",
      project: "MamaMuse",
      description:
        "Pregnancy is a rollercoaster of emotions—joy, anxiety, excitement, and sometimes loneliness. Many expecting mothers lack continuous mental health support or a safe space to share their feelings. Inspired by conversations with friends, family, and the universal need for empathy, MamaMuse is a digital companion and community to nurture every mom-to-be’s mental wellness.",
      tech: [
        "Flask",
        "Gunicorn",
        "Hugging Face Transformers",
        "Jinja",
        "Qwen3 0.6b",
        "Supabase",
      ],
      prize: "$100",
      demo: "https://devpost.com/software/mamamuse",
      image: "/projects/chaotic-genius-mama-muse.jpg",
    },
    {
      place: "Chaotic Genius Award  🧠",
      team: "Eesha Tariq, Waqar Ahmed",
      project: "FinAura",
      description:
        "Gen Z faces unique financial challenges — from juggling digital payments and student loans to managing inconsistent income streams. Traditional budgeting tools are rigid, emotionless, and not built for modern financial behavior. FinAura was inspired by the need for an empathetic, intelligent, and adaptive AI assistant that acts like a financial co-pilot — guiding users through both numbers and emotions.",
      tech: ["OpenAI", "Streamlit", "Python"],
      prize: "$100",
      demo: "https://devpost.com/software/finaura",
      image: "/projects/chaotic-geniuss-finaura.jpg",
    },
    {
      place: "Most Viral Award 🌟",
      team: "Caroline, Summer, Tina, Elisa",
      project: "Compliment Generator",
      description:
        "We wanted to make something that spreads positivity in a world of fear and uncertainty, especially for those in the computer science field (thanks to A.I.). Each team member brought their unique skill into this project — and we had a lot of fun coming up with ideas and bringing our creative minds together, producing something that reflects all of us.",
      tech: [],
      prize: "$100",
      demo: "https://devpost.com/software/compliment-generator-gkzpuo",
      image: "/projects/most-viral-compliment.jpg",
    },
    {
      place: "Most Viral Award 🌟",
      team: "UK Nasir, Jahanvi Jariwala, Maurya Hiral, Sameen Saiyed, Tisha Khandelwal",
      project: "MoodMorph",
      description:
        "MoodMorph is an interactive AI-powered emotional support chatbot that asks users how they’re feeling, understands emotional context, detects emotion, and transforms the context into lighthearted, funny, or comforting versions. It plays supportive messages and GIFs to make users smile and works like a chat app with a cozy UI and themes (light/dark mode).",
      tech: [
        "Bootstrap",
        "CSS",
        "Flask",
        "Gemini",
        "GIPHY",
        "HTML",
        "JavaScript",
        "Python",
        "SQLite",
      ],
      prize: "$100",
      demo: "https://devpost.com/software/moodmorph",
      image: "/projects/most-viral-moodmorph.jpg",
    },
  ];

  // Split winners for layout: Human Edge (overall) and Chaotic Genius (three winners)
  const humanEdgeWinners = winners.filter((w) =>
    w.place.toLowerCase().includes("human edge")
  );
  const chaoticWinners = winners.filter((w) =>
    w.place.toLowerCase().includes("chaotic genius")
  );
  const viralWinners = winners.filter((w) =>
    w.place.toLowerCase().includes("most viral")
  );

  // Sample featured projects
  const featuredProjects = [
    {
      title: "Diary of a Wimpy Kid Roast Journal",
      team: "Coral Carlsson",
      description: "I grew up loving the Diary of a Wimpy Kid series, fascinated by its humor and relatable storytelling. One aspect that I always enjoyed about the series was that main character Greg Heffley is always getting roasted. He always finds himself in awkward or unpleasant situations which were most of the time his fault! Therefore I created a bot that can make fun of the users awkward or unpleasant situations. On a deeper level, it allows users to have a safe space to journal where they can laugh and joke about their experiences and embrace imperfections!",
      tech: ["React", "Adobe Illustrator"],
      link: "https://devpost.com/software/wimpy-kid-roaster-journal",
      image: "/projects/wimpy-kid.jpg",

    },
    {
      title: "Half of Me",
      team: "Aditi, Shanza, Vaibhavi and Farida",
      description: "Unfinished ideas like poems, letters, code, art, often die in drafts because we fear judgment, lack inspiration, or don’t know how to finish. Mental health struggles amplify this. What if you could share half of something and let the world (or AI) help complete it, on your own terms?",
      tech: ["cors","css","express.js","html","javascript","node.js","openai","react","shadcn","tailwind","typescript"],
      link: "https://devpost.com/software/half-of-me",
      image: "/projects/half-of-me.jpg",
    },
    {
      title: "Mind Mirror Journal",
      team: "Leen Arnous",
      description: "“What if we could talk to a wiser version of ourselves when we’re overwhelmed?” As someone who journals for emotional clarity, I oftentimes wish I had someone to redirect my emotions and guide me through them. This is what sparked Mind Mirror!",
      tech: ["Next.js", "GraphQL", "Prisma"],
      link: "https://devpost.com/software/mind-mirror-journal",
      image: "/projects/mind-mirror.jpg",
    }
  ];

  // Animate flags
  useEffect(() => {
    const interval = setInterval(() => {
      setFlagAnimationIndex((prev) => (prev + 1) % countries.length);
    }, 500);
    return () => clearInterval(interval);
  }, [countries.length]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen font-roboto-mono text-white p-4 md:p-8 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(white 0.5px, transparent 0)',
          backgroundSize: '15px 15px',
        }}
      ></div>
      
      
      <div className="relative md:h-[4200px] pt-4 z-10">
        {/* Main Header Window */}
        <div className="relative mb-4 md:absolute md:top-4 md:left-0 md:right-0 md:z-1">
          <div className="bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-dark border-2 border-csgirlies-pink rounded-lg shadow-lg">
            <div className="bg-black text-gray-400 px-4 py-2 flex items-center justify-between rounded-t-md">
              <div className="flex items-center space-x-4 overflow-x-auto">
                <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
                  <img src="/logo.png" alt="CS Girlies Logo" className="h-5 w-5" />
                  <span className="font-bold text-white">CS Girlies</span>
                </Link>
                <Link to="/hackathon" className="hidden md:inline hover:text-white transition-colors">November Hackathon</Link>
                <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="hidden md:inline hover:text-white transition-colors">Join Discord</a>
                <Link to="/hackathon-resources" className="hidden md:inline hover:text-white transition-colors">Resources</Link>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
              </div>
            </div>
            <div className="text-center py-4 px-4">
              <h1 className="font-righteous text-4xl md:text-8xl font-bold mb-4">A.I. vs H.I.</h1>
              <h2 className="font-righteous text-2xl md:text-4xl mb-4">HACKATHON RECAP</h2>
              <p className="text-base md:text-xl mb-6">July 2025 • A celebration of human creativity</p>
              
              {/* Animated Flags */}
              <div className="mb-2">
                                <div className="flex justify-center items-center space-x-2 flex-wrap gap-2">
                  {countries.map((country, index) => (
                    <span
                      key={country.code}
                      className={`text-2xl transition-all duration-300 ${
                        index === flagAnimationIndex 
                          ? 'scale-125 animate-bounce' 
                          : 'hover:scale-110'
                      }`}
                      title={country.name}
                    >
                      {country.code}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Participant Cards Row */}
        <div className="relative mt-8 md:mt-[360px] mb-8 -mx-4 md:-mx-8">
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...participantCards, ...participantCards].map((card, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={`/photos/july-participants/${card}`}
                    alt={`Participant ${index + 1}`}
                    className="h-40 w-auto object-contain rounded-lg shadow-2xl opacity-85 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Window */}
        <div className="relative mb-8 md:absolute md:top-[560px] md:left-20 md:w-[55%] md:z-40">
          <Window title="Stats.txt">
            <div className="text-center py-4">
              <h3 className="font-righteous text-4xl mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-righteous text-4xl text-csgirlies-pink">1,000+</div>
                  <div className="text-sm">Participants</div>
                </div>
                <div>
                  <div className="font-righteous text-4xl text-csgirlies-pink">70+</div>
                  <div className="text-sm">Countries</div>
                </div>
                <div>
                  <div className="font-righteous text-4xl text-csgirlies-pink">150+</div>
                  <div className="text-sm">Projects</div>
                </div>
                <div>
                  <div className="font-righteous text-4xl text-csgirlies-pink">48 hrs</div>
                  <div className="text-sm">Of Coding</div>
                </div>
              </div>
            </div>
          </Window>
        </div>

        {/* Terminal Window */}
        <div className="relative mb-8 md:absolute md:top-[640px] md:left-[60%] md:right-12 md:z-50">
          <Window title="📁 hackathon-recap-terminal">
            <div className="text-xs md:text-sm">
              <p className="text-gray-400">
                <ScrambleText text="/** July 2025 A.I. vs H.I. Hackathon Results */" delay={100} />
              </p>
              <p>
                <span className="text-green-400">Event completed:</span>{' '}
                <ScrambleText text="Sun 15 July 23:59:59 on global" delay={500} />
              </p>
              <p>
                <span className="text-csgirlies-pink">csgirlies@recap2025 ~ %</span>{' '}
                <ScrambleText text="npm run celebrate" delay={1500} />
              </p>
              <p>
                <span className="text-green-400">SUCCESS</span>{' '}
                <ScrambleText text="Amazing projects compiled here" delay={2500} />
              </p>
              <br />
              <p><ScrambleText text="Winners announced at:" delay={3500} /></p>
              <p>
                - <span className="font-bold">1st:</span>   
                <ScrambleText text="HealthMind AI - $5,000" delay={4000} />
              </p>
              <p>
                - <span className="font-bold">2nd:</span>{' '}
                <ScrambleText text="EmpathyBridge - $3,000" delay={4500} />
              </p>
              <p>
                - <span className="font-bold">3rd:</span>{' '}
                <ScrambleText text="LearnLoop AI - $2,000" delay={5000} />
              </p>
            </div>
          </Window>
        </div>

        {/* Winners Window */}
        <div className="relative mb-8 md:absolute md:top-[920px] md:left-8 md:w-[95%] md:z-30">
          <Window title="Winners.exe">
            <div className="py-4">
              <h3 className="font-righteous text-xl mb-6 text-center">🏆 HACKATHON WINNERS 🏆</h3>

              {/* Human Edge Award (overall winner) */}
              {humanEdgeWinners.map((winner, index) => (
                <div key={`human-${index}`} className="mb-6 p-4 bg-csgirlies-pink/10 rounded border border-csgirlies-pink/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-righteous text-lg">{winner.place}</span>
                    <span className="text-csgirlies-pink font-bold">{winner.prize}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{winner.project}</h4>
                  <p className="text-csgirlies-pink text-sm mb-2">by {winner.team}</p>
                  {winner.image && (
                    <img
                      src={winner.image}
                      alt={`${winner.project} preview`}
                      className="w-full max-h-72 object-cover rounded-md mb-3"
                    />
                  )}
                  <p className="text-sm mb-3">{winner.description}</p>
                  {winner.tech && winner.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {winner.tech.map((tech) => (
                        <span key={tech} className="bg-csgirlies-pink-dark px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white text-sm px-4 py-2 rounded transition-all duration-300"
                    onClick={() => window.open(winner.demo, "_blank")}
                  >
                    View Project →
                  </button>
                </div>
              ))}

              {/* Chaotic Genius Award - grid of three */}
              {chaoticWinners.length > 0 && (
                <>
                   <div className="grid grid-cols-1 mb-6 md:grid-cols-3 gap-4">
                    {chaoticWinners.map((winner, index) => (
                      <div key={`chaotic-${index}`} className="p-4 bg-csgirlies-pink/10 rounded border border-csgirlies-pink/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-righteous text-sm md:text-base">{winner.place}</span>
                          <span className="text-csgirlies-pink font-bold text-sm">{winner.prize}</span>
                        </div>
                        <h5 className="font-bold text-base mb-1">{winner.project}</h5>
                        <p className="text-csgirlies-pink text-xs mb-2">by {winner.team}</p>
                        {winner.image && (
                          <img
                            src={winner.image}
                            alt={`${winner.project} preview`}
                            className="w-full max-h-48 object-cover rounded-md mb-3"
                          />
                        )}
                        <p className="text-xs mb-3">{winner.description}</p>
                        {winner.tech && winner.tech.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {winner.tech.map((tech) => (
                              <span key={tech} className="bg-csgirlies-pink-dark px-2 py-1 rounded text-[10px]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        <button
                          className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white text-xs px-3 py-2 rounded transition-all duration-300"
                          onClick={() => window.open(winner.demo, "_blank")}
                        >
                          View Project →
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Most Viral Award - grid of two */}
              {viralWinners.length > 0 && (
                <>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {viralWinners.map((winner, index) => (
                      <div key={`viral-${index}`} className="p-4 bg-csgirlies-pink/10 rounded border border-csgirlies-pink/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-righteous text-sm md:text-base">{winner.place}</span>
                          <span className="text-csgirlies-pink font-bold text-sm">{winner.prize}</span>
                        </div>
                        <h5 className="font-bold text-base mb-1">{winner.project}</h5>
                        <p className="text-csgirlies-pink text-xs mb-2">by {winner.team}</p>
                        {winner.image && (
                          <img
                            src={winner.image}
                            alt={`${winner.project} preview`}
                            className="w-full max-h-48 object-cover rounded-md mb-3"
                          />
                        )}
                        <p className="text-xs mb-3">{winner.description}</p>
                        {winner.tech && winner.tech.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {winner.tech.map((tech) => (
                              <span key={tech} className="bg-csgirlies-pink-dark px-2 py-1 rounded text-[10px]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        <button
                          className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white text-xs px-3 py-2 rounded transition-all duration-300"
                          onClick={() => window.open(winner.demo, "_blank")}
                        >
                          View Project →
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </Window>
        </div>

        {/* Featured Projects Window */}
        <div className="relative mb-8 md:absolute md:top-[2760px] md:left-[5%] md:w-[55%] md:z-10">
          <Window title="Featured_Projects.md">
            <div className="py-4">
              <h3 className="font-righteous text-lg mb-4">✨ Featured Projects</h3>
              
              {featuredProjects.map((project, index) => (
                <div key={index} className="mb-4 p-3 border border-csgirlies-pink/20 rounded">
                  <h4 className="font-bold mb-1">{project.title}</h4>
                  <p className="text-csgirlies-pink text-sm mb-2">by {project.team}</p>
                  <img src={project.image} alt={project.title} className="w-full max-h-48 object-cover rounded-md mb-3" />
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white text-xs px-3 py-2 rounded transition-all duration-300"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project →
                  </button>
                </div>
              ))}
              
              <div className="text-center mt-6">
                <button
                  className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://csgirlies.devpost.com/", "_blank")}
                >
                  View All 150+ Projects on Devpost →
                </button>
              </div>
            </div>
          </Window>
        </div>
 

        {/* Thank You Window */}
        <div className="relative mb-8 md:absolute md:top-[3100px] md:right-[2%] md:w-[40%] md:z-20">
          <Window title="Thank_You.exe">
            <div className="py-8 text-center">
              <h3 className="font-righteous text-2xl mb-4 text-csgirlies-pink">Thank You! 💖</h3>
              <p className="mb-6">
                To every participant, mentor, judge, and supporter who made this hackathon possible. 
              </p>
              <p className="mb-6"> 
                You helped THOUSANDS of Gen Z women in tech explore the intersection of artificial intelligence and human intelligence.
              </p>
              <div className="space-y-2">
                <p className="text-sm">Stay connected with CS Girlies:</p>
                <div className="flex justify-center space-x-4">
                  <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink px-4 py-2 rounded transition-colors">
                    Discord
                  </a>
                  <Link to={LINKS.INSTAGRAM} className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink px-4 py-2 rounded transition-colors">
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </Window>
        </div>

      </div>
      <Footer className="relative z-50" />
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HackathonRecap;