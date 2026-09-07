import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { businessData } from "@/content/business";

export const Process = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
            Transparent Workflow
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Idea to Working System
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            A stress-free, step-by-step process designed so you always know what is happening without having to deal with technical jargon.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {businessData.process.map((step, idx) => (
            <div
              key={step.step}
              className="card-premium p-6 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-blue-600/80 group-hover:text-blue-600 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Callout */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 grid place-items-center text-blue-600 shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Zero Technical Knowledge Required
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
                You don't need to know anything about coding or programming languages. Just explain how your business runs and what problem you want solved.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ali, I'd like to discuss an idea for my business."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>Start Step 1 on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
