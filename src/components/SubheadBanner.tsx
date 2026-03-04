"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SubheadBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".subhead-text",
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
    <section ref={sectionRef} className="py-16 md:py-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <p className="subhead-text text-xl md:text-2xl lg:text-[28px] font-semibold text-text-heading text-center leading-relaxed opacity-0">
          ZenEats empowers corporates to digitize cafeteria operations, delight employees with seamless food experiences, and optimize costs with real-time data.
        </p>
      </div>
    </section>
  );
}
