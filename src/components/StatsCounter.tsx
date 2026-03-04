"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#FF8766" strokeWidth="2" />
        <path d="M6 7h8M6 11h5" stroke="#FF8766" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: "Cafeterias managed",
    value: 891,
    suffix: "+",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v14H4z" stroke="#FF8766" strokeWidth="2" strokeLinejoin="round" />
        <path d="M7 8h6M7 11h4" stroke="#FF8766" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: "Monthly orders",
    value: 13,
    suffix: "M+",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3" stroke="#FF8766" strokeWidth="2" />
        <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#FF8766" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: "Active users",
    value: 1440,
    suffix: "K+",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v4" stroke="#FF8766" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="9" r="2" fill="#FF8766" />
        <path d="M10 11v1c0 3-5 5-5 5h10s-5-2-5-5v-1" stroke="#FF8766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Cities covered",
    value: 38,
    suffix: "+",
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
