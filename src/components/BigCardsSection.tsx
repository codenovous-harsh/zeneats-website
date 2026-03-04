"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BigCard from "./BigCard";

const cards = [
  {
    id: "for-banks",
    eyebrow: "FOR BANKS",
    heading: (
      <>
        Transform banking apps into{" "}
        <em className="text-accent not-italic italic">engagement</em> powerhouses
      </>
    ),
    description:
      "Integrate reward-based experiences into your banking app. Drive digital adoption, increase transactions, and keep users coming back with personalized offers and gamified journeys.",
    ctaText: "Explore for Banks",
    chips: ["Spark", "Circle", "OnePass", "Inspire"],
    phoneColor: "#E2C8B6",
  },
  {
    id: "for-brands",
    eyebrow: "FOR BRANDS",
    heading: (
      <>
        Reach <em className="text-accent not-italic italic">millions</em> of
        high-intent consumers
      </>
    ),
    description:
      "Access India's most active banking audience. Place your brand where purchase decisions happen — inside banking and payment apps used daily by millions.",
    ctaText: "Explore for Brands",
    phoneColor: "#C8D6E2",
  },
  {
    id: "monetize",
    eyebrow: "MONETIZE",
    heading: (
      <>
        Turn user attention into{" "}
        <em className="text-accent not-italic italic">revenue</em>
      </>
    ),
    description:
      "Monetize your app's engagement without disrupting user experience. Our native ad formats and sponsored rewards generate revenue while users enjoy the experience.",
    ctaText: "Start Monetizing",
    phoneColor: "#D6E2C8",
  },
];

export default function BigCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".big-card-item").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="max-w-[1120px] mx-auto space-y-8">
        {cards.map((card) => (
          <div key={card.id} id={card.id} className="big-card-item">
            <BigCard
              eyebrow={card.eyebrow}
              heading={card.heading}
              description={card.description}
              ctaText={card.ctaText}
              chips={card.chips}
              phoneColor={card.phoneColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
