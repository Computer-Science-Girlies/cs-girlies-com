
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";

const DonatePage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      <div className="py-12 md:py-16">
        <div className="cs-container">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-csgirlies-pink mb-8">
            Support Our Mission
          </h1>
          
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">
            Your donation helps us continue our work empowering young women in tech through education, community, and increased access to opportunities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">One-Time Donation</h3>
              <p className="text-gray-300 mb-6">
                Support our mission with a one-time contribution of any amount.
              </p>
              <Button 
                className="cs-button w-full"
                onClick={() => window.open(LINKS.DONATE, "_blank")}
              >
                DONATE NOW
              </Button>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 text-center border-2 border-csgirlies-pink relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-csgirlies-pink px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Monthly Support</h3>
              <p className="text-gray-300 mb-6">
                Provide ongoing support with a monthly donation that helps us plan for the future.
              </p>
              <Button 
                className="cs-button w-full"
                onClick={() => window.open(LINKS.DONATE, "_blank")}
              >
                BECOME A SUPPORTER
              </Button>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Corporate Sponsorship</h3>
              <p className="text-gray-300 mb-6">
                Partner with us to support diversity in tech while gaining visibility with our community.
              </p>
              <Button 
                className="cs-button w-full"
                onClick={() => window.open(`mailto:team@csgirlies.com`, "_blank")}
              >
                CONTACT US
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">How Your Donation Makes an Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1 text-2xl">💻</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Educational Resources</h4>
                    <p className="text-gray-300">
                      Your donation helps us create engaging, accessible educational content that makes learning tech concepts fun and approachable.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1 text-2xl">🎓</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Scholarships</h4>
                    <p className="text-gray-300">
                      We provide scholarships to help talented women pursue education and training in technology fields.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1 text-2xl">🌐</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Community Building</h4>
                    <p className="text-gray-300">
                      Your support enables us to maintain and grow our online community platforms where women in tech can connect and support each other.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1 text-2xl">🚀</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Mentorship Programs</h4>
                    <p className="text-gray-300">
                      We connect young women with experienced mentors who can guide them as they navigate their tech careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DonatePage;
