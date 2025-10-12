import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import SocialMediaStats from "@/components/SocialMediaStats";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HackathonPromo from "@/components/HackathonPromo";
import NovemberHackathonPromo from "@/components/NovemberHackathonPromo";
import WinsCarousel from "@/components/WinsCarousel";
import EventsSection from "@/components/EventsSection";
import OurStorySection from "@/components/OurStorySection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhatWeDoSection />
      <SocialMediaStats />
      <NovemberHackathonPromo />
      <HackathonPromo />
      <QuoteSection />
      <WinsCarousel />
      <div className="flex justify-center items-center py-32">  
      <Button 
          className="cs-button text-lg md:text-xl px-8 py-6 md:px-10 md:py-7 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
          onClick={() => window.open(LINKS.DISCORD, "_blank")}
        >
          JOIN THE COMMUNITY!
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
