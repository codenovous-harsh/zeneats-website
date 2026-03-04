"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="#FF8766" strokeWidth="2" />
        <path d="M7 10l2 2 4-4" stroke="#FF8766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Rewards distributed",
    value: 100,
    suffix: " Cr+",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#FF8766" strokeWidth="2" />
        <path d="M2 8h16" stroke="#FF8766" strokeWidth="2" />
      </svg>
    ),
    label: "Digital payments",
    value: 6,
    suffix: "x",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3" stroke="#FF8766" strokeWidth="2" />
        <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#FF8766" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: "User engagement",
    value: 4,
    suffix: "x",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="#FF8766" strokeWidth="2" />
        <path d="M7 12s1.5 2 3 2 3-2 3-2" stroke="#FF8766" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7.5" cy="8" r="1" fill="#FF8766" />
        <circle cx="12.5" cy="8" r="1" fill="#FF8766" />
      </svg>
    ),
    label: "User retention",
    value: 3,
    suffix: "x",
  },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];
        const obj = { value: 0 };

        gsap.to(obj, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.value) + stat.suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6" data-animate>
      <div className="max-w-[1120px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl px-4 sm:px-6 pt-4 pb-5 sm:pb-6"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              {stat.icon}
              <span className="text-sm sm:text-base font-medium text-text-primary">
                {stat.label}
              </span>
            </div>
            <span
              ref={(el) => { counterRefs.current[i] = el; }}
              className="text-[32px] sm:text-[48px] font-semibold leading-[40px] sm:leading-[60px] text-text-heading"
            >
              0{stat.suffix}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
