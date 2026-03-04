export default function MenuBrowser() {
  return (
    <div className="w-full h-full bg-[#FAFAFA] text-gray-900 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-800">
          <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-sm font-bold">Main Cafeteria</p>
        <div className="relative">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-800">
            <path d="M1 1h2l1.5 9h8L15 4H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="13" r="1" fill="currentColor" />
            <circle cx="12" cy="13" r="1" fill="currentColor" />
          </svg>
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange-500 text-white text-[8px] flex items-center justify-center font-bold">
            2
          </span>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 px-5 mb-4">
        {[
          { label: "All", active: true },
          { label: "Veg", dot: "bg-green-500" },
          { label: "Non-Veg", dot: "bg-red-500" },
          { label: "Beverages" },
        ].map((tab) => (
          <div
            key={tab.label}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-semibold ${
              tab.active
                ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                : "bg-white text-gray-500 border border-gray-100"
            }`}
          >
            {tab.dot && <span className={`w-1.5 h-1.5 rounded-full ${tab.dot}`} />}
            {tab.label}
          </div>
        ))}
      </div>

      {/* Food items */}
      <div className="flex-1 px-5 space-y-2.5 overflow-hidden">
        {[
          { name: "Paneer Butter Masala", veg: true, price: "₹140", color: "bg-orange-300", emoji: "🍛" },
          { name: "Chicken Biryani", veg: false, price: "₹180", color: "bg-amber-400", emoji: "🍗" },
          { name: "Dal Tadka", veg: true, price: "₹100", color: "bg-yellow-300", emoji: "🥘" },
          { name: "Mixed Veg Wrap", veg: true, price: "₹110", color: "bg-green-300", emoji: "🌯" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
            <div className={`w-11 h-11 rounded-xl ${item.color} shrink-0 flex items-center justify-center text-lg`}>
              {item.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2.5 h-2.5 rounded-sm border-[1.5px] ${
                    item.veg ? "border-green-500" : "border-red-500"
                  } flex items-center justify-center`}
                >
                  <span
                    className={`w-1 h-1 rounded-full ${
                      item.veg ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </span>
                <p className="text-[11px] font-semibold truncate">{item.name}</p>
              </div>
              <p className="text-[11px] font-bold text-gray-700 mt-0.5">{item.price}</p>
            </div>
            <button className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200 text-orange-500 flex items-center justify-center text-sm font-bold shrink-0">
              +
            </button>
          </div>
        ))}
      </div>

      {/* Bottom cart bar */}
      <div className="bg-orange-500 mx-5 mb-8 rounded-2xl px-4 py-3 flex items-center justify-between text-white shadow-lg shadow-orange-500/30">
        <span className="text-[11px] font-semibold">2 items | &#8377;280</span>
        <span className="text-[11px] font-bold">View Cart &rarr;</span>
      </div>
    </div>
  );
}
