import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { businessData } from "@/content/business";

export const WhatsAppFloating = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // Show gentle tooltip after 3 seconds to catch attention
    const timer = setTimeout(() => {
      if (!closed) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [closed]);

  const url = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    businessData.profile.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip greeting */}
      {showTooltip && !closed && (
        <div className="mb-3 max-w-[260px] rounded-2xl bg-white p-3.5 shadow-2xl border border-slate-200 text-xs text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setClosed(true)}
            aria-label="Close tooltip"
            className="absolute -top-2 -left-2 h-5 w-5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 grid place-items-center shadow-sm"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-900 text-[11px]">Ali is Online</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Need a website, POS system, or software for your business? Let's chat directly on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Ali on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-600/35 hover:scale-105 active:scale-95 transition-all"
      >
        {/* Subtle ping animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:animate-ping" />
        <MessageCircle className="h-7 w-7 fill-white relative z-10" />
      </a>
    </div>
  );
};
