import { Toaster } from '@/components/ui/sonner';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Publications from './sections/Publications';
import Research from './sections/Research';
import Awards from './sections/Awards';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Publications />
        <Research />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
