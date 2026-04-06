import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Building2, ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="academic-section bg-navy text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="contact-content">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-12">
            Contact
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-gold text-sm uppercase tracking-wider mb-4">Office Address</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium">Room 113, Shaw Science Building (RRSSB)</p>
                      <p className="text-slate-300">The Chinese University of Hong Kong</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-slate-300">Shatin, New Territories</p>
                      <p className="text-slate-300">Hong Kong SAR, China</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gold text-sm uppercase tracking-wider mb-4">Email</h3>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <a
                    href="mailto:yuelong.chen.btr@gmail.com"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    yuelong.chen.btr@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-gold text-sm uppercase tracking-wider mb-4">Online Profiles</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://loganylchen.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Homepage
                  </a>
                  <a
                    href="https://github.com/loganylchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <div className="bg-white/5 rounded-lg p-8">
              <h3 className="font-medium text-xl mb-4">Collaboration & Inquiries</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I am open to research collaborations in computational biology, RNA bioinformatics,
                nanopore sequencing data analysis, and deep learning applications in genomics.
                Feel free to reach out with questions, collaboration proposals, or research discussions.
              </p>
              <div className="space-y-3 text-sm">
                <p className="text-slate-400">
                  <span className="text-gold">Research Collaboration:</span> Joint projects in RNA
                  multi-omics, transcriptome analysis, or clinical genomics are welcome.
                </p>
                <p className="text-slate-400">
                  <span className="text-gold">Tool Development:</span> Interested in bioinformatics
                  software and pipeline development for sequencing data analysis.
                </p>
                <p className="text-slate-400">
                  <span className="text-gold">Motto:</span>{' '}
                  <em>"Done is better than perfection."</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
