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

// Organizations that selected us - 2025 only
const selections: Selection[] = [
  {
    id: 2,
    title: "Special Grant",
    organization: "Officine Innovazione",
    year: "2025",
    description: "Unique special grant among more than 200 startups in Italy.",
    logoSrc: "/images/deloitte.png",
    logoAlt: "Deloitte Logo"
  },
  {
    id: 1,
    title: "Acceleration Program",
    organization: "PoliHub",
    year: "2025",
    description: "Deeptech accelerator of Politecnico di Milano, cohort 2025.",
    logoSrc: "/images/polihub.webp",
    logoAlt: "PoliHub Logo"
  },
  {
    id: 4,
    title: "Innovation Program",
    organization: "Le Village",
    year: "2025",
    description: "Admitted to Credit Agricole's international innovation network.",
    logoSrc: "/images/levillage.png",
    logoAlt: "Le Village by Credit Agricole Logo"
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
            <span className="text-primary">2025 Awards & Recognition</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Our innovative approach to AI technologies for the financial sector has been recognized by leading organizations in financial and technology sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                      width={selection.organization === "Le Village" ? 80 : 100}
                      height={selection.organization === "Le Village" ? 40 : 50}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-primary/90 text-caption font-semibold">
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
