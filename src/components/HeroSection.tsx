"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const ROTATION_INTERVAL = 3500;
const STAGGER_MS = 30;
const SCRAMBLE_TICK_MS = 50;
const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&";

const LINE_1 = [
  "Mercati regolamentati",
  "Software complesso",
  "Sviluppo automatico",
  "Senior Accountability",
  "Compliance by design",
  "AI-assisted engineering",
];
const LINE_2 = [
  "Tempi ridotti",
  "TTM accelerato",
  "Compressione dei costi",
  "Delivery prevedibile",
  "Rischi ridotti",
  "Documentazione chiara",
];
const LINE_3 = [
  "Iperprofilazione dei clienti",
  "Canali digitali",
  "Percorsi conversazionali",
  "Vendita in conversazione",
  "Prequalifica in conversazione",
];

const randomChar = () =>
  SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];

const isAlphaNum = (c: string) => /[a-zA-Z0-9]/.test(c);

const useScrambleRotation = (variants: string[], initialDelay: number) => {
  const { paddedVariants, longestVariant } = useMemo(() => {
    const longest = variants.reduce(
      (a, b) => (a.length >= b.length ? a : b),
      ""
    );
    return {
      longestVariant: longest,
      paddedVariants: variants.map((v) => v.padEnd(longest.length, " ")),
    };
  }, [variants]);

  const [variantIndex, setVariantIndex] = useState(0);
  const [displayText, setDisplayText] = useState(paddedVariants[0]);
  const isFirstRunRef = useRef(true);

  useEffect(() => {
    if (paddedVariants.length <= 1) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startTimeout = setTimeout(() => {
      setVariantIndex((i) => (i + 1) % paddedVariants.length);
      intervalId = setInterval(() => {
        setVariantIndex((i) => (i + 1) % paddedVariants.length);
      }, ROTATION_INTERVAL);
    }, initialDelay);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [paddedVariants.length, initialDelay]);

  useEffect(() => {
    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
      return;
    }

    const target = paddedVariants[variantIndex];
    const lastLockTime = (target.length - 1) * STAGGER_MS;
    const totalDuration = lastLockTime + 120;

    const startTime = performance.now();

    const update = () => {
      const elapsed = performance.now() - startTime;
      const chars = target.split("").map((c, i) => {
        const lockTime = i * STAGGER_MS;
        if (elapsed >= lockTime || !isAlphaNum(c)) return c;
        return randomChar();
      });
      setDisplayText(chars.join(""));
    };

    update();
    const intervalId = setInterval(update, SCRAMBLE_TICK_MS);
    const endTimeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setDisplayText(target);
    }, totalDuration);

    return () => {
      clearInterval(intervalId);
      clearTimeout(endTimeoutId);
    };
  }, [variantIndex, paddedVariants]);

  return { displayText, longestVariant };
};

const RotatingLine = ({
  variants,
  initialDelay,
  className = "",
}: {
  variants: string[];
  initialDelay: number;
  className?: string;
}) => {
  const { displayText, longestVariant } = useScrambleRotation(
    variants,
    initialDelay
  );

  return (
    <span
      className={`relative inline-block whitespace-pre align-top ${className}`}
    >
      <span className="invisible" aria-hidden="true">
        {longestVariant}
      </span>
      <span className="absolute inset-0">{displayText}</span>
    </span>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 md:py-32">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-display text-white leading-tight">
            <RotatingLine variants={LINE_1} initialDelay={2500} />
            <br />
            <RotatingLine variants={LINE_2} initialDelay={3500} />
            <br />
            <RotatingLine
              variants={LINE_3}
              initialDelay={4500}
              className="text-primary"
            />
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-2">
            Scorri per esplorare
          </span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
