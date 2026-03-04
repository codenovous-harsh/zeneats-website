"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BigCard from "./BigCard";
import PhoneFrame from "./ui/PhoneFrame";
import MenuBrowser from "./phone-screens/MenuBrowser";
import OrderTracking from "./phone-screens/OrderTracking";
import AdminDashboard from "./phone-screens/AdminDashboard";

const cards = [
  {
    id: "for-corporates",
    eyebrow: "FOR CORPORATES",
    heading: (
      <>
        Smart cafeterias for{" "}
        <em className="text-accent not-italic italic">happier</em> employees
      </>
    ),
    description:
      "Digital ordering, cashless payments, real-time menus, and meal benefit management — everything your employees need for a seamless cafeteria experience.",
    ctaText: "Explore for Corporates",
    chips: ["Digital Ordering", "Cashless Payments", "Real-time Menus", "Meal Benefits"],
    phoneContent: (
      <PhoneFrame>
        <MenuBrowser />
      </PhoneFrame>
    ),
    reversed: false,
  },
  {
    id: "for-vendors",
    eyebrow: "FOR VENDORS",
    heading: (
      <>
        Streamline{" "}
        <em className="text-accent not-italic italic">kitchen</em> operations
      </>
    ),
    description:
      "Real-time order management, FIFO queuing, demand forecasting, and waste reduction tools that help kitchen teams serve faster and smarter.",
    ctaText: "Explore for Vendors",
    chips: ["Live Orders", "FIFO Queue", "Demand Forecasting", "Waste Reduction"],
    phoneContent: (
      <PhoneFrame>
        <OrderTracking />
      </PhoneFrame>
    ),
    reversed: true,
  },
  {
    id: "for-facilities",
    eyebrow: "FOR FACILITIES",
    heading: (
      <>
        Complete{" "}
        <em className="text-accent not-italic italic">visibility</em> and
        control
      </>
    ),
    description:
      "Monitor sales, vendor performance, compliance, and sustainability metrics from a single dashboard. Make data-driven decisions for your cafeteria operations.",
    ctaText: "Explore for Facilities",
    chips: ["Analytics Dashboard", "Vendor Management", "Compliance", "Sustainability"],
    phoneContent: (
      <PhoneFrame>
        <AdminDashboard />
      </PhoneFrame>
    ),
    reversed: false,
  },
];

export default function BigCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".big-card-item").forEach((card, i) => {
        const isReversed = cards[i]?.reversed;
        const content = card.querySelector(".big-card-content");
        const phone = card.querySelector(".big-card-phone");

        if (content) {
          gsap.fromTo(
            content,
            { x: isReversed ? 40 : -40, opacity: 0 },
            {
              x: 0,
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
        }

        if (phone) {
          gsap.fromTo(
            phone,
            { x: isReversed ? -40 : 40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
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
              phoneContent={card.phoneContent}
              reversed={card.reversed}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
