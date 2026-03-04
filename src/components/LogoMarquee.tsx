"use client";

const bankLogos = [
  { name: "HDFC", color: "#004B87" },
  { name: "SBI", color: "#22409A" },
  { name: "ICICI", color: "#F58220" },
  { name: "Axis", color: "#800054" },
  { name: "Kotak", color: "#ED1C24" },
  { name: "Yes", color: "#0070C0" },
  { name: "BOB", color: "#F15A22" },
  { name: "PNB", color: "#003893" },
  { name: "RBL", color: "#0077B5" },
  { name: "IDBI", color: "#00A650" },
  { name: "Union", color: "#00529B" },
  { name: "Canara", color: "#FFD700" },
];

const brandLogos = [
  { name: "Flipkart", color: "#2874F0" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Myntra", color: "#FF3F6C" },
  { name: "Swiggy", color: "#FC8019" },
  { name: "Zomato", color: "#E23744" },
  { name: "BigBasket", color: "#84C225" },
  { name: "Uber", color: "#000000" },
  { name: "Ola", color: "#2DA94F" },
  { name: "MakeMyTrip", color: "#EE2E24" },
  { name: "BookMyShow", color: "#C4242B" },
  { name: "Nykaa", color: "#FC2779" },
  { name: "PhonePe", color: "#5F259F" },
  { name: "Paytm", color: "#00BAF2" },
  { name: "CRED", color: "#1A1A2E" },
  { name: "Dunzo", color: "#00D26A" },
  { name: "Lenskart", color: "#333333" },
  { name: "Cult.fit", color: "#E53935" },
  { name: "HealthifyMe", color: "#FF6F00" },
  { name: "Ajio", color: "#3F2B96" },
  { name: "Tata CLiQ", color: "#5C2D91" },
  { name: "JioMart", color: "#0070BA" },
  { name: "Pepperfry", color: "#D95900" },
  { name: "Urban Co.", color: "#4A90D9" },
  { name: "GoIbibo", color: "#EE5535" },
  { name: "Cleartrip", color: "#E74C3C" },
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
  logos: typeof bankLogos;
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
        <MarqueeRow logos={bankLogos} direction="left" />
        <MarqueeRow logos={brandLogos} direction="right" />
        <p className="text-center text-base text-text-muted mt-8">
          We power engagement for BFSI, consumer brands, and publishers reaching
          100M+ users.
        </p>
      </div>
    </section>
  );
}
