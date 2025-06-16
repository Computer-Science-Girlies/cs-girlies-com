
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurStorySection from "@/components/OurStorySection";
import RedefiningSection from "@/components/RedefiningSection";
import QuoteSection from "@/components/QuoteSection";

const OurStoryPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      <div className="py-12 md:py-16">
        <div className="cs-container">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-csgirlies-pink mb-16">
            Our Story
          </h1>
        </div>
        
        <OurStorySection />
        
        <RedefiningSection number="1" title="Learning">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Engaging and Memorable Content:</h3>
              <p className="text-gray-300">
                We transform complex and unfamiliar tech concepts into engaging, relatable content. By linking new ideas to cute and familiar themes, we make learning not just informative but enjoyable and memorable.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Learning Where They Are:</h3>
              <p className="text-gray-300">
                By sharing educational videos on platforms like Instagram and TikTok, we're meeting Gen Z where they already are, making education accessible and convenient.
              </p>
            </div>
          </div>
        </RedefiningSection>
        
        <RedefiningSection number="2" title="Community">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">A Global Sisterhood:</h3>
              <p className="text-gray-300">
                Many of our members are one of the few women in their local tech environments, feeling isolated in classes or workplaces dominated by men. We're redefining what community looks like by providing an online space where they can connect, share, and support each other.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Interactive Support Network:</h3>
              <p className="text-gray-300">
                Through our Discord server, the girlies can chat, celebrate wins, seek advice, and even enjoy movie nights together. We're fostering a sense of belonging that transcends geographical boundaries.
              </p>
            </div>
          </div>
        </RedefiningSection>
        
        <RedefiningSection number="3" title="Diversity">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Access to Opportunity:</h3>
              <p className="text-gray-300">
                We bridge the gap between talented young women and the opportunities that often remain hidden within elite circles. By sourcing internships, scholarships, and events, we place them right in front of the girlies via Discord, Instagram, and TikTok, ensuring that no opportunity is out of reach due to lack of visibility.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Empowering the Underrepresented:</h3>
              <p className="text-gray-300">
                By giving access to resources and opportunities, we're enabling Gen Z women from all backgrounds to step into the tech world confidently.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We understand the challenges of feeling alone in the tech world. That's why we're here—to ensure that every girlie knows she's part of a supportive, empowering community that <strong>believes in her potential and can help her achieve it!</strong>
            </p>
          </div>
        </RedefiningSection>
        
        <QuoteSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default OurStoryPage;
