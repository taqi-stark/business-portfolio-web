import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, PhoneCall, Sparkles } from "lucide-react";
import { businessData } from "@/content/business";

const NAV_LINKS = [
  { label: "Live Projects", href: "/#projects" },
  { label: "Services & Pricing", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWhatsAppUrl = () => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      businessData.profile.defaultWhatsAppMessage
    )}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="/#top" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-slate-900 text-white font-bold text-base grid place-items-center shadow-md group-hover:bg-blue-600 transition-colors">
            AT
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base leading-tight tracking-tight flex items-center gap-1.5">
              Ali Taqi
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-200/60">
                <Sparkles className="h-2.5 w-2.5 text-blue-600" /> Digital Solutions
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Web & Software for Local Businesses</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-4 py-2.5 text-xs font-bold transition-all shadow-sm shadow-emerald-600/25 hover:shadow-md hover:shadow-emerald-600/35"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>WhatsApp Me</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="rounded-lg bg-emerald-600 p-2 text-white shadow-sm"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 border-t border-slate-100 pt-4 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+923448280359"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                <PhoneCall className="h-3.5 w-3.5" /> Call: +92 344 8280359
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
