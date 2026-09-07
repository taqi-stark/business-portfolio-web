import { motion, useReducedMotion, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";
import { ArrowRight, Mail } from "lucide-react";
import { Tile } from "./Tile";
import { Terminal } from "./Terminal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export const Hero = () => {
  const scrollProgress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();
  
  // Create fade-out effect as user scrolls past hero
  const opacity = useTransform(scrollProgress, [0, 0.15], prefersReducedMotion ? [1, 1] : [1, 0.7]);
  const scale = useTransform(scrollProgress, [0, 0.15], prefersReducedMotion ? [1, 1] : [1, 0.95]);

  return (
    <motion.section 
      id="top" 
      className="relative pt-24 sm:pt-28"
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0 -z-10 bg-radial-glow" />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
        <Tile className="md:col-span-2 md:p-10">
          <div className="status-pill mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {portfolio.availability}
          </div>
          <h1 className="font-mono text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-7xl">
            <span className="text-gradient">{portfolio.name}</span>
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-foreground sm:mt-6 sm:text-lg md:text-2xl">
            {portfolio.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="w-full bg-gradient-primary shadow-glow sm:w-auto">
              <a href="#work">View work <ArrowRight /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 shadow-sm font-bold">
              <a href={`mailto:${portfolio.email}`}><Mail className="mr-2 h-4 w-4" /> Get in touch</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 font-mono sm:mt-10">
            {["Django", "FastAPI", "Python", "PostgreSQL", "Docker"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </Tile>
        <Tile className="min-h-[280px] md:p-0 !overflow-visible relative z-40" delay={0.15}>
          <Terminal />
        </Tile>
      </div>
    </motion.section>
  );
};
