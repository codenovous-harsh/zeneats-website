export default function CafeteriaHome() {
  return (
    <div className="w-full h-full bg-[#FAFAFA] text-gray-900 p-5 pt-12 overflow-hidden">
      {/* Greeting */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] text-gray-400 font-medium">Good Morning</p>
          <p className="text-sm font-bold tracking-tight">Harsh</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
          H
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl px-3.5 py-2.5 mb-5 flex items-center gap-2.5 shadow-sm border border-gray-100">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-gray-300">
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" />
          <path d="M11 11l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-[11px] text-gray-300">Search meals, cafeterias...</span>
      </div>

      {/* Featured banner */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl p-4 mb-5 text-white shadow-lg shadow-orange-500/20">
        <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80">Today&apos;s Special</p>
        <p className="text-sm font-bold mt-0.5">Paneer Tikka Thali</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs font-bold">&#8377;120</p>
          <div className="bg-white/20 rounded-lg px-2.5 py-1 text-[9px] font-semibold backdrop-blur-sm">Order Now</div>
        </div>
      </div>

      {/* Category icons */}
      <div className="flex justify-between mb-5 px-1">
        {[
          { icon: "🍽️", label: "Meals" },
          { icon: "🍪", label: "Snacks" },
          { icon: "☕", label: "Beverages" },
          { icon: "🍰", label: "Desserts" },
        ].map((cat) => (
          <div key={cat.label} className="flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-base shadow-sm border border-gray-100">
              {cat.icon}
            </div>
            <span className="text-[9px] font-medium text-gray-400">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Popular Items */}
      <p className="text-xs font-bold mb-2.5 text-gray-800">Popular Items</p>
      <div className="space-y-2.5">
        {[
          { name: "Butter Chicken Bowl", price: "₹150", color: "bg-orange-400", emoji: "🍛" },
          { name: "Garden Salad", price: "₹90", color: "bg-emerald-400", emoji: "🥗" },
          { name: "Masala Chai", price: "₹30", color: "bg-amber-700", emoji: "🍵" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-3 bg-white rounded-xl p-2.5 shadow-sm border border-gray-50">
            <div className={`w-10 h-10 rounded-xl ${item.color} shrink-0 flex items-center justify-center text-base`}>
              {item.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold truncate">{item.name}</p>
              <p className="text-[10px] text-gray-400 font-medium">{item.price}</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
              +
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
