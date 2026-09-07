export interface Education {
  degree: string;
  status: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  name: string;
  summary: string;
  tech: string[];
  role: string;
  live?: string;
  repo?: string;
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  impact: string;
  role?: string;
}

export interface PortfolioData {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  availability: string;
  bio: string;
  socials: Record<string, string>;
  education: Education[];
  stats: Stat[];
  coreStack: string[];
  databases: string[];
  languages: string[];
  tooling: string[];
  apiTools: string[];
  backendConcepts: string[];
  devOps: string[];
  currently: string[];
  projects: Project[];
  experience: Experience[];
}

export const portfolio: PortfolioData = {
  name: "Ali Taqi",
  initials: "AT",

  role: "Backend Engineer (Python)",
  tagline:
    "I build scalable backend systems and APIs that are reliable, maintainable, and production-ready.",

  location: "Pakistan · Remote",
  email: "alitaqiuos@gmail.com",
  availability: "Open to internships, freelance, and junior full-time roles",

  bio: "Backend-focused developer with hands-on experience building APIs, event-driven systems, and data-driven applications using FastAPI and Django. I enjoy designing clean architectures, working with databases, and building systems that solve real-world problems.",

  socials: {
    github: "https://github.com/taqi-stark",
    linkedin: "https://www.linkedin.com/in/ali-taqi-171b863a9",
    whatsapp: "https://wa.me/923448280359",
  },

  // 🔥 NEW: Education
  education: [
    {
      degree: "Bachelor's in Software Engineering",
      status: "Final Year",
    },
  ],

  // 🔥 UPDATED stats (realistic)
  stats: [
    { value: "1.5+", label: "yrs with Python" },
    { value: "8+", label: "projects built" },
    { value: "10+", label: "APIs developed" },
  ],

  // 🔥 Core stack (cleaned)
  coreStack: [
    "Python",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Docker",
    "Nginx",
  ],

  // 🔥 NEW: Databases separated
  databases: ["PostgreSQL", "MySQL", "SQLite", "Redis"],

  // 🔥 Languages
  languages: ["Python", "SQL", "JavaScript", "Bash"],

  // 🔥 Tooling (cleaned, no duplicates)
  tooling: [
    "Docker",
    "GitHub Actions",
    "Nginx",
    "Pytest",
    "Prometheus",
    "Grafana",
  ],

  // 🔥 NEW: API tools
  apiTools: ["Postman", "Swagger/OpenAPI"],

  // 🔥 NEW: Backend concepts (VERY important)
  backendConcepts: [
    "REST API design",
    "Authentication & Authorization (JWT, RBAC)",
    "Event-driven architecture",
    "Message queues (Kafka)",
    "Caching (Redis)",
    "Database design & normalization",
    "Background jobs & async processing",
  ],

  // 🔥 NEW: DevOps exposure
  devOps: [
    "Dockerized applications",
    "Basic CI/CD with GitHub Actions",
    "Nginx reverse proxy setup",
    "Linux server deployment (basic)",
  ],

  currently: [
    "Building event-driven backend systems with FastAPI",
    "Learning system design and scalable architectures",
    "Exploring vector databases and RAG pipelines",
  ],

  projects: [
    {
      name: "LinguaBridge AI",
      summary:
        "An AI-powered multilingual translation and language-learning platform designed to break down communication barriers. It features context-aware text translation, OCR document processing (translating from images and PDFs), a push-to-talk voice interpreter, and an interactive roleplay language coach. Built to handle complex use cases like translating structured files while protecting technical terms, it serves students, immigrants, travelers, and professionals looking for an all-in-one smart communication assistant.",
      tech: ["React", "TailwindCSS", "Cloudflare Workers", "Supabase", "Gemini", "OpenAI"],
      role: "Full-Stack Developer",
      live: "https://linguabridge-ai.alitaqiuos.workers.dev",
      repo: "https://github.com/taqi-stark/linguabridge-ai",
      featured: true,
    },
    {
      name: "Medical Report Analyzer & Chatbot",
      summary:
        "Developed a backend system that processes medical reports, extracts relevant clinical information, and generates simplified summaries for users. The system exposes APIs built with FastAPI that handle report uploads, parsing, and structured data extraction. Redis is used for caching frequently accessed reports, while MySQL stores processed data. A chatbot interface integrates with the backend to allow users to query medical insights interactively, making the system both analytical and conversational.",
      tech: ["FastAPI", "Laravel", "MySQL", "Redis"],
      role: "Backend Developer",
      repo: "https://github.com/taqi-stark",
      featured: true,
    },

    {
      name: "AI Application Tracking System",
      summary:
        "Built a recruitment management system that automates candidate screening and interview workflows. The backend, developed with FastAPI, manages role-based access for recruiters and candidates, processes job requirements, and matches candidate profiles accordingly. The system schedules interviews by checking availability and triggers automated email notifications for both shortlisted and rejected candidates. It also provides API endpoints for managing job listings, applications, and interview pipelines, improving hiring efficiency.",
      tech: ["FastAPI", "React", "SQLite", "Swagger"],
      role: "Backend Lead",
      repo: "https://github.com/taqi-stark",
    },

    {
      name: "Restaurant Admin Panel",
      summary:
        "Designed and implemented an administrative dashboard for restaurant operations using Django and Django Admin. The system allows staff to manage menu items, update website content dynamically, and track customer orders. The backend handles CRUD operations efficiently and ensures data consistency using a structured relational database. The admin interface simplifies day-to-day operations by providing a centralized control panel for non-technical users.",
      tech: ["Django", "Django Admin", "SQLite"],
      role: "Solo Developer",
      repo: "https://github.com/taqi-stark",
    },

    {
      name: "Real-time Device Log Monitoring System",
      summary:
        "Engineered a real-time monitoring system for tracking device logs and detecting potential security threats. The backend uses FastAPI for handling incoming log streams and Kafka for event-driven log ingestion and processing. Logs are visualized through Grafana dashboards, while Prometheus is used for metrics collection and alerting. The system is designed to scale with high log volumes and includes ongoing development of an automated remediation engine that can respond to detected threats by triggering predefined defensive actions.",
      tech: ["FastAPI", "Kafka", "Prometheus", "Grafana"],
      role: "Full-Stack Developer",
      repo: "https://github.com/taqi-stark",
    },
  ],

  experience: [
    {
      title: "Backend Developer",
      company: "Self-Employed",
      period: "2024 — Present",
      impact:
        "Developed multiple backend systems and APIs using FastAPI and Django, focusing on clean architecture, scalability, and real-world problem solving.",
    },
  ],
};