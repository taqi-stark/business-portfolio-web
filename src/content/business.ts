export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  idealFor: string;
  deliverables: string[];
  icon: string;
}

export interface UnifiedSolutionItem {
  id: string;
  title: string;
  badge?: string;
  priceStarting: string;
  priceNote?: string;
  timeline: string;
  popular?: boolean;
  shortDescription: string;
  idealFor: string;
  deliverables: string[];
  icon: string;
  industryTags: string[];
}

export interface ProblemSolutionItem {
  problem: string;
  solution: string;
  icon: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  headline: string;
  solutions: string[];
  tag: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  clientType: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  liveUrl?: string;
  status: "Completed" | "In Production";
}

export interface PackageTier {
  name: string;
  priceStarting: string;
  priceNote?: string;
  description: string;
  deliverables: string[];
  timeline: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const businessData = {
  profile: {
    name: "Ali Taqi",
    title: "Web & Software Developer",
    positioning: "Digital Solutions for Local Businesses",
    location: "Punjab, Pakistan · Serving Nationwide & Remote",
    whatsappNumber: "923448280359",
    whatsappDisplay: "+92 344 8280359",
    email: "alitaqiuos@gmail.com",
    availability: "Available for New Client Projects",
    defaultWhatsAppMessage: "Hi Ali, I found your website and I'd like to discuss a website/software solution for my business.",
  },

  hero: {
    eyebrow: "DIGITAL SOLUTIONS FOR LOCAL BUSINESSES",
    headline: "Turn Your Business Into a Professional Digital Business",
    subheadline:
      "I build modern websites, POS billing systems, and custom business software that help local businesses attract customers, simplify daily operations, and increase revenue.",
    ctaPrimary: "Get a Free Consultation",
    ctaSecondary: "View My Work",
    trustPoints: [
      "Direct 1-on-1 communication with your developer",
      "Simple & intuitive for non-technical staff",
      "Tailored to your actual business workflow",
      "Ongoing support after project launch",
    ],
  },

  unifiedSolutions: [
    {
      id: "business-websites",
      title: "Business Websites & Property Portals",
      badge: "High Conversion",
      priceStarting: "PKR 35,000",
      timeline: "7 to 10 Days",
      popular: true,
      shortDescription:
        "Professional, mobile-friendly websites that make your business easy to find on Google, build buyer trust, and route instant inquiries directly to your WhatsApp.",
      idealFor: "Real Estate Agencies, Clinics, Offices, Schools & Service Providers",
      deliverables: [
        "Mobile-first design optimized for fast 4G loading",
        "Google Maps & local business profile SEO",
        "1-click WhatsApp inquiry buttons per listing/service",
        "Domain, SSL & high-speed hosting setup",
        "Simple admin panel to update content in minutes",
        "1 month free post-launch support",
      ],
      icon: "Globe",
      industryTags: ["Real Estate", "Clinics", "Offices", "Schools"],
    },
    {
      id: "pos-inventory",
      title: "Retail POS & Smart Inventory Systems",
      badge: "Best for Marts",
      priceStarting: "PKR 55,000",
      timeline: "2 to 3 Weeks",
      popular: true,
      shortDescription:
        "Fast barcode cashier billing, thermal receipt printing, automated stock alerts, and instant daily profit reports — stopping paperwork errors and cash loss.",
      idealFor: "Retail Shops, Marts, Outlets, Pharmacies & Restaurants",
      deliverables: [
        "Sub-2-second barcode cashier checkout counter",
        "Automated stock deduction & low-stock alerts",
        "Thermal slip printer integration (80mm / 58mm)",
        "Daily, weekly, and monthly profit & ledger analytics",
        "Customer credit (Khata) ledger & balance tracking",
        "On-site / remote staff training until 100% confident",
      ],
      icon: "Receipt",
      industryTags: ["Retail & Marts", "Pharmacies", "Restaurants", "Wholesale"],
    },
    {
      id: "ecommerce-store",
      title: "E-Commerce Stores & WhatsApp Orders",
      badge: "Online Sales",
      priceStarting: "PKR 48,000",
      timeline: "10 to 14 Days",
      popular: false,
      shortDescription:
        "Clean, attractive online stores for businesses that want to sell products online with WhatsApp ordering, cash-on-delivery (COD), and bank transfer.",
      idealFor: "Clothing Brands, Grocery Outlets, Electronics & Local Sellers",
      deliverables: [
        "Product catalog with categories, search & filters",
        "Instant WhatsApp order generation with product details",
        "Cash-on-Delivery (COD) & Bank Transfer checkout pipeline",
        "Mobile shopping optimized for fast mobile data",
        "Product upload walkthrough & staff training",
        "Customer order notification alerts",
      ],
      icon: "ShoppingBag",
      industryTags: ["Clothing & Boutiques", "Electronics", "Groceries"],
    },
    {
      id: "custom-software",
      title: "Custom Software & Booking Systems",
      badge: "Tailored Architecture",
      priceStarting: "Custom Quotation",
      priceNote: "Based on your exact scope",
      timeline: "Tailored to Scope",
      popular: false,
      shortDescription:
        "Tailor-made internal business software, booking calendars, and customer balance tracking built specifically around your team's existing workflow.",
      idealFor: "Clinics, Salons, Distribution Companies & Growing Businesses",
      deliverables: [
        "Built specifically around your team's day-to-day routine",
        "Online slot booking & automated WhatsApp reminders",
        "Multi-user roles with secure owner permissions",
        "Automated PDF reports & accounting exports",
        "Lifetime ownership with zero monthly SaaS lock-in fees",
        "Long-term maintenance and upgrade roadmap",
      ],
      icon: "Cpu",
      industryTags: ["Clinics & Salons", "Distributors", "Academies", "Gyms"],
    },
  ] as UnifiedSolutionItem[],

  services: [
    {
      id: "business-websites",
      title: "Business Websites",
      shortDescription:
        "Professional, mobile-friendly websites that make your business easy to find on Google, build trust, and bring in new customer enquiries.",
      idealFor: "Offices, service providers, clinics, schools, and companies",
      deliverables: [
        "Modern mobile-first design",
        "Google Maps & local SEO setup",
        "1-click WhatsApp & call buttons",
        "Fast loading speed on mobile data",
      ],
      icon: "Globe",
    },
    {
      id: "pos-inventory",
      title: "POS & Inventory Systems",
      shortDescription:
        "Digital billing, instant receipt generation, real-time stock alerts, daily sales ledger, and profit tracking without paperwork headache.",
      idealFor: "Retail shops, marts, pharmacies, and restaurants",
      deliverables: [
        "Fast barcode checkout",
        "Automated low-stock alerts",
        "Daily profit & sales reports",
        "Staff accounts with secure permissions",
      ],
      icon: "Receipt",
    },
    {
      id: "real-estate",
      title: "Real Estate Websites",
      shortDescription:
        "High-converting property portals to showcase residential and commercial plots, houses, and files with photo galleries and instant WhatsApp inquiry routing.",
      idealFor: "Real estate agencies, property dealers, and developers",
      deliverables: [
        "Search by price, city, size (Marla/Kanal)",
        "Direct WhatsApp inquiry per property",
        "High-resolution photo & video galleries",
        "Easy admin dashboard to add listings",
      ],
      icon: "Building2",
    },
    {
      id: "ecommerce",
      title: "E-Commerce Stores",
      shortDescription:
        "Clean, attractive online stores for businesses that want to sell products online with WhatsApp ordering, cash-on-delivery (COD), and bank transfer.",
      idealFor: "Clothing brands, electronics, grocery, and local retailers",
      deliverables: [
        "Product catalog with categories & search",
        "Direct WhatsApp order button on cart",
        "Cash on Delivery & Bank Transfer checkout",
        "Mobile-optimized shopping experience",
      ],
      icon: "ShoppingBag",
    },
    {
      id: "booking-systems",
      title: "Booking & Appointment Systems",
      shortDescription:
        "Automated booking calendars that allow clients and patients to book slots online, eliminating missed calls and double-booking errors.",
      idealFor: "Clinics, doctors, salons, consultants, and fitness trainers",
      deliverables: [
        "Interactive slot booking by time & service",
        "Automated WhatsApp / SMS reminders",
        "Doctor / staff availability schedules",
        "Client appointment history records",
      ],
      icon: "CalendarCheck",
    },
    {
      id: "custom-software",
      title: "Custom Business Software",
      shortDescription:
        "Tailor-made internal software designed around your specific workflow, replacing scattered notebooks, Excel sheets, and manual calculations.",
      idealFor: "Growing businesses with unique day-to-day operations",
      deliverables: [
        "Built specifically for your team's workflow",
        "Automated ledger & customer balance tracking",
        "Multi-user access with roles",
        "Lifetime ownership without monthly SaaS lock-in",
      ],
      icon: "Cpu",
    },
  ] as ServiceItem[],

  manualVsDigital: [
    {
      problem: "Customers can't easily find your business or services online",
      solution: "A modern, Google-indexed website with your location, pricing, and contact details 24/7",
      icon: "Search",
    },
    {
      problem: "Customer orders and inquiries are scattered across chaotic WhatsApp chats",
      solution: "A structured ordering flow where orders arrive organized with full customer details and items",
      icon: "MessageSquare",
    },
    {
      problem: "Inventory is counted manually, leading to stockouts or misplaced items",
      solution: "Automated inventory updates on every sale with instant low-stock notification alerts",
      icon: "Package",
    },
    {
      problem: "Sales and customer credit (Khata) are recorded in fragile paper notebooks",
      solution: "Secure digital billing that tracks every rupee, cash balance, and customer ledger automatically",
      icon: "FileSpreadsheet",
    },
    {
      problem: "Customers keep asking for product photos, menus, and prices manually",
      solution: "A digital catalog/menu with live prices that customers can browse anytime on their phones",
      icon: "Smartphone",
    },
    {
      problem: "The business owner must be physically present 100% of the time to supervise",
      solution: "Real-time sales dashboard accessible from your own phone anywhere, anytime",
      icon: "ShieldCheck",
    },
  ] as ProblemSolutionItem[],

  industries: [
    {
      id: "restaurants",
      name: "Restaurants & Cafes",
      icon: "Utensils",
      tag: "Food & Hospitality",
      headline: "Take orders faster and streamline kitchen billing",
      solutions: [
        "Digital QR-code menu with photos & prices",
        "Direct WhatsApp delivery ordering system",
        "Fast POS counter billing with thermal receipt printing",
        "Ingredient & beverage inventory tracking",
      ],
    },
    {
      id: "retail",
      name: "Retail Stores & Marts",
      icon: "Store",
      tag: "Retail & Marts",
      headline: "Speed up checkout and stop losing track of stock",
      solutions: [
        "Barcode scanner integration for 2-second billing",
        "Real-time stock deduction and reorder warnings",
        "Daily profit, sales, and expense reports",
        "Customer loyalty and credit (Khata) management",
      ],
    },
    {
      id: "realestate",
      name: "Real Estate Offices",
      icon: "Building",
      tag: "Property & Construction",
      headline: "Showcase properties professionally to attract serious buyers",
      solutions: [
        "Online property directory with photos, video, and map locations",
        "1-click WhatsApp inquiry directly to specific agents",
        "Filter by residential/commercial, budget, and Marla/Kanal",
        "Professional digital branding for overseas Pakistani buyers",
      ],
    },
    {
      id: "clinics",
      name: "Clinics & Doctors",
      icon: "Stethoscope",
      tag: "Healthcare",
      headline: "Organize patient appointments and medical visit records",
      solutions: [
        "Online appointment booking with doctor schedule management",
        "Automated WhatsApp appointment confirmations",
        "Digital patient history and prescription records",
        "Clean clinic information website establishing patient trust",
      ],
    },
    {
      id: "salons",
      name: "Salons & Spas",
      icon: "Sparkles",
      tag: "Personal Care",
      headline: "Fill appointment slots and manage staff schedules",
      solutions: [
        "Visual service rate card with photos of work",
        "24/7 online slot reservation for clients",
        "Staff member appointment assignment",
        "WhatsApp booking reminders to eliminate no-shows",
      ],
    },
    {
      id: "schools",
      name: "Schools & Academies",
      icon: "GraduationCap",
      tag: "Education",
      headline: "Modernize admissions, announcements, and student records",
      solutions: [
        "Official institutional website with admission enquiry forms",
        "Fee record and challan tracking system",
        "Notice board for exam schedules and events",
        "Parent inquiry funnel connecting directly to admissions staff",
      ],
    },
    {
      id: "gyms",
      name: "Gyms & Fitness Centers",
      icon: "Dumbbell",
      tag: "Fitness",
      headline: "Automate memberships, payments, and renewals",
      solutions: [
        "Membership plan showcase and sign-up inquiries",
        "Expiry date tracking with automatic WhatsApp renewal reminders",
        "Member check-in records",
        "Trainer schedule and class booking",
      ],
    },
    {
      id: "other",
      name: "Other Local Businesses",
      icon: "Briefcase",
      tag: "Custom Solutions",
      headline: "Have a unique workflow? I'll build software specifically for it",
      solutions: [
        "Custom billing software tailored to your specific process",
        "Database software replacing manual spreadsheets",
        "Customer inquiry and quotation systems",
        "Integration with WhatsApp, thermal printers, and barcode scanners",
      ],
    },
  ] as IndustryItem[],

  caseStudies: [
    {
      id: "real-estate",
      slug: "real-estate",
      title: "Modern Real Estate & Property Portal",
      category: "Real Estate Website & Lead Generation",
      tagline: "High-converting property portal designed for local and overseas buyers",
      clientType: "Real Estate Brokerage & Property Advisory",
      summary:
        "A fast, modern web portal designed for property offices to showcase residential plots, commercial spaces, and luxury homes. Features instant WhatsApp enquiry routing, interactive location map integration, and an intuitive property management system.",
      challenge:
        "The client relied on sending random unorganized photos on WhatsApp groups. Potential buyers—especially overseas Pakistanis looking for trusted investments—couldn't easily search available inventory, filter by budget, or inspect detailed property specs.",
      solution:
        "Built a clean, mobile-first website with categorized property listings (5 Marla, 10 Marla, 1 Kanal, Commercial), high-res photo carousels, Google Maps location pinning, and a dedicated 1-tap WhatsApp button attached to each listing with pre-filled property details.",
      features: [
        "Interactive property search by city, category, and budget",
        "Dedicated property pages with high-resolution photo galleries",
        "1-Click 'Inquire on WhatsApp' with property title pre-filled",
        "Google Maps location pins and society master plan integration",
        "Fast mobile loading on 3G/4G connections",
        "Simple admin panel to add/remove listings in under 60 seconds",
      ],
      results: [
        "Over 3x increase in qualified property inquiries within first 60 days",
        "Significantly higher trust from overseas buyers reviewing official listings",
        "Saved 2+ hours daily spent manually answering basic price & location questions",
      ],
      liveUrl: "https://realestate-steel-tau.vercel.app",
      status: "Completed",
    },
    {
      id: "pos-inventory",
      slug: "pos-system",
      title: "Retail POS & Smart Inventory System",
      category: "Business Software & Point of Sale",
      tagline: "Simplified digital billing, real-time stock control, and daily profit analytics",
      clientType: "Local Retail Mart & General Store",
      summary:
        "A business management software solution built to replace manual paper registers. Includes rapid barcode cashier checkout, automated low-inventory alerts, thermal receipt printing, and daily gross profit reporting.",
      challenge:
        "The store owner suffered from frequent stock discrepancies, slow cashier queues during peak hours, and had no clear idea of their actual daily net profit without spending 3 hours calculating paper slips at night.",
      solution:
        "Developed a lightweight, offline-resilient POS system that runs on any desktop or tablet. Cashiers scan items in seconds, receipts print automatically, inventory counts update live, and the owner gets an instant profit summary on their mobile phone.",
      features: [
        "Rapid barcode and keyboard-shortcut checkout (sub-2 second bills)",
        "Automated stock level tracking with red low-stock alert badges",
        "Daily, weekly, and monthly sales and gross margin reports",
        "Customer credit (Khata) ledger with balance tracking",
        "Support for thermal receipt printers and standard 80mm slips",
        "Owner dashboard accessible securely from phone or home PC",
      ],
      results: [
        "Eliminated 95% of manual bookkeeping errors and misplaced cash entries",
        "Checkout speed improved by over 60%, ending evening counter congestion",
        "Real-time stock alerts prevented popular items from running out of stock",
      ],
      status: "In Production",
    },
  ] as CaseStudy[],

  whyWorkWithMe: [
    {
      title: "Built Around Your Actual Business",
      description:
        "I don't force your business into a rigid, generic template. Every website and software tool is built around how you and your staff already work.",
      icon: "Layers",
    },
    {
      title: "Dead Simple for Non-Technical Staff",
      description:
        "Software is useless if your staff finds it confusing. My interfaces are clean, straightforward, and require zero technical knowledge.",
      icon: "Smile",
    },
    {
      title: "Direct 1-on-1 Communication",
      description:
        "No agency account managers, support ticket queues, or miscommunications. You deal directly with Ali, the person designing and building your project.",
      icon: "UserCheck",
    },
    {
      title: "Modern, Mobile-First & Fast",
      description:
        "Over 85% of Pakistani customers browse on mobile phones. Everything I build looks flawless and loads rapidly on Android and iPhone devices.",
      icon: "Smartphone",
    },
    {
      title: "Ongoing Support & Peace of Mind",
      description:
        "I don't disappear after your project launches. I provide training, maintenance, and continuous improvements as your business expands.",
      icon: "Headphones",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discover & Strategy",
      description:
        "We discuss your daily workflow, what bottlenecks slow you down, and what outcome you need. Simple, friendly conversation — zero technical jargon.",
      highlight: "No tech jargon needed",
    },
    {
      step: "02",
      title: "Blueprint & Upfront Quote",
      description:
        "I map out the exact screens, features, and timeline needed to solve your problem with a transparent upfront quote — no surprise costs.",
      highlight: "Clear scope & fixed price",
    },
    {
      step: "03",
      title: "Build & Interactive Preview",
      description:
        "I develop the website or software and share live preview links so you can click around and verify everything as it takes shape.",
      highlight: "Milestone demos & updates",
    },
    {
      step: "04",
      title: "Launch & Staff Training",
      description:
        "We go live. I personally train you and your team step-by-step and provide dedicated post-launch support for total peace of mind.",
      highlight: "Hands-on staff training included",
    },
  ],

  packages: [
    {
      name: "Business Website",
      priceStarting: "PKR 35,000",
      description:
        "Ideal for local companies, clinics, real estate offices, and service providers who need a professional Google presence.",
      deliverables: [
        "Custom 5 to 7 page mobile-responsive website",
        "Google Maps & local business profile setup",
        "1-click WhatsApp & phone call integration",
        "Contact & enquiry capture forms",
        "Free domain and high-speed hosting setup assistance",
        "1 month free post-launch support",
      ],
      timeline: "7 to 10 Days",
      popular: true,
    },
    {
      name: "POS & Inventory System",
      priceStarting: "PKR 55,000",
      description:
        "Designed for retail stores, marts, and outlets that need fast billing, stock control, and reliable cash records.",
      deliverables: [
        "Complete barcode billing & cashier interface",
        "Real-time inventory deduction & low-stock alerts",
        "Thermal printer receipt layout customization",
        "Daily, weekly, and monthly sales/profit reports",
        "Customer ledger & Khata record management",
        "Full staff training and installation support",
      ],
      timeline: "2 to 3 Weeks",
    },
    {
      name: "E-Commerce Online Store",
      priceStarting: "PKR 48,000",
      description:
        "For brands, boutiques, and sellers wanting to showcase products and take orders directly online or via WhatsApp.",
      deliverables: [
        "Catalog setup with unlimited categories & items",
        "Seamless WhatsApp cart & checkout pipeline",
        "Cash-on-Delivery (COD) & Bank Transfer checkout",
        "Customer order notification alerts",
        "Mobile shopping optimized for fast mobile data",
        "Product upload walkthrough & training",
      ],
      timeline: "10 to 14 Days",
    },
    {
      name: "Custom Business Software",
      priceStarting: "Custom Quotation",
      priceNote: "Tailored to your specific scope",
      description:
        "For established businesses requiring specific internal tools, multi-branch tracking, or complex operational systems.",
      deliverables: [
        "Architecture designed for your exact workflow",
        "Multi-branch or multi-user permissions",
        "Automated PDF reports & accounting exports",
        "Custom hardware or API integrations",
        "Long-term maintenance and upgrade roadmap",
        "Full data privacy & dedicated database setup",
      ],
      timeline: "Based on Scope",
    },
  ] as PackageTier[],

  faqs: [
    {
      question: "How do milestone payments work?",
      answer:
        "To keep everything safe and transparent, projects are divided into milestone stages: a standard advance deposit to initiate work, milestone progress reviews, and final payment upon your complete satisfaction after staff training.",
    },
    {
      question: "Do I or my staff need technical knowledge to use this?",
      answer:
        "Not at all. Everything I build is designed for non-technical users. If you and your staff can use WhatsApp or browse a mobile phone, you can comfortably operate the websites and software I deliver. I also provide personal training and recorded video walkthroughs.",
    },
    {
      question: "Can customer inquiries and orders connect directly to WhatsApp?",
      answer:
        "Yes, absolutely. WhatsApp is the primary communication channel in Pakistan. Every website and system I build features automated WhatsApp routing so customer inquiries, property leads, or order summaries arrive directly in your WhatsApp inbox with all details pre-filled.",
    },
    {
      question: "Can you build software customized specifically for my unique shop or office?",
      answer:
        "Yes! Unlike off-the-shelf software filled with confusing, useless menus, custom software is engineered around your team's specific daily workflow, terminology, and habits.",
    },
    {
      question: "What happens after the project launches?",
      answer:
        "I provide free support after launch to ensure smooth operation. After that, I provide flexible ongoing support for updates, security backups, adding new features, or expanding as your business grows.",
    },
  ] as FAQItem[],
};
