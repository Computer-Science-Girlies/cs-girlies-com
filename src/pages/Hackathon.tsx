import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const HackathonPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      <div className="py-12 md:py-16">
        <div className="cs-container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-csgirlies-pink mb-6">
              H.I. vs A.I. — CS Girlies Hackathon
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              🗓️ July 19–20, 2025 • 📍Online • 48 hours • Global
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Can human intelligence still outshine artificial intelligence?
            </p>
          </div>
          
          {/* About Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg leading-relaxed mb-6">
              Join us for H.I. vs A.I., a two-day global hackathon exploring the beautifully chaotic intersection of raw human brilliance and machine intelligence. This isn't about fighting the robots. It's about showing them what they still can't do without us.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Your mission? Build something that impresses an AI… not by mimicking it, but by being unmistakably human: creative, intuitive, and unpredictable. Projects will be judged not just by innovation or functionality, but by how they reveal the <span className="text-csgirlies-pink">✨indomitability of the human spirit✨</span>
            </p>
          </div>
          
          {/* Tracks Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-csgirlies-pink">
              💡 Tracks 💡
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Track 1 */}
              <div className="bg-gray-900 rounded-xl p-8 border border-csgirlies-pink/30">
                <h3 className="text-2xl font-bold mb-4 text-csgirlies-pink">🧠 Push the Limits: Beyond Automation</h3>
                <p className="text-gray-300">
                  What can AI almost do, but still gets hilariously wrong? This track is about pushing automation into places it's never been, without losing the human touch. Build tools that take on chaotic, complex, or niche tasks that usually require judgment, emotion, or ✨vibes✨.
                </p>
              </div>
              
              {/* Track 2 */}
              <div className="bg-gray-900 rounded-xl p-8 border border-csgirlies-pink/30">
                <h3 className="text-2xl font-bold mb-4 text-csgirlies-pink">✨ Build ANYTHING, but make it YOU</h3>
                <p className="text-gray-300">
                  This is the beginner's track! Build anything you want: an AI-powered journaling app, a mood-driven playlist generator, a personal hypebot. Whatever you build, it should radiate YOU. Your human personality should shine through your project.
                </p>
              </div>
              
              {/* Track 3 */}
              <div className="bg-gray-900 rounded-xl p-8 border border-csgirlies-pink/30">
                <h3 className="text-2xl font-bold mb-4 text-csgirlies-pink">🌟 The Creative Strand: Collaborate with the Machine</h3>
                <p className="text-gray-300">
                  Build tools that enhance, detect, or collaborate on art. This could be AI-assisted music and video or detectors that identify AI-generated images. Blur the line between tool and co-creator, but make sure the soul stays human.
                </p>
              </div>
            </div>
          </div>
          
          {/* Prizes Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-csgirlies-pink">
              🎁 Prizes, Mentorship & Fun Stuff
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mentors */}
              <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-2">AI Mentors</h3>
                <p>
                  1-on-1 chats with mentors working in the AI industry. They'll help guide your project and offer career advice.
                </p>
              </div>
              
              {/* Prizes */}
              <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">Track Prizes</h3>
                <p>
                  Prizes for each track, plus a Community Favorite award 👀👀
                </p>
              </div>
              
              {/* Community */}
              <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">CS Girlies Discord</h3>
                <p>
                  Meet teammates, make new friends, get inspired, and stay connected long after the hackathon ends 🙂‍↕️
                </p>
              </div>
            </div>
          </div>
          
          {/* Who Can Join Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-csgirlies-pink">
              😄 Who can join?
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Anyone who loves building. Whether you're a beginner, a design thinker, a researcher, or a hard-core coder, this space is yours. You don't need to be an AI expert. Just bring your edge, your curiosity, and a little bit of human chaos.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mb-16">
            <p className="text-lg mb-8">Registration form coming soon!</p>
            <Button className="cs-button text-lg px-8 py-6" disabled>
              REGISTER
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HackathonPage;
