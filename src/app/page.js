import Hero from '../components/hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="bg-[#0e0c15] text-white scroll-smooth">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center">
        <About />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>
    </main>
  );
}
