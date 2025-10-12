import { Button } from "@/components/ui/button";
import Window from "@/components/Window";

const NovemberHackathonPromo = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="cs-container">
        <div className="max-w-5xl mx-auto relative">
          <Window title="november-hackathon.txt">
            <div className="relative overflow-hidden">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-extrabold text-csgirlies-pink mb-4">
                  November Hackathon Coming Soon!
                </h2>
                <p className="text-xl md:text-2xl font-light">
                  🗓️ November 2024 • 📍Online • Global Event
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
                Get ready for another incredible hackathon experience! Join fellow CS Girlies from around the world for innovation, collaboration, and amazing prizes. Stay tuned for more details!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="cs-button text-lg px-6 py-3 w-full sm:w-auto"
                  onClick={() => window.open("/hackathon", "_self")}
                >
                  Learn More & Register
                </Button>
              </div>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
};

export default NovemberHackathonPromo;