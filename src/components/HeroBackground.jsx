"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

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
            THREE,
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
            THREE,
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

  return (
    <div ref={vantaRef} className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-purple-900/40 z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,182,193,0.05)_0%,rgba(255,20,147,0.08)_40%,rgba(0,0,0,0.4)_100%)] z-30" />
    </div>
  );
}
