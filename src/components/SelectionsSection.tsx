"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Client {
  id: number;
  name: string;
  subtitle: string;
  logoSrc: string;
  logoAlt: string;
  invert?: boolean;
  logoClass: string;
  logoNote?: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Tata Communications",
    subtitle: "Grant dicembre 2024",
    logoSrc: "/images/tata-communications.svg",
    logoAlt: "Tata Communications",
    invert: true,
    logoClass: "h-6",
  },
  {
    id: 2,
    name: "Nexi",
    subtitle: "Cliente",
    logoSrc: "/images/nexi.svg",
    logoAlt: "Nexi",
    invert: true,
    logoClass: "h-8",
  },
  {
    id: 6,
    name: "Villanova.AI",
    subtitle: "Cliente",
    logoSrc: "/images/villanova-ai.png",
    logoAlt: "Villanova.AI",
    invert: true,
    logoClass: "h-8",
    logoNote: "TISCALI group",
  },
  {
    id: 3,
    name: "Deloitte",
    subtitle: "Grant marzo 2025",
    logoSrc: "/images/deloitte.png",
    logoAlt: "Deloitte",
    logoClass: "h-20",
  },
  {
    id: 4,
    name: "PoliHub",
    subtitle: "Incubatore 2025",
    logoSrc: "/images/polihub.webp",
    logoAlt: "PoliHub",
    logoClass: "h-14",
  },
  {
    id: 5,
    name: "Le Village by CA",
    subtitle: "Acceleratore 2025-26",
    logoSrc: "/images/levillage.png",
    logoAlt: "Le Village by Crédit Agricole",
    logoClass: "h-20",
  },
];

const VISIBLE_DESKTOP = 4;
const VISIBLE_TABLET = 2;
const VISIBLE_MOBILE = 1;

const SelectionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const computeVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(VISIBLE_MOBILE);
      else if (window.innerWidth < 1024) setVisibleCount(VISIBLE_TABLET);
      else setVisibleCount(VISIBLE_DESKTOP);
    };
    computeVisible();
    window.addEventListener("resize", computeVisible);
    return () => window.removeEventListener("resize", computeVisible);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, clients.length - visibleCount);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, maxIndex]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (activeIndex > maxIndex) setActiveIndex(0);
  }, [maxIndex, activeIndex]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [activeIndex, nextSlide]);

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    resetAutoplay();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const slideWidth = 100 / visibleCount;

  return (
    <section
      id="selections"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div
          className={`text-center mb-12 transform transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-h2 text-white">
            <span className="text-primary">Riconoscimenti e clienti</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Lavoriamo al fianco di aziende leader e siamo riconosciuti da acceleratori e network di innovazione.
          </p>
        </div>

        <div className="relative px-10 py-8">
          <button
            onClick={() => {
              prevSlide();
              resetAutoplay();
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-gray-700 transition-all duration-300 hover:border-primary"
            aria-label="Precedente"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => {
              nextSlide();
              resetAutoplay();
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-gray-700 transition-all duration-300 hover:border-primary"
            aria-label="Successivo"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}
            >
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div className="bg-black p-6 h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="h-24 flex flex-col items-center justify-center mb-4 w-full">
                        <Image
                          src={client.logoSrc}
                          alt={client.logoAlt}
                          width={200}
                          height={96}
                          className={`${client.logoClass} w-auto object-contain`}
                          style={client.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                        />
                        {client.logoNote && (
                          <span className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                            {client.logoNote}
                          </span>
                        )}
                      </div>
                      <p className="text-caption text-gray-400">{client.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  resetAutoplay();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Vai alla posizione ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionsSection;
