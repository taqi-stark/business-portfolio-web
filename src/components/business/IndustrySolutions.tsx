import { useState } from "react";
import { 
  Utensils, 
  Store, 
  Building, 
  Stethoscope, 
  Sparkles, 
  GraduationCap, 
  Dumbbell, 
  Briefcase, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight 
} from "lucide-react";
import { businessData, IndustryItem } from "@/content/business";

const ICON_MAP: Record<string, typeof Utensils> = {
  Utensils,
  Store,
  Building,
  Stethoscope,
  Sparkles,
  GraduationCap,
  Dumbbell,
  Briefcase,
};

export const IndustrySolutions = () => {
  const [selectedId, setSelectedId] = useState<string>("restaurants");

  const activeIndustry = businessData.industries.find((i) => i.id === selectedId) || businessData.industries[0];
  const IconComponent = ICON_MAP[activeIndustry.icon] || Briefcase;

  const getWhatsAppInquiry = (industryName: string) => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      `Hi Ali, I run a ${industryName} business and I'd like to discuss a digital solution tailored to my requirements.`
    )}`;
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
            Tailored Industry Solutions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions for Businesses Like Yours
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Different businesses have different bottlenecks. Select your industry below to see the exact combination of digital tools that will grow your business:
          </p>
        </div>

        {/* Industry Pill Selector Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {businessData.industries.map((ind) => {
            const TabIcon = ICON_MAP[ind.icon] || Briefcase;
            const isSelected = selectedId === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                <TabIcon className="h-4 w-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100 grid place-items-center text-blue-600 shadow-sm shrink-0">
                <IconComponent className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                  {activeIndustry.tag}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {activeIndustry.name} Solution Package
                </h3>
              </div>
            </div>

            <a
              href={getWhatsAppInquiry(activeIndustry.name)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-xs font-bold transition-all shadow-sm"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Discuss for Your Business</span>
            </a>
          </div>

          <div className="mt-6">
            <h4 className="text-base font-bold text-slate-800">
              {activeIndustry.headline}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything required to run, automate, and promote your {activeIndustry.name.toLowerCase()} business:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {activeIndustry.solutions.map((sol) => (
                <div
                  key={sol}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/60"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {sol}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8-Card Quick Reference Matrix */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {businessData.industries.map((ind) => {
            const CardIcon = ICON_MAP[ind.icon] || Briefcase;
            return (
              <div
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className="card-premium p-5 cursor-pointer flex flex-col justify-between hover:border-blue-500/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <CardIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {ind.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{ind.name}</h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {ind.headline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-600">
                  <span>View Breakdown</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
