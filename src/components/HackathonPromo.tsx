import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HackathonPromo = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="cs-container">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-csgirlies-pink/10 to-black border border-csgirlies-pink/30 p-8 md:p-12 relative overflow-hidden">
          {/* Badge */}
          <div className="absolute -right-10 top-8 rotate-12 bg-csgirlies-pink text-black font-bold text-sm px-10 py-1 shadow-lg">
            UPCOMING    
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-csgirlies-pink mb-4">
              H.I. vs A.I. — CS Girlies Hackathon
            </h2>
            <p className="text-xl md:text-2xl font-light">
              🗓️ July 19–20, 2025 • 📍Online • 48 hours • Global
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
            Can human intelligence still outshine artificial intelligence? Join us for a two-day global hackathon exploring the beautifully chaotic intersection of raw human brilliance and machine intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/hackathon">
              <Button className="cs-button text-lg px-6 py-3 w-full sm:w-auto">
                LEARN MORE
              </Button>
            </Link>
            <Button className="bg-white/10 hover:bg-white/20 text-csgirlies-pink border border-csgirlies-pink text-lg px-6 py-3 w-full sm:w-auto">
              REGISTER SOON
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonPromo;
