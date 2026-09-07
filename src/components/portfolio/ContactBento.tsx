import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";
import { Tile, TileLabel } from "./Tile";
import { Copy, Github, Linkedin, Mail, MessageCircle, Check } from "lucide-react";
import { useState } from "react";

export const ContactBento = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="content-auto mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="grid gap-4 md:grid-cols-3">
        <Tile className="relative md:col-span-2 md:p-10">
          <div className="absolute inset-0 -z-10 bg-radial-glow opacity-60" />
          <TileLabel>contact</TileLabel>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Let's build <span className="text-gradient">something</span>.
          </h2>
          <p className="mt-4 max-w-md text-base font-medium leading-7 text-foreground/85 sm:mt-5 sm:text-lg">
            Got a Python backend that needs scale, structure, or a second pair of eyes? I'd love to hear about it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="w-full bg-gradient-primary shadow-glow sm:w-auto">
              <a href={`mailto:${portfolio.email}`}><Mail /> {portfolio.email}</a>
            </Button>
            <Button onClick={copy} size="lg" variant="outline" className="w-full sm:w-auto">
              {copied ? <><Check /> Copied</> : <><Copy /> Copy email</>}
            </Button>
          </div>
        </Tile>
        <div className="grid gap-4">
          <SocialTile href={portfolio.socials.github} label="GitHub" Icon={Github} />
          <SocialTile href={portfolio.socials.linkedin} label="LinkedIn" Icon={Linkedin} />
          {portfolio.socials.whatsapp && <SocialTile href={portfolio.socials.whatsapp} label="WhatsApp" Icon={MessageCircle} />}
        </div>
      </div>
    </section>
  );
};

const SocialTile = ({
  href, label, Icon,
}: { href: string; label: string; Icon: typeof Github }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="tile group flex items-center justify-between p-4 hover:bg-primary/10 sm:p-5"
  >
    <span className="flex items-center gap-3 font-mono font-medium text-foreground">
      <Icon className="h-5 w-5 text-primary" />
      {label}
    </span>
    <span className="font-mono text-sm text-foreground/60 transition-colors group-hover:text-foreground">
      → open
    </span>
  </a>
);
