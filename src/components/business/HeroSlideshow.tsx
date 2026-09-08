import { useState, useEffect, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Receipt, 
  Cpu, 
  MessageCircle 
} from "lucide-react";
import { projectsData } from "@/content/projects";

const SLIDE_ICONS = [Globe, Receipt, Cpu, MessageCircle];

export const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeProject = projectsData[currentIndex];

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto mt-10 sm:mt-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Interactive Tabs Header */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
        {projectsData.map((project, idx) => {
          const IconComponent = SLIDE_ICONS[idx] || Globe;
          const isActive = currentIndex === idx;
          return (
            <button
              key={project.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-102 ring-2 ring-blue-500/30"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
              }`}
            >
              <IconComponent className={`h-3.5 w-3.5 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
              <span className="hidden sm:inline">{project.title.split(" ")[0]}</span>
              <span>{project.category.split("&")[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Main Browser Showcase Mockup */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-slate-300/80 bg-white shadow-2xl shadow-slate-300/60 overflow-hidden group">
        {/* Browser Top Bar */}
        <div className="bg-slate-900 px-4 py-3 sm:px-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500" />
            <span className="h-3 w-3 rounded-full bg-amber-500" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>

          {/* URL Search Bar */}
          <div className="flex items-center gap-2 rounded-lg bg-slate-800/90 px-4 py-1 text-[11px] font-mono text-slate-300 max-w-xs sm:max-w-md w-full mx-4 border border-slate-700/60 justify-center truncate">
            <span className="text-emerald-400 text-xs">🔒</span>
            <span className="truncate">{activeProject.liveUrl.replace("https://", "")}</span>
          </div>

          <a
            href={activeProject.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 text-[11px] font-bold transition-all shadow-sm shrink-0"
          >
            <span>Live Demo</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Slide Image Container */}
        <div className="relative aspect-16/9 w-full bg-slate-950 overflow-hidden">
          <img
            key={activeProject.id}
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full h-full object-cover object-top transition-all duration-700 animate-in fade-in zoom-in-98"
          />

          {/* Floating Metric Pill Overlay */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
            <div className="rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>{activeProject.metrics[0].value} {activeProject.metrics[0].label}</span>
            </div>
            <div className="hidden sm:inline-flex rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 text-xs font-bold text-emerald-300 shadow-lg items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{activeProject.badge}</span>
            </div>
          </div>

          {/* Interactive Card Banner at Bottom */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 sm:p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                {activeProject.category}
              </span>
              <h3 className="text-base sm:text-xl font-bold tracking-tight text-white">
                {activeProject.title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-1 max-w-xl font-normal mt-0.5">
                {activeProject.tagline}
              </p>
            </div>

            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 px-4 py-2.5 text-xs font-bold transition-all shadow-md shrink-0"
            >
              <span>Explore This Project</span>
              <ExternalLink className="h-3.5 w-3.5 text-blue-600" />
            </a>
          </div>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <button
          onClick={goToPrev}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white backdrop-blur-sm border border-white/20 grid place-items-center transition-all opacity-80 hover:opacity-100 hover:scale-105 shadow-xl"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={goToNext}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white backdrop-blur-sm border border-white/20 grid place-items-center transition-all opacity-80 hover:opacity-100 hover:scale-105 shadow-xl"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Slide Progress Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-6 bg-blue-500" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
