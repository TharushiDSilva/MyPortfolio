import Navbar from '@/components/Navbar';
import Hero from '../components/hero';


import link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#00000000]  text-black ">
      
      <Hero />
       <Navbar />
      
    
    </main>
  );
}
