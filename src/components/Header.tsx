import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Smartphone className="h-8 w-8 text-blue-600 mr-2" />
            <span className="font-bold text-xl text-blue-800">GembaGo AI</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
          <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
          <a 
            href="mailto:hayk@leanleaderformula.com" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors font-medium"
          >
            Contact Us
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Benefits
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <a 
              href="mailto:hayk@leanleaderformula.com" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium text-center"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;