import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Search, 
  Package, 
  FileSpreadsheet, 
  Smartphone, 
  ShieldCheck, 
  MessageSquare 
} from "lucide-react";
import { businessData } from "@/content/business";

export const ProblemSolution = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 border border-rose-200/70 px-3 py-1 rounded-full">
            Before & After Digitalization
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Is Your Business Still Doing Things Manually?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Paper notebooks get lost, WhatsApp chats get buried, and manual stock counts cost hours every week. Here is how we fix that:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* The Manual Problem Side */}
          <div className="rounded-3xl border border-rose-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-rose-100 pb-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-600 grid place-items-center">
                  <XCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">The Manual Way (Stressful & Slow)</h3>
                  <p className="text-xs text-rose-600 font-medium">Wastes hours and leads to lost revenue</p>
                </div>
              </div>

              <div className="space-y-4">
                {businessData.manualVsDigital.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl bg-rose-50/40 p-3.5 border border-rose-100/60">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {item.problem}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
              Result: You remain trapped doing repetitive manual tasks instead of expanding your business.
            </div>
          </div>

          {/* The Digital Solution Side */}
          <div className="rounded-3xl border-2 border-emerald-500/40 bg-white p-6 sm:p-8 shadow-md shadow-emerald-500/5 flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider">
              Recommended
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-emerald-100 pb-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">The Ali Taqi Way (Smooth & Automated)</h3>
                  <p className="text-xs text-emerald-700 font-medium">Simple digital tools built for your staff</p>
                </div>
              </div>

              <div className="space-y-4">
                {businessData.manualVsDigital.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl bg-emerald-50/40 p-3.5 border border-emerald-100/70">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-snug">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-bold text-emerald-800">
                Ready to stop doing everything manually?
              </span>
              <a
                href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Ali, I want to upgrade my business operations from manual paperwork to a simple digital system."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Talk to Ali on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Central punchline */}
        <div className="mt-12 text-center max-w-2xl mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-8 shadow-lg">
          <p className="text-lg sm:text-xl font-bold">
            "I turn these manual, stressful bottlenecks into simple digital systems that run seamlessly on your phone and counter."
          </p>
          <span className="mt-2 block text-xs font-medium text-blue-100">
            — Ali Taqi, Web & Software Developer
          </span>
        </div>
      </div>
    </section>
  );
};
