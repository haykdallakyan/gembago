import React from 'react';
import { ClipboardList, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-10 h-10 text-red-500" />,
      problem: "Time-consuming walks",
      solution: "Streamlined digital process cuts documentation time by 75%",
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-red-500" />,
      problem: "Manual documentation",
      solution: "Photo capture with automatic categorization",
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-red-500" />,
      problem: "Difficulty tracking action items",
      solution: "AI-powered tracking with automated email notifications and solution proposals",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">From Challenges to Solutions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Traditional Gemba walks face significant challenges that limit their effectiveness. 
            See how GembaGo AI transforms these pain points into opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{item.problem}</h3>
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-gray-600 text-center">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;