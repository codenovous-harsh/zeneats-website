import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Construction - ZenEats",
  description: "This page is currently under construction. Contact us for more details.",
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Logo */}
        <a href="/" className="inline-block mb-12 hover:opacity-80 transition-opacity">
          <img src="/images/logos/zeneats-logo.png" alt="ZenEats" className="h-12 w-auto object-contain" />
        </a>

        {/* Icon */}
        <div className="mx-auto mb-8 w-16 h-16 rounded-2xl bg-card-glass border border-white/[0.06] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <path d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-text-heading mb-4">
          Coming <span className="text-accent">soon</span>
        </h1>

        <p className="text-text-primary/60 text-base md:text-lg leading-relaxed mb-12">
          We&apos;re working on something great. This page will be available shortly.
        </p>

        {/* Contact card */}
        <div className="rounded-2xl bg-card-glass border border-white/[0.06] p-6 md:p-8 text-left space-y-5">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider">
            Get in touch
          </h2>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:info@zeneats.co.in"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-0.5">Email</p>
                <p className="text-sm text-text-primary group-hover:text-accent transition-colors">
                  info@zeneats.co.in
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919820465570"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-0.5">Phone</p>
                <p className="text-sm text-text-primary group-hover:text-accent transition-colors">
                  +91 98204 65570
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-text-muted mb-0.5">Registered Address</p>
                  <p className="text-sm text-text-primary/80 leading-relaxed">
                    1602 Lodha
                    <br />
                    Lower Parel, Mumbai 400013
                  </p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">Mailing Address</p>
                  <p className="text-sm text-text-primary/80 leading-relaxed">
                    B-302, Shankardhan Plaza, 3rd Floor
                    <br />
                    JN Road, Mulund West, Mumbai 400080
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 mt-8 text-sm text-text-muted hover:text-accent transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to homepage
        </a>
      </div>
    </main>
  );
}
