
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mail } from "lucide-react";

interface CharacterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CharacterDialog = ({ isOpen, onOpenChange }: CharacterDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-8">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">Start your journey</h2>
          </div>
          
          <p className="text-gray-600 text-lg">
            Enter your email to begin exploring our AI-powered characters and find the perfect companion for your needs.
          </p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
            />
            <button
              className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-colors"
              onClick={() => {}}
            >
              Next step
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDialog;
