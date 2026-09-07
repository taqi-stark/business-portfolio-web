import { useState } from "react";
import { POSMockup } from "./POSMockup";
import { RealEstateMockup } from "./RealEstateMockup";
import { 
  Building2, 
  Receipt, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  Store 
} from "lucide-react";
import { businessData } from "@/content/business";

export const HeroMockupComposite = () => {
  const [activePreview, setActivePreview] = useState<"pos" | "realestate" | "whatsapp">("pos");

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Interactive Switcher Bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white/90 p-1.5 shadow-sm backdrop-blur-md">
          <button
            onClick={() => setActivePreview("pos")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
              activePreview === "pos"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
            }`}
          >
            <Receipt className="h-3.5 w-3.5" />
            <span>Retail POS & Billing</span>
          </button>

          <button
            onClick={() => setActivePreview("realestate")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
              activePreview === "realestate"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            <span>Real Estate Portal</span>
          </button>

          <button
            onClick={() => setActivePreview("whatsapp")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
              activePreview === "whatsapp"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
            }`}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp Ordering</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive Preview · Click items to test</span>
        </div>
      </div>

      {/* Frame Container */}
      <div className="relative rounded-2xl p-1 sm:p-2 bg-gradient-to-b from-slate-200/60 to-slate-200/20 border border-slate-200/80 shadow-2xl">
        {activePreview === "pos" && <POSMockup interactive={true} />}
        {activePreview === "realestate" && <RealEstateMockup interactive={true} />}
        {activePreview === "whatsapp" && <WhatsAppOrderPreview />}
      </div>
    </div>
  );
};

const WhatsAppOrderPreview = () => (
  <div className="w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
    <div className="flex flex-wrap items-center justify-between border-b border-slate-200 bg-[#075E54] px-4 py-3 text-white">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-emerald-700/80 grid place-items-center font-bold text-sm">
          <Store className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-bold text-sm leading-tight">Al-Madina Spice & Mart</h4>
          <p className="text-[11px] text-emerald-200">Online Store · WhatsApp Automated Pipeline</p>
        </div>
      </div>
      <span className="rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-emerald-100 flex items-center gap-1.5">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> WhatsApp Business Verified
      </span>
    </div>

    <div className="p-6 sm:p-8 bg-[#ECE5DD]/40 min-h-[440px] flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-3">
        {/* Chat bubble from customer */}
        <div className="rounded-2xl rounded-tr-none bg-[#E7FFDB] p-4 text-xs text-slate-800 shadow-sm border border-emerald-200/60 ml-auto space-y-2">
          <div className="flex items-center justify-between border-b border-emerald-200/60 pb-1.5 font-bold text-emerald-900">
            <span>🛒 New Online Order #4082</span>
            <span className="font-mono font-normal text-[10px] text-slate-500">Just now</span>
          </div>
          <p className="font-medium text-slate-700">
            Hi! I just selected these items on your digital catalog website:
          </p>
          <div className="rounded-lg bg-white/80 p-2.5 space-y-1 font-mono text-[11px]">
            <div className="flex justify-between">
              <span>1x Super Basmati Rice (5kg)</span>
              <span>PKR 1,850</span>
            </div>
            <div className="flex justify-between">
              <span>2x Pure Cooking Oil (1L)</span>
              <span>PKR 1,080</span>
            </div>
            <div className="flex justify-between">
              <span>1x Danedar Tea (450g)</span>
              <span>PKR 680</span>
            </div>
            <div className="border-t border-slate-200 pt-1 flex justify-between font-bold text-slate-900 text-xs">
              <span>Total Bill (COD)</span>
              <span className="text-emerald-700">PKR 3,610</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-600">
            <p><strong>Customer:</strong> Muhammad Usman</p>
            <p><strong>Delivery Address:</strong> House 14, Street 3, Satellite Town</p>
            <p><strong>Payment Method:</strong> Cash on Delivery (COD)</p>
          </div>
        </div>

        {/* Automated confirmation reply */}
        <div className="rounded-2xl rounded-tl-none bg-white p-4 text-xs text-slate-800 shadow-sm border border-slate-200 mr-auto max-w-[90%] space-y-2">
          <p className="font-semibold text-slate-900 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Order Received & Dispatched!
          </p>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Thank you, Usman sb! Your order has been registered into our POS system. Our delivery rider will arrive within 35 minutes.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
            "Hi Ali, I'd like to see how WhatsApp ordering works for my business."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
        >
          <MessageCircle className="h-4 w-4" /> Want this WhatsApp order system for your shop? Chat with Ali
        </a>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-between border-t border-slate-200 bg-white px-5 py-3 text-xs text-slate-500">
      <span className="flex items-center gap-1.5">
        <Smartphone className="h-3.5 w-3.5 text-slate-400" /> Customers order on phone without typing manually.
      </span>
      <span className="font-semibold text-slate-700">Zero Commission · 100% Direct Profit</span>
    </div>
  </div>
);
