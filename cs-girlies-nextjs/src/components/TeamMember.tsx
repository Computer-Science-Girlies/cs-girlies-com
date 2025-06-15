import Image from 'next/image';
import Link from 'next/link';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
  showMoreLink?: boolean;
}

const TeamMember = ({ name, role, image, description, showMoreLink = true }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 mb-4 relative">
        <Image
          src={image}
          alt={`${name} profile picture`}
          fill
          className="team-member-circle object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-300 mb-3">{role}</p>
      <div className="text-center text-sm mb-4">
        <p>{description}</p>
      </div>
      {showMoreLink && (
        <Link href={`/team/${name.toLowerCase().replace(/\s+/g, '-')}`} className="pink-button inline-block">
          + Show More
        </Link>
      )}
    </div>
  );
};

export default TeamMember;
