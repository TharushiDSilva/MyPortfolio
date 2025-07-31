"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Socialmedia from '@/components/SocialMedia';

export default function Hero() {
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

  useEffect(() => {
    const loadVanta = async () => {
      if (typeof window !== 'undefined') {
        const NET = await import('vanta/dist/vanta.net.min');
        const HALO = await import('vanta/dist/vanta.halo.min');

        if (!vantaEffect.current && vantaRef.current) {
          const haloLayer = document.createElement('div');
          haloLayer.style.position = 'absolute';
          haloLayer.style.top = '0';
          haloLayer.style.left = '0';
          haloLayer.style.width = '100%';
          haloLayer.style.height = '100%';
          haloLayer.style.zIndex = '0';
          vantaRef.current.appendChild(haloLayer);

          HALO.default({
            el: haloLayer,
            THREE: THREE,
            baseColor: 0xff3f81,
            backgroundColor: 0x000000,
            size: 1.5,
            amplitudeFactor: 2,
            xOffset: 0.2,
            yOffset: 0.2,
            scale: 1.0,
          });

          vantaEffect.current = NET.default({
            el: vantaRef.current,
            THREE: THREE,
            color: 0x222222,
            backgroundColor: 0x000000,
            points: 20.0,
            maxDistance: 25.0,
            spacing: 20.0,
            showDots: true,
            showLines: true,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            scale: 0,
            scaleMobile: 1.0,
          });
        }
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const elements = document.querySelectorAll('.floating-element');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = (x - 0.5) * speed * 20;
        const yOffset = (y - 0.5) * speed * 20;
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style jsx>{`
        .hero-container {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .network-blur-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(6px);
          z-index: 1;
          pointer-events: none;
        }

        .overlay-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 10, 20, 0.8) 100%, rgba(5, 105, 30, 0.6) 90%, rgba(40, 200, 35, 0.0) 100%);
          z-index: 2;
        }

        .overlay-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 10% 10%, rgba(255, 182, 193, 0.05) 0%, rgba(255, 20, 147, 0.08) 0%, rgba(0, 0, 0, 0.4) 100%);
          z-index: 3;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.1;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .typewriter-text {
          background: linear-gradient(135deg, #ff3f81, #ff6b9d, #c44cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { filter: drop-shadow(0 0 10px rgba(255, 63, 129, 0.3)); }
          to { filter: drop-shadow(0 0 20px rgba(255, 63, 129, 0.6)); }
        }

        .cursor {
          animation: blink 1s infinite;
          color: #ff3f81;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          font-weight: 300;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .cta-button {
          background: linear-gradient(135deg, #ff3f81, #ff6b9d);
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(255, 63, 129, 0.3);
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.5s;
          opacity: 0;
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 35px rgba(255, 63, 129, 0.4);
        }

        .cta-button:hover::before {
          animation: shine 0.7s ease-in-out;
        }

        @keyframes shine {
          0% { opacity: 0; transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          color: rgba(255, 255, 255, 0.7);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>

      <div className="hero-container" ref={vantaRef}>
        {/* NEW: Blur overlay */}
        <div className="network-blur-overlay"></div>

        {/* Existing overlays */}
        <div className="overlay-base"></div>
        <div className="overlay-pattern"></div>

        <div className="content-wrapper">
          <h1 className="hero-title">
            Hi, I am <span className="typewriter-text">{currentWord}</span>
            <span className="cursor">_</span>
          </h1>
          <p className="hero-subtitle">Welcome to my portfolio!</p>
          <a href="/resume.pdf" download className="cta-button">
            Download Resume
          </a>
        
<div className="floating-elements mb-1.5  p-6">
  <Socialmedia />
</div>
</div>
        {/* Optional scroll indicator */}
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l3 3 7-7"/>
            <path d="M12 3v18"/>
          </svg>
        </div>
      </div>
    </>
  );
}
