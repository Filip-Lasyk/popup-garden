
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CharacterCard from "./CharacterCard";
import { Mail } from "lucide-react";

interface CharacterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CharacterDialog = ({ isOpen, onOpenChange }: CharacterDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-8">
        <CharacterCard
          icon={<Mail className="w-6 h-6" />}
          title="Start your journey"
          description="Enter your email to begin exploring our AI-powered characters and find the perfect companion for your needs."
          name=""
          isEmailCard={true}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDialog;
