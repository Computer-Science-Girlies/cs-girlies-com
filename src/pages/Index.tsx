
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import SocialMediaStats from "@/components/SocialMediaStats";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HackathonPromo from "@/components/HackathonPromo";
import EventsSection from "@/components/EventsSection";
import OurStorySection from "@/components/OurStorySection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhatWeDoSection />
      <SocialMediaStats />
      <HackathonPromo />
      <TestimonialCarousel />
      <EventsSection />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default Index;
