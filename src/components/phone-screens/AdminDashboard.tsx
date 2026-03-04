export default function AdminDashboard() {
  const barHeights = [45, 60, 38, 72, 55, 80, 50];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="w-full h-full bg-[#12122a] text-white p-5 pt-12 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold">Nexus Dashboard</p>
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-[10px] font-bold shadow-md shadow-orange-500/30">
          Z
        </div>
      </div>

      <p className="text-[10px] text-white/40 font-medium mb-4">Today, 4 Mar</p>

      {/* 2x2 Metrics */}
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {[
          { label: "Revenue", value: "₹4.2L", accent: true },
          { label: "Orders", value: "2,847" },
          { label: "Avg Rating", value: "4.3★" },
          { label: "Active Vendors", value: "12" },
        ].map((m) => (
          <div key={m.label} className="bg-white/[0.06] backdrop-blur-sm rounded-xl p-3 border border-white/[0.06]">
            <p className="text-[9px] text-white/40 font-medium uppercase tracking-wider">{m.label}</p>
            <p className={`text-sm font-bold mt-0.5 ${m.accent ? "text-orange-400" : ""}`}>{m.value}</p>
          </div>
        ))}
      </div>

      {/* Mini bar chart */}
      <div className="bg-white/[0.06] backdrop-blur-sm rounded-xl p-3.5 mb-5 border border-white/[0.06]">
        <p className="text-[9px] text-white/40 font-medium uppercase tracking-wider mb-3">Weekly Orders</p>
        <div className="flex items-end justify-between gap-1.5 h-20">
          {barHeights.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className="w-full rounded-md bg-gradient-to-t from-orange-500 to-orange-400 shadow-sm shadow-orange-500/20"
                style={{ height: `${h}%` }}
              />
              <span className="text-[7px] text-white/30 font-medium">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor performance */}
      <p className="text-[9px] text-white/40 font-medium uppercase tracking-wider mb-2">Top Vendors</p>
      <div className="space-y-2 mb-4">
        {[
          { name: "Fresh Kitchen", rating: "4.5★", orders: "324 orders" },
          { name: "Chai Point", rating: "4.2★", orders: "198 orders" },
        ].map((v) => (
          <div key={v.name} className="bg-white/[0.06] backdrop-blur-sm rounded-xl px-3.5 py-2.5 flex items-center justify-between border border-white/[0.06]">
            <span className="text-[10px] font-semibold">{v.name}</span>
            <div className="flex items-center gap-2.5">
              <span className="text-[9px] text-orange-400 font-semibold">{v.rating}</span>
              <span className="text-[9px] text-white/30">{v.orders}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Food waste badge */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-center">
        <p className="text-[10px] text-emerald-400 font-semibold">
          ↓ Food Waste Reduced 12% this week
        </p>
      </div>
    </div>
  );
}
