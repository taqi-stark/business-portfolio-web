import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Receipt, 
  MessageCircle, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Barcode, 
  Printer, 
  Store 
} from "lucide-react";
import { businessData } from "@/content/business";
import { POSMockup } from "@/components/mockups/POSMockup";
import { Navbar } from "@/components/business/Navbar";
import { Footer } from "@/components/business/Footer";
import { WhatsAppFloating } from "@/components/business/WhatsAppFloating";
import { MobileStickyBar } from "@/components/business/MobileStickyBar";

export const POSCaseStudy = () => {
  const caseStudy = businessData.caseStudies.find((c) => c.slug === "pos-system") || businessData.caseStudies[1];

  const getWhatsAppInquiry = () => {
    return `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      "Hi Ali, I reviewed your POS & Inventory System case study and I'd like to get this system installed for my store."
    )}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16 sm:pb-0">
      <Navbar />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Back breadcrumb */}
          <Link
            to="/#work"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to All Solutions
          </Link>

          {/* Header */}
          <div className="border-b border-slate-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Case Study · {caseStudy.category}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {caseStudy.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {caseStudy.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Store className="h-4 w-4 text-slate-400" /> Client: {caseStudy.clientType}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Barcode className="h-4 w-4 text-slate-400" /> Hardware: Barcode Scanners & 80mm Thermal Printers
              </span>
              <span>·</span>
              <span className="rounded bg-blue-100 text-blue-800 px-2 py-0.5 font-bold">
                Status: {caseStudy.status}
              </span>
            </div>
          </div>

          {/* Key Metrics / Highlights Strip */}
          <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">Checkout Speed</span>
              <p className="font-mono text-2xl font-bold text-emerald-600 mt-1">60% Faster</p>
              <span className="text-[11px] text-slate-500 mt-1 block">Sub-2 second barcode scanning eliminated queue congestion</span>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">Bookkeeping Errors</span>
              <p className="font-mono text-2xl font-bold text-blue-600 mt-1">95% Reduction</p>
              <span className="text-[11px] text-slate-500 mt-1 block">Automatic ledger calculation replaced manual paper slips</span>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">Stock Visibility</span>
              <p className="font-mono text-2xl font-bold text-slate-900 mt-1">100% Real-Time</p>
              <span className="text-[11px] text-slate-500 mt-1 block">Low-stock alerts prevent high-demand items from running out</span>
            </div>
          </div>

          {/* Interactive Live Mockup */}
          <div className="my-12">
            <div className="flex items-center justify-between mb-3 px-1">
              <h3 className="font-bold text-slate-900 text-base">Interactive Solution Preview</h3>
              <span className="text-xs text-slate-500 font-medium">Click items to bill, check stock, or view profit report</span>
            </div>
            <POSMockup interactive={true} />
          </div>

          {/* Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
            <div className="rounded-2xl border border-rose-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-rose-100 pb-3 mb-4">
                <span className="h-3 w-3 rounded-full bg-rose-500" /> The Client's Challenge
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-emerald-100 pb-3 mb-4">
                <span className="h-3 w-3 rounded-full bg-emerald-500" /> The Implemented Solution
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Features Implemented */}
          <div className="card-premium p-6 sm:p-8 my-12 bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Features Built For This POS System</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {caseStudy.features.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200/60">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Want a Fast POS & Billing System in Your Store?
            </h3>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              I can configure and install this system for your mart, pharmacy, or retail outlet, connect your barcode scanner and thermal printer, and train your cashiers in a single afternoon.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppInquiry()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-lg"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Discuss POS Setup on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
      <MobileStickyBar />
    </div>
  );
};

export default POSCaseStudy;
