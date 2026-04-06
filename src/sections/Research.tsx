import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Microscope, Users, FlaskConical, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const researchAreas = [
  {
    icon: Microscope,
    title: 'Nanopore Direct RNA Sequencing',
    description: 'Investigating signal noise interference and developing algorithms to improve RNA modification site detection accuracy using Oxford Nanopore Technology direct RNA sequencing.',
    topics: ['Signal Processing', 'RNA Modifications', 'm6A Detection'],
  },
  {
    icon: Database,
    title: 'Single-cell Transcriptomics',
    description: 'Applying deep learning to single-cell RNA-seq data, including tissue-adaptive cell-type deconvolution and cell-type-specific gene expression analysis.',
    topics: ['Cell Deconvolution', 'Deep Autoencoders', 'Cell-Type Analysis'],
  },
  {
    icon: FlaskConical,
    title: 'RNA Multi-omics & Isoform Analysis',
    description: 'Exploring transcript isoform complexity across subcellular fractions using long-read sequencing, revealing post-transcriptional regulatory mechanisms.',
    topics: ['Transcript Isoforms', 'Long-read Sequencing', 'Subcellular Fractions'],
  },
  {
    icon: Users,
    title: 'Clinical Genomics & IVD',
    description: 'Developing NGS-based platforms for genetic disease diagnosis, somatic mutation detection in hematological tumors, and circulating tumor DNA analysis for clinical applications.',
    topics: ['Variant Detection', 'NGS Diagnostics', 'Tumor Mutation Analysis'],
  },
];

const patents = [
  {
    title: 'Copy Number Variations Detection Method',
    number: 'CN202010184960.3',
    role: 'Lead Inventor',
  },
  {
    title: 'Genetic Disease Gene Variations Detection Method',
    number: 'CN201811021290.2',
    role: 'Lead Inventor',
  },
  {
    title: 'Blood Disease Somatic Mutations Detection Method',
    number: 'CN201710067161.6',
    role: 'Lead Inventor',
  },
  {
    title: 'Circulating Tumor DNA Somatic Mutations Detection Method',
    number: 'CN201710067084.4',
    role: 'Lead Inventor',
  },
  {
    title: 'Tumor FFPE Samples Somatic Mutations Detection Method',
    number: 'CN201710067031.2',
    role: 'Lead Inventor',
  },
];

export default function Research() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.research-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.grant-item',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
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
      id="research"
      className="academic-section bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="section-divider" />
        <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy mb-12">
          Research
        </h2>

        {/* Research Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="research-card bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy text-lg mb-2">{area.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Invention Patents */}
        <div>
          <h3 className="font-medium text-lg text-navy mb-6">Invention Patents</h3>
          <div className="space-y-4">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="grant-item bg-white p-5 rounded-lg border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <div>
                    <h4 className="font-medium text-navy">{patent.title}</h4>
                    <p className="text-slate-500 text-sm font-mono">{patent.number}</p>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-gold font-medium">{patent.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
