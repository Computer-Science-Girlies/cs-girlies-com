import React from 'react';
import Window from '@/components/Window';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { LINKS } from '@/lib/constants';

const SponsorshipPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-roboto-mono text-white p-4 md:p-8 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(white 0.5px, transparent 0)',
          backgroundSize: '15px 15px',
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <div className="bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-dark border-2 border-csgirlies-pink rounded-lg shadow-lg">
              <div className="bg-black text-gray-400 px-4 py-2 flex items-center justify-between rounded-t-md">
                <div className="flex items-center space-x-4 overflow-x-auto">
                  <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
                    <img src="/logo.png" alt="CS Girlies Logo" className="h-5 w-5" />
                    <span className="font-bold text-white">CS Girlies</span>
                  </Link>
                  <a href="/hackathon"   className="hidden md:inline hover:text-white transition-colors">Hackathon Page</a>
                  <a href="/our-story"   className="hidden md:inline hover:text-white transition-colors">Our Story</a>
                  <Link to="/resources" className="hidden md:inline hover:text-white transition-colors">Resources</Link>
                </div>
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                  <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                  <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
                </div>
              </div>
              <div className="text-center py-10 px-4">
                <h1 className="font-righteous text-5xl md:text-7xl font-bold mb-2"> CS Girlies Hackathon</h1>
                <p className="text-xl md:text-2xl text-white mb-4">Sponsor Perks & Packages</p>
                <p className="text-lg md:text-xl mb-8">november 14-16, 2025 | 48 hrs | global + virtual</p>
                <p className="text-base md:text-lg">an intellectual exploration hosted by CS Girlies</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 bg-black p-6 rounded-lg border border-csgirlies-pink">
            <p> Want to sponsor? Contact us at <a href="mailto:team@cs-girlies.com" className="text-csgirlies-pink">team@cs-girlies.com</a></p>
            <a href="mailto:team@cs-girlies.com">
                <button className="bg-csgirlies-pink-dark text-white text-bold text-xl md:text-2xl font-bold py-3 px-16 md:py-4 md:px-20 rounded-full mt-4 hover:bg-csgirlies-pink transition-all duration-300 transform hover:scale-105">
                    Contact Us!!
                </button>
            </a>
          </div>

          <div className="mt-16">
            <Window title="Sponsorship Tiers">
              <div className="space-y-6">
                <div className="rounded-lg border border-csgirlies-pink/50 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-righteous text-xl">👭 ~ Community Sponsor ($500)</h3>
                      <p className="text-sm text-gray-300">Show your support, spark curiosity.</p>
                    </div>
                    <div className="text-csgirlies-pink font-bold whitespace-nowrap">$500</div>
                  </div>
                  <p className="text-sm mt-3 text-gray-200">Perfect for indie teams or small orgs supporting women in tech.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-100">
                    <li>Logo on website & Devpost</li>
                    <li>Mention in grouped email</li>
                    <li>Featured in <Link to="/hackathon-resources" className="underline">hacker starter pack</Link></li>
                    <li>Sponsor a prize!!</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-csgirlies-pink/50 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-righteous text-xl">🤝 ~ Growth Sponsor ($1K)</h3>
                      <p className="text-sm text-gray-300">Boost your reach and meet rising talent.</p>
                    </div>
                    <div className="text-csgirlies-pink font-bold whitespace-nowrap">$1,000</div>
                  </div>
                  <p className="text-sm mt-3 text-gray-200">For brands building awareness with future innovators.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-100">
                    <li>Everything in Community Sponsor, plus:</li>
                    <li>Resume book access (if you request it)</li>
                    <li>Coffee chat interest form</li>
                    <li>Social media story promo + grouped Sponsor post</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-csgirlies-pink/50 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-righteous text-xl">🌟 ~ Impact Sponsor ($2.5K)</h3>
                      <p className="text-sm text-gray-300">Put your brand at the center of the story.</p>
                    </div>
                    <div className="text-csgirlies-pink font-bold whitespace-nowrap">$2,500</div>
                  </div>
                  <p className="text-sm mt-3 text-gray-200">For companies ready to connect deeper with our community, reach more talent and get more visibility.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-100">
                    <li>Everything above, plus:</li>
                    <li>Host a pre-event workshop</li>
                    <li>Have a rep within our Discord</li>
                    <li>Participate in judging</li>
                    <li>Spotlight social post + story</li>
                    <li>Opening ceremony shoutout + promo</li>
                    <li>Option to have your own track within the hackathon</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-csgirlies-pink/50 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-righteous text-xl">🏆 ~ Premier Sponsor ($5K)</h3>
                      <p className="text-sm text-gray-300">Own the spotlight and shape the narrative!!!</p>
                    </div>
                    <div className="text-csgirlies-pink font-bold whitespace-nowrap">$5,000</div>
                  </div>
                  <p className="text-sm mt-3 text-gray-200">For visionary brands redefining community and learning in technology.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-100">
                    <li>Everything above, plus:</li>
                    <li>Premium logo placement</li>
                    <li>3 Social Media spotlight posts!!</li>
                    <li>Option to request tweaks to the overall hackathon</li>
                    <li>Option to present prize on live stream</li>
                  </ul>
                </div>
              </div>
            </Window>
          </div>

          <div className="mt-8">
            <Window title="What You Get — By Outcome">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-csgirlies-pink/40 p-4">
                  <h4 className="font-righteous text-lg mb-2">🌟 Visibility & Brand Reach</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1 text-gray-100">
                    <li>Logo on website & Devpost (premium at Premier)</li>
                    <li>Social media promo (story → post + story → custom campaign)</li>
                    <li>Featured email placement (Premier)</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-csgirlies-pink/40 p-4">
                  <h4 className="font-righteous text-lg mb-2">💬 Engagement & Community Access</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1 text-gray-100">
                    <li>Have a rep within our Discord (Impact+)</li>
                    <li>Dedicated Slack channel (Impact+)</li>
                    <li>2-min ceremony shoutout (Impact+)</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-csgirlies-pink/40 p-4">
                  <h4 className="font-righteous text-lg mb-2">💻 Talent & Recruiting</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1 text-gray-100">
                    <li>Resume book access (Growth+)</li>
                    <li>Coffee chat interest form (Growth+, priority at Premier)</li>
                    <li>Participate in judging (Impact+)</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-csgirlies-pink/40 p-4">
                  <h4 className="font-righteous text-lg mb-2">🏆 Tech & Challenge Integration</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1 text-gray-100">
                    <li>Feature in <Link to="/hackathon-resources" className="underline">hacker starter pack</Link></li>
                    <li>Host a pre-event workshop (Impact+)</li>
                    <li>Present prize on live stream (Premier)</li>
                  </ul>
                </div>
              </div>
            </Window>
          </div>

          <div className="text-center mt-12 bg-black p-6 rounded-lg border border-csgirlies-pink">
            <p> Want to sponsor? Contact us at <a href="mailto:team@cs-girlies.com" className="text-csgirlies-pink">team@cs-girlies.com</a></p>
            <a href="mailto:team@cs-girlies.com">
                <button className="bg-csgirlies-pink-dark text-white text-bold text-xl md:text-2xl font-bold py-3 px-16 md:py-4 md:px-20 rounded-full mt-4 hover:bg-csgirlies-pink transition-all duration-300 transform hover:scale-105">
                    Contact Us!!
                </button>
            </a>
          </div>

        </div>
        <Footer className="relative z-50" />
      </div>
    </div>
  );
};

export default SponsorshipPage;
