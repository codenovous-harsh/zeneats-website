export default function OrderTracking() {
  return (
    <div className="w-full h-full bg-[#FAFAFA] text-gray-900 p-5 pt-12 overflow-hidden">
      {/* Header */}
      <p className="text-sm font-bold mb-1.5">Order #ZE-4821</p>

      {/* Status pill */}
      <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 rounded-full px-3 py-1.5 mb-4 border border-orange-100">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-[11px] font-bold">Preparing</span>
      </div>

      {/* Ready time */}
      <div className="flex items-center gap-2 mb-6 bg-white rounded-xl px-3.5 py-2.5 shadow-sm border border-gray-100">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-orange-500">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-[11px] text-gray-700 font-semibold">Ready in ~8 mins</span>
      </div>

      {/* Progress stepper */}
      <div className="relative ml-1 mb-6">
        {/* Connecting line */}
        <div className="absolute left-[7px] top-3 w-[2px] h-[calc(100%-20px)] bg-gray-200 rounded-full" />

        <div className="space-y-6">
          {/* Step 1 - Completed */}
          <div className="relative flex items-start gap-4">
            <div className="w-4 h-4 rounded-full bg-orange-500 shrink-0 z-10 flex items-center justify-center shadow-sm">
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-900">Order Placed</p>
              <p className="text-[10px] text-gray-400">10:24 AM</p>
            </div>
          </div>

          {/* Step 2 - Active */}
          <div className="relative flex items-start gap-4">
            <div className="w-4 h-4 rounded-full bg-orange-500 shrink-0 z-10 relative shadow-sm">
              <span className="absolute inset-[-3px] rounded-full border-2 border-orange-500/30 animate-ping" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-orange-600">Preparing</p>
              <p className="text-[10px] text-gray-400">10:26 AM</p>
            </div>
          </div>

          {/* Step 3 - Pending */}
          <div className="relative flex items-start gap-4">
            <div className="w-4 h-4 rounded-full bg-gray-200 shrink-0 z-10" />
            <div>
              <p className="text-[11px] font-medium text-gray-300">Ready for Pickup</p>
              <p className="text-[10px] text-gray-200">--</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order summary */}
      <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">Order Summary</p>
        <div className="space-y-2">
          <div className="flex justify-between text-[11px]">
            <span className="font-medium">1x Paneer Butter Masala</span>
            <span className="text-gray-400">&#8377;140</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span className="font-medium">1x Masala Chai</span>
            <span className="text-gray-400">&#8377;30</span>
          </div>
          <div className="border-t border-gray-100 pt-2 flex justify-between text-[11px] font-bold">
            <span>Total</span>
            <span>&#8377;170</span>
          </div>
        </div>
      </div>

      {/* Pickup location */}
      <div className="bg-orange-500 rounded-xl px-4 py-3 text-center shadow-md shadow-orange-500/20">
        <p className="text-[11px] font-bold text-white">📍 Pickup at Counter 3</p>
      </div>
    </div>
  );
}
