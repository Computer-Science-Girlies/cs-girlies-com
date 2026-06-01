import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from 'react';
import Window from '@/components/Window';
import { Link } from 'react-router-dom';
import CasinoCounter from '@/components/CasinoCounter';
import Footer from '@/components/Footer';
import ScrambleText from '@/components/ScrambleText';
import { LINKS } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const pillData = {
  "Beginner Friendly": {
    title: "Beginner-Friendly",
    description: "First hackathon? Perfect. \n\n Mentors, ideas, and a welcoming community are here to help you ship. Join, learn, and build something you’re proud of."
  },
  "Find Mentors": {
    title: "Find Mentors",
    description: "Need help? Schedule a 1:1 with a mentor. \n\n Browse our mentors and book a session on the Mentors page."
  },
  "Fully online": {
    title: "Fully Online",
    description: "A 48-hour global hackathon — fully virtual. \n\n Ceremonies, workshops, mentorship, and community all run in Discord so you can join from anywhere."
  },
  "48 hours": {
    title: "48 Hours",
    description: "Friday 12 PM EST → Sunday 12 PM EST. \n\n Build a scrappy, working prototype and submit on Devpost. It doesn’t have to be perfect — just impactful and thoughtful."
  },
  "Tools 4 Students": {
    title: "Tools 4 Students",
    description: "Theme: Tools 4 Students. \n\n Build creative tools that make learning more exciting and efficient — from smart study aids and automation to playful learning experiences and computational projects with Wolfram."
  }
};

const HackathonPage: React.FC = () => {
  const [selectedPill, setSelectedPill] = useState<string | null>(null);
  const [isPrizeOpen, setIsPrizeOpen] = useState<boolean>(false);

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
      
      <div className="relative md:h-[2935px] pt-4">
        {/* Main Hackathon Window */}
        <div className="relative mb-8 md:absolute md:top-4 md:left-0 md:right-0 md:z-1">
          {/* <div className="bg-csgirlies-pink border-2 border-csgirlies-pink-light rounded-lg shadow-lg"> */}
          <div className="bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-light border-2 border-csgirlies-pink rounded-lg shadow-lg">
            <div className="bg-black text-white px-4 py-2 flex items-center justify-between rounded-t-md">
              
              <div className="flex items-center space-x-3 overflow-hidden whitespace-nowrap">
                <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0 mr-2">
                  <img src="/logo.png" alt="CS Girlies Logo" className="h-5 w-5" />
                  <span className="font-bold text-white">CS Girlies</span>
                </Link>
                
                {/* Mobile Buttons (Unified Outline Style) */}
                <a href="/sponsorship" target="_blank" rel="noopener noreferrer" className="md:hidden bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-md border border-white/20 transition-colors flex-shrink-0">
                  Sponsor
                </a>
                <Link to="/hackathon-recap" className="md:hidden max-[520px]:hidden bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-md border border-white/20 transition-colors flex-shrink-0">
                  July Recap
                </Link>

                {/* Desktop Buttons (Unified Outline Style) */}
                <a href="/sponsorship" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-md border border-white/20 transition-colors">
                  Sponsor This Hackathon
                </a>
                <Link to="/hackathon-recap" className="hidden md:inline-block bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-md border border-white/20 transition-colors">
                  July Hackathon Recap
                </Link>
              </div>

              <div className="flex space-x-1.5">
                {/* <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div> */}
                <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
              </div>
            </div>
            <div className="text-center py-10 px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Make Learning Cool!</h1>
              <p className="text-base md:text-xl">Tools 4 Students ~ A Global Hackathon by CS Girlies</p>
              <p className="text-sm md:text-lg mt-2">November 14 - 16, 2025 • Online • 48 Hours • Beginner-Friendly</p>
              <div className="mt-8 flex justify-center space-x-2 md:space-x-4 flex-wrap">
                <Pill onClick={() => setSelectedPill("Beginner Friendly")}>Beginner Friendly</Pill>
                <Pill onClick={() => window.open('/mentors', '_self')}>Find Mentors</Pill>
                <Pill onClick={() => setSelectedPill("Fully online")}>Fully online</Pill>
                <Pill onClick={() => window.open('/hackathon-schedule', '_self')}>Schedule</Pill>
                <Pill onClick={() => setSelectedPill("Tools 4 Students")}>Tools 4 Students</Pill>
              </div>
            </div>
          </div>
        </div>

        {/* Date Window - Second on mobile, positioned for desktop */}  
        <div className="relative mb-8 md:absolute md:top-[1100px] md:left-16 md:w-[40%] md:z-40">
          <Window title="Register-down-here.png">
            <div className="text-center py-4">
              <p className="text-3xl md:text-5xl font-bold">Join us online</p>
              <p className="text-5xl md:text-3xl my-2">Nov 14 – 16, 2025</p>
              <a href="https://cs-girlies-november.devpost.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-csgirlies-pink text-white text-bold text-xl md:text-2xl font-bold py-3 px-16 md:py-4 md:px-20 rounded-lg mt-4 hover:bg-csgirlies-pink-dark transition-all duration-300 transform hover:scale-105">
                  Register on Devpost
                </button>
              </a>
            </div>
          </Window>
        </div>

        {/* Terminal Window */}
        <div className="relative mb-8 md:absolute md:top-[440px] md:left-[40%] md:right-8 md:z-10">
          <Window title="csgirlies-top-80x24">
            <div className="text-xs md:text-sm font-mono space-y-1">
              
              <p className="text-gray-500">
                <a href="https://cs-girlies-november.devpost.com" className="hover:underline">
                  <ScrambleText text="/** Click Me to Register */" delay={100} />
                </a>
              </p>

              {/* Login info */}
              <p>
                <span className="text-[#a6e3a1]">Last login:</span>{' '}
                <ScrambleText text="Thu 26 June 06:09:42 on console" delay={500} className='text-[#cdd6f4]' />
              </p>
              
              <div className="flex flex-wrap items-center gap-x-1.5">
                <span className="text-[#eba0ac]">csgirlies@Hackathon2025 ~ %</span>
                <ScrambleText text="npm" delay={1500} className="text-[#f9e2af] font-bold" />
                <ScrambleText text="run dev" delay={1700} className="text-[#cdd6f4]" />
              </div>

              <br />

              <div className="flex items-center space-x-2">
                <span className="bg-green-500/20 text-[#a6e3a1] px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider">DONE</span>
                <ScrambleText text="Compiled successfully in 1169ms" delay={2500} className="text-[#cdd6f4]" />
              </div>
  
              <br />
              
              <p className="text-[#cdd6f4]"><ScrambleText text=" App running at:" delay={3000} /></p>

              <div className="flex items-center space-x-2 pl-2">
                <span className="text-[#a6e3a1]">➜</span>
                <span className="text-[#cdd6f4]">Local:</span>
                <a href="https://cs-girlies-november.devpost.com" className="text-[#74c7ec] hover:underline">
                  <ScrambleText text="http://localhost:8080/" delay={3500} />
                </a>
              </div>

              <div className="flex items-center space-x-2 pl-2">
                <span className="text-[#a6e3a1]">➜</span>
                <span className="text-[#cdd6f4]">Network:</span>
                <a href="https://cs-girlies-november.devpost.com" className="text-[#74c7ec] hover:underline">
                  <ScrambleText text="http://192.168.1/" delay={4000} />
                </a>
              </div>
              <br />

              <div className="text-[#cdd6f4] pt-2 border-t border-white/5 flex flex-wrap items-center gap-x-1">
                <ScrambleText text="To create a production build, use" delay={5000} />
                <ScrambleText text="npm run build" delay={5500} className="text-[#74c7ec] hover:underline"/>
              </div>

            </div>
          </Window>
        </div>

        
        {/* Computer Image Window */}
        <div className="relative mb-8 md:absolute md:top-[570px] md:left-0 md:w-[45%] md:z-5">
            <Window title="Computer.png" noPadding>
                <img src="/comp.png" alt="Retro computer" className="w-full h-full object-cover" />
            </Window>
        </div>

        {/* About Text Window */}
        <div className="relative mb-8 md:absolute md:top-[820px] md:left-[49%] md:right-[1%] md:z-30">
          <Window title="About.txt">
            <h2 className="text-xl md:text-2xl mb-4">CS Girlies November Hackathon — Make Learning Fun!</h2>
            <p className="mb-4 text-sm md:text-base">A 48-hour global hackathon where you’ll build creative tools that help students become lifelong learners.</p>
            <p className="mb-4 text-sm md:text-base">Beginner-friendly, fully online, and open worldwide.</p>
            <p className="mb-6 text-sm md:text-base">Theme: <span className="font-bold">Tools 4 Students</span> — from smart study tools and automations to playful learning experiences and computational projects with Wolfram.</p>
            <p className="mb-6 text-sm md:text-base text-center">
             Your goal? MAKE LEARNING FUN!
            </p>
          </Window>
        </div>

        {/* How to Join Window */}
        <div className="relative mb-8 md:absolute md:top-[1600px] md:left-[1%] md:w-[60%] md:z-20">
          <Window title="How-to-Join.txt">
            <div className="py-3">
              <h3 className="text-lg md:text-xl mb-2">How to Join? </h3>
              <p className="text-sm md:text-base mb-2">1. Register on Devpost — this is the only way to enter.</p>
              <p className="text-sm md:text-base mb-2">2. Join our Discord for ceremonies, workshops, mentorship, and community</p>
              <p className="text-sm md:text-base">Note: We won’t match teams for you, but our <span className="font-bold">#fall25-make-a-team</span> channel will help you connect.</p>
            </div>
          </Window>
        </div>

        {/* Tracks Window */}
        <div className="relative mb-8 md:absolute md:top-[1880px] md:left-[45%] md:right-[5%] md:z-29">
          <Window title="Tracks.md">
            <div className="py-4">
              <h3 className="text-lg md:text-3xl text-center mb-6">Tracks</h3>
              
              {/* List-disc for bullets */}
              <ul className="list-disc pl-5 space-y-6 text-xs md:text-sm">
                
                <li>
                  <h4 className="font-black text-sm md:text-base mb-1 inline-block">Automate Learning: Build Smarter Study Tools</h4>
                  <p className="mb-2">Use AI to make learning faster and more personal. Automate note‑taking, feedback, quiz creation, or skill tracking.</p>
                </li>

                <li>
                  <h4 className="font-black text-sm md:text-base mb-1 inline-block">Make Learning Fun: Gamify the Journey</h4>
                  <p className="mb-2">Create interactive experiences, storytelling-based courses, or challenges that turn curiosity into play.</p>
                </li>

                <li>
                  <h4 className="font-black text-sm md:text-base mb-1 inline-block">Build with Wolfram: Harness Computational Intelligence</h4>
                  <p className="mb-2">Explore data, visualization, and computation using Wolfram tools — from math modeling to AI‑enhanced simulations.</p>
                </li>

                <li>
                  <h4 className="font-black text-sm md:text-base mb-1 inline-block">Build with GitBook: Document Your Way to Victory</h4>
                  <p className="mb-1">Build documentation that tells your project's story, clarifies your thinking, and brings your product vision to life with professional polish using GitBook.</p>
                  <p className="text-[11px] md:text-xs text-white italic marker:text-transparent list-none pl-0">Optional opt‑in track — choose this regardless of your main track.</p>
                </li>

              </ul>
            </div>
          </Window>
        </div>
      

        {/* Beginner Resources Window */}
        <div className="relative mb-8 md:absolute md:top-[1950px] md:left-[3%] md:w-[30%] md:z-15">
          <Window title="Beginner_Help.exe">
            <div className="py-4 text-center">
              <h3 className="text-lg md:text-xl mb-3">Are you a beginner?</h3>
              <p className="text-sm md:text-base mb-4">Check out these resources</p>
              <Link to="/hackathon-resources">
                <button className="bg-csgirlies-pink hover:bg-csgirlies-pink-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  View Resources
                </button>
              </Link>
            </div>
          </Window>
        </div>

        {/* Prizes Window */}
        <div className="relative mb-8 md:absolute md:top-[1320px] md:left-[50%] md:right-[5%] md:z-5">
          <Window title="Prizes.gif">
            <div className="text-center py-8">
              <h3 className="text-3xl md:text-5xl font-bold">Prizes</h3>
              <CasinoCounter target={4660} />
              <p className="text-2xl md:text-3xl mt-4">in cash and prizes</p>

              <button
                type="button"
                onClick={() => setIsPrizeOpen(true)}
                className="bg-csgirlies-pink text-white text-xl md:text-2xl font-bold py-3 px-16 md:py-4 md:px-20 rounded-lg mt-4 hover:bg-csgirlies-pink-dark transition-all duration-300 transform hover:scale-105"
              >
                Prize Breakdown
              </button>
            </div>
          </Window>
        </div>

      </div>
       

      <div className="relative mx-auto md:absolute md:top-[2435px] w-full md:w-[95%] mb-12 px-2 ">
        <Window title="Sponsors.png" className="bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-light border-2">
          <div className="py-6 text-center">
            <h3 className="text-lg md:text-5xl mb-6">Sponsors</h3>
            
            {/* Container spacing adjusted for structured white boxes */}
            <div className="flex flex-wrap items-center justify-center gap-4 px-4">
              
              {/* Let's Defend */}
              <a href="https://letsdefend.io" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center w-48 md:w-72 lg:w-80 h-24 md:h-36 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <img src="/sponsors/lets-defend.png" alt="Let's Defend" className="max-w-full max-h-full object-contain" />
              </a>

              {/* GitBook */}
              <a href="https://www.gitbook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center w-48 md:w-72 lg:w-80 h-24 md:h-36 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <img src="/sponsors/gitbook.png" alt="GitBook" className="max-w-full max-h-full object-contain" />
              </a>

              {/* Wolfram */}
              <a href="https://www.wolfram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center w-48 md:w-72 lg:w-80 h-24 md:h-36 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <img src="/sponsors/wolfram-rect.png" alt="Wolfram" className="max-w-full max-h-full object-contain" />
              </a>

              {/* Cline */}
              <a href="https://cline.bot" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center w-48 md:w-72 lg:w-80 h-24 md:h-36 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <img src="/sponsors/cline.png" alt="Cline" className="max-w-full max-h-full object-contain" />
              </a>

            </div>
            <p className="text-sm md:text-lg mt-6 font-bold">Want to sponsor? <a href="/sponsorship" className="underline">Learn more</a>.</p>
          </div>
        </Window>
      </div>


      <div className="-mx-4 md:-mx-8">
        <Footer className="relative z-50 w-full" />
      </div>
      
      <Dialog open={isPrizeOpen} onOpenChange={() => setIsPrizeOpen(false)}>
        <DialogContent className="bg-black border-2 border-csgirlies-pink text-white font-roboto-mono sm:max-w-[720px] max-h-[80vh] overflow-y-auto prize-scroll" style={{ scrollbarColor: '#ff4da6 transparent', scrollbarWidth: 'thin' }}>
          <DialogHeader>
            <DialogTitle className="text-csgirlies-pink text-2xl">Prize Breakdown</DialogTitle>
            <DialogDescription className="text-white text-base">All prizes and details for this hackathon</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg">~ Overall Winner ~</h4>
                <span className="text-csgirlies-pink font-bold">$1,000</span>
              </div>
              <p className="text-sm text-gray-200 italic">1 winner</p>
              <p className="text-sm text-gray-200 mt-1">Plus $1,000 in Cline credits.</p>
              <p className="text-sm text-gray-200 mt-1">Winners will also receive a 1 month VIP voucher to Let's Defend!</p>
            </div>

            <div className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg">🥈 ~ Overall Runner Up ~🥈</h4>
                <span className="text-csgirlies-pink font-bold">$250</span>
              </div>
              <p className="text-sm text-gray-200 italic">2 winners</p>
              <p className="text-sm text-gray-200 mt-1">Winners will also receive a 1 month VIP voucher to Let's Defend!</p>
            </div>

            <div className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg">Cline Credits — Top 3</h4>
                <span className="text-csgirlies-pink font-bold">$1,000 / $500 / $200</span>
              </div>
              <p className="text-sm text-gray-200 mt-1">1st place: $1,000 • 2nd place: $500 • 3rd place: $200 (credits)</p>
            </div>

            <div className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg"> ~ Best Documentation (Sponsored by Gitbook)</h4>
                <span className="text-csgirlies-pink font-bold">$500</span>
              </div>
              <p className="text-sm text-gray-200 italic">3 winners</p>
              <p className="text-sm text-gray-200 mt-1">$500 Cash prize for best documentation using <a href="https://gitbook.com" target="_blank" rel="noopener noreferrer" className="underline">Gitbook</a>!</p>
            </div>

            

            <div className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg">Built with Wolfram</h4>
                <span className="text-csgirlies-pink font-bold">$1,660 worth</span>
              </div>
              <p className="text-sm text-gray-200 italic">1 winner</p>
              <div className="text-sm text-gray-200 mt-1 space-y-1">
                <p>The Wolfram Award contains a year of Wolfram 1 with a retail value of $1,660 per year per user</p>
                <p className="font-bold">All participants who utilize Wolfram language as a significant component in their project will be awarded this prize.</p>
                <p>Any student who submits a project utilizing Wolfram language is eligible for a $500 scholarship to one of their summer programs if they apply and are accepted.</p>
                <p className="italic text-white">Note: This is not a cash award.</p>
              </div>
            </div>

            <div className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg">Cline CLI Winner</h4>
                <span className="text-csgirlies-pink font-bold">$1,500</span>
              </div>
              <p className="text-sm text-gray-200 italic">1 winner</p>
              <p className="text-sm text-gray-200 mt-1">Awarded to a project built using the Cline CLI.</p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsPrizeOpen(false)} className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white font-bold">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <style>{`
        .prize-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .prize-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .prize-scroll::-webkit-scrollbar-thumb {
          background-color: #ff4da6;
          border-radius: 9999px;
        }
        .prize-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #ff7abf;
        }
      `}</style>

      {/* Popup Dialog */}
      <Dialog open={selectedPill !== null} onOpenChange={() => setSelectedPill(null)}>
        <DialogContent className="bg-black border-2 border-csgirlies-pink text-white font-roboto-mono">
          <DialogHeader>
            <DialogTitle className="text-csgirlies-pink text-xl">
              {selectedPill && pillData[selectedPill as keyof typeof pillData]?.title}
            </DialogTitle>
            <DialogDescription className="text-white text-base leading-relaxed whitespace-pre-line">
              {selectedPill && pillData[selectedPill as keyof typeof pillData]?.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              onClick={() => setSelectedPill(null)}
              className="bg-csgirlies-pink-dark hover:bg-csgirlies-pink text-white font-bold"
            >
              Close
            </Button>
            {selectedPill === "Beginner Friendly" && (
              <Button 
                onClick={() => window.open('/hackathon-resources', '_self')}
                className="bg-csgirlies-pink hover:bg-csgirlies-pink-dark text-white text-xl md:text-2xl font-bold py-3 px-16 md:py-4 md:px-20 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105"
              >
                View Resources
              </Button>
            )}
            <Button 
              onClick={() => window.open('https://cs-girlies-november.devpost.com', '_blank')}
              className="bg-csgirlies-pink hover:bg-csgirlies-pink-dark text-white font-bold"
            >
              Learn More on Devpost
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Pill: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
  <div 
    className="bg-csgirlies-pink-dark text-white px-4 py-2 rounded-full text-sm mb-2 hover:bg-csgirlies-pink hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);

export default HackathonPage;
