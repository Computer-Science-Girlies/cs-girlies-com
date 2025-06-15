import Image from 'next/image';
import Link from 'next/link';

interface VolunteerRole {
  title: string;
  description: string;
  skills: string[];
  commitment: string;
  isOpen: boolean;
}

export default function VolunteerOpportunities() {
  // Sample volunteer opportunities - in a real site, this might come from a CMS or API
  const opportunities: VolunteerRole[] = [
    {
      title: "Workshop Facilitator",
      description: "Lead virtual workshops on technical topics like web development, data science, or mobile app development. Create materials and provide guidance to participants during sessions.",
      skills: ["Teaching experience", "Technical expertise in topic area", "Clear communication"],
      commitment: "2-4 hours per month",
      isOpen: true
    },
    {
      title: "Mentorship Program Coordinator",
      description: "Help organize and manage our mentorship program. Match mentors with mentees, track progress, gather feedback, and ensure the program runs smoothly.",
      skills: ["Organization", "Communication", "Project management"],
      commitment: "5-7 hours per month",
      isOpen: true
    },
    {
      title: "Content Creator",
      description: "Create educational content for our blog, social media, and newsletter. Topics include coding tutorials, career advice, and tech industry insights.",
      skills: ["Writing", "Technical knowledge", "Creativity"],
      commitment: "3-6 hours per month",
      isOpen: true
    },
    {
      title: "Community Moderator",
      description: "Help moderate our Discord community. Welcome new members, maintain a positive environment, and ensure community guidelines are followed.",
      skills: ["Communication", "Conflict resolution", "Community management"],
      commitment: "4-8 hours per month",
      isOpen: true
    },
    {
      title: "Event Coordinator",
      description: "Assist in planning and executing virtual events like hackathons, panel discussions, and networking meetups. Coordinate with speakers and manage event logistics.",
      skills: ["Event planning", "Time management", "Attention to detail"],
      commitment: "6-10 hours per month",
      isOpen: false
    },
    {
      title: "Technical Support",
      description: "Provide technical assistance with our website, Discord bot, and other digital tools. Help troubleshoot issues and implement improvements.",
      skills: ["Web development", "Problem-solving", "Technical knowledge"],
      commitment: "Varies based on projects",
      isOpen: false
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Volunteer Opportunities</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our team of volunteers and help make a difference in the lives of women in tech.
          </p>
        </div>
      </section>

      {/* About Volunteering Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-french-rose">Why Volunteer With Us?</h2>
              <p className="mb-4">
                By volunteering with Computer Science Girlies, you'll be directly contributing to our mission of empowering 
                young women in tech. Your skills and expertise can help open doors for the next generation of female technologists.
              </p>
              <p className="mb-4">
                As a volunteer, you'll also gain:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Leadership experience in the tech education space</li>
                <li>Networking opportunities with like-minded professionals</li>
                <li>The chance to develop and refine your own skills</li>
                <li>A rewarding experience knowing you're making a difference</li>
              </ul>
            </div>
            <div className="relative h-80">
              <Image 
                src="/images/volunteer.jpg" 
                alt="Volunteers working together" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-french-rose text-center">Current Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((role, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${role.isOpen ? 'bg-black' : 'bg-gray-800'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{role.title}</h3>
                  <span className={`px-3 py-1 rounded text-sm font-medium ${role.isOpen ? 'bg-green-900 text-green-100' : 'bg-gray-700 text-gray-300'}`}>
                    {role.isOpen ? 'Open' : 'Filled'}
                  </span>
                </div>
                <p className="mb-4">{role.description}</p>
                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-400">Skills Needed:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {role.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-gray-400">Time Commitment:</span> {role.commitment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-french-rose">How to Apply</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Interested in volunteering? Join our Discord community and let us know which role you're interested in!
            Our team will reach out to discuss next steps.
          </p>
          <a 
            href="https://discord.com/servers/computer-science-girlies-1116490225615634503" 
            className="pink-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            JOIN OUR DISCORD
          </a>
        </div>
      </section>
    </div>
  );
}
