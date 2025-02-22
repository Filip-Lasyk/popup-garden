
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-teal-100">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          {/* Job Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">Senior Frontend Developer</h1>
            <p className="text-lg text-gray-600">Join our dynamic team in creating innovative web experiences</p>
          </div>

          {/* Job Details */}
          <div className="space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">About the Role</h2>
              <p className="text-gray-600">
                We're looking for a passionate Senior Frontend Developer to help build and maintain modern web applications. 
                You'll work with cutting-edge technologies and collaborate with a talented team of developers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>5+ years of experience with React and modern JavaScript</li>
                <li>Strong understanding of web performance optimization</li>
                <li>Experience with TypeScript and state management</li>
                <li>Knowledge of modern CSS and responsive design</li>
                <li>Excellent problem-solving and communication skills</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Competitive salary and equity package</li>
                <li>Remote-first work environment</li>
                <li>Health, dental, and vision insurance</li>
                <li>Unlimited PTO policy</li>
                <li>Professional development budget</li>
              </ul>
            </section>
          </div>

          {/* Apply Button */}
          <div className="pt-6">
            <Button
              className="w-full sm:w-auto bg-black hover:bg-black/90 text-white"
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
