import React from 'react';
import { Smartphone, Mail, Shield, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Smartphone className="h-6 w-6 text-blue-400 mr-2" />
              <span className="font-bold text-xl">GembaGo AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing Gemba walks with AI-powered efficiency and team collaboration.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/what-is-gemba" className="text-gray-400 hover:text-white transition-colors">What is Gemba</a></li>
              <li><a href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li> */}
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:hayk@leanleaderformula.com" className="text-gray-400 hover:text-white transition-colors">hayk@leanleaderformula.com</a>
              </li>
              <li className="flex items-center">
                {/* <Shield className="h-5 w-5 text-blue-400 mr-2" /> */}
                {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a> */}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GembaGo AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;