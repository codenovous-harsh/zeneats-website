"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "What is ZenEats?",
    a: "ZenEats is a digital cafeteria management platform for corporates. We help companies digitize food ordering, enable cashless payments, and provide real-time analytics to optimize cafeteria operations.",
  },
  {
    q: "How does ZenEats integrate with existing cafeteria systems?",
    a: "ZenEats provides a lightweight setup that works alongside your existing POS and kitchen systems. Our team handles the integration within 2-3 weeks with minimal disruption to operations.",
  },
  {
    q: "What features does the employee app offer?",
    a: "Employees can browse menus, pre-order meals, make cashless payments, track orders in real-time, set dietary preferences, and rate their food — all from their phone.",
  },
  {
    q: "How does ZenEats help reduce food waste?",
    a: "Our demand forecasting engine analyzes historical ordering data and trends to predict daily demand accurately. This helps kitchens prepare the right quantities, reducing waste by up to 30%.",
  },
  {
    q: "What analytics and reporting are available?",
    a: "The Nexus Dashboard provides real-time insights on revenue, order volumes, vendor performance, food ratings, waste metrics, and employee satisfaction — all in one place.",
  },
  {
    q: "Can ZenEats support multiple cafeteria locations?",
    a: "Yes. ZenEats is built for multi-location management. You can manage hundreds of cafeterias across different cities from a single admin dashboard with location-specific configurations.",
  },
  {
    q: "How do cashless payments work?",
    a: "Employees can pay via wallet top-ups, meal cards, UPI, or corporate meal benefits. All transactions are tracked and reconciled automatically, eliminating cash handling.",
  },
  {
    q: "What onboarding support does ZenEats provide?",
    a: "We provide dedicated onboarding support including vendor training, employee app tutorials, admin dashboard walkthroughs, and a dedicated success manager for the first 90 days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6" data-animate>
      <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="lg:w-[320px] shrink-0">
          <span className="text-accent text-base font-medium uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-[28px] md:text-[36px] font-semibold text-text-heading mt-3 mb-4 leading-tight">
            Get your questions answered
          </h2>
          <p className="text-base text-text-primary">
            Everything you need to know about ZenEats and how it works for corporates, vendors, and facility managers.
          </p>
        </div>

        {/* Right Column - Accordion */}
        <div className="flex-1 min-w-0 space-y-2">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-base font-medium text-text-primary pr-4">
                  {item.q}
                </span>
                <span
                  className={`text-text-primary text-xl shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm text-text-primary/80 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
