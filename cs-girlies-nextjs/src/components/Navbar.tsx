import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-french-rose">
            HOME
          </Link>
          <a href="https://hcb.hackclub.com/donations/start/computer-science-girlies" className="text-white hover:text-french-rose" target="_blank" rel="noopener noreferrer">
            DONATE
          </a>
        </div>

        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/logo.png" 
            width={60} 
            height={60} 
            alt="Computer Science Girlies Logo"
            className="rounded-full"
          />
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/resources" className="text-white hover:text-french-rose">
            RESOURCES
          </Link>
          <Link href="/our-story" className="text-white hover:text-french-rose">
            OUR STORY
          </Link>
          <a href="https://discord.com/servers/computer-science-girlies-1116490225615634503" className="text-white hover:text-french-rose font-bold" target="_blank" rel="noopener noreferrer">
            JOIN
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
