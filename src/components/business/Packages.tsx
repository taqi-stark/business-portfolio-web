import { Check, Clock, MessageCircle, Sparkles } from "lucide-react";
import { businessData } from "@/content/business";

export const Packages = () => {
  const getWhatsAppPackageInquiry = (pkgName: string, price: string) => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      `Hi Ali, I'm interested in the "${pkgName}" package (${price}) for my business. Can we discuss?`
    )}`;
  };

  return (
    <section id="packages" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Investment & Packages
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions That Fit Your Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Clear, transparent project pricing without surprises. Built to deliver an immediate return on investment for local businesses.
          </p>
        </div>

        {/* 4 Package Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessData.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "border-blue-500/80 bg-gradient-to-b from-blue-50/40 to-white shadow-md shadow-blue-500/10 ring-1 ring-blue-500/20"
                  : "border-slate-200 bg-white hover:border-slate-300 shadow-sm"
              }`}
            >
              <div>
                {/* Popular badge */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 text-base">{pkg.name}</h3>
                  {pkg.popular && (
                    <span className="rounded-full bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </div>

                {/* Pricing display - tasteful and non-aggressive */}
                <div className="mb-4">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Estimated Investment
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-mono text-2xl font-bold text-slate-900">{pkg.priceStarting}</span>
                  </div>
                  {pkg.priceNote && (
                    <span className="text-[10px] text-slate-400 italic block mt-0.5">{pkg.priceNote}</span>
                  )}
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Deliverables */}
                <div className="border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Included Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline & Button */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mb-3">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span>Timeline: {pkg.timeline}</span>
                </div>

                <a
                  href={getWhatsAppPackageInquiry(pkg.name, pkg.priceStarting)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all ${
                    pkg.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                      : "border border-slate-300 bg-white hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Note */}
        <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200/80 p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-slate-800">
            "Every business is different. I'll recommend the simplest, most budget-effective solution that fits your exact requirements—no unnecessary add-ons."
          </p>
          <span className="text-xs text-slate-500 mt-1 block">
            Flexible milestone payments (advance deposit + delivery on completion).
          </span>
        </div>
      </div>
    </section>
  );
};
