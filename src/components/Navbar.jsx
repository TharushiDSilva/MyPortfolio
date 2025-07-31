"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="p-2 w-full absolute top-0 z-20 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <a href="#">
            <img src="portfolio_images/signature.png" alt="Logo" className="h-20 w-auto" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <button onClick={() => scrollTo('home')} className="text-white hover:text-purple-300 px-3 py-2 rounded">Home</button>
          <button onClick={() => scrollTo('about')} className="text-white hover:text-purple-300 px-3 py-2 rounded">About</button>
          <button onClick={() => scrollTo('portfolio')} className="text-white hover:text-purple-300 px-3 py-2 rounded">Portfolio</button>
          <button onClick={() => scrollTo('contact')} className="text-white hover:text-purple-300 px-3 py-2 rounded">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 p-3">
          <button onClick={() => scrollTo('home')} className="block text-white hover:text-purple-300 px-3 py-2 rounded">Home</button>
          <button onClick={() => scrollTo('about')} className="block text-white hover:text-purple-300 px-3 py-2 rounded">About</button>
          <button onClick={() => scrollTo('portfolio')} className="block text-white hover:text-purple-300 px-3 py-2 rounded">Portfolio</button>
          <button onClick={() => scrollTo('contact')} className="block text-white hover:text-purple-300 px-3 py-2 rounded">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
