import { portfolio } from "@/content/portfolio";
import { Tile, TileLabel } from "./Tile";
import { StackTerminal } from "./StackTerminal";

export const StackBento = () => (
  <section id="stack" className="content-auto mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <SectionHeader
      kicker="// stack"
      title="Tools I reach for"
      subtitle="Battle-tested across production systems handling real traffic."
    />
    <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:grid-rows-2">
      <Tile className="md:col-span-2 md:row-span-2">
        <TileLabel>core stack</TileLabel>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {portfolio.coreStack.map((s) => (
            <div
              key={s}
              className="stack-token"
            >
              {s}
            </div>
          ))}
        </div>
        <StackTerminal />
      </Tile>

      {portfolio.stats.map((s, i) => (
        <Tile key={s.label} delay={i * 0.05} className="flex flex-col justify-between">
          <TileLabel>metric_{i + 1}</TileLabel>
          <div>
            <div className="font-mono text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
              {s.value}
            </div>
            <div className="mt-2 text-base font-medium text-foreground">{s.label}</div>
          </div>
        </Tile>
      ))}
    </div>

    <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      <Tile className="sm:col-span-2">
        <TileLabel>languages & databases</TileLabel>
        <div className="flex flex-wrap gap-2">
          {[...portfolio.languages, ...(portfolio.databases || [])].map((l) => (
            <span key={l} className="chip bg-primary/10 border-primary/20 text-foreground">{l}</span>
          ))}
        </div>
      </Tile>
      <Tile className="sm:col-span-2">
        <TileLabel>api & tooling</TileLabel>
        <div className="flex flex-wrap gap-2">
          {[...(portfolio.apiTools || []), ...portfolio.tooling].map((l) => (
            <span key={l} className="chip bg-primary/10 border-primary/20 text-foreground">{l}</span>
          ))}
        </div>
      </Tile>
      
      {/* Expanded deep dives */}
      <Tile className="sm:col-span-2 md:col-span-2 h-full">
        <TileLabel>backend concepts</TileLabel>
        <ul className="mt-5 flex flex-col gap-0">
          {(portfolio.backendConcepts || []).map((c: string) => 
            <li key={c} className="flex items-start gap-4 border-b border-border/40 py-3.5 first:pt-0 last:border-0 last:pb-0">
              <span className="font-mono text-primary font-bold mt-0.5 select-none text-base">→</span>
              <span className="text-sm font-bold text-foreground/90 leading-tight">{c}</span>
            </li>
          )}
        </ul>
      </Tile>
      <Tile className="sm:col-span-2 md:col-span-2 h-full">
        <TileLabel>devops & infra</TileLabel>
        <ul className="mt-5 flex flex-col gap-0">
          {(portfolio.devOps || []).map((c: string) => 
            <li key={c} className="flex items-start gap-4 border-b border-border/40 py-3.5 first:pt-0 last:border-0 last:pb-0">
              <span className="font-mono text-emerald-500 font-bold mt-0.5 select-none text-base">→</span>
              <span className="text-sm font-bold text-foreground/90 leading-tight">{c}</span>
            </li>
          )}
        </ul>
      </Tile>
    </div>
  </section>
);

export const SectionHeader = ({
  kicker, title, subtitle,
}: { kicker: string; title: string; subtitle?: string }) => (
  <div className="max-w-3xl">
    <div className="font-mono text-sm font-bold text-primary uppercase tracking-widest">{kicker}</div>
    <h2 className="mt-3 font-mono text-3xl font-bold leading-tight text-foreground sm:mt-4 sm:text-4xl md:text-5xl">{title}</h2>
    {subtitle && <p className="mt-3 text-base font-medium leading-7 text-foreground/90 sm:mt-4 sm:text-lg">{subtitle}</p>}
  </div>
);
