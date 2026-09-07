import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { businessData } from "@/content/business";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
            Answers for Business Owners
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Clear, honest answers to common questions about pricing, technical requirements, timelines, and ongoing support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {businessData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`h-7 w-7 rounded-full bg-slate-100 grid place-items-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have another question? */}
        <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center shrink-0">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Have a different question about your shop or office?</h4>
              <p className="text-[11px] text-slate-500">Ask Ali directly on WhatsApp for an immediate reply.</p>
            </div>
          </div>
          <a
            href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ali, I have a quick question about getting a website or software for my business."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs font-bold transition-all shrink-0"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
