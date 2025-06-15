import Image from 'next/image';
import Link from 'next/link';

export default function OurStory() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            How Computer Science Girlies is changing the landscape of tech for Gen Z women around the world.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-french-rose">The Vision</h2>
              <p className="mb-4">
                Computer Science Girlies was founded with a clear vision: to create a space where young women in tech could find community, 
                resources, and support to achieve their dreams in the tech industry.
              </p>
              <p className="mb-4">
                We believe that representation matters. By showcasing diverse women in tech, we aim to inspire the next generation 
                of female developers, designers, founders, and tech leaders.
              </p>
              <p className="mb-4">
                Our community is built on three core pillars:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Access to educational resources and opportunities</li>
                <li>Mentorship from experienced women in the field</li>
                <li>Peer support through our vibrant online community</li>
              </ul>
            </div>
            <div className="relative h-80">
              <Image 
                src="/images/vision.jpg" 
                alt="Women collaborating on a tech project" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-french-rose text-center">Our Journey</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">2021</h3>
                <p>Computer Science Girlies began as a small online study group, connecting students who were taking CS courses remotely during the pandemic.</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">2022</h3>
                <p>We expanded to a Discord server with over 5,000 members, launched our first mentorship program, and secured initial fiscal sponsorship.</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Today</h3>
                <p>With over 12,000 community members, we're running virtual events, providing scholarships, and connecting young women with internship and job opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-french-rose">Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            To democratize access to tech education and career opportunities for young women around the world, 
            fostering a more diverse and inclusive technology industry for future generations.
          </p>
          <div className="mt-10">
            <a href="https://discord.com/servers/computer-science-girlies-1116490225615634503" className="pink-button mr-4" target="_blank" rel="noopener noreferrer">
              JOIN OUR COMMUNITY
            </a>
            <a href="https://hcb.hackclub.com/donations/start/computer-science-girlies" className="bg-transparent border-2 border-french-rose text-french-rose py-3 px-6 rounded hover:bg-french-rose hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              SUPPORT OUR MISSION
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
