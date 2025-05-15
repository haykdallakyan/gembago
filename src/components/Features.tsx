import React from 'react';
import { Brain, Users, Lightbulb, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "AI-Powered Analysis",
      description: "Automatically identify improvement opportunities through pattern detection and predictive analytics",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Team Integration",
      description: "Real-time collaboration with task assignment and notification features for seamless teamwork",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: "Smart Action Items",
      description: "AI-generated solution recommendations based on historical data and industry best practices",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Efficiency Metrics",
      description: "Track improvement KPIs over time with customizable dashboards and automated reporting",
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            GembaGo AI combines cutting-edge technology with practical operational knowledge to deliver an unmatched Gemba walk experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2"
            >
              <div className="rounded-full bg-blue-100 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-blue-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;