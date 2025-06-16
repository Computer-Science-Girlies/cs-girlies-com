
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="cs-container text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
          Computer Science Girlies
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Redefining Learning, Community, and Diversity in Technology
        </p>
        <Button 
          className="cs-button text-lg animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          JOIN THE COMMUNITY!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
