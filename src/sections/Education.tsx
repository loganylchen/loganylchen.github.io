import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'Ph.D. in Computational Molecular Biology',
    institution: 'The Chinese University of Hong Kong',
    location: 'Hong Kong SAR, China',
    period: '2019 – 2025',
    advisor: '',
    thesis: 'Focus: Nanopore direct RNA sequencing, deep learning for single-cell analysis, RNA modification detection',
    honors: [],
  },
  {
    degree: 'M.Sc. in Bioinformatics',
    institution: 'Harbin Medical University',
    location: 'Harbin, Heilongjiang, China',
    period: '2012 – 2015',
    advisor: '',
    thesis: 'Focus: Pharmacogenomics, drug adverse reaction analysis via gene expression',
    honors: [],
  },
  {
    degree: 'B.Sc. in Bioinformatics',
    institution: 'Harbin Medical University',
    location: 'Harbin, Heilongjiang, China',
    period: '2007 – 2012',
    advisor: '',
    thesis: 'Curriculum: Microarray technology, genomic analysis, data mining, algorithms, machine learning',
    honors: [],
  },
];

const experience = [
  {
    position: 'Postdoctoral Fellow',
    institution: 'The Chinese University of Hong Kong',
    location: 'Hong Kong SAR, China',
    period: '2025 – Present',
    description: 'RNA multi-omics data analysis to explore molecular mechanisms of tumorigenesis; identifying therapeutic targets and biomarkers.',
  },
  {
    position: 'Bioinformatics Director',
    institution: 'Shenzhen Aegicare Technology Co., Ltd.',
    location: 'Shenzhen, Guangdong, China',
    period: 'May 2018 – Jul. 2019',
    description: 'Led automated genetic disease detection platform development; oversaw variant detection device creation; managed technical solutions and product commercialization.',
  },
  {
    position: 'Bioinformatics Engineer',
    institution: 'EUROIMMUN Medical Diagnostics (China) Co., Ltd.',
    location: 'Beijing, China',
    period: 'Feb. 2018 – Apr. 2018',
    description: 'Contributed to NGS-based hearing loss detection model development; enhanced diagnostic accuracy.',
  },
  {
    position: 'Hematological Tumor Project Team Leader',
    institution: 'Beijing Acorndx Biotechnology Co., Ltd.',
    location: 'Beijing, China',
    period: 'Mar. 2017 – Jan. 2018',
    description: 'Directed FLT3-ITD NGS detection method development; managed bioinformatics work for tumor IVD research and regulatory approval.',
  },
  {
    position: 'Bioinformatics Engineer',
    institution: 'Annoroad Gene Technology (Beijing) Co., Ltd.',
    location: 'Beijing, China',
    period: 'Jul. 2015 – Feb. 2017',
    description: 'Conducted bioinformatics analysis for clinical testing projects; independently developed a fully automated monitoring and operation platform.',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.edu-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
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
      id="education"
      className="academic-section bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="section-divider" />
        <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy mb-12">
          Education & Experience
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 font-medium text-lg text-navy mb-6">
              <GraduationCap className="w-5 h-5" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="edu-item relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-navy rounded-full" />
                  <div className="mb-1">
                    <span className="text-gold text-sm font-medium">{edu.period}</span>
                  </div>
                  <h4 className="font-medium text-navy text-lg">{edu.degree}</h4>
                  <p className="text-slate-600">{edu.institution}</p>
                  <p className="text-slate-400 text-sm">{edu.location}</p>
                  {edu.thesis && <p className="text-slate-500 text-sm italic mt-1">{edu.thesis}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-2 font-medium text-lg text-navy mb-6">
              <Briefcase className="w-5 h-5" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="edu-item relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gold rounded-full" />
                  <div className="mb-1">
                    <span className="text-gold text-sm font-medium">{exp.period}</span>
                  </div>
                  <h4 className="font-medium text-navy text-lg">{exp.position}</h4>
                  <p className="text-slate-600">{exp.institution}</p>
                  <p className="text-slate-400 text-sm">{exp.location}</p>
                  <p className="text-slate-500 text-sm mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
