import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Window from "@/components/Window";

const HackathonPromo = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="cs-container">
        <div className="max-w-5xl mx-auto relative">
          <Window title="hackathon-promo.txt">
            <div className="relative overflow-hidden">
              {/* Badge */}
          
              
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-extrabold text-csgirlies-pink mb-4">
                  H.I. vs A.I. — CS Girlies Hackathon
                </h2>
                <p className="text-xl md:text-2xl font-light">
                  🗓️ July 25–27, 2025 • 📍Online • 48 hours • Global
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
                Can human intelligence still outshine artificial intelligence? Join us for a two-day global hackathon exploring the beautifully chaotic intersection of raw human brilliance and machine intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/hackathon-recap">
                  <Button className="cs-button text-lg px-6 py-3 w-full sm:w-auto">
                    How'd it go? Check it out!
                  </Button>
                </Link>
               
              </div>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
};

export default HackathonPromo;
