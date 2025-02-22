
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mail } from "lucide-react";

interface CharacterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CharacterDialog = ({ isOpen, onOpenChange }: CharacterDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Start your journey</h2>
        </div>
        
        <p className="text-gray-600 text-lg mt-6">
          Enter your email to begin exploring our AI-powered characters and find the perfect companion for your needs.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 mt-6"
        />
        <button
          className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-colors mt-4"
          onClick={() => {}}
        >
          Next step
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDialog;
