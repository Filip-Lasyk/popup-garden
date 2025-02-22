
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface CharacterCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  name: string;
  onClick?: () => void;
}

const CharacterCard = ({ icon, title, description, name, onClick }: CharacterCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
    >
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <span className="font-medium text-lg">{title}</span>
      </div>
      <p className="text-gray-600 mb-4 text-left">{description}</p>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
