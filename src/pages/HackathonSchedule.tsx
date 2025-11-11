import React from 'react';
import Window from '@/components/Window';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { LINKS } from '@/lib/constants';

type Workshop = {
  speaker: string;
  title: string;
  when: string;
  link?: string;
  email?: string;
};

const schedule = [
  {
    label: 'Friday Nov 14 @ 12 PM EST',
    detail: 'Opening Ceremony + Hacking Starts',
  },
  {
    label: 'Sunday Nov 16 @ 12 PM EST',
    detail: 'Submissions Due on DevPost',
  },
  {
    label: 'Wednesday Nov 19 @ 3 PM EST',
    detail: 'Winners Announced on Discord',
  },
];

const workshops: Workshop[] = [
  { speaker: 'Samhita Kolluri', link: 'https://www.linkedin.com/in/samhita-kolluri/', email: 'samhita.kolluri@gmail.com', title: 'GenAI in Action: From Idea to Prototype', when: 'Nov 15 • 3 PM EST' },
  { speaker: 'Shanine Gmyrek', title: 'How to Design the Coolest Web Apps!', when: 'Nov 12 • 2 PM EST' },
  { speaker: 'Satyam Singh', link: 'http://linkedin.com/in/satyamsingh2003', email: 'satyamsingh5076@gmail.com', title: 'How to Win a Hackathon', when: 'Nov 15 • 12 PM EST' },
  { speaker: 'Maryam Bellakbira', title: 'Careers in Biotech', when: 'Nov 16 • 1 PM EST' },
  { speaker: 'Ryan Ning', link: 'http://linkedin.com/in/ryan-ning', email: 'ryan.ning@mail.utoronto.ca', title: 'How to Win a Hackathon', when: 'Nov 15 • 12 PM EST' },
  { speaker: 'Ryan Ning', link: 'http://linkedin.com/in/ryan-ning', email: 'ryan.ning@mail.utoronto.ca', title: 'How to Pitch', when: 'Nov 16 • 9 AM EST' },
  { speaker: 'Lana Yepifanova', link: 'https://www.instagram.com/lana_yaps/', email: 'yepifanova.lana@gmail.com', title: 'How to Sell an App', when: 'Nov 13 • 2 PM EST' },
  { speaker: 'Michelle Lawson', title: 'How to Build in Public', when: 'Nov 17 • 3 PM EST' },
  { speaker: 'Xinny Lao', title: 'Using LLMs as Teaching/Learning Agents', when: 'Nov 14 • 6 PM EST' },
];

type CalEvent = {
  date: string; // YYYY-MM-DD
  time: string; // e.g., "12:00 PM"
  title: string;
  kind: 'main' | 'workshop';
  speaker?: string;
  link?: string;
  email?: string;
};

const events: CalEvent[] = [
  // Main schedule
  { date: '2025-11-14', time: '12:00 PM', title: 'Opening Ceremony + Hacking Starts', kind: 'main', link: 'https://discord.com/events/1116490225615634503/1426804875383013386' },
  { date: '2025-11-16', time: '12:00 PM', title: 'Submissions Due on Devpost', kind: 'main', link: 'https://cs-girlies-november.devpost.com' },
  { date: '2025-11-19', time: '03:00 PM', title: 'Winners Announced on Discord', kind: 'main', link: 'https://discord.gg/csgirlies?event=1437541121080164563' },
  // Workshops
  { date: '2025-11-12', time: '02:00 PM', title: 'How to Design the Coolest Web Apps!', kind: 'workshop', speaker: 'Shanine Gmyrek', link: 'https://discord.com/events/1116490225615634503/1437532823409000539' },
  { date: '2025-11-13', time: '10:00 AM', title: 'Building Great Docs to Build Great Products', kind: 'workshop', speaker: 'Tal Gluck (GitBook)', link: 'https://discord.com/events/1116490225615634503/1437788225241485332' },
  { date: '2025-11-13', time: '02:00 PM', title: 'How to Sell an App', kind: 'workshop', speaker: 'Lana Yepifanova', link: 'https://discord.com/events/1116490225615634503/1430108720423112764', email: 'yepifanova.lana@gmail.com' },
  { date: '2025-11-14', time: '06:00 PM', title: 'Using LLMs as Teaching/Learning Agents', kind: 'workshop', speaker: 'Xinny Lao', link: 'https://discord.com/events/1116490225615634503/1437537268725448834' },
  { date: '2025-11-15', time: '12:00 PM', title: 'How to Win a Hackathon', kind: 'workshop', speaker: 'Satyam Singh & Ryan Ning', link: 'https://discord.com/events/1116490225615634503/1430099173658591292' },
  { date: '2025-11-15', time: '03:00 PM', title: 'GenAI in Action: From Idea to Prototype', kind: 'workshop', speaker: 'Samhita Kolluri', link: 'https://discord.com/events/1116490225615634503/1437531551481987115', email: 'samhita.kolluri@gmail.com' },
  { date: '2025-11-16', time: '09:00 AM', title: 'How to Pitch', kind: 'workshop', speaker: 'Ryan Ning', link: 'https://discord.com/events/1116490225615634503/1437533868445008004', email: 'ryan.ning@mail.utoronto.ca' },
  { date: '2025-11-16', time: '01:00 PM', title: 'Careers in Biotech', kind: 'workshop', speaker: 'Maryam Bellakbira', link: 'https://discord.com/events/1116490225615634503/1430094177265258587' },
  { date: '2025-11-17', time: '03:00 PM', title: 'How to Build in Public', kind: 'workshop', speaker: 'Michelle Lawson', link: 'https://discord.com/events/1116490225615634503/1437534770228625408' },
];

const dateRange = (start: string, end: string) => {
  const dates: string[] = [];
  let d = new Date(start + 'T00:00:00');
  const e = new Date(end + 'T00:00:00');
  while (d <= e) {
    const iso = d.toISOString().slice(0, 10);
    dates.push(iso);
    d.setDate(d.getDate() + 1);
  }
  return dates;
};

const formatDateLabel = (iso: string) => {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

const HackathonSchedulePage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-roboto-mono text-white p-4 md:p-8 relative flex flex-col">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(white 0.5px, transparent 0)',
          backgroundSize: '15px 15px',
        }}
      ></div>

      <div className="relative w-full max-w-7xl mx-auto flex-1">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="CS Girlies Logo" className="h-6 w-6" />
            <span className="font-bold text-white">CS Girlies</span>
          </Link>
        </div>

        <Window
          title="Schedule.md"
          titleActions={
            <Link to="/hackathon" className="text-gray-400 hover:text-white transition-colors">
              Go Back
            </Link>
          }
        >
          <div className="py-8">
            <style>{`@keyframes blink{50%{opacity:0}}`}</style>
            <h1 className="font-righteous text-4xl md:text-6xl text-center mb-1">
              🗓️ Schedule
              <span
                aria-hidden="true"
                className="ml-1 text-csgirlies-pink"
                style={{ display: 'inline-block', animation: 'blink 1s steps(1,end) infinite' }}
              >
                _
              </span>
            </h1>
            <p className="text-center text-gray-300 mb-8 text-sm md:text-base">All times in EST</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {dateRange('2025-11-12', '2025-11-19').map((iso) => {
                const dayEvents = events
                  .filter((ev) => ev.date === iso)
                  .sort((a, b) => a.time.localeCompare(b.time));
                return (
                  <div key={iso} className="rounded-lg border border-csgirlies-pink/40 bg-gradient-to-b from-csgirlies-pink/10 to-transparent p-4 min-h-[180px] flex flex-col">
                    <div className="flex items-baseline justify-between mb-3">
                      <p className="font-righteous text-base">{formatDateLabel(iso)}</p>
                      {dayEvents.length > 0 ? (
                        <span className="text-[10px] text-gray-400">{dayEvents.length} event{dayEvents.length > 1 ? 's' : ''}</span>
                      ) : (
                        <span className="text-[10px] text-gray-600">—</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      {dayEvents.map((ev, idx) => {
                        const isMain = ev.kind === 'main';
                        const baseClasses = isMain
                          ? 'bg-csgirlies-pink-dark border border-csgirlies-pink rounded-md p-3 bg-gradient-to-b from-white/10 to-transparent'
                          : 'bg-black/60 border border-gray-700 rounded-md p-2 bg-gradient-to-b from-white/5 to-transparent';
                        const interactive = ' block transform-gpu transition-transform duration-150 focus:outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-csgirlies-pink/40 hover:scale-[1.01] md:hover:scale-[1.015] focus:scale-[1.01] hover:z-10 focus:z-10 hover:shadow-[0_0_24px_rgba(255,64,129,0.35)] focus:shadow-[0_0_24px_rgba(255,64,129,0.35)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]';
                        if (ev.link) {
                          return (
                            <a
                              key={idx}
                              href={ev.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={baseClasses + ' cursor-pointer group' + interactive}
                            >
                              <div className="flex items-center justify-between">
                                <span className={isMain ? 'text-xs text-white font-bold' : 'text-xs text-gray-300'}>{ev.time}</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700 text-gray-100 group-hover:bg-csgirlies-pink/30">
                                  {isMain ? 'Event' : 'Workshop'}
                                </span>
                              </div>
                              <p className={isMain ? 'text-sm md:text-base text-white mt-1 font-extrabold' : 'text-sm text-white mt-1 font-medium'}>
                                {ev.title}
                              </p>
                              {ev.speaker && (
                                <p className={isMain ? 'text-xs text-white/90 font-semibold' : 'text-xs text-gray-300'}>{ev.speaker}</p>
                              )}
                            </a>
                          );
                        }
                        return (
                          <div
                            key={idx}
                            className={baseClasses + interactive}
                          >
                            <div className="flex items-center justify-between">
                              <span className={isMain ? 'text-xs text-white font-bold' : 'text-xs text-gray-300'}>{ev.time}</span>
                              {!isMain && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700 text-gray-100">Workshop</span>
                              )}
                            </div>
                            <p className={isMain ? 'text-sm md:text-base text-white mt-1 font-extrabold' : 'text-sm text-white mt-1 font-medium'}>
                              {ev.title}
                            </p>
                            {ev.speaker && (
                              <p className={isMain ? 'text-xs text-white/90 font-semibold' : 'text-xs text-gray-300'}>{ev.speaker}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-6">
              <a
                href="https://cs-girlies-november.devpost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full text-white font-bold transition-colors border border-csgirlies-pink/80 bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-dark ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_0_24px_rgba(255,64,129,0.35)] hover:from-csgirlies-pink/95 hover:to-csgirlies-pink-dark focus:outline-none focus:ring-2 focus:ring-csgirlies-pink/40"
              >
                Join the Hackathon!
              </a>
            </div>

            <div className="text-center mt-10 text-sm text-gray-300">
              <p>
                Submissions on Devpost: {' '}
                <a href="https://cs-girlies-november.devpost.com" target="_blank" rel="noopener noreferrer" className="underline text-csgirlies-pink">cs-girlies-november.devpost.com</a>
              </p>
              <p className="mt-1">
                Winners announced on Discord: {' '}
                <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="underline text-csgirlies-pink">Join Discord</a>
              </p>
            </div>
          </div>
        </Window>
      </div>

      <div className="-mx-4 md:-mx-8 pt-8 md:pt-10 lg:pt-12 mt-auto">
        <Footer className="relative z-50 w-full" />
      </div>
    </div>
  );
};

export default HackathonSchedulePage;
