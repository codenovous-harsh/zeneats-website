"use client";

export default function CTABanner() {
  return (
    <section className="py-16 px-6" data-animate>
      <div className="max-w-[1120px] mx-auto">
        <div className="glass-card rounded-3xl px-8 md:px-12 py-8 md:py-12 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold text-white mb-6">
            Transform your{" "}
            <em className="text-accent-bright not-italic italic text-[32px] md:text-[44.8px]">
              cafeteria
            </em>{" "}
            with ZenEats
          </h2>
          <button className="bg-white text-cta-dark-text rounded-[128px] px-6 py-4 font-semibold inline-flex items-center gap-2 hover:bg-white/90 transition-colors">
            Schedule a Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0l-4-4m4 4l-4 4"
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
