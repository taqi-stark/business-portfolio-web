import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const links = [
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      ticking = false;
      const nextScrolled = window.scrollY > 8;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrolled);
      }
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-background/95 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-primary text-primary-foreground text-sm font-bold">
            {portfolio.initials}
          </span>
          <span className="text-sm text-muted-foreground">~/ali-taqi</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm font-bold text-foreground/90 transition-colors hover:text-primary drop-shadow-sm"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-gradient-primary shadow-glow">
            <a href={`mailto:${portfolio.email}`} aria-label="Hire me via email">Hire me</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Mobile Menu"><Menu /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <div className="mt-10 flex flex-col gap-6">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a href={l.href} className="font-mono text-lg font-bold text-foreground hover:text-primary transition-colors">
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="w-full bg-gradient-primary text-white">
                    <a href={`mailto:${portfolio.email}`} aria-label="Hire me via email">Hire me</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
