import { useState } from "react";
import { 
  Globe, 
  Receipt, 
  ShoppingBag, 
  Cpu, 
  Check, 
  Clock, 
  MessageCircle, 
  ArrowRight, 
  Sparkles,
  Building2,
  Stethoscope,
  Store,
  Utensils
} from "lucide-react";
import { businessData, UnifiedSolutionItem } from "@/content/business";

const ICON_MAP: Record<string, typeof Globe> = {
  Globe,
  Receipt,
  ShoppingBag,
  Cpu,
};

const INDUSTRY_QUICK_FILTERS = [
  { id: "all", label: "All Solutions" },
  { id: "Real Estate", label: "Real Estate & Housing", icon: Building2 },
  { id: "Retail & Marts", label: "Retail Marts & Stores", icon: Store },
  { id: "Clinics", label: "Clinics & Doctors", icon: Stethoscope },
  { id: "Restaurants", label: "Cafes & Dining", icon: Utensils },
];

export const ServicesPricing = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const solutions = businessData.unifiedSolutions;

  const filteredSolutions = activeFilter === "all"
    ? solutions
    : solutions.filter((s) => s.industryTags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())));

  const getWhatsAppSolutionInquiry = (title: string, price: string) => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      `Hi Ali, I'm interested in discussing the "${title}" solution (${price}) for my business.`
    )}`;
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Solutions & Transparent Investment
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored Digital Systems That Grow Your Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Clear deliverables, honest upfront pricing, and fast delivery. Built to eliminate manual paperwork and bring you more paying customers.
          </p>

          {/* Industry Quick Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {INDUSTRY_QUICK_FILTERS.map((filter) => {
              const Icon = filter.icon;
              const isSelected = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                  }`}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredSolutions.map((item) => {
            const IconComponent = ICON_MAP[item.icon] || Globe;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group hover:shadow-lg ${
                  item.popular
                    ? "border-blue-500/80 bg-gradient-to-b from-blue-50/30 to-white ring-1 ring-blue-500/20 shadow-sm"
                    : "border-slate-200/90 bg-white hover:border-slate-300 shadow-sm"
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-100 grid place-items-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        item.popular
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-600 border border-slate-200/80"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed">
                    {item.shortDescription}
                  </p>

                  {/* Price & Timeline Block */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-2xl font-black text-slate-900">
                        {item.priceStarting}
                      </span>
                    </div>
                    {item.priceNote && (
                      <span className="text-[10px] text-slate-400 italic block mt-0.5">
                        {item.priceNote}
                      </span>
                    )}

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold mt-2">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>Ready in {item.timeline}</span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {item.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppSolutionInquiry(item.title, item.priceStarting)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all ${
                      item.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/20"
                        : "border border-slate-300 bg-white hover:bg-slate-50 text-slate-800"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Need a custom combination or have a unique business workflow?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Share your business model. I'll recommend the simplest, most budget-effective route with zero unnecessary add-ons.
            </p>
          </div>
          <a
            href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ali, I'm not sure which software or website solution fits my business best. Can you guide me?"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle className="h-4 w-4 fill-emerald-400 text-emerald-400" />
            <span>Consult Ali on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
