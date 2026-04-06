import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Code2, Server, FlaskConical } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  {
    icon: Trophy,
    title: 'Best Presenter',
    organization: 'International Symposium on Agricultural Genomics for Food Security and Plant-Environment Interaction in a Changing Climate',
    year: '2023',
    description: 'Hong Kong, China',
  },
];

const skills = [
  {
    icon: Code2,
    category: 'Programming',
    items: ['Python', 'R', 'C', 'CUDA', 'PyTorch', 'LaTeX'],
  },
  {
    icon: Server,
    category: 'Infrastructure & Tools',
    items: ['Linux', 'Docker', 'Singularity', 'Git', 'GitHub', 'MacOS', 'Windows'],
  },
  {
    icon: FlaskConical,
    category: 'Bioinformatics Domains',
    items: ['NGS Transcriptome', 'Single-cell Transcriptome', 'Nanopore Transcriptome', 'NGS Genome'],
  },
];

export default function Awards() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.award-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
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
      className="academic-section bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="section-divider" />
        <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy mb-12">
          Honors & Skills
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <h3 className="font-medium text-lg text-navy mb-6">Awards & Honors</h3>
            <div className="space-y-4">
              {awards.map((award, index) => {
                const Icon = award.icon;
                return (
                  <div
                    key={index}
                    className="award-item flex items-start gap-4 p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-navy">{award.title}</h4>
                        <span className="text-gold text-sm">{award.year}</span>
                      </div>
                      <p className="text-slate-500 text-sm">{award.organization}</p>
                      <p className="text-slate-400 text-sm mt-1">{award.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-medium text-lg text-navy mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((group, index) => {
                const Icon = group.icon;
                return (
                  <div
                    key={index}
                    className="award-item p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-navy" />
                      <h4 className="font-medium text-navy">{group.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white border border-gray-200 text-slate-600 text-sm rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
