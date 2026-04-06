import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, GraduationCap, ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-content',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      );

      gsap.fromTo(
        '.hero-image',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'expo.out' }
      );

      gsap.fromTo(
        '.hero-stat',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: 'expo.out' }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-3 hero-content">
            {/* Title */}
            <p className="text-gold font-medium text-sm tracking-wider uppercase mb-3">
              Postdoctoral Fellow · Computational Biologist
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-tight mb-6">
              Dr. Yuelong Chen
            </h1>

            {/* Affiliation */}
            <div className="flex items-center gap-2 text-slate-600 mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Postdoctoral Fellow</span>
            </div>
            <p className="text-slate-500 mb-6">
              School of Life Sciences<br />
              The Chinese University of Hong Kong
            </p>

            {/* Research Interests */}
            <div className="mb-8">
              <p className="text-sm text-slate-400 uppercase tracking-wider mb-3">Research Interests</p>
              <div className="flex flex-wrap gap-2">
                {['Nanopore RNA Sequencing', 'RNA Modifications', 'Single-cell Transcriptomics', 'Deep Learning in Bioinformatics'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-8">
              <a href="mailto:yuelong.chen.btr@gmail.com" className="flex items-center gap-2 hover:text-navy transition-colors">
                <Mail className="w-4 h-4" />
                yuelong.chen.btr@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Hong Kong SAR, China
              </span>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="hero-stat">
                <div className="font-serif text-3xl font-semibold text-navy">7+</div>
                <div className="text-sm text-slate-500">Publications</div>
              </div>
              <div className="hero-stat">
                <div className="font-serif text-3xl font-semibold text-navy">5</div>
                <div className="text-sm text-slate-500">Patents</div>
              </div>
              <div className="hero-stat">
                <div className="font-serif text-3xl font-semibold text-navy">10+</div>
                <div className="text-sm text-slate-500">Years in Field</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2 hero-image">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/academic-portrait.jpg"
                  alt="Dr. Yuelong Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/5 rounded-lg -z-10" />
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://loganylchen.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white text-sm rounded hover:bg-navy/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Homepage
              </a>
              <a
                href="https://github.com/loganylchen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 text-sm rounded hover:border-navy hover:text-navy transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
