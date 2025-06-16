
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  return (
    <section className="bg-cover bg-center py-16 md:py-32" style={{ backgroundImage: "url('/public/lovable-uploads/b6108926-0c3b-40e5-a862-320d86b1e621.png')" }}>
      <div className="cs-container text-center">
        <div className="bg-black bg-opacity-70 py-12 px-6 md:py-16 md:px-12 rounded-lg">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            It's a wrap!
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            The CS Girlies were just at Tech Crunch Disrupt 2024! Check out our blog to see what we were up to!
          </p>
          <Button className="cs-button">
            BLOG
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
