"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import PhoneFrame from "./ui/PhoneFrame";
import CafeteriaHome from "./phone-screens/CafeteriaHome";

const rotatingWords = [
  "Builders",
  "Corporates",
  "Hospitals",
  "Events",
  "Desk Ordering",
  "Highway Food Courts",
  "Flea Market",
];

interface HeroProps {
  delayStart?: number;
}

export default function Hero({ delayStart = 0 }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cycleWord = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      setIsAnimating(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleWord, 2500);
    return () => clearInterval(interval);
  }, [cycleWord]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: delayStart + 0.2 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: delayStart + 0.4 }
      );
      gsap.fromTo(
        ".hero-phone",
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: delayStart + 0.6 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [delayStart]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 px-6 overflow-hidden"
    >
      {/* Top warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

      {/* Subtle radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Heading */}
      <h1 className="hero-heading text-[32px] sm:text-[40px] md:text-[56px] font-semibold leading-[1.1] sm:leading-[1] text-text-heading text-center max-w-[800px] mb-6 opacity-0">
        Cafeterias, reimagined for{" "}
        <span
          className={`text-accent inline-block transition-all duration-300 ${
            isAnimating
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          {rotatingWords[wordIndex]}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle text-base text-text-primary text-center max-w-[700px] mb-12 opacity-0">
        ZenEats transforms cafeterias with digital ordering, cashless
        payments, and real-time analytics — improving user experience while
        streamlining operations.
      </p>

      {/* Phone Mockup Area */}
      <div className="hero-phone relative w-full max-w-[400px] mx-auto opacity-0">
        {/* Blurred card decorations */}
        <div className="absolute -left-8 sm:-left-16 top-8 w-32 sm:w-48 h-24 sm:h-32 rounded-2xl bg-accent/10 blur-xl rotate-[-8deg]" />
        <div className="absolute -right-8 sm:-right-16 top-12 w-32 sm:w-48 h-24 sm:h-32 rounded-2xl bg-accent/8 blur-xl rotate-[8deg]" />

        {/* Phone frame with CafeteriaHome screen */}
        <div className="relative mx-auto flex items-center justify-center">
          <PhoneFrame>
            <CafeteriaHome />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
