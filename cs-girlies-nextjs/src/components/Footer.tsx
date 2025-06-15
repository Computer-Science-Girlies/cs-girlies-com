import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-xl mb-2">Computer Science Girlies</h3>
          <p className="mb-2">+1 (802)-488-5250</p>
          <p className="text-sm">Copyright © {new Date().getFullYear()} Computer Science Girlies · All Rights Reserved.</p>
          <p className="text-sm mt-2">
            Computer Science Girlies is fiscally sponsored by {' '}
            <Link href="https://hackclub.com" className="text-french-rose hover:underline">
              Hack Club
            </Link>
            , a 501(c)(3) nonprofit. Our registered EIN is 81-2908499.
          </p>
        </div>
        
        <div className="flex justify-center space-x-8">
          <a href="https://hcb.hackclub.com/donations/start/computer-science-girlies" className="text-white hover:text-french-rose" target="_blank" rel="noopener noreferrer">
            Donate
          </a>
          <Link href="/meet-the-team" className="text-white hover:text-french-rose">
            Meet The Team
          </Link>
          <Link href="/volunteer" className="text-white hover:text-french-rose">
            Volunteer Opportunities
          </Link>
          <a href="https://discord.com/servers/computer-science-girlies-1116490225615634503" className="text-white hover:text-french-rose" target="_blank" rel="noopener noreferrer">
            Join Community
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
