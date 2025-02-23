import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mail, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [step, setStep] = useState('email');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Add ElevenLabs script when component mounts
        const script = document.createElement('script');
        script.src = 'https://elevenlabs.io/convai-widget/index.js';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);

        // Cleanup function to remove script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const renderDialogContent = () => {
        if (step === 'start') {
            return (
                <div className="flex flex-col items-center">
                    <img
                        src="/api/placeholder/800/400"
                        alt="Start your journey"
                        className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <div className="mb-6">
                        <elevenlabs-convai agent-id="MTwJHLDga4c3DsCJ7Tn7"></elevenlabs-convai>
                    </div>
                    <button
                        className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
                        onClick={() => {
                            setShowDialog(false);
                            setStep('email');
                        }}
                    >
                        Start <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            );
        }

        return (
            <>
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
            </>
        );
    };

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
                            onClick={() => setShowDialog(true)}
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>

            {/* Application Dialog */}
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent>
                    {renderDialogContent()}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Index;