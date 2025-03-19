"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Define selection type
interface Selection {
  id: number;
  title: string;
  organization: string;
  year: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
}

// Organizations that selected us
const selections: Selection[] = [
  {
    id: 3,
    title: "Startup Contest",
    organization: "A Tata Communication Company",
    year: "2024",
    description: "Kaleyra Award for High Potential Communication Channel.",
    logoSrc: "/images/kaleyra.avif",
    logoAlt: "Kaleyra Logo"
  },
  {
    id: 2,
    title: "Special Grant",
    organization: "Officine Innovazione",
    year: "2025",
    description: "Awarded with a unique special grant among more than 200 startups in Italy.",
    logoSrc: "/images/deloitte.png",
    logoAlt: "Deloitte Logo"
  },
  {
    id: 1,
    title: "Selected for the acceleration program",
    organization: "Zest & CDP",
    year: "2025",
    description: "Selected for Italy's premier fintech accelerator, backed by Zest VC and CDP.",
    logoSrc: "/images/fintech.png",
    logoAlt: "Fintech District Logo"
  },
  {
    id: 4,
    title: "Selected for the acceleration program",
    organization: "PoliHub",
    year: "2025",
    description: "Selected for PoliHub, Politecnico di Milano's premier deeptech accelerator, 2025 cohort.",
    logoSrc: "/images/polihub.webp",
    logoAlt: "PoliHub Logo"
  },
];

const SelectionsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="selections"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white">
            <span className="text-purple-500">Recognition</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Deep4IT has been recognized and selected by leading organizations in the financial and technology sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {selections.map((selection, index) => (
            <div
              key={selection.id}
              className={`transform transition-all duration-500 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-black border border-gray-800 rounded-lg p-3">
                <div className="flex flex-col h-full">
                  <div className="mb-2 h-12 relative flex items-center justify-center">
                    <Image 
                      src={selection.logoSrc} 
                      alt={selection.logoAlt}
                      width={100}
                      height={50}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-purple-400 text-caption font-semibold">
                      {selection.year}
                    </div>
                    <div className="text-gray-400 text-caption">
                      {selection.organization}
                    </div>
                  </div>
                  <h3 className="text-body-sm font-bold text-white mb-1">
                    {selection.title}
                  </h3>
                  <p className="text-gray-400 text-caption italic">
                    {selection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionsSection;
