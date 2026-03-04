"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const caseStudies = [
  {
    title: "How HDFC Bank boosted app engagement by 3x",
    description:
      "A gamified rewards experience increased daily active users and transaction frequency across mobile banking.",
    color: "#004B87",
  },
  {
    title: "Flipkart's co-branded reward campaign",
    description:
      "Targeted offers through banking apps drove a 40% increase in first-time purchases for Flipkart.",
    color: "#2874F0",
  },
  {
    title: "Driving UPI adoption for Axis Bank",
    description:
      "Reward-linked UPI transactions grew 6x in 90 days through ZenEats' engagement layer.",
    color: "#800054",
  },
  {
    title: "Swiggy x SBI co-marketing success",
    description:
      "Food delivery vouchers in SBI's app generated 500K+ redemptions in the first month.",
    color: "#FC8019",
  },
  {
    title: "Myntra's festive season banking push",
    description:
      "Fashion deals surfaced in banking apps led to 2x higher conversion vs standard display ads.",
    color: "#FF3F6C",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 bg-surface-light">
      <div className="max-w-[1120px] mx-auto px-6">
        <h2 className="text-[28px] md:text-[40px] font-medium text-text-dark text-center mb-3">
          Proven <em className="text-accent not-italic italic">impact</em>
        </h2>
        <p className="text-base text-text-muted-dark text-center mb-10 max-w-[500px] mx-auto">
          See how leading banks and brands achieved measurable results with
          ZenEats.
        </p>
      </div>

      <div className="max-w-[1120px] mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {caseStudies.map((cs, i) => (
            <SwiperSlide key={i}>
              <div className="bg-surface-card rounded-2xl p-6 flex flex-col sm:flex-row gap-4 h-full">
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-text-dark mb-2">
                    {cs.title}
                  </h4>
                  <p className="text-xs text-text-muted-dark mb-4">
                    {cs.description}
                  </p>
                  <a
                    href="#"
                    className="text-accent text-sm font-medium hover:underline"
                  >
                    Read more &rarr;
                  </a>
                </div>
                <div
                  className="w-full sm:w-32 h-32 sm:h-auto rounded-2xl shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: cs.color + "20" }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: cs.color }}
                  >
                    {cs.title.charAt(4).toUpperCase()}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <a
            href="#"
            className="text-text-dark text-base underline underline-offset-4 hover:text-accent transition-colors"
          >
            View all case studies
          </a>
        </div>
      </div>
    </section>
  );
}
