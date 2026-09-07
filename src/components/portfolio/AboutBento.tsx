import { portfolio } from "@/content/portfolio";
import { Tile, TileLabel } from "./Tile";
import { SectionHeader } from "./StackBento";
import { MapPin } from "lucide-react";

export const AboutBento = () => (
  <section id="about" className="content-auto mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <SectionHeader kicker="// about" title="A little about me" />
    <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-5">
      <Tile className="md:col-span-3">
        <TileLabel>bio</TileLabel>
        <p className="text-base font-medium leading-7 text-foreground/85 sm:text-lg sm:leading-relaxed">
          {portfolio.bio}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-sm text-foreground/70 sm:mt-6 sm:gap-4 sm:text-base">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {portfolio.location}
          </span>
          <span className="opacity-50">·</span>
          <span>{portfolio.role}</span>
        </div>
      </Tile>
      <Tile className="md:col-span-2">
        <TileLabel>currently</TileLabel>
        <ul className="space-y-3 sm:space-y-4">
          {portfolio.currently.map((c, i) => (
            <li key={i} className="flex gap-3 text-sm font-medium leading-7 text-foreground/85 sm:text-base">
              <span className="font-mono text-primary flex-shrink-0">→</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Tile>
    </div>

    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      <Tile className="lg:col-span-2">
        <TileLabel>experience</TileLabel>
        <ul className="divide-y divide-border/50">
          {portfolio.experience.map((e) => (
            <li key={e.role || e.title} className="grid gap-4 py-8 md:grid-cols-12 md:items-start">
              <span className="font-mono text-sm font-medium text-foreground/60 md:col-span-3 mt-1">
                {e.period}
              </span>
              <div className="md:col-span-9">
                <div className="font-mono text-lg font-bold text-foreground">{e.role || e.title}</div>
                <div className="text-base text-primary font-semibold mt-1.5">{e.company}</div>
                <p className="text-base font-medium leading-relaxed text-foreground/80 mt-4">{e.impact}</p>
              </div>
            </li>
          ))}
        </ul>
      </Tile>

      {portfolio.education && (
        <Tile className="lg:col-span-1 flex flex-col">
          <TileLabel>education</TileLabel>
          <ul className="divide-y divide-border/50 flex-1">
            {portfolio.education.map((e) => (
              <li key={e.degree} className="flex flex-col gap-3 py-8">
                <div className="font-mono font-bold text-foreground text-xl leading-snug">{e.degree}</div>
                <div className="text-sm uppercase tracking-wider text-primary font-bold">{e.status}</div>
              </li>
            ))}
          </ul>
        </Tile>
      )}
    </div>
  </section>
);
