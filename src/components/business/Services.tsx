import { 
  Globe, 
  Receipt, 
  Building2, 
  ShoppingBag, 
  CalendarCheck, 
  Cpu, 
  ArrowRight, 
  CheckCircle, 
  MessageCircle 
} from "lucide-react";
import { businessData, ServiceItem } from "@/content/business";

const ICON_MAP: Record<string, typeof Globe> = {
  Globe,
  Receipt,
  Building2,
  ShoppingBag,
  CalendarCheck,
  Cpu,
};

export const Services = () => {
  const getWhatsAppInquiry = (serviceTitle: string) => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      `Hi Ali, I'm interested in learning more about your "${serviceTitle}" service for my business.`
    )}`;
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
            Core Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Can I Build for Your Business?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Practical digital solutions designed to bring customers through your doors, automate repetitive admin work, and protect your profits.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessData.services.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="card-premium flex flex-col justify-between p-6 sm:p-7 group"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 grid place-items-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/60">
                      {service.idealFor}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                      Key Highlights
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppInquiry(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-700 py-1 transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4 text-emerald-600" />
                      Discuss this on WhatsApp
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-base">Not sure which solution your business needs?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Tell me what your business does, and I'll suggest the simplest and most cost-effective option.
            </p>
          </div>
          <a
            href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ali, I'm not sure which software or website solution fits my business. Can you guide me?"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle className="h-4 w-4 fill-emerald-400 text-emerald-400" />
            <span>Ask Ali on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
