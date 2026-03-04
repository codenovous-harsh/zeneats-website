"use client";

const corporateLogos = [
  { name: "Infosys", color: "#007CC3" },
  { name: "TCS", color: "#0070AD" },
  { name: "Wipro", color: "#44167E" },
  { name: "Reliance", color: "#003DA5" },
  { name: "Accenture", color: "#A100FF" },
  { name: "Goldman", color: "#7399C6" },
  { name: "Deloitte", color: "#86BC25" },
  { name: "Cognizant", color: "#1A4CA1" },
  { name: "HCL", color: "#0070C0" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Google", color: "#4285F4" },
  { name: "Amazon", color: "#FF9900" },
];

const vendorLogos = [
  { name: "Fresh Menu", color: "#E85D2C" },
  { name: "Chai Point", color: "#C6893F" },
  { name: "Box8", color: "#FF6B35" },
  { name: "iD Fresh", color: "#00A651" },
  { name: "Eat.fit", color: "#6B4C9A" },
  { name: "Rebel Foods", color: "#E31E24" },
  { name: "Cafe Coffee", color: "#006B3F" },
  { name: "Sodexo", color: "#ED1C24" },
  { name: "Elior", color: "#003DA5" },
  { name: "Compass", color: "#00529B" },
  { name: "Dabba", color: "#FF8C00" },
  { name: "Zomato Pro", color: "#E23744" },
];

function LogoItem({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold"
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  );
}

function MarqueeRow({
  logos,
  direction,
}: {
  logos: typeof corporateLogos;
  direction: "left" | "right";
}) {
  const doubled = [...logos, ...logos];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} name={logo.name} color={logo.color} />
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-16 px-6" data-animate>
      <div className="max-w-[1120px] mx-auto space-y-6">
        <MarqueeRow logos={corporateLogos} direction="left" />
        <MarqueeRow logos={vendorLogos} direction="right" />
        <p className="text-center text-base text-text-muted mt-8">
          Trusted by 243+ corporates and 500+ food vendors across India.
        </p>
      </div>
    </section>
  );
}
