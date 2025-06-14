import React from 'react';
import AppMockup from './AppMockup';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-blue-900 leading-tight mb-4 animate-fade-in">
              Go from feeling like your daily walks are a waste of time to seeing real progress from every step you take on the floor.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-delay-1">
              Make your Gemba walks <span className="font-bold text-green-700">10x more efficient</span> with team integration and detailed and faster analytics
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
              <a 
                href="mailto:hayk@leanleaderformula.com" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Contact us to get GembaGo mobile application
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white hover:bg-gray-100 text-blue-600 text-lg font-medium px-8 py-3 rounded-lg border border-blue-200 transition-colors shadow-md hover:shadow-lg"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-float">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
