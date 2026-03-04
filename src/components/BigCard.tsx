"use client";

interface BigCardProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  ctaText: string;
  chips?: string[];
  phoneColor?: string;
}

export default function BigCard({
  eyebrow,
  heading,
  description,
  ctaText,
  chips,
  phoneColor = "#E2C8B6",
}: BigCardProps) {
  return (
    <div className="bg-surface-light rounded-2xl p-8 pb-16 flex flex-col lg:flex-row gap-8">
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-accent text-base font-medium uppercase tracking-wide mb-3">
          {eyebrow}
        </span>
        <h3 className="text-2xl font-medium text-text-dark leading-[26.4px] mb-4">
          {heading}
        </h3>
        <p className="text-base text-text-muted-dark mb-6">{description}</p>

        {chips && chips.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {chips.map((chip) => (
              <span
                key={chip}
                className="bg-white-30 rounded-lg px-2 py-2 text-sm text-text-dark"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        <button className="self-start bg-accent text-white rounded-[160px] px-6 py-4 font-medium flex items-center gap-2 hover:bg-accent-bright transition-colors">
          {ctaText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-1"
          >
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

      {/* Phone Mockup */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-[200px] h-[360px] rounded-[24px] flex items-center justify-center"
          style={{ backgroundColor: phoneColor }}
        >
          <div className="w-[160px] h-[300px] rounded-[16px] bg-white/80 flex items-center justify-center">
            <span className="text-text-muted-dark text-sm">App Screen</span>
          </div>
        </div>
      </div>
    </div>
  );
}
