import React from 'react';
import { Smartphone, ClipboardList, Brain, Users, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Create Your Team",
      description: [
        "Select an admin. ",
        "Pick a name for your team. ", 
        "Use a pin to make it secure. ",
        "Share with your team so they can join."
        ],
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Team Functionality",
      description: [
    "Set up your team members. ",
    "Each Gemba type has preloaded Gemba topics. ",
    "You can have multiple admins. ",
    "Admins have full access to all action items. ",
    "Users only see items assigned to them."
  ],
      image: "https://images.pexels.com/photos/892769/pexels-photo-892769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-blue-600" />,
      title: "Create an Action Item",
      description: "Enjoy an interactive, color-coded dashboard, create and assign actions in seconds. Enjoy built in due date, status, type topic, and action owner fields. Attach an image. Automatically send an email notification to the assignee of the action item. ",
      image: "https://i.postimg.cc/v8jG750K/Create-action-item.png"
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-blue-600" />,
      title: "Action Management",
      description: "Easy visuals to find out the actions. Actions are classified by type, status and assigne. Update and save actions in seconds. AI-powered engine provides suggestion on how to address each action item. ",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
      title: "Data review and Analysis",
      description: "Export your data, review it offline, manage in the meetings. ",
      image: "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How GembaGo AI Works</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our simple 5-step process transforms Gemba walks from time-consuming tasks to streamlined activities that drive real improvement.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 last:mb-0`}
            >
              <div className="md:w-1/2 mb-6 md:mb-0 px-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-64 object-cover transition duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-1/2 px-4">
                <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Step {index + 1}: {step.title}</h3>
                </div>
                <p className={`text-gray-600 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;