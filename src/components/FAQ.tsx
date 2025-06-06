import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "How does GembaGo AI improve Gemba walks?",
      answer: "GembaGo AI uses artificial intelligence to automate documentation, identify patterns in observations, suggest solutions based on best practices, and track action items through completion. This reduces the time spent on administrative tasks and improves the quality of insights gained during walks."
    },
    {
      question: "Can multiple team members collaborate on a single Gemba walk?",
      answer: "Yes! GembaGo AI is designed for team collaboration. Multiple users can join the same walk, document observations, assign and track action items, and view analytics—all in real-time. This ensures everyone stays aligned and no important details are missed."
    },
    {
      question: "What kind of analytics does the app provide?",
      answer: "The app provides trend analysis across multiple walks, issue categorization and prioritization, efficiency metrics comparing before and after states, and custom reports you can share with stakeholders."
    },
    {
      question: "How secure is our operational data within the app?",
      answer: "GembaGo AI employs enterprise-grade encryption for all data, both in transit and at rest. We use role-based access controls, provide optional on-premise deployment for sensitive industries, and are compliant with major data protection regulations including GDPR and CCPA."
    },
    {
      question: "How long does it take to implement GembaGo AI?",
      answer: "Most teams are up and running with GembaGo AI in less than a week. The app is intuitive and requires minimal training. Our onboarding process includes guided setup, team configuration for your specific team, and optional training sessions for your team."
    }
    {
      question: "Are there any instructions on how to use the App?",
      answer: "Absolutely. Follow this link to learn how to use the app: https://drive.google.com/file/d/1zVTdEA-VwbylOD1KCyC7aa_g2tZz6P3V/view?usp=drive_link "
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about GembaGo AI and how it can transform your Gemba walk process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md"
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg text-blue-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
