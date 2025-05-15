import React from 'react';

const AppMockup: React.FC = () => {
  return (
    <div className="relative w-64 md:w-72 lg:w-80">
      {/* Phone frame */}
      <div className="relative z-10 border-8 border-gray-800 rounded-[40px] shadow-xl bg-white overflow-hidden">
        {/* Screen */}
        <div className="aspect-[9/19] w-full bg-blue-50 overflow-hidden">
          <img 
            src="https://i.postimg.cc/3xtHPhGv/Gemba-Go-AI.png"
            alt="App Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
      
      {/* Reflection overlay */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent z-20 pointer-events-none rounded-t-[32px]"></div>
      
      {/* Shadow under phone */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-black/20 rounded-full blur-xl z-0"></div>
    </div>
  );
};

export default AppMockup;