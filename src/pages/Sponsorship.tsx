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
                <h1 className="font-righteous text-5xl md:text-7xl font-bold mb-2"> AI vs H.I. Hackathon</h1>
                <p className="text-xl md:text-2xl text-white mb-4">Sponsor Perks & Packages</p>
                <p className="text-lg md:text-xl mb-8">july 25–27, 2025 | 48 hrs | global + virtual</p>
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
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-black border-b-2 border-csgirlies-pink">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Perks</th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-csgirlies-pink">🧃 Human Sponsor ($500)</th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-csgirlies-pink">🌐 Global Signal ($1K)</th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-csgirlies-pink">🪩 Unmistakably Human ($2.5K)</th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-csgirlies-pink">🧠 Intellectual Rebel ($5K)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700 bg-black">
                    <tr className="bg-gradient-to-r from-csgirlies-pink to-csgirlies-pink-dark">
                      <td colSpan={5} className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6">Recruiting</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Resume Book Access</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Coffee Chat Interest Form</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Priority matching</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Host a Pre-Event Workshop</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>

                    <tr className="bg-gradient-to-r from-csgirlies-pink to-csgirlies-pink-dark">
                      <td colSpan={5} className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6">Marketing</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Logo on Website & Devpost</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Premium placement</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Social Media Promo</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">1x story</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">1x post + story</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Custom campaign</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Email Mention</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Grouped</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Grouped</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Dedicated</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Featured placement</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Dedicated Slack Channel</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Opening Ceremony Shoutout</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Group mention</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">1 min</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">2 min</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">5 min</td>
                    </tr>

                    <tr className="bg-gradient-to-r from-csgirlies-pink to-csgirlies-pink-dark">
                      <td colSpan={5} className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6">Technology & Challenge Sponsorship</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Sponsor a Prize</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Feature in Hacker Starter Pack</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Host a Mini-Challenge or Side Quest</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">API Workshop or Tech Demo</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Present Prize on Final Ceremony Stream</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>

                    <tr className="bg-gradient-to-r from-csgirlies-pink to-csgirlies-pink-dark">
                      <td colSpan={5} className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6">Community Integration</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Participate in Judging</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Invite to Discord Server</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Join “Meet the Sponsors” Community Call</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">—</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">✔️</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-center">Priority feature</td>
                    </tr>
                  </tbody>
                </table>
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
