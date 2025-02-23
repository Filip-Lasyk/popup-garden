import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Plus } from "lucide-react";

interface Requirement {
  id: string;
  text: string;
}

interface Benefit {
  id: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
}

const CreateJobOffer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [location, setLocation] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [employmentType, setEmploymentType] = useState("Full-time");
  const [currency, setCurrency] = useState("USD");

  const employmentTypes = ["Full-time", "Part-time", "Contract"];
  const currencies = ["USD", "EUR", "GBP"];

  const addRequirement = () => {
    const newRequirement = {
      id: crypto.randomUUID(),
      text: ""
    };
    setRequirements([...requirements, newRequirement]);
  };

  const addBenefit = () => {
    const newBenefit = {
      id: crypto.randomUUID(),
      text: ""
    };
    setBenefits([...benefits, newBenefit]);
  };

  const addQuestion = () => {
    const newQuestion = {
      id: crypto.randomUUID(),
      text: ""
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Create New Job Offer</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2">Job Title</label>
          <Input 
            placeholder="e.g. Senior Frontend Developer"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Description</label>
          <Textarea 
            placeholder="Job description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[150px]"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Requirements</label>
          {requirements.map((req) => (
            <Input 
              key={req.id}
              placeholder="Add requirement"
              className="mb-2"
              value={req.text}
              onChange={(e) => {
                setRequirements(requirements.map(r => 
                  r.id === req.id ? { ...r, text: e.target.value } : r
                ));
              }}
            />
          ))}
          <Button 
            variant="outline" 
            onClick={addRequirement}
            className="mt-2"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Requirement
          </Button>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Benefits</label>
          {benefits.map((benefit) => (
            <Input 
              key={benefit.id}
              placeholder="Add benefit"
              className="mb-2"
              value={benefit.text}
              onChange={(e) => {
                setBenefits(benefits.map(b => 
                  b.id === benefit.id ? { ...b, text: e.target.value } : b
                ));
              }}
            />
          ))}
          <Button 
            variant="outline" 
            onClick={addBenefit}
            className="mt-2"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Benefit
          </Button> 
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Interview Questions</label>
          {questions.map((question) => (
            <Input 
              key={question.id}
              placeholder="Enter interview question"
              className="mb-2"
              value={question.text}
              onChange={(e) => {
                setQuestions(questions.map(q => 
                  q.id === question.id ? { ...q, text: e.target.value } : q
                ));
              }}
            />
          ))}
          <Button 
            variant="outline" 
            onClick={addQuestion}
            className="mt-2"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Question
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-2">Location</label>
            <Input 
              placeholder="e.g. Remote, New York"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Employment Type</label>
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
            >
              {employmentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-lg font-medium mb-2">Salary Min</label>
            <Input 
              type="number"
              placeholder="Min salary"
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Salary Max</label>
            <Input 
              type="number"
              placeholder="Max salary"
              value={salaryMax}
              onChange={(e) => setSalaryMax(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
            >
              {currencies.map(curr => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>
          </div>
        </div>

        <Button className="w-full mt-8">Create Job Offer</Button>
      </div>
    </div>
  );
};

export default CreateJobOffer; 