import { ExternalLink, MessageCircle, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/content/projects";
import { businessData } from "@/content/business";

export const ProjectsShowcase = () => {
  const getWhatsAppProjectInquiry = (projectTitle: string) => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      `Hi Ali, I saw your "${projectTitle}" project on your website and I'd like to build something similar for my business.`
    )}`;
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Published Work & Live Demos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Working Client Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Click on any project below to visit the live published website and test the actual software in action.
          </p>
        </div>

        {/* 4 Projects 2x2 Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-slate-200/90 bg-slate-50/40 hover:bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Top Browser Preview Frame (Clickable) */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                title={`Visit ${project.title}`}
                className="block relative overflow-hidden border-b border-slate-200/80 bg-slate-950 cursor-pointer"
              >
                {/* Browser Top Nav Strip */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300 truncate max-w-[200px] sm:max-w-xs bg-slate-800/80 px-3 py-0.5 rounded-md border border-slate-700">
                    <span className="text-emerald-400 text-xs">🔒</span>
                    <span className="truncate">{project.liveUrl.replace("https://", "")}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span>Visit Live</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Screenshot Image with Hover Zoom */}
                <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />
                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-slate-900/90 text-white text-xs font-bold px-4 py-2 shadow-xl backdrop-blur-md flex items-center gap-2 border border-white/20">
                      <span>Open Live Website</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Card Content Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="mt-5 grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="font-mono text-base sm:text-lg font-bold text-slate-900 block">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-7 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white px-5 py-3 text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={getWhatsAppProjectInquiry(project.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-800 px-4 py-3 text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                    <span>Inquire for Your Business</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-lg sm:text-xl">
              Have a different business workflow or unique idea?
            </h4>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
              I build custom websites and software specifically tailored around how your shop, agency, clinic, or mart operates.
            </p>
          </div>

          <a
            href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ali, I have a specific project idea for my business and I'd like to discuss building it."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 px-6 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-md hover:scale-102"
          >
            <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" />
            <span>Consult Ali on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
