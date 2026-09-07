import { ArrowUpRight, CheckCircle2, MessageCircle, ExternalLink, Sparkles, Building2, Receipt, Utensils, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { businessData } from "@/content/business";

export const PortfolioSection = () => {
  return (
    <section id="work" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Proven Client Solutions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions I've Built
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Explore real working systems built to solve operational problems, generate customer leads, and simplify daily management.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-14 space-y-12">
          {/* PROJECT 1: Real Estate Website */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Real Estate & Property Portal
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Modern Real Estate Website
                </h3>

                <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  A modern website designed for a real estate business to showcase properties professionally, establish trust with local and overseas buyers, and make it effortless for potential buyers to contact the office.
                </p>

                {/* Features List */}
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Searchable property listings",
                      "High-res property details & galleries",
                      "1-tap WhatsApp enquiries per property",
                      "Contact & office location maps",
                      "Mobile-first responsive design",
                      "Fast, easy admin updates",
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                <Link
                  to="/work/real-estate"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://realestate-steel-tau.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100/80 text-slate-700 px-4 py-3 text-xs font-bold transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                  <span>View Live Demo</span>
                </a>

                <a
                  href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
                    "Hi Ali, I want a real estate website similar to your project."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 ml-auto"
                >
                  <MessageCircle className="h-4 w-4" /> Inquire for your office
                </a>
              </div>
            </div>

            {/* Visual Preview Side */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-100 to-slate-200 p-6 sm:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-300/80 bg-white group">
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">realestate-preview.com</span>
                  <Building2 className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                  alt="Real Estate Website Preview"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">Al-Haram Real Estate Portal</h5>
                    <p className="text-[11px] text-slate-500">Live listings with WhatsApp inquiry buttons</p>
                  </div>
                  <span className="rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-1 border border-emerald-200">
                    Live Demo Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 2: POS & Inventory Management System */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Retail & Mart Software
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  POS & Inventory Management System
                </h3>

                <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  A business management solution designed to eliminate manual bookkeeping, speed up checkout queues, track inventory automatically, and give business owners instant profit visibility.
                </p>

                {/* Features List */}
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Fast barcode cashier billing",
                      "Automated product & stock records",
                      "Low-stock alerts preventing shortages",
                      "Daily revenue & gross profit dashboard",
                      "Thermal printer receipt generation",
                      "Customer credit (Khata) balances",
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                <Link
                  to="/work/pos-system"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-xs font-bold transition-all shadow-md shadow-blue-500/20"
                >
                  <span>Explore POS System Details</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
                    "Hi Ali, I'm interested in installing your POS & Inventory System in my retail store."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-4 py-3 text-xs font-bold transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Request Store Demo</span>
                </a>
              </div>
            </div>

            {/* Visual Preview Side */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-700">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-950 p-4 text-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 text-xs text-slate-400">
                  <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                    <Receipt className="h-4 w-4" /> Quick Checkout Counter
                  </span>
                  <span className="font-mono text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    Thermal Slip Ready
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-slate-900 p-2.5 rounded-lg text-xs">
                    <div>
                      <p className="font-semibold text-white">Basmati Rice Super Karnal (5kg)</p>
                      <p className="text-[10px] text-slate-400">Barcode: 8964001 · Qty: 2</p>
                    </div>
                    <span className="font-mono font-bold text-blue-400">PKR 3,700</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900 p-2.5 rounded-lg text-xs">
                    <div>
                      <p className="font-semibold text-white">Pure Cooking Oil 1L</p>
                      <p className="text-[10px] text-slate-400">Barcode: 8964002 · Qty: 1</p>
                    </div>
                    <span className="font-mono font-bold text-blue-400">PKR 540</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Net Total</span>
                    <span className="font-mono text-xl font-bold text-emerald-400">PKR 4,240</span>
                  </div>
                  <span className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm">
                    Print Receipt
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FUTURE SOLUTIONS IN PROGRESS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="card-premium p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-amber-50 border border-amber-200/60 grid place-items-center text-amber-600 shrink-0">
                <Utensils className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                  Coming Soon / Available for Custom Order
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  Restaurant QR Digital Menu & WhatsApp Delivery
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Allows dine-in guests to scan tables for digital menus and lets delivery customers order directly into your WhatsApp kitchen queue.
                </p>
              </div>
            </div>

            <div className="card-premium p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-200/60 grid place-items-center text-indigo-600 shrink-0">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  Available for Setup
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  Medical Clinic Patient Booking & Visit History
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Streamlined appointment slots, WhatsApp booking confirmations for patients, and digital medical history records for doctors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
