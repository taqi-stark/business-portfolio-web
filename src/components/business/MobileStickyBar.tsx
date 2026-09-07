import { MessageCircle, PhoneCall } from "lucide-react";
import { businessData } from "@/content/business";

export const MobileStickyBar = () => {
  const whatsappUrl = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    businessData.profile.defaultWhatsAppMessage
  )}`;

  return (
    <aside aria-label="Quick contact" className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href="tel:+923448280359"
          className="flex items-center justify-center h-11 w-12 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 active:bg-slate-100 shrink-0"
          aria-label="Direct Phone Call"
        >
          <PhoneCall className="h-4 w-4" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-[#25D366] active:bg-[#1EBE5D] text-white font-bold text-xs shadow-md shadow-emerald-600/25"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
