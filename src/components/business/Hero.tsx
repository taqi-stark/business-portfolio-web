import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { businessData } from "@/content/business";
import { HeroSlideshow } from "./HeroSlideshow";

export const Hero = () => {
  const getWhatsAppUrl = () => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      "Hi Ali, I'd like to get a free consultation about a website or software for my business."
    )}`;
  };

  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-slate-50">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 pointer-events-none gradient-hero-glow" />
      <div className="absolute inset-0 pointer-events-none subtle-grid opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-blue-700 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>{businessData.hero.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance-header">
            Turn Your Business Into a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Professional Digital Business
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            {businessData.hero.subheadline}
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-7 py-3.5 text-sm font-bold transition-all shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>{businessData.hero.ctaPrimary}</span>
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100/80 text-slate-800 px-6 py-3.5 text-sm font-bold transition-all shadow-sm hover:border-slate-400"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4 text-slate-500" />
            </a>
          </div>

          {/* Reassurance pills */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
            {businessData.hero.trustPoints.map((point) => (
              <span key={point} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Interactive Slideshow Showcase */}
        <HeroSlideshow />
      </div>
    </section>
  );
};
