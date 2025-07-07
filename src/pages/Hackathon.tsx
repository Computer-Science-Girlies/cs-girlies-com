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
    title: "Beginner-Friendly 🌱",
    description: "This hackathon is for the curious. \n \n Whether it’s your first time coding or your first time building with AI, we’ve got you. Expect mentorship, templates, and a community that actually cares. We’re beginner-inclusive — but not beginner-limited. Come as you are, build what only you can."
  },
  "Build something weird": {
    title: "Build Something Weird 🤪",
    description: "Bring your unhinged ideas. \n \n This isn’t about polishing a pitch deck—it’s about soulful coding and intellectual exploration. \n \n Use tech in ways it “wasn’t meant to be used.” Surprise us. Confuse the robots. Make it unmistakably human."
  },
  "Fully online": {
    title: "Fully Online 🌐",
    description: "This is a *global* experience — and that’s exactly why it’s virtual. \n \n No flights, no barriers — just vibes, Wi-Fi, and worldwide connection. \n \n All communication, mentorship, and chaos will happen on our Discord server. So wherever you are, you’re right where you need to be."
  },
  "48 hours": {
    title: "48 Hours ⏰",
    description: "You’ve got *exactly* 48 hours — from 5 PM EDT on July 25 to 5 PM EDT on July 27 — to take an idea from spark to prototype. \n \n Be fast. Get weird. Let your instincts lead. We don't want perfection, we want something human."
  },
  "AI vs. H.I": {
    title: "AI vs H.I. 🤖🧠",
    description: "Can human intelligence still outshine artificial intelligence? This is your prompt. \n \n Build something that reveals the *human edge* — your instincts, your soul, your chaos, your care. \n \n Wanna learn more about the different tracks? Check out our Devpost page!"
  }
};

const HackathonPage: React.FC = () => {
  const [selectedPill, setSelectedPill] = useState<string | null>(null);

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
      
      <div className="relative md:h-[2800px] pt-4">
        {/* Main Hackathon Window */}
        <div className="relative mb-8 md:absolute md:top-4 md:left-0 md:right-0 md:z-1">
          <div className="bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-dark border-2 border-csgirlies-pink rounded-lg shadow-lg">
            <div className="bg-black text-gray-400 px-4 py-2 flex items-center justify-between rounded-t-md">
              <div className="flex items-center space-x-4 overflow-x-auto">
                <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
                  <img src="/logo.png" alt="CS Girlies Logo" className="h-5 w-5" />
                  <span className="font-bold text-white">CS Girlies</span>
                </Link>
                <a href="/sponsorship" target="_blank" rel="noopener noreferrer" className="hidden md:inline hover:text-white transition-colors">Sponsor This Hackathon!</a>
                <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="hidden md:inline hover:text-white transition-colors">Join Discord</a>
                <Link to="/resources" className="hidden md:inline hover:text-white transition-colors">Resources</Link>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
              </div>
            </div>
            <div className="text-center py-10 px-4">
              <h1 className="font-righteous text-5xl md:text-9xl font-bold mb-4">HACKATHON</h1>
              <p className="text-base md:text-xl">Can human intelligence still outshine artificial intelligence?</p>
              <div className="mt-8 flex justify-center space-x-2 md:space-x-4 flex-wrap">
                <Pill onClick={() => setSelectedPill("Beginner Friendly")}>Beginner Friendly</Pill>
                <Pill onClick={() => setSelectedPill("Build something weird")}>Build something weird</Pill>
                <Pill onClick={() => setSelectedPill("Fully online")}>Fully online</Pill>
                <Pill onClick={() => setSelectedPill("48 hours")}>48 hours</Pill>
                <Pill onClick={() => setSelectedPill("AI vs. H.I")}>AI vs. H.I</Pill>
              </div>
            </div>
          </div>
        </div>

        {/* Date Window - Second on mobile, positioned for desktop */}
        <div className="relative mb-8 md:absolute md:top-[1100px] md:left-16 md:w-[40%] md:z-40">
          <Window title="Date.png">
            <div className="text-center py-4">
              <p className="font-righteous text-3xl md:text-4xl">join us online</p>
              <p className="font-righteous text-5xl md:text-6xl my-2">25-27 July</p>
              <a href="https://csgirlies.devpost.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-csgirlies-pink-dark text-white text-bold text-xl md:text-2xl font-bold py-3 px-16 md:py-4 md:px-20 rounded-full mt-4 hover:bg-csgirlies-pink transition-all duration-300 transform hover:scale-105">
                  Register
                </button>
              </a>
            </div>
          </Window>
        </div>

        {/* Terminal Window */}
        <div className="relative mb-8 md:absolute md:top-[350px] md:left-[40%] md:right-8 md:z-3">
          <Window title="📁 csgirlies-top-80x24">
            <div className="text-xs md:text-sm">
              <p className="text-gray-400">
                <a href="https://forms.csgirlies.com/hackathon-rsvp" >
                  <ScrambleText text="/** Click Me!! */" delay={100} />
                </a>
              </p>
              <p>
                <span className="text-green-400">Last login:</span>{' '}
                <ScrambleText text="Thu 26 June 06:09:42 on console" delay={500} />
              </p>
              <p>
                <span className="text-csgirlies-pink">csgirlies@Hackathon2025 ~ %</span>{' '}
                <ScrambleText text="npm run start" delay={1500} />
              </p>
              <p>
                <span className="text-green-400">DONE</span>{' '}
                <ScrambleText text="Compiled successfully in 1169ms" delay={2500} />
              </p>
              <br />
              <p><ScrambleText text="App running at:" delay={3500} /></p>
              <p>
                - <span className="font-bold">Local:</span>   
                <a href="https://forms.csgirlies.com/hackathon-rsvp" className="text-blue-400 underline">
                  <ScrambleText text="localhost:8080" delay={4000} />
                </a>
              </p>
              <p>
                - <span className="font-bold">Network:</span>{' '}
                <a href="https://forms.csgirlies.com/hackathon-rsvp" className="text-blue-400 underline">
                  <ScrambleText text="192.168.1.42:8080" delay={4500} />
                </a>
              </p>
              <br />
              <p><ScrambleText text=".    the development build is not optimized" delay={5500} /></p>
              <p>
                <ScrambleText text=".    for a production build, run " delay={6000} />
                <span className="bg-gray-700 px-1 rounded">
                  <ScrambleText text="npm run build" delay={6500} />
                </span>
              </p>
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
        <div className="relative mb-8 md:absolute md:top-[850px] md:left-[39%] md:right-[12%] md:z-30">
          <Window title="About.txt">
            <h2 className="font-righteous text-xl md:text-2xl mb-4">CS Girlies are hosting our first<br/>GLOBAL HACKATHON!!</h2>
            <p className="mb-2 text-sm md:text-base">Your mission?</p>
            <p className="mb-2 text-sm md:text-base">Build something weird.</p>
            <p className="mb-2 text-sm md:text-base">Build something from sheer curiosity.</p>
            <p className="mb-12 text-sm md:text-base">Build something unmistakably human.</p>
          </Window>
        </div>

        {/* What is a Hackathon Window */}
        <div className="relative mb-8 md:absolute md:top-[1600px] md:left-[1%] md:w-[60%] md:z-20">
          <Window title="What_is_a_hackathon.txt">
            <div className="py-3">
              <h3 className="font-righteous text-lg md:text-xl mb-2">What is a hackathon? 🤔</h3>
              <p className="text-sm md:text-base mb-3">A hackathon is a time-bound event where people come together to build creative tech projects—usually in teams, often in just 24 to 48 hours. </p>
              <p className="text-sm md:text-base mb-3">It’s a mix of coding, problem-solving, and rapid experimentation. </p>
              <p className="text-sm md:text-base mb-3">You don’t need to be an expert—just bring an idea, your curiosity, and a willingness to learn.</p>
            </div>
          </Window>
        </div>

        {/* Tracks Window */}
        <div className="relative mb-8 md:absolute md:top-[1840px] md:left-[45%] md:right-[8%] md:z-29">
          <Window title="Tracks.md">
            <div className="py-4">
              <h3 className="font-righteous text-lg md:text-xl mb-4">Three Tracks 🛤️</h3>
              
              <div className="mb-4">
                <h4 className="font-black text-sm md:text-base mb-2">🧠 Push the Limits: Beyond Automation</h4>
                <p className="text-xs md:text-sm mb-2">Explore what AI thinks it can do... and improve it where it still fumbles. Build tools that decode messy human moments or solve oddly specific problems AI gets hilariously wrong.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-black text-sm md:text-base mb-2">✨ Make Anything, But Make it YOU</h4>
                <p className="text-xs md:text-sm mb-2">For soulful builders and curious newbies. Make whatever you want—a journaling bot that cries with you, a playlist generator that feels your mood. The only rule? Make it unmistakably YOU.</p>
              </div>
              
              <div className="mb-2">
                <h4 className="font-black text-sm md:text-base mb-2">🌟 The Creative Strand: Collaborate with the Machine</h4>
                <p className="text-xs md:text-sm">Co-create with AI in ways that feel artful, eerie, emotional, or explosive. Blur the line between machine and muse while keeping humanity first.</p>
              </div>
            </div>
          </Window>
        </div>

        {/* FAQ Window */}
        <div className="relative mb-8 md:absolute md:top-[2280px] md:left-[8%] md:w-[80%] md:z-30">
          <Window title="FAQ.txt">
            <div className="py-4">
              <h3 className="font-righteous text-lg md:text-xl mb-4">FAQ 💭</h3>
              
              <div className="mb-3">
                <h4 className="font-black text-sm md:text-base mb-1">Do I need to know how to code?</h4>
                <p className="text-xs md:text-sm">Nope! This is beginner-inclusive. We have mentors, templates, and a community that actually cares. Come as you are.</p>
              </div>
              
              <div className="mb-3">
                <h4 className="font-black text-sm md:text-base mb-1">Can I work alone?</h4>
                <p className="text-xs md:text-sm">Absolutely! Solo builders are welcome. Teams of up to 4 people are also allowed.</p>
              </div>
              
              <div className="mb-3">
                <h4 className="font-black text-sm md:text-base mb-1">What do I win?</h4>
                <p className="text-xs md:text-sm">$1000+ in cash and prizes! Plus bragging rights and potential connections with our amazing community.</p>
              </div>
              
              <div className="mb-3">
                <h4 className="font-black text-sm md:text-base mb-1">How do I submit?</h4>
                <p className="text-xs md:text-sm">All submissions happen through our Devpost page. You'll have until 5 PM EDT on July 27 to submit.</p>
              </div>
            </div>
          </Window>
        </div>

        {/* Prizes Window */}
        <div className="relative mb-8 md:absolute md:top-[1300px] md:left-[50%] md:right-[5%] md:z-5">
          <Window title="Prizes.gif">
            <div className="text-center py-8">
              <h3 className="font-righteous text-3xl md:text-4xl mb-4">🏆   Prizes  💰</h3>
              <CasinoCounter target={1000} />
              <p className="font-righteous text-2xl md:text-3xl mt-4">in cash and prizes</p>
            </div>
          </Window>
        </div>

      </div>
      <Footer className="relative z-50" />
      
      {/* Popup Dialog */}
      <Dialog open={selectedPill !== null} onOpenChange={() => setSelectedPill(null)}>
        <DialogContent className="bg-black border-2 border-csgirlies-pink text-white font-roboto-mono">
          <DialogHeader>
            <DialogTitle className="text-csgirlies-pink font-righteous text-xl">
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
            <Button 
              onClick={() => window.open('https://csgirlies.devpost.com', '_blank')}
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
