
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  Icon: LucideIcon;
  count?: number;
}

export const ResourceCard = ({ title, Icon, count }: ResourceCardProps) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-transform relative group">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-csgirlies-pink" />
        <h3 className="text-xl font-bold">{title}</h3>
        {count && (
          <span className="ml-auto bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
            {count}
          </span>
        )}
      </div>
      
      <p className="text-gray-300 mb-6">
        Join our community of {title.toLowerCase()} to learn, share, and grow together.
      </p>
      
      <Button className="cs-button w-full">
        JOIN
      </Button>
    </div>
  );
};
