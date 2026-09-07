import { MessageCircle, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { businessData } from "@/content/business";

export const FinalCTA = () => {
  const getWhatsAppUrl = () => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      "Hi Ali, I have an idea for my business and I'd like to discuss building a website or software solution."
    )}`;
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background decorative effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Ready When You Are
        </span>

        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Have an Idea for Your Business?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
          Tell me what you're currently doing, what problems you're facing, and what you'd like to improve. I'll help you turn that idea into a working digital system.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white px-8 py-4 text-sm font-bold transition-all shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/35 hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white px-7 py-4 text-sm font-bold transition-all shadow-sm"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </a>
        </div>

        {/* Small reassuring subtext */}
        <p className="mt-6 text-xs text-slate-400 font-medium">
          🔒 No technical knowledge required · Free friendly advice · Zero obligation
        </p>

        {/* 3 Quick Benefit Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Fast Turnaround (7–14 days)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-blue-400 shrink-0" />
            <span>Same-Day WhatsApp Response</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Milestone-Based Secure Payments</span>
          </div>
        </div>
      </div>
    </section>
  );
};
