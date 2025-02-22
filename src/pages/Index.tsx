
import { useState } from "react";
import CharacterDialog from "@/components/CharacterDialog";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-teal-100">
      <button
        onClick={() => setIsDialogOpen(true)}
        className="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200"
      >
        Open Characters
      </button>
      <CharacterDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default Index;
