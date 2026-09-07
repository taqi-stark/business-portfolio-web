import { Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, Home } from "lucide-react";
import { businessData } from "@/content/business";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 text-center shadow-xl">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-extrabold text-2xl mb-4">
          404
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Page Not Found</h1>
        <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
          The page you are looking for might have been moved, or you may have entered an incorrect web address.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 text-xs font-bold transition-all shadow-sm"
          >
            <Home className="h-4 w-4" />
            <span>Return to Ali Taqi Homepage</span>
          </Link>

          <a
            href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ali, I was browsing your website and wanted to inquire about a digital solution for my business."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 py-3 text-xs font-semibold transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
