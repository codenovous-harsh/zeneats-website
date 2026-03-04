interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative w-[260px] h-[520px] sm:w-[300px] sm:h-[600px] rounded-[40px] border-[3px] border-white/15 bg-black shadow-2xl overflow-hidden ${className}`}
    >
      {/* Dynamic Island notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-20" />

      {/* Screen content */}
      <div className="absolute inset-[3px] rounded-[37px] overflow-hidden">
        {children}
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70px] h-[4px] bg-white/20 rounded-full z-20" />
    </div>
  );
}
