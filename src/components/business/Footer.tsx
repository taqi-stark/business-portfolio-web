import { MessageCircle, Mail, MapPin, ArrowUp, Heart } from "lucide-react";
import { businessData } from "@/content/business";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-14 sm:py-16 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-blue-600 text-white font-bold text-sm grid place-items-center">
                AT
              </div>
              <span className="font-bold text-lg text-white">Ali Taqi</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Independent Web & Software Developer specializing in practical digital systems, websites, and POS billing tools for local Pakistani and international businesses.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 pt-1">
              <a
                href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
                  businessData.profile.defaultWhatsAppMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp: {businessData.profile.whatsappDisplay}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-white transition-colors">Business Websites</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">POS & Inventory Systems</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Real Estate Portals</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">E-Commerce Stores</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Booking Systems</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Custom Software</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="/#top" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#work" className="hover:text-white transition-colors">Client Work & Case Studies</a></li>
              <li><a href="/#solutions" className="hover:text-white transition-colors">Industry Breakdown</a></li>
              <li><a href="/#process" className="hover:text-white transition-colors">How The Process Works</a></li>
              <li><a href="/#packages" className="hover:text-white transition-colors">Packages & Pricing</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About Ali</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Ali Taqi. Digital Solutions for Local Businesses. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="h-3 w-3" /> Punjab, Pakistan
            </span>
            <a href="#top" className="hover:text-white transition-colors flex items-center gap-1">
              Back to Top <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
