"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const caseStudies = [
  {
    title: "Infosys digitized 45 cafeterias across campuses",
    description:
      "Digital ordering reduced wait times by 60% and increased employee satisfaction scores across all locations.",
    color: "#007CC3",
  },
  {
    title: "TCS achieved zero food waste certification",
    description:
      "Demand forecasting and smart portioning helped TCS eliminate food waste across their major tech parks.",
    color: "#0070AD",
  },
  {
    title: "Wipro's cashless cafeteria transformation",
    description:
      "100% cashless adoption within 3 months, reducing operational overhead and improving transaction speed by 4x.",
    color: "#44167E",
  },
  {
    title: "Reliance digitized 120+ office cafeterias",
    description:
      "Unified cafeteria management across 120+ locations with real-time analytics and vendor performance tracking.",
    color: "#003DA5",
  },
  {
    title: "Goldman Sachs elevated campus dining experience",
    description:
      "Premium food ordering with dietary preference tracking and allergen alerts for global workforce.",
    color: "#7399C6",
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
          See how leading corporates transformed their cafeteria operations with ZenEats.
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
