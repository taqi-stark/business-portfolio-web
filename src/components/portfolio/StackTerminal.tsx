import { useState, useRef, useEffect } from "react";

export const StackTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Stack knowledgebase active." },
    { type: "system", content: "Type a tech (e.g., 'python', 'docker', 'fastapi') for reasoning." }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmdStr = input.trim();
    if (!cmdStr) return;

    if (cmdStr.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const newHistory = [...history, { type: "input", content: cmdStr }];
    
    let response = "";
    switch(cmdStr.toLowerCase()) {
      case "python":
        response = "Python is my core language for backend logic, AI scripts, and data processing. It allows rapid delivery of stable, readable systems.";
        break;
      case "fastapi":
        response = "FastAPI is my go-to for high-performance APIs. With Pydantic and async support, it guarantees speed, data validation, and easy integrations.";
        break;
      case "django":
        response = "Django is perfect for complex enterprise logic and content management. Its ORM and built-in admin panel supercharge product delivery.";
        break;
      case "docker":
        response = "Docker containerizes my backends to ensure they run identically on your production servers as they do locally on my machine. Crucial for DevOps.";
        break;
      case "redis":
        response = "Redis natively handles caching, session storage, and rate-limiting. Essential for delivering sub-millisecond data retrieval to users.";
        break;
      case "postgresql":
      case "postgres":
      case "sql":
      case "sqlite":
      case "mysql":
        response = "The gold standard of relational databases. I rely heavily on robust relational data architecture for ACID compliance and complex queries.";
        break;
      case "kafka":
      case "rabbitmq":
        response = "Message queues like Kafka/RabbitMQ drive my event-driven architectures, effortlessly processing massive background data streams at scale.";
        break;
      case "nginx":
        response = "Nginx seamlessly acts as the reverse proxy for my applications, handling immediate load balancing, static files, and SSL termination.";
        break;
      case "prometheus":
      case "grafana":
        response = "These precise observability tools give me real-time metric insights and alerts, allowing me to spot and eliminate runtime issues instantly.";
        break;
      case "github actions":
      case "ci/cd":
      case "ci":
        response = "I heavily use CI/CD pipelines to ensure code is automatically linted, tested, and shipped to the cloud servers upon commit.";
        break;
      case "javascript":
      case "react":
      case "node.js":
        response = "While backend is my forte, I confidently build full-stack interfaces with React, managing end-to-end data pipelines dynamically.";
        break;
      default:
        response = `Unknown system or tech: '${cmdStr}'. Try general terms like 'kafka', 'python', 'fastapi', or 'grafana'.`;
    }

    newHistory.push({ type: "output", content: response });
    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="mt-5 sm:mt-6 rounded-xl border-2 border-slate-200 bg-slate-50 shadow-sm flex flex-col h-[260px] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100/50 px-4 py-3 select-none">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 shadow-sm" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 shadow-sm" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow-sm" />
        <span className="ml-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
          query.sh
        </span>
      </div>
      <div ref={scrollRef} className="flex-1 p-4 font-mono text-[13px] leading-relaxed overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        {history.map((line, i) => (
          <div key={i} className={`mb-3 ${line.type === 'system' ? 'text-slate-400 italic font-semibold' : 'text-slate-700'}`}>
            {line.type === "input" && <span className="text-primary font-bold mr-2 select-none">❯</span>}
            <span className={line.type === "input" ? "font-bold text-slate-900 text-sm" : "font-medium"}>{line.content}</span>
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center">
          <span className="text-primary font-bold mr-2 select-none text-sm">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none font-bold text-slate-800 placeholder-slate-300 text-[13px]"
            placeholder="Type 'docker'..."
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};
