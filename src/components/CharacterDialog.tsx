
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CharacterCard from "./CharacterCard";
import { GraduationCap, Gamepad, Map } from "lucide-react";

interface CharacterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CharacterDialog = ({ isOpen, onOpenChange }: CharacterDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-8 gap-4 grid">
        <div className="grid gap-4">
          <CharacterCard
            icon={<GraduationCap className="w-6 h-6" />}
            title="Math tutor"
            description="Speak with Matilda, a mathematics tutor who can help you with your studies."
            name="Matilda"
          />
          <CharacterCard
            icon={<Gamepad className="w-6 h-6" />}
            title="Video game character"
            description="Speak with a mysterious wizard who offers ancient wisdom to aid you on your journey."
            name="Callum"
          />
          <CharacterCard
            icon={<Map className="w-6 h-6" />}
            title="Travel guide"
            description="Speak with George to get help on destinations for work retreats, family vacations or solo-backpacking trips."
            name="George"
          />
        </div>
        <button 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          onClick={() => onOpenChange(false)}
        >
          <span className="w-4 h-4 flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full" />
          </span>
          Try a call
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDialog;
