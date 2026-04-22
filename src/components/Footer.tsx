"use client";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "SOLUTIONS",
    links: [
      { label: "Employee App", href: "/products#employee-app" },
      { label: "Vendor Dashboard", href: "/products#vendor-dashboard" },
      { label: "ZenSight Dashboard", href: "/products#zensight-dashboard" },
    ],
  },
  {
    title: "RESOURCES",
    links: [{ label: "Case Studies", href: "/maintenance" }],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Refund Policy", href: "/maintenance" },
      { label: "Privacy Policy", href: "/maintenance" },
      { label: "Terms of Service", href: "/maintenance" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6 overflow-hidden">
      {/* Large watermark */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[120px] md:text-[200px] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
        ZenEats
      </div>

      {/* Warm orange glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[60px] bg-accent/5 blur-[40px] rounded-full" />

      <div className="max-w-[1120px] mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Logo + Address */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block">
              <img
                src="/images/logos/zeneats-logo.png"
                alt="ZenEats"
                className="h-10 w-auto object-contain"
              />
            </a>
            <a
              href="mailto:info@zeneats.co.in"
              className="block text-sm text-text-primary/60 mt-4 hover:text-accent transition-colors"
            >
              info@zeneats.co.in
            </a>
            <div className="mt-2 space-y-2">
              <div>
                <p className="text-xs text-text-primary/40">Registered Address</p>
                <p className="text-sm text-text-primary/60 leading-relaxed">
                  1602 Lodha
                  <br />
                  Lower Parel, Mumbai 400013
                </p>
              </div>
              <div>
                <p className="text-xs text-text-primary/40">Mailing Address</p>
                <p className="text-sm text-text-primary/60 leading-relaxed">
                  B-302, Shankardhan Plaza, 3rd Floor
                  <br />
                  JN Road, Mulund West, Mumbai 400080
                </p>
              </div>
            </div>
            {/* LinkedIn icon */}
            <a
              href="#"
              className="inline-block mt-4 text-text-primary/60 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3 8h3v9H3V8zm5.5 0H11v1.2h.04C11.5 8.5 12.6 8 13.8 8c2.7 0 3.2 1.8 3.2 4v5h-3v-4.4c0-1.1-.02-2.4-1.5-2.4-1.5 0-1.7 1.2-1.7 2.3V17H8V8h.5z" />
              </svg>
            </a>
          </div>

          {/* Sitemap Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-primary/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-center text-sm text-text-muted">
            Copyright 2025 ZenEats.
          </p>
        </div>
      </div>
    </footer>
  );
}
