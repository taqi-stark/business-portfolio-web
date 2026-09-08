import { MapPin, MessageCircle, Mail, CheckCircle2, ShieldCheck, UserCheck, Smartphone, Headphones } from "lucide-react";
import { businessData } from "@/content/business";

export const AboutAli = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 sm:p-12 lg:p-14 shadow-sm max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Profile Side */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative">
              {/* Profile Card / Portrait */}
              <div className="h-44 w-44 sm:h-48 sm:w-48 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 p-1.5 shadow-xl">
                <div className="h-full w-full rounded-[22px] bg-slate-800 flex flex-col items-center justify-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  <span className="font-extrabold text-5xl tracking-tight text-white z-10">
                    AT
                  </span>
                  <span className="mt-2 text-xs font-semibold text-blue-200 uppercase tracking-widest z-10">
                    Ali Taqi
                  </span>
                  <span className="text-[10px] text-slate-400 z-10">Developer & Consultant</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-[11px] font-bold text-emerald-800 shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Client Work
              </div>
            </div>

            <div className="mt-8 space-y-1.5 text-xs text-slate-500 font-medium">
              <p className="flex items-center justify-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>Punjab, Pakistan (Sargodha / Khushab / Remote)</span>
              </p>
              <p className="flex items-center justify-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                <a href={`mailto:${businessData.profile.email}`} className="text-blue-600 hover:underline">
                  {businessData.profile.email}
                </a>
              </p>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Your Personal Technology Partner
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Direct Communication. Real Results.
            </h2>

            <div className="mt-4 space-y-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              <p>
                I'm <strong>Ali Taqi</strong>, an independent developer based in Punjab, Pakistan. I build digital systems, professional websites, and POS billing tools for business owners who want simple, reliable technology that actually works.
              </p>
              <p>
                Unlike massive software agencies where you get passed between junior account managers and ticket queues, <strong>you work directly with me from day one</strong>. We examine your daily routine, identify what slows your team down, and engineer software that matches your habits.
              </p>
            </div>

            {/* Core Trust Pillars */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Direct 1-on-1 developer access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero confusing tech jargon for staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Hands-on staff training included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Safe milestone-based payments</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-7">
              <a
                href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Ali, I read your about section and I'd like to discuss a software/website solution for my business."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-xs sm:text-sm font-bold transition-all shadow-sm shadow-emerald-600/20"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Discuss Your Project with Ali</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
