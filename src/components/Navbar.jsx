"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-2 w-full absolute top-0 z-20 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link href="/">
            <img src="portfolio_images/signature.png" alt="Logo" className="h-20 w-auto" /> 
            {/* Replace /logo.png with your actual logo path */}
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-purple-300 px-3 py-2 rounded">Home</Link>
          <Link href="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded">About</Link>
          <Link href="/portfolio" className="text-white hover:text-purple-300 px-3 py-2 rounded">Portfolio</Link>
          <Link href="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded">Contact</Link>
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
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block text-white hover:text-purple-300 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block text-white hover:text-purple-300 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/portfolio" className="block text-white hover:text-purple-300 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/contact" className="block text-white hover:text-purple-300 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
