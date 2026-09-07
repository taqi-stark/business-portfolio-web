import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { portfolio } from "@/content/portfolio";
import { Coffee, Skull, HeartHandshake, Terminal as TerminalIcon } from "lucide-react";

interface HistoryLine {
  type: "input" | "output" | "error" | "system";
  content: string | React.ReactNode;
}

export const Terminal = () => {
  const prefersReducedMotion = useReducedMotion();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([
    { type: "system", content: 'Welcome to AliOS. Terminal active.' },
    { type: "system", content: 'Type "help" to view available commands, or "coffee" for a break.' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (cmdStr: string) => {
    if (!cmdStr.trim()) return;

    if (cmdStr.trim().toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const newHistory = [...history, { type: "input", content: cmdStr } as HistoryLine];
    const output = parseCommands(cmdStr);
    if (output) {
      newHistory.push({ type: "output", content: output });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const parseCommands = (cmd: string): React.ReactNode => {
    const c = cmd.trim().toLowerCase();
    
    switch(c) {
      case "help":
        return (
          <div className="flex flex-col gap-2 my-2">
            <div className="text-slate-500 mb-1">Click an action below or type it:</div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={(e) => { e.stopPropagation(); executeCommand("about"); }} className="px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded font-semibold transition-colors">about</button>
              <button type="button" onClick={(e) => { e.stopPropagation(); executeCommand("stack"); }} className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded font-semibold transition-colors">stack</button>
              <button type="button" onClick={(e) => { e.stopPropagation(); executeCommand("socials"); }} className="px-3 py-1 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded font-semibold transition-colors">socials</button>
              <button type="button" onClick={(e) => { e.stopPropagation(); executeCommand("clear"); }} className="px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold transition-colors">clear</button>
            </div>
          </div>
        );
      case "about":
        return (
          <div className="text-slate-600 my-1 leading-relaxed">
            Hey, I'm <span className="text-emerald-500 font-bold">{portfolio.name}</span>! 
            <br />{portfolio.bio}
          </div>
        );
      case "stack":
        return (
          <div className="flex flex-wrap gap-2 my-2">
            {portfolio.coreStack.map(tech => (
              <span key={tech} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded-md text-xs font-semibold whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        );
      case "socials":
        return (
          <div className="flex gap-2 my-1 flex-wrap">
            <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="px-3 py-1 bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-black rounded transition-colors text-sm font-semibold inline-flex items-center gap-1">GitHub</a>
            <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="px-3 py-1 bg-slate-100 border border-slate-300 text-slate-700 hover:bg-blue-500 hover:text-white rounded transition-colors text-sm font-semibold inline-flex items-center gap-1">LinkedIn</a>
            {portfolio.socials.whatsapp && <a href={portfolio.socials.whatsapp} target="_blank" rel="noreferrer" className="px-3 py-1 bg-slate-100 border border-slate-300 text-slate-700 hover:bg-green-500 hover:text-white rounded transition-colors text-sm font-semibold inline-flex items-center gap-1">WhatsApp</a>}
            <a href={`mailto:${portfolio.email}`} className="px-3 py-1 bg-slate-100 border border-slate-300 text-slate-700 hover:bg-rose-500 hover:text-white rounded transition-colors text-sm font-semibold inline-flex items-center gap-1">Email</a>
          </div>
        );
      case "rm -rf /":
      case "sudo":
        return (
          <div className="flex items-center gap-2 text-red-500 my-1 font-bold">
            <Skull size={16} className="animate-pulse" /> <span>Nice try. I've backed up my databases.</span>
          </div>
        );
      case "coffee":
        return (
          <div className="flex items-center gap-2 text-amber-600 my-1">
            <Coffee size={14} className="animate-bounce" /> <span>Brewing virtual coffee... Done! ☕</span>
          </div>
        );
      case "menu":
      case "palette":
      case "cmdk":
        window.dispatchEvent(new CustomEvent("toggle-palette"));
        return <span className="text-blue-600 font-semibold">Opening Command Palette...</span>;
      case "ls":
      case "dir":
        return <span className="text-slate-500">index.html  node_modules  src  secret_keys.txt</span>;
      case "cat secret_keys.txt":
        return "You wish.";
      case "hire":
        return (
          <div className="flex items-center gap-2 text-emerald-600 my-1 font-semibold">
            <HeartHandshake size={14} /> <span>Awesome! Send me an email at {portfolio.email}</span>
          </div>
        );
      case "":
        return "";
      default:
        return <span className="text-red-500 font-semibold">Command not found: {c}. Click or type 'help'.</span>;
    }
  };

  return (
    <div 
      className="flex h-full min-h-[300px] flex-col overflow-hidden cursor-text group relative z-10 bg-white text-slate-800 rounded-xl shadow-lg border border-slate-200 transition-colors"
      onClick={handleContainerClick}
    >
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 select-none">
        <span className="h-3 w-3 rounded-full bg-red-400/80 shadow-[0_0_8px_rgba(248,113,113,0.3)]" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.3)]" />
        <span className="ml-3 font-mono text-xs text-slate-400 font-medium flex items-center gap-2">
          <TerminalIcon size={12} /> ali@portfolio — bash
        </span>
      </div>
      <div ref={scrollRef} className="flex-1 p-4 font-mono text-sm leading-relaxed sm:p-5 overflow-y-auto max-h-[360px] scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        {history.map((line, i) => (
          <div key={i} className={`mb-2 ${prefersReducedMotion ? "" : "animate-fade-up"} ${line.type === "system" ? "text-slate-400 italic text-xs mb-3" : "text-slate-700"}`} style={{ animationDuration: '0.2s' }}>
            {line.type === "input" && <span className="text-blue-500 font-bold mr-2 select-none">~$</span>}
            <span className={line.type === "input" ? "text-slate-900 font-semibold" : ""}>
              {line.content}
            </span>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center mt-2">
          <span className="text-blue-500 font-bold mr-2 select-none">~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-slate-900 font-semibold caret-blue-500 focus:ring-0 placeholder-slate-300"
            placeholder="Type 'help'..."
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};
