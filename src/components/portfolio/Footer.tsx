import { portfolio } from "@/content/portfolio";

export const Footer = () => (
  <footer className="border-t border-border/50 bg-muted/10 backdrop-blur-sm">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 font-mono text-sm text-foreground/70 sm:px-6 sm:py-8 md:flex-row md:items-center">
      <div>© {new Date().getFullYear()} {portfolio.name}. Built with React + Tailwind.</div>
      <a href="#top" className="transition-colors hover:text-foreground">↑ back to top</a>
    </div>
  </footer>
);
