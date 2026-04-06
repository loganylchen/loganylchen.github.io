import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
      id="about"
      className="academic-section bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="about-content">
          <div className="section-divider" />
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy mb-8">
            About Me
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am a Postdoctoral Fellow at the Chinese University of Hong Kong (CUHK), where I also
                completed my Ph.D. in Computational Molecular Biology in 2025. My research centers on
                nanopore direct RNA sequencing technology, with a focus on signal noise reduction,
                RNA modification detection, and improving modification site localization accuracy using
                deep learning.
              </p>
              <p>
                I am particularly interested in the intersection of long-read sequencing and machine
                learning. My work on tissue-adaptive cell-type deconvolution has been published in
                <em> Nature Communications</em>, and my research on transcript isoform complexity in
                subcellular fractions appeared in <em>Advanced Science</em>. These projects reflect my
                broader interest in developing scalable computational tools that reveal hidden layers
                of transcriptomic regulation.
              </p>
              <p>
                Before joining CUHK for my doctorate, I spent several years in the bioinformatics
                industry in Beijing and Shenzhen, leading teams in NGS-based genetic disease diagnostics,
                somatic mutation detection for hematological tumors, and circulating tumor DNA analysis.
                I hold five Chinese invention patents in genomic variant detection.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-navy mb-3">Current Position</h3>
                <p className="text-slate-600 text-sm">Postdoctoral Fellow</p>
                <p className="text-slate-500 text-sm">The Chinese University of Hong Kong</p>
                <p className="text-slate-400 text-sm">2025 – Present</p>
              </div>

              <div>
                <h3 className="font-medium text-navy mb-3">Education</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-slate-600 text-sm">Ph.D. in Computational Molecular Biology</p>
                    <p className="text-slate-500 text-sm">The Chinese University of Hong Kong</p>
                    <p className="text-slate-400 text-sm">2019 – 2025</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">M.Sc. in Bioinformatics</p>
                    <p className="text-slate-500 text-sm">Harbin Medical University</p>
                    <p className="text-slate-400 text-sm">2012 – 2015</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">B.Sc. in Bioinformatics</p>
                    <p className="text-slate-500 text-sm">Harbin Medical University</p>
                    <p className="text-slate-400 text-sm">2007 – 2012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
