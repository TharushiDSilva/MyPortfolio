import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import SocialMedia from './SocialMedia';

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
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
    'a Learner'
  ];
const prefix = process.env.NODE_ENV === 'production' ? '/MyPortfolio' : '';
  // Three.js Background Animation
  useEffect(() => {
    const loadVanta = async () => {
      try {
        if (vantaRef.current && !vantaEffect.current) {
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({ alpha: true });
          
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setClearColor(0x000000, 0);
          vantaRef.current.appendChild(renderer.domElement);

          const geometry = new THREE.BufferGeometry();
          const vertices = [];
          const colors = [];

          for (let i = 0; i < 1000; i++) {
            vertices.push(
              Math.random() * 2000 - 1000,
              Math.random() * 2000 - 1000,
              Math.random() * 2000 - 1000
            );
            colors.push(Math.random(), Math.random() * 0.5 + 0.5, 1);
          }

          geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
          geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

          const material = new THREE.PointsMaterial({ size: 2, vertexColors: true });
          const particles = new THREE.Points(geometry, material);
          scene.add(particles);

          camera.position.z = 1000;

          const animate = () => {
            requestAnimationFrame(animate);
            particles.rotation.x += 0.0005;
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);
          };

          animate();
          vantaEffect.current = { destroy: () => renderer.dispose() };
        }
      } catch (error) {
        console.log('Vanta effect failed to load:', error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  // Typewriter Effect
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

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ height: '100vh', minHeight: '100vh' }}
    >
      {/* Three.js particles overlay */}
      <div ref={vantaRef} className="fixed inset-0 z-0" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-auto mx-auto">
        {/* Desktop: single line, Mobile: two lines with smaller font */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block md:inline">Hi, I am{' '}</span>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {currentWord}
          </span>
          <span className="text-pink-400 animate-pulse">_</span>
        </h1>
        
        {/* Profile Image */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative">
            {/* Gradient border wrapper */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 hover:scale-105 transition-transform duration-300 shadow-lg">
              <img 
                src={`portfolio_images/main5.jpg`}
                alt="Tharushi De Silva"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Animated ring around image */}
            <div className="absolute inset-0 rounded-full border-2 border-pink-400 opacity-30 animate-ping"></div>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
          Welcome to my portfolio! I create digital experiences that inspire and engage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 text-sm sm:text-base"
          >
            Get Connected
          </a>
          <a
             href={`Tharushi De Silva-Resume.pdf`}
            download="Tharushi De Silva-Resume.pdf"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-pink-500 text-pink-400 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
             Download Resume
          </a>
        </div>

        <SocialMedia />
      </div>
    </section>
  );
};

export default Hero;