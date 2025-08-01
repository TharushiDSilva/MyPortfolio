'use client';
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/HeroSection';
import About from '@/components/about';
import Contact from '@/components/contact';
import Projects from '@/components/projects'; 

const Portfolio = () => {
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* Ensure Contact is last to maintain logical flow */}
      <Contact />
    </>
  );
};

export default Portfolio;