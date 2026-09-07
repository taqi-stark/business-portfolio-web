import { 
  Layers, 
  Smile, 
  UserCheck, 
  Smartphone, 
  Headphones, 
  CheckCircle2, 
  MessageCircle 
} from "lucide-react";
import { businessData } from "@/content/business";

const ICON_MAP: Record<string, typeof Layers> = {
  Layers,
  Smile,
  UserCheck,
  Smartphone,
  Headphones,
};

export const WhyWorkWithMe = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            The Ali Taqi Advantage
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technology That Works for Your Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            You don't need expensive agency overhead or complicated software that your staff hates using. Here is how I deliver results for business owners:
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessData.whyWorkWithMe.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Layers;
            return (
              <div
                key={item.title}
                className={`card-premium p-7 flex flex-col justify-between ${
                  idx === 0 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-blue-50/30" : ""
                }`}
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 grid place-items-center text-blue-600 mb-5 shadow-sm">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Guaranteed in every project</span>
                </div>
              </div>
            );
          })}

          {/* 6th Callout Box */}
          <div className="rounded-2xl bg-slate-900 text-white p-7 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                Local Expertise
              </span>
              <h3 className="text-lg font-bold text-white">
                Based in Punjab, Pakistan
              </h3>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                Available for in-person meetings in Sargodha, Khushab, and Lahore, or quick video/WhatsApp calls nationwide.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Ali, I'd like to schedule a call to discuss a project for my business."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" /> Schedule a Call with Ali →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
