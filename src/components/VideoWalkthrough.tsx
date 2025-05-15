import React from 'react';
import { Play } from 'lucide-react';

interface VideoWalkthroughProps {
  videoId?: string;
}
const VideoWalkthrough: React.FC<VideoWalkthroughProps> = ({ videoId = '3G29TLZH9uw' }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">See GembaGo AI in Action</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Watch how GembaGo AI transforms your Gemba walks into a streamlined, efficient process.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?si=Nv_bklRvDVP3cTSz`}
              title="GembaGo AI Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          
          <div className="mt-8 text-center">
            <a
              href={`https://youtu.be/${videoId}?si=Nv_bklRvDVP3cTSz`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWalkthrough;