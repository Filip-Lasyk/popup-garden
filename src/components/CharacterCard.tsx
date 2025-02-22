
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface CharacterCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  name: string;
  onClick?: () => void;
  isEmailCard?: boolean;
}

const CharacterCard = ({ icon, title, description, name, onClick, isEmailCard }: CharacterCardProps) => {
  if (isEmailCard) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <span className="font-medium text-lg">{title}</span>
        </div>
        <p className="text-gray-600 mb-4 text-left">{description}</p>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
          />
          <button
            className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-colors"
            onClick={onClick}
          >
            Next step
          </button>
        </div>
      </div>
    );
  }

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
