import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Publications', href: '#publications' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-content',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="footer-content">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
            {/* Brand */}
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="font-serif text-xl font-semibold text-white"
              >
                Dr. Yuelong Chen
              </a>
              <p className="text-sm mt-1">Postdoctoral Fellow · Computational Biologist</p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © 2025 Yuelong Chen. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
