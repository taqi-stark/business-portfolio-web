import { useState } from "react";
import { MessageCircle, Mail, MapPin, CheckCircle2, Copy, Check, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { businessData } from "@/content/business";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Retail Store");
  const [serviceNeeded, setServiceNeeded] = useState("Business Website");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Ali, my name is ${name} from "${businessName}" (${businessType}).
I'm interested in: ${serviceNeeded}.
Phone/WhatsApp: ${phone}
Details: ${message || "Please share consultation details."}`;

    const url = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(businessData.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Top Benefit Strip */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Fast Turnaround (7–14 days)</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
            <Clock className="h-4 w-4 text-blue-600 shrink-0" />
            <span>Same-Day WhatsApp Response</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Milestone-Based Secure Payments</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Have an Idea for Your Business? Let's Talk.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Tell me what you're currently doing and what bottlenecks you'd like to fix. Send a message on WhatsApp for the fastest reply, or submit this quick consultation form.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-3.5">
              <a
                href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
                  businessData.profile.defaultWhatsAppMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 hover:bg-emerald-50 transition-colors shadow-xs"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-600 text-white grid place-items-center shrink-0 shadow-sm">
                  <MessageCircle className="h-5 w-5 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                    Direct WhatsApp
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {businessData.profile.whatsappDisplay}
                  </span>
                  <span className="text-[11px] text-slate-500 block">Immediate reply · 7 days a week</span>
                </div>
              </a>

              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 grid place-items-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block">Email Address</span>
                    <a href={`mailto:${businessData.profile.email}`} className="text-sm font-bold text-slate-900 hover:text-blue-600">
                      {businessData.profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="rounded-lg border border-slate-200 p-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-slate-100 text-slate-600 grid place-items-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">Location & Service Area</span>
                  <span className="text-xs font-semibold text-slate-800">
                    Punjab, Pakistan (Serving Sargodha, Khushab, Lahore & Remote Nationwide)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 card-premium p-6 sm:p-8 bg-white border border-slate-200">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Request a Free Consultation</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Fill out this quick form. It automatically structures your inquiry for our WhatsApp discussion.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Al-Madina Mart"
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Business Type</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Retail Store / Mart">Retail Store / Mart</option>
                    <option value="Real Estate Office">Real Estate Office</option>
                    <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                    <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                    <option value="Salon / Spa">Salon / Spa</option>
                    <option value="School / Academy">School / Academy</option>
                    <option value="Gym / Fitness">Gym / Fitness</option>
                    <option value="Other Business">Other Local Business</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Solution Needed</label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Business Website">Business Website (from PKR 35k)</option>
                    <option value="POS & Inventory System">POS & Inventory System (from PKR 55k)</option>
                    <option value="Real Estate Portal">Real Estate Portal</option>
                    <option value="E-Commerce Store">E-Commerce Store (from PKR 48k)</option>
                    <option value="Booking System">Appointment Booking System</option>
                    <option value="Custom Business Software">Custom Business Software</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0344 1234567"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Tell me a bit about what you want to improve (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. We want to stop paper slips and manage stock from phone..."
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-3.5 text-sm font-bold transition-all shadow-md shadow-emerald-600/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Send Consultation Inquiry on WhatsApp</span>
              </button>

              {submitted && (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Opening WhatsApp with your pre-filled inquiry... Ali will reply promptly!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
