import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import PhotoMarquee, { GIRLIES_IMAGES } from "@/components/PhotoMarquee";
import TypewriterText from "@/components/TypewriterText";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dim radial glow centered on the heading */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          width: "900px",
          height: "520px",
          background:
            "radial-gradient(ellipse at center, rgba(255,71,126,0.18) 0%, rgba(255,71,126,0.06) 45%, transparent 75%)",
          filter: "blur(24px)",
        }}
      />

      <div className="cs-container text-center w-full relative z-10">
        <PhotoMarquee
          images={GIRLIES_IMAGES}
          direction="left"
          className="mb-12 md:mb-20 lg:mb-24"
        />

        <TypewriterText
          text="Computer Science Girlies"
          delay={500}
          speed={80}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 block"
          onComplete={() => {}}
        />
        <TypewriterText
          text="Redefining Learning, Community, and Diversity in Technology"
          delay={2500}
          speed={50}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300 block"
        />
        <Button
          className="cs-button text-lg md:text-xl px-8 py-6 md:px-10 md:py-7 animate-fade-in"
          style={{ animationDelay: "4500ms" }}
          onClick={() => window.open(LINKS.DISCORD, "_blank")}
        >
          JOIN THE COMMUNITY
        </Button>

        <PhotoMarquee
          images={GIRLIES_IMAGES}
          direction="right"
          className="mt-12 md:mt-20 lg:mt-24 mb-6"
        />
      </div>
    </section>
  );
};

export default HeroSection;
