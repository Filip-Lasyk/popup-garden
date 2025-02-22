
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mail, ArrowRight } from "lucide-react";

interface CharacterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CharacterDialog = ({ isOpen, onOpenChange }: CharacterDialogProps) => {
  const [step, setStep] = useState<'email' | 'start'>('email');
  const [email, setEmail] = useState('');

  if (step === 'start') {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent>
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="Start your journey"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <button
              className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
              onClick={() => {
                onOpenChange(false);
                setStep('email'); // Reset for next time
              }}
            >
              Start <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 mt-6"
        />
        <button
          className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-colors mt-4"
          onClick={() => setStep('start')}
        >
          Next step
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDialog;
