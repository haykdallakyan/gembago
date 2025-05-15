import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Gemba Walks?</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
          Join industry leaders who have already increased operational efficiency by 10x with GembaGo AI.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <a 
            href="mailto:hayk@leanleaderformula.com" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg shadow-lg transition-all hover:shadow-xl inline-flex items-center justify-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#features" 
            className="bg-transparent hover:bg-blue-700 border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center justify-center"
          >
            Explore Features
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mt-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" className="h-12" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;