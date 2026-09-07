import { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check } from "lucide-react";
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
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Let's Discuss Your Business Project
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Have a question about what I can build for your business? Send a message on WhatsApp for the fastest response, or fill out this quick consultation form.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-3.5">
              <a
                href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
                  businessData.profile.defaultWhatsAppMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 hover:bg-emerald-50 transition-colors shadow-sm"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-600 text-white grid place-items-center shrink-0 shadow-sm">
                  <MessageCircle className="h-5 w-5 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                    Primary Contact Channel
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {businessData.profile.whatsappDisplay}
                  </span>
                  <span className="text-[11px] text-slate-500 block">Fastest response · Same-day reply</span>
                </div>
              </a>

              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 grid place-items-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 block">Email Address</span>
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

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-slate-100 text-slate-600 grid place-items-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block">Location & Service Area</span>
                  <span className="text-xs font-bold text-slate-800">
                    Punjab, Pakistan (Serving Sargodha, Khushab, Lahore, Karachi & Remote Nationwide)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 card-premium p-6 sm:p-8 bg-white">
            <h3 className="text-xl font-bold text-slate-900">Request a Free Business Consultation</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fill out this quick form. It will automatically prepare a structured inquiry for our WhatsApp or email conversation.
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
                  <label className="text-xs font-bold text-slate-700 block mb-1">Business or Shop Name *</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Al-Madina Mart & Spices"
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
                    <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                    <option value="Retail Store / Mart">Retail Store / Mart</option>
                    <option value="Real Estate Office">Real Estate Office</option>
                    <option value="Clinic / Hospital">Clinic / Healthcare</option>
                    <option value="Salon / Spa">Salon / Spa</option>
                    <option value="School / Academy">School / Academy</option>
                    <option value="Gym / Fitness">Gym / Fitness</option>
                    <option value="Other Business">Other Local Business</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">What Solution Do You Need?</label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="POS & Inventory System">POS & Inventory System</option>
                    <option value="Real Estate Website">Real Estate Website</option>
                    <option value="E-Commerce Store">E-Commerce Store</option>
                    <option value="Booking System">Booking System</option>
                    <option value="Custom Business Software">Custom Business Software</option>
                    <option value="WhatsApp Automation">WhatsApp Integration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your WhatsApp / Phone Number *</label>
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
                  Briefly describe your requirements or challenges (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. We want customers to see our products online and place orders on WhatsApp..."
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 text-sm font-bold transition-all shadow-md shadow-emerald-600/25"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Send Consultation Inquiry to Ali on WhatsApp</span>
              </button>

              {submitted && (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Opening WhatsApp with your formatted inquiry... Ali will reply promptly!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
