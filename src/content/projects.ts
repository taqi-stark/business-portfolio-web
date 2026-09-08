export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl: string;
  isDemo?: boolean;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "real-estate",
    title: "Al-Haram Real Estate Portal",
    category: "Real Estate & Lead Generation",
    badge: "Live Website",
    tagline: "High-converting property portal designed for local & overseas buyers",
    description:
      "Modern property directory with searchable listings by budget and Marla/Kanal, high-resolution photo galleries, Google Maps integration, and 1-tap WhatsApp inquiry buttons.",
    image: "/projects/real_estate.jpg",
    liveUrl: "https://realestate-steel-tau.vercel.app",
    isDemo: false,
    tags: ["Real Estate", "Search Filters", "WhatsApp Routing", "Local SEO"],
    metrics: [
      { label: "Overseas Inquiries", value: "3x Increase" },
      { label: "Admin Update Time", value: "< 60 Secs" },
    ],
    features: [
      "Property search by city, size (5 Marla, 10 Marla, 1 Kanal) & budget",
      "Direct 1-tap WhatsApp inquiry attached to each property",
      "Interactive society location pins and master plans",
      "Mobile-first responsive design for 4G connections",
    ],
  },
  {
    id: "pos-inventory",
    title: "Retail POS & Smart Inventory System",
    category: "Retail POS & Billing Software",
    badge: "Production Demo",
    tagline: "Sub-2-second barcode checkout, stock alerts, and daily profit analytics",
    description:
      "A complete supermarket & retail billing solution built to replace manual paper registers. Includes barcode scanning, thermal slip printing, automated low-stock warnings, and Khata ledger.",
    image: "/projects/pos_system.jpg",
    liveUrl: "https://pos-demo.alitaqi.dev",
    isDemo: true,
    tags: ["Retail POS", "Barcode Scanner", "Thermal Printing", "Khata Ledger"],
    metrics: [
      { label: "Checkout Speed", value: "+60% Faster" },
      { label: "Bookkeeping Errors", value: "95% Reduction" },
    ],
    features: [
      "Fast barcode and shortcut cashier billing counter",
      "Automated inventory deduction and low-stock alert badges",
      "Support for thermal receipt printers (80mm & 58mm)",
      "Daily gross profit, revenue, and cash ledger reports",
    ],
  },
  {
    id: "custom-software",
    title: "Operatia Business Operations Suite",
    category: "Custom ERP & Operations Software",
    badge: "Client Platform",
    tagline: "Tailored internal operations replacing spreadsheets & paperwork",
    description:
      "Custom business management dashboard designed around specific daily workflows. Features real-time profit tracking, customer balance Khata records, role-based access, and automated ledger exports.",
    image: "/projects/custom_software.jpg",
    liveUrl: "https://business-suite-demo.alitaqi.dev",
    isDemo: true,
    tags: ["Custom ERP", "Khata Records", "Role Permissions", "Analytics"],
    metrics: [
      { label: "Hours Saved Daily", value: "3+ Hours" },
      { label: "Paperwork Eliminated", value: "100% Digital" },
    ],
    features: [
      "Customer credit ledger (Khata) with automatic balance tracking",
      "Daily transactions, expense categorization, and net profit charts",
      "Multi-user roles with secure owner permission controls",
      "Accessible from mobile phone, laptop, or counter PC",
    ],
  },
  {
    id: "whatsapp-integration",
    title: "WhatsApp Smart Ordering & Catalog System",
    category: "WhatsApp Commerce & Automation",
    badge: "High Conversion",
    tagline: "Online product catalog with automated 1-click WhatsApp checkout",
    description:
      "Modern e-commerce platform where customers browse mobile-friendly product catalogs and send pre-formatted orders directly into the seller's WhatsApp with full items, address, and total.",
    image: "/projects/whatsapp_integration.jpg",
    liveUrl: "https://whatsapp-store-demo.alitaqi.dev",
    isDemo: true,
    tags: ["WhatsApp API", "E-Commerce", "Instant Checkout", "Catalog"],
    metrics: [
      { label: "Order Conversion", value: "+45% Boost" },
      { label: "Customer Drop-off", value: "Minimized" },
    ],
    features: [
      "Fast mobile product catalog with categories and search",
      "Direct WhatsApp checkout without complicated login forms",
      "Automated order summary generation with delivery details",
      "Support for Cash-on-Delivery (COD) & Bank Transfer payments",
    ],
  },
];
