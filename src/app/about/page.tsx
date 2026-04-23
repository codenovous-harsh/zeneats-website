"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ────────────────────────────────────────── */

const coreValues = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Operational Excellence",
    description: "Streamlined cafeteria systems built for scale.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
    title: "Technology First",
    description: "Smart ordering, analytics, and cashless payments.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Quality & Consistency",
    description: "Superior dining experience across every location.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    title: "Sustainability",
    description: "Reducing food waste through data-driven forecasting.",
  },
];

const founders = [
  {
    name: "Denil Lalan",
    role: "Co-Founder",
    gradient: "from-accent to-accent-bright",
    description:
      "Brings a strategic and operational mindset to building scalable cafeteria management systems that serve thousands daily.",
  },
  {
    name: "Kunal Shah",
    role: "Co-Founder",
    gradient: "from-accent-bright to-orange-400",
    description:
      "Drives business insight, partnerships, and vendor networks that form the backbone of ZenEats' growing ecosystem.",
  },
  {
    name: "Harshil Shah",
    role: "Co-Founder",
    gradient: "from-orange-400 to-accent",
    description:
      "Brings hands-on F&B expertise to kitchen operations, vendor management, and quality control across all locations.",
  },
  {
    name: "Harsh Maheshwari",
    role: "Technical Member",
    gradient: "from-accent-light to-accent",
    description:
      "Leads technology and product development, architecting the platform's digital infrastructure from ordering systems to analytics dashboards.",
  },
  {
    name: "Sanskar Maroo",
    role: "Technical Member",
    gradient: "from-accent to-accent-light",
    description:
      "Drives engineering execution, building scalable systems and ensuring technical excellence across the entire platform.",
  },
];

/* ── Component ───────────────────────────────────── */

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entry animations
      gsap.fromTo(
        ".about-hero-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2 }
      );
      gsap.fromTo(
        ".about-hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4 }
      );

      // Scroll-triggered sections
      const sections = gsap.utils.toArray<HTMLElement>("[data-animate]");
      sections.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        {/* ═══ Hero ═══ */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 px-6 overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />
          <div className="absolute top-20 right-[10%] w-3 h-3 rounded-full bg-accent/40 animate-pulse pointer-events-none" />
          <div className="absolute top-32 left-[15%] w-2 h-2 rounded-full bg-accent-light/30 animate-pulse pointer-events-none" />

          {/* Decorative star SVGs */}
          <svg className="absolute top-28 right-[20%] text-accent/20 pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
          </svg>
          <svg className="absolute top-40 left-[12%] text-accent-light/15 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
          </svg>

          <h1 className="about-hero-heading text-[32px] sm:text-[40px] md:text-[56px] font-semibold leading-[1.1] text-text-heading text-center max-w-[800px] mb-6 opacity-0">
            Redefining how workplaces experience{" "}
            <em className="text-accent-bright italic">food</em>.
          </h1>
          <p className="about-hero-subtitle text-base md:text-lg text-text-primary text-center max-w-[640px] opacity-0">
            At the heart of our company lies a simple belief — great food
            experiences should be efficient, seamless, and enjoyable for
            everyone.
          </p>
        </section>

        {/* ═══ About Text ═══ */}
        <section className="py-16 px-6 bg-surface-light" data-animate>
          <div className="max-w-[800px] mx-auto">
            <p className="text-accent text-base font-medium uppercase tracking-wide mb-3">
              OUR STORY
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-text-dark mb-6">
              Building the future of cafeteria{" "}
              <em className="text-accent italic">dining</em>
            </h2>
            <div className="space-y-6 text-base text-text-muted-dark leading-relaxed">
              <p>
                ZenEats is a next-generation cafeteria management company that
                partners with organizations to build and operate technology-driven
                food service ecosystems within corporate and institutional
                campuses. We go beyond traditional catering by designing entire
                cafeteria experiences — from vendor onboarding and kitchen
                operations to digital ordering, cashless payments, and real-time
                analytics.
              </p>
              <p>
                Our approach transforms underperforming, unorganized cafeteria
                spaces into efficient, profitable, and employee-friendly food
                ecosystems. By combining operational excellence with cutting-edge
                technology, ZenEats enables organizations to offer a superior
                dining experience while maintaining full control and
                transparency over food operations.
              </p>
              <p>
                Founded by a team of five — combining deep expertise in food
                service operations, technology, and business strategy — ZenEats is
                built on the belief that cafeterias can be more than just a place
                to eat. They can be strategic assets that boost employee
                satisfaction, reduce operational overhead, and create value for
                every stakeholder involved.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ Core Values ═══ */}
        <section className="py-16 px-6" data-animate>
          <div className="max-w-[1120px] mx-auto">
            <p className="text-accent text-base font-medium uppercase tracking-wide text-center mb-3">
              OUR VALUES
            </p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-text-heading text-center mb-12">
              What drives us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((v) => (
                <div
                  key={v.title}
                  className="bg-surface-light rounded-2xl p-8"
                >
                  <div className="text-accent mb-4">{v.icon}</div>
                  <h3 className="text-lg font-semibold text-text-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-base text-text-muted-dark">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Founders ═══ */}
        <section className="py-16 px-6 bg-surface-light" data-animate>
          <div className="max-w-[1120px] mx-auto">
            <p className="text-accent text-base font-medium uppercase tracking-wide text-center mb-3">
              OUR TEAM
            </p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-text-dark text-center mb-4">
              People behind the platform
            </h2>
            <p className="text-text-muted-dark text-center max-w-[600px] mx-auto mb-12">
              A team of five combining deep expertise in food service operations,
              technology, and business strategy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {founders.map((f) => (
                <div
                  key={f.name}
                  className="bg-surface-card rounded-2xl p-8 flex flex-col items-center text-center"
                >
                  {/* Avatar */}
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${f.gradient} flex items-center justify-center text-2xl font-bold text-white mb-4`}
                  >
                    {f.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark">
                    {f.name}
                  </h3>
                  <p className="text-sm text-accent mb-3">{f.role}</p>
                  <p className="text-sm text-text-muted-dark leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Vision & Mission ═══ */}
        <section className="py-16 px-6" data-animate>
          <div className="max-w-[1120px] mx-auto">
            <p className="text-accent text-base font-medium uppercase tracking-wide text-center mb-8">
              OUR PURPOSE
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-light rounded-2xl p-8 md:p-10">
                <h3 className="text-accent uppercase tracking-wider text-xs font-semibold mb-4">
                  Our Vision
                </h3>
                <p className="text-base text-text-muted-dark leading-relaxed">
                  To redefine cafeteria dining by building technology-enabled,
                  operationally efficient, and customer-focused food service
                  systems that benefit organizations, vendors, and consumers
                  alike.
                </p>
              </div>
              <div className="bg-surface-light rounded-2xl p-8 md:p-10">
                <h3 className="text-accent uppercase tracking-wider text-xs font-semibold mb-4">
                  Our Mission
                </h3>
                <p className="text-base text-text-muted-dark leading-relaxed">
                  To create cafeterias that are efficient for operators, profitable
                  for vendors, and delightful for customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CTA Banner ═══ */}
        <section className="py-16 px-6" data-animate>
          <div className="max-w-[1120px] mx-auto">
            <div className="glass-card rounded-3xl px-8 md:px-12 py-8 md:py-12 text-center">
              <h2 className="text-[28px] md:text-[40px] font-semibold text-white mb-6">
                Join us in transforming{" "}
                <em className="text-accent-bright not-italic italic text-[32px] md:text-[44.8px]">
                  cafeteria
                </em>{" "}
                dining
              </h2>
              <a
                href="/#home"
                className="bg-white text-cta-dark-text rounded-[128px] px-6 py-4 font-semibold inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Schedule a Demo
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
