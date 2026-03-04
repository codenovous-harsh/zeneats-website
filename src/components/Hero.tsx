"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PhoneFrame from "./ui/PhoneFrame";
import CafeteriaHome from "./phone-screens/CafeteriaHome";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-pill",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2 }
      );
      gsap.fromTo(
        ".hero-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.4 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.6 }
      );
      gsap.fromTo(
        ".hero-phone",
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 0.8 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Top warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

      {/* Subtle radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Trust Pill */}
      <div className="hero-pill highlight-pill-gradient rounded-full px-5 py-2 flex items-center gap-3 mb-8 opacity-0">
        <div className="flex -space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-bg-primary"
              style={{
                background: ["#FF8766", "#FFBEA2", "#FF5A2C"][i],
              }}
            />
          ))}
        </div>
        <span className="text-sm text-text-primary">
          500+ corporates trust ZenEats
        </span>
      </div>

      {/* Heading */}
      <h1 className="hero-heading text-[32px] sm:text-[40px] md:text-[56px] font-semibold leading-[1.1] sm:leading-[1] text-text-heading text-center max-w-[800px] mb-6 opacity-0">
        Redefining cafeterias for{" "}
        <em className="text-accent italic">modern</em> workplaces.
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle text-base text-text-primary text-center max-w-[700px] mb-12 opacity-0">
        ZenEats transforms corporate cafeterias with digital ordering, cashless
        payments, and real-time analytics — improving employee experience while
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
