import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const publications = [
  {
    title: 'LAFITE Reveals the Complexity of Transcript Isoforms in Subcellular Fractions',
    authors: 'Jizhou Zhang, Xiao Lin, Yuelong Chen, Tsz-Ho Li, Alan Chun-Kit Lee, Eugene Yui-Ching Chow, William Chi-Shing Cho, Ting-Fung Chan',
    venue: 'Advanced Science',
    year: '2023',
    volume: 'Vol. 10, No. 3',
    type: 'Journal',
    links: {},
    highlight: true,
  },
  {
    title: 'Deep Autoencoder for Interpretable Tissue-Adaptive Deconvolution and Cell-Type-Specific Gene Analysis',
    authors: 'Yanshuo Chen, Yixuan Wang, Yuelong Chen, Yuqi Cheng, Yumeng Wei, Yunxiang Li, Jiuming Wang, Yingying Wei, Ting-Fung Chan, Yu Li',
    venue: 'Nature Communications',
    year: '2022',
    volume: 'Vol. 13, No. 1',
    type: 'Journal',
    links: {},
    highlight: true,
  },
  {
    title: 'miRNA-mRNA Analysis Concerning Embryonic Development in Medaka Fish',
    authors: 'Lai et al.',
    venue: 'Frontiers in Marine Science',
    year: '2022',
    volume: 'Vol. 8',
    type: 'Journal',
    links: {},
    highlight: false,
  },
  {
    title: 'Mutational Spectrum Analysis in Myelodysplastic Syndromes',
    authors: 'Xu et al.',
    venue: 'Oncotarget',
    year: '2017',
    volume: 'Vol. 8, No. 47',
    type: 'Journal',
    links: {},
    highlight: false,
  },
  {
    title: 'Side Effect Protein Analysis Study',
    authors: 'Wang et al.',
    venue: 'Molecular BioSystems',
    year: '2015',
    volume: 'Vol. 11, No. 7',
    type: 'Journal',
    links: {},
    highlight: false,
  },
  {
    title: 'Drug Repositioning Using Integrated Similarity Profiles',
    authors: 'Tan et al.',
    venue: 'Molecular BioSystems',
    year: '2014',
    volume: 'Vol. 10, No. 5',
    type: 'Journal',
    links: {},
    highlight: false,
  },
  {
    title: 'ADR-Related Protein Network Analysis',
    authors: 'Yuelong Chen et al.',
    venue: 'Scientific Reports',
    year: '2013',
    volume: 'Vol. 3',
    type: 'Journal',
    links: {},
    highlight: false,
  },
];

export default function Publications() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<'all' | 'recent'>('all');

  const filteredPubs = publications.filter((pub) => {
    if (filter === 'all') return true;
    return parseInt(pub.year) >= 2020;
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pub-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
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
  }, [filter]);

  return (
    <section
      ref={sectionRef}
      id="publications"
      className="academic-section bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="section-divider" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy">
            Publications
          </h2>

          {/* Filter */}
          <div className="flex gap-2">
            {([['all', 'All'], ['recent', '2020+']] as const).map(([value, label]) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`px-4 py-2 text-sm rounded transition-colors ${
                  filter === value
                    ? 'bg-navy text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-gold" />
            <span className="text-slate-600">{publications.length} Publications</span>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPubs.map((pub, index) => (
            <div
              key={index}
              className={`pub-item p-5 rounded-lg border transition-all hover:shadow-md ${
                pub.highlight
                  ? 'bg-navy/5 border-navy/20'
                  : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-medium text-navy text-lg leading-snug mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">{pub.authors}</p>
                  <p className="text-slate-500 text-sm italic">
                    {pub.venue}, {pub.volume}, {pub.year}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {Object.keys(pub.links).length > 0 && (
                    <div className="flex gap-2">
                      {(pub.links as Record<string, string>).pdf && (
                        <a
                          href={(pub.links as Record<string, string>).pdf}
                          className="px-3 py-1.5 text-sm border border-slate-300 rounded hover:border-navy hover:text-navy transition-colors flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          PDF
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-8 text-center">
          <a
            href="https://loganylchen.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors"
          >
            View full publication list
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
