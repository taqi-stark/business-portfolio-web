import { useState } from "react";
import { 
  Building2, 
  MapPin, 
  BedDouble, 
  Bath, 
  Maximize2, 
  MessageCircle, 
  Search, 
  CheckCircle, 
  Compass, 
  Heart 
} from "lucide-react";
import { businessData } from "@/content/business";

interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  type: string;
  size: string;
  price: string;
  beds: number;
  baths: number;
  image: string;
  badge: string;
}

const PROPERTIES: Property[] = [
  {
    id: "p1",
    title: "5 Marla Spanish Design Luxury Villa",
    location: "DHA Phase 6, Sector C",
    city: "Lahore",
    type: "House",
    size: "5 Marla",
    price: "PKR 2.45 Crore",
    beds: 3,
    baths: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "Hot Listing",
  },
  {
    id: "p2",
    title: "10 Marla Brand New Modern Corner House",
    location: "Bahria Town, Sector D",
    city: "Islamabad",
    type: "House",
    size: "10 Marla",
    price: "PKR 4.80 Crore",
    beds: 5,
    baths: 6,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badge: "Verified File",
  },
  {
    id: "p3",
    title: "4 Marla Commercial Plaza Plot with NOC",
    location: "Main Boulevard, University Town",
    city: "Sargodha",
    type: "Commercial",
    size: "4 Marla",
    price: "PKR 1.25 Crore",
    beds: 0,
    baths: 0,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=800&q=80",
    badge: "High ROI",
  },
];

export const RealEstateMockup = ({ interactive = true }: { interactive?: boolean }) => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [favorites, setFavorites] = useState<{ [id: string]: boolean }>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = selectedCity === "All" ? PROPERTIES : PROPERTIES.filter((p) => p.city === selectedCity);

  const getWhatsAppLink = (propTitle: string, price: string) => {
    const text = encodeURIComponent(
      `Hello, I saw "${propTitle}" (${price}) on your property website. Please share more details and arrange a visit.`
    );
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
      {/* Property Portal Browser Topbar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-200 bg-slate-900 px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500" />
            <span className="h-3 w-3 rounded-full bg-amber-500" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>
          <span className="font-semibold text-sm tracking-wide text-slate-200 flex items-center gap-1.5">
            <Building2 className="h-4 w-4 text-emerald-400" /> Al-Haram Real Estate & Builders
          </span>
        </div>

        {/* City Filter pills */}
        <div className="flex items-center rounded-lg bg-slate-800 p-1 text-xs font-medium">
          {["All", "Lahore", "Islamabad", "Sargodha"].map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`rounded px-2.5 py-1 transition-colors ${
                selectedCity === city ? "bg-emerald-600 text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-sans">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          Live Property Portal
        </div>
      </div>

      {/* Portal Search Strip */}
      <div className="border-b border-slate-200 bg-slate-50/70 p-3 sm:px-5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <Search className="h-3.5 w-3.5 text-slate-400" />
          <span>Showing verified listings with clear title & NOC</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
          <Compass className="h-3.5 w-3.5 text-emerald-600" /> Direct WhatsApp Enquiry Integration Active
        </div>
      </div>

      {/* Property Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-5 bg-slate-100/40">
        {filtered.map((prop) => (
          <div
            key={prop.id}
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:border-emerald-500/50 hover:shadow-md transition-all"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold text-white tracking-wide">
                  {prop.badge}
                </span>

                <button
                  onClick={(e) => toggleFavorite(prop.id, e)}
                  aria-label="Save listing to favorites"
                  className="absolute right-3 top-3 h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm grid place-items-center text-slate-600 hover:text-rose-500 shadow-sm"
                >
                  <Heart className={`h-3.5 w-3.5 ${favorites[prop.id] ? "fill-rose-500 text-rose-500" : ""}`} />
                </button>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-mono text-sm font-bold drop-shadow-sm">{prop.price}</span>
                  <span className="rounded bg-white/20 backdrop-blur-sm px-1.5 py-0.5 text-[10px] font-medium text-white">
                    {prop.size}
                  </span>
                </div>
              </div>

              {/* Title & Location */}
              <div className="p-3.5">
                <h4 className="font-bold text-slate-800 text-xs line-clamp-1 group-hover:text-emerald-600 transition-colors">
                  {prop.title}
                </h4>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                  <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
                  <span className="truncate">{prop.location}, {prop.city}</span>
                </p>

                {/* Specs */}
                {prop.type === "House" && (
                  <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-2.5 text-[11px] text-slate-600">
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-3 w-3 text-slate-400" /> {prop.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-3 w-3 text-slate-400" /> {prop.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="h-3 w-3 text-slate-400" /> {prop.size}
                    </span>
                  </div>
                )}
                {prop.type === "Commercial" && (
                  <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-2.5 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle className="h-3 w-3 text-emerald-600" /> Commercial Registry & TMA Approved
                  </div>
                )}
              </div>
            </div>

            {/* Inquire Action Button */}
            <div className="p-3 pt-0">
              <a
                href={getWhatsAppLink(prop.title, prop.price)}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 py-2 text-[11px] font-bold text-white transition-colors shadow-sm"
              >
                <MessageCircle className="h-3.5 w-3.5 fill-white" /> Inquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Strip */}
      <div className="flex flex-wrap items-center justify-between border-t border-slate-200 bg-white px-5 py-3 text-xs text-slate-500">
        <span>✅ Over 120+ property inquiries handled directly through WhatsApp integration.</span>
        <span className="font-semibold text-slate-700">Client: Al-Haram Real Estate</span>
      </div>
    </div>
  );
};
