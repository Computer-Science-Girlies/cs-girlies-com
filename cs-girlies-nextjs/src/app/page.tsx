import Image from 'next/image';
import Link from 'next/link';

const QuoteSection = ({ quote, author, authorTitle }: { quote: string, author: string, authorTitle: string }) => (
  <div className="bg-gradient-to-r from-rose-pompadour to-bright-pink py-16 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-6">{quote}</h2>
      <p className="text-white text-lg">
        {author}, {authorTitle}
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Computer Science Girlies</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Empowering Gen Z women in tech around the world to chase their dreams, whatever those dreams may look like.
          </p>
          <a href="https://discord.com/servers/computer-science-girlies-1116490225615634503" className="pink-button" target="_blank" rel="noopener noreferrer">
            JOIN THE TEAM!
          </a>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection 
        quote="If your dreams do not scare you, they are not big enough."
        author="Ellen Johnson Sirleaf"
        authorTitle="First Female Head of State in Africa"
      />

      {/* Our Story Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="section-title">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Big Vision</h3>
              <p className="mb-4">
                We're here to empower Gen Z women in tech around the world to chase their dreams, whatever those dreams may look like:
              </p>
              <ul className="list-none space-y-2 mb-6">
                <li>🖥️ Building an amazing product</li>
                <li>🎓 Earning a computer science degree</li>
                <li>💼 Landing their dream job</li>
                <li>🤝 Networking at a conference</li>
              </ul>
              <p className="mb-4">
                No dream is too big or too small. We want every young woman to know that her goals in tech are possible.
              </p>
              <p className="mb-6">
                And not just possible—we're here to make those dreams achievable by giving her two essential things:
              </p>
              <ul className="list-none space-y-2">
                <li>📚 All the resources she needs to succeed.</li>
                <li>👭 A supportive community that truly has her back.</li>
              </ul>
            </div>
            <div className="relative h-80 w-full">
              <Image 
                src="/images/library-study.jpg" 
                alt="Student studying in library" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/our-story" className="pink-button">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Our Partners</h2>
          <div className="flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
              <Image 
                src="/images/techcrunch-logo.png" 
                alt="TechCrunch Disrupt Logo" 
                width={200} 
                height={80} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 px-4 bg-french-rose">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join our community of 12,000+ members</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Connect with like-minded women in tech, access resources, and get support for your tech journey.
          </p>
          <a href="https://discord.com/servers/computer-science-girlies-1116490225615634503" className="bg-white text-french-rose font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors" target="_blank" rel="noopener noreferrer">
            JOIN THE TEAM!
          </a>
        </div>
      </section>
    </div>
  );
}
