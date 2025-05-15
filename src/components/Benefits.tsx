import React from 'react';
import { Clock, UsersRound, LineChart, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-green-600" />,
      title: "10x Time Savings",
      description: "Slash documentation time and increase the frequency and impact of Gemba walks",
      stat: "90%",
      statLabel: "reduction in documentation time"
    },
    {
      icon: <UsersRound className="w-12 h-12 text-green-600" />,
      title: "Increased Team Alignment",
      description: "Get everyone on the same page with real-time updates and clear accountability",
      stat: "85%",
      statLabel: "improvement in team collaboration"
    },
    {
      icon: <LineChart className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Insights",
      description: "Uncover hidden patterns and receive intelligent recommendations for improvements",
      stat: "73%",
      statLabel: "more issues identified"
    },
    {
      icon: <Award className="w-12 h-12 text-green-600" />,
      title: "Operational Excellence",
      description: "Transform your operations with data-backed improvements and continuous optimization",
      stat: "40%",
      statLabel: "average efficiency gain"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Transform Your Operations</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experience tangible results across your organization when you implement GembaGo AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
            >
              <div className="p-6 flex flex-col md:flex-row items-center">
                <div className="rounded-full bg-green-100 w-20 h-20 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold text-center md:text-left text-blue-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-center md:text-left mb-4">{benefit.description}</p>
                  <div className="flex items-baseline justify-center md:justify-start">
                    <span className="text-3xl font-bold text-green-600">{benefit.stat}</span>
                    <span className="ml-2 text-sm text-gray-500">{benefit.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;