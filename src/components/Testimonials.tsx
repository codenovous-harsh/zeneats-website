"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Facility Director, Infosys",
    quote:
      "ZenEats transformed our cafeteria operations across 45 locations. Employee satisfaction with food services jumped 40% in the first quarter.",
    company: "Infosys",
    color: "#007CC3",
  },
  {
    name: "Priya Sharma",
    role: "VP Operations, TCS",
    quote:
      "The demand forecasting alone saved us crores in food waste. ZenEats pays for itself within the first month of deployment.",
    company: "TCS",
    color: "#0070AD",
  },
  {
    name: "Amit Patel",
    role: "Head of Facilities, Wipro",
    quote:
      "Going cashless was seamless. Our employees love the app, and we have complete visibility into every transaction and vendor performance metric.",
    company: "Wipro",
    color: "#44167E",
  },
  {
    name: "Sarah Mitchell",
    role: "Workplace Experience Lead, Goldman Sachs",
    quote:
      "ZenEats' dietary tracking and allergen management features give our diverse global workforce confidence in every meal they order.",
    company: "Goldman",
    color: "#7399C6",
  },
  {
    name: "Vikram Singh",
    role: "Admin Head, Reliance Industries",
    quote:
      "Managing 120+ cafeterias from one dashboard seemed impossible. ZenEats made it not just possible, but effortless.",
    company: "Reliance",
    color: "#003DA5",
  },
  {
    name: "Ananya Desai",
    role: "Facility Manager, Accenture",
    quote:
      "The real-time analytics helped us optimize vendor contracts and reduce per-meal costs by 18% while improving food quality.",
    company: "Accenture",
    color: "#A100FF",
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-[28px] md:text-[40px] font-semibold text-text-heading text-center mb-3">
          Voices of <em className="text-accent not-italic italic">impact</em>
        </h2>
        <p className="text-base text-text-primary text-center mb-10 max-w-[500px] mx-auto">
          Hear from facility leaders who transformed their cafeteria operations.
        </p>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="glass-card rounded-3xl p-6 h-full flex flex-col">
                <p className="text-base font-light text-text-primary mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-base font-normal text-[#E4E4E4]">
                    {t.name}
                  </p>
                  <p className="text-sm font-normal text-text-muted">
                    {t.role}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center text-white text-[8px] font-bold"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.company.charAt(0)}
                    </div>
                    <span className="text-xs text-text-muted">
                      {t.company}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-primary hover:border-accent hover:text-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-primary hover:border-accent hover:text-accent transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
