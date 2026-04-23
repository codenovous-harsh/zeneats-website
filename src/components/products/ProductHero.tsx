export default function ProductHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 px-6 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-20 right-[10%] w-3 h-3 rounded-full bg-accent/40 animate-pulse pointer-events-none" />
      <div className="absolute top-32 left-[15%] w-2 h-2 rounded-full bg-accent-light/30 animate-pulse pointer-events-none" />

      {/* Decorative star SVGs */}
      <svg
        className="absolute top-28 right-[20%] text-accent/20 pointer-events-none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
      </svg>
      <svg
        className="absolute top-40 left-[12%] text-accent-light/15 pointer-events-none"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
      </svg>

      {/* Eyebrow pill */}
      <span className="products-hero-eyebrow highlight-pill-gradient text-accent text-sm font-medium uppercase tracking-wide px-4 py-1.5 rounded-full border border-accent/20 mb-6 opacity-0">
        OUR PRODUCTS
      </span>

      <h1 className="products-hero-heading text-[32px] sm:text-[40px] md:text-[56px] font-semibold leading-[1.1] text-text-heading text-center max-w-[800px] mb-6 opacity-0">
        The complete platform for modern{" "}
        <em className="text-accent-bright italic">cafeteria</em> management.
      </h1>
      <p className="products-hero-subtitle text-base md:text-lg text-text-primary text-center max-w-[640px] opacity-0">
        Three interconnected products that streamline ordering, operations, and
        analytics — built to work together seamlessly.
      </p>
    </section>
  );
}
