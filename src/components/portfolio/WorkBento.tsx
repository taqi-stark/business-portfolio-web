import { portfolio } from "@/content/portfolio";
import { Tile, TileLabel } from "./Tile";
import { SectionHeader } from "./StackBento";
import { ArrowUpRight, Github } from "lucide-react";

export const WorkBento = () => (
  <section id="work" className="content-auto mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <SectionHeader
      kicker="// selected work"
      title="Things I've shipped"
      subtitle="A handful of projects spanning APIs, pipelines, and platforms."
    />
    <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
{portfolio.projects.map((p, i) => (
        <Tile
          key={p.name}
          delay={i * 0.05}
          className={`group flex flex-col justify-between ${
            i === 0 ? "md:col-span-2" : ""
          }`}
        >
          <div>
            <TileLabel>project_{String(i + 1).padStart(2, "0")}</TileLabel>
            <h3 className="font-mono text-xl font-bold text-foreground sm:text-2xl md:text-3xl">{p.name}</h3>
            <p className="mt-3 text-sm font-medium leading-7 text-foreground/80 sm:text-base">{p.summary}</p>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-border/50 pt-4">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 sm:text-sm sm:tracking-normal">
                {p.role}
              </span>
              <div className="flex flex-wrap gap-2">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border/60 px-3 py-1.5 text-xs font-mono font-semibold text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground"
                    aria-label={`${p.name} GitHub profile`}
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub Repo
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1 rounded-full border border-border/60 px-3 py-1.5 text-xs font-mono font-semibold text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground"
                    aria-label={`Discuss ${p.name}`}
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    Discuss
                  </a>
                )}
              </div>
            </div>
          </div>
        </Tile>
      ))}
    </div>
  </section>
);
