import Image from 'next/image';
import Link from 'next/link';
import TeamMember from '@/components/TeamMember';

interface TeamMemberType {
  name: string;
  role: string;
  image: string;
  description: string;
  link?: string;
}

export default function MeetTheTeam() {
  // Sample team member data - in a real site, this might come from a CMS or API
  const teamMembers: TeamMemberType[] = [
    {
      name: "Jane Smith",
      role: "Founder & Executive Director",
      image: "/images/team/founder.jpg",
      description: "Jane founded Computer Science Girlies while studying Computer Science at Stanford. She's passionate about creating equitable access to tech education and has previously worked at Google and Microsoft.",
      link: "https://linkedin.com/"
    },
    {
      name: "Aisha Johnson",
      role: "Head of Operations",
      image: "/images/team/operations.jpg",
      description: "Aisha oversees the day-to-day operations of CS Girlies. With a background in project management and a degree in Computer Engineering, she ensures our programs run smoothly and efficiently.",
    },
    {
      name: "Sarah Lee",
      role: "Education Program Director",
      image: "/images/team/education.jpg",
      description: "Sarah develops our educational resources and curricula. She holds a PhD in Computer Science Education and has taught at university level for over 5 years.",
    },
    {
      name: "Maria Rodriguez",
      role: "Community Manager",
      image: "/images/team/community.jpg",
      description: "Maria manages our online community and events. She's passionate about creating inclusive spaces for women in tech and has a background in community organizing.",
    },
    {
      name: "Emily Chen",
      role: "Technical Advisor",
      image: "/images/team/technical.jpg",
      description: "Emily provides technical guidance for our initiatives. As a senior software engineer at a major tech company, she brings industry experience and technical know-how to our team.",
    },
    {
      name: "Zoe Williams",
      role: "Partnerships Coordinator",
      image: "/images/team/partnerships.jpg",
      description: "Zoe manages relationships with our corporate partners and sponsors. With a background in business development, she helps secure funding and opportunities for our community.",
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Meet The Team</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The passionate individuals behind Computer Science Girlies who work tirelessly to support women in tech.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}
                link={member.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 px-4 bg-french-rose">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Want to Join Our Team?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            We're always looking for passionate volunteers to help us grow and support our community!
          </p>
          <Link href="/volunteer" className="bg-white text-french-rose font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors">
            VIEW OPPORTUNITIES
          </Link>
        </div>
      </section>
    </div>
  );
}
