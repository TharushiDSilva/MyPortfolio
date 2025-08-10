"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prefix =
    process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="p-1 w-full fixed top-0 z-50 bg-transparent">
      <div className="max-w-8xl mx-auto flex justify-between items-center pl-1 pr-2 md:px-3 bg-black/80 backdrop-blur-md rounded-lg shadow-lg">
        {/* Logo - Fixed positioning */}
        <div className="flex-shrink-0 ml-1 md:ml-0">
          <Link href="/">
            <img
              src={`${prefix}/portfolio_images/signature.png`}
              alt="Logo"
              className="h-12 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollTo("home")} className="nav-link">Home</button>
          <button onClick={() => scrollTo("about")} className="nav-link">About</button>
          <button onClick={() => scrollTo("projects")} className="nav-link">Projects</button>
          <button onClick={() => scrollTo("contact")} className="nav-link">Contact</button>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden flex-shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-lg text-white md:hidden animate-fadeIn">
          <button onClick={() => scrollTo("home")} className="mobile-link">Home</button>
          <button onClick={() => scrollTo("about")} className="mobile-link">About</button>
          <button onClick={() => scrollTo("projects")} className="mobile-link">Projects</button>
          <button onClick={() => scrollTo("contact")} className="mobile-link">Contact</button>
        </div>
      )}

      {/* Tailwind Styles */}
      <style jsx>{`
        .nav-link {
          color: white;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #d8b4fe; /* Purple-300 */
        }
        .mobile-link {
          font-size: 1.5rem;
          font-weight: 500;
          transition: color 0.3s;
        }
        .mobile-link:hover {
          color: #f472b6; /* Pink-400 */
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;