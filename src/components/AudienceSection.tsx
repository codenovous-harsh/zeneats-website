"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const demographics = [
  { age: "18-24 yr", pct: 17 },
  { age: "25-34 yr", pct: 24 },
  { age: "35-44 yr", pct: 26 },
  { age: "45-54 yr", pct: 18 },
  { age: "55+", pct: 15 },
];

export default function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".audience-content",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6" data-animate>
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-[28px] md:text-[40px] font-medium text-text-heading text-center mb-4">
          Unlock access to{" "}
          <em className="text-accent not-italic italic">
            India&apos;s most engaged
          </em>{" "}
          banking audience
        </h2>
        <p className="text-base text-text-primary text-center mb-12 max-w-[600px] mx-auto">
          Reach the most active digital banking users across age groups and
          geographies.
        </p>

        <div className="audience-content flex flex-col lg:flex-row gap-12 items-center">
          {/* Map Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-[400px] h-[320px] rounded-2xl bg-card-glass flex items-center justify-center relative overflow-hidden">
              {/* Simple India outline placeholder */}
              <svg
                viewBox="0 0 200 260"
                className="w-48 h-60 text-accent/30"
                fill="currentColor"
              >
                <ellipse cx="100" cy="100" rx="60" ry="80" opacity="0.3" />
                <ellipse cx="100" cy="160" rx="40" ry="60" opacity="0.2" />
                <circle cx="80" cy="80" r="4" className="text-accent" fill="currentColor" opacity="0.8" />
                <circle cx="120" cy="90" r="3" className="text-accent" fill="currentColor" opacity="0.6" />
                <circle cx="100" cy="120" r="5" className="text-accent" fill="currentColor" opacity="0.9" />
                <circle cx="90" cy="150" r="3" className="text-accent" fill="currentColor" opacity="0.5" />
                <circle cx="110" cy="140" r="4" className="text-accent" fill="currentColor" opacity="0.7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
            </div>
          </div>

          {/* Stats Panel */}
          <div className="flex-1 space-y-8">
            <div>
              <p className="text-[36px] md:text-[48px] font-semibold text-text-heading leading-tight">
                30 Million
              </p>
              <p className="text-base text-text-primary">Daily Active Users</p>
            </div>

            {/* Demographics bars */}
            <div className="space-y-3">
              {demographics.map((demo) => (
                <div key={demo.age} className="flex items-center gap-4">
                  <span className="text-sm text-text-primary w-16 shrink-0">
                    {demo.age}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-bright"
                      style={{ width: `${demo.pct * 3}%` }}
                    />
                  </div>
                  <span className="text-sm text-text-primary w-10 text-right">
                    {demo.pct}%
                  </span>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[36px] md:text-[48px] font-semibold text-text-heading leading-tight">
                110 Million
              </p>
              <p className="text-base text-text-primary">
                Monthly Active Users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
