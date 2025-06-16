
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="bg-black py-24 md:py-32 min-h-screen flex items-center justify-center">
      <div className="cs-container text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
          Computer Science Girlies
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Redefining Learning, Community, and Diversity in Technology
        </p>
        <Button 
          className="cs-button text-lg md:text-xl px-8 py-6 md:px-10 md:py-7 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
          onClick={() => window.open(LINKS.DISCORD, "_blank")}
        >
          JOIN THE COMMUNITY!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
