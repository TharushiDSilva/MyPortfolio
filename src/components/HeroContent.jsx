"use client";
import { useEffect, useState } from 'react';

export default function HeroContent() {
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    'Tharushi De Silva',
    'a Developer',
    'a Creator',
    'an Innovator',
    'a Designer',
    'a Problem Solver',
    'a Tech Enthusiast',
    'a Learner',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const word = words[wordIndex];

      if (isDeleting) {
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === word.length) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, isDeleting ? 50 : (!isDeleting && charIndex === words[wordIndex].length) ? 2000 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div className="relative z-40 h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-white text-5xl sm:text-7xl font-extrabold mb-4 leading-tight drop-shadow-xl">
        Hi, I am{' '}
        <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          {currentWord}
        </span>
        <span className="text-pink-500 animate-blink">_</span>
      </h1>
      <p className="text-white/80 text-xl sm:text-2xl mb-8">
        Welcome to my portfolio!
      </p>
      <a
        href="/resume.pdf"
        download
        className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Download Resume
      </a>
    </div>
  );
}
