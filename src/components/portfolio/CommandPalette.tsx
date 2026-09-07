import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { User, Briefcase, Mail, Terminal as TerminalIcon, Github, Linkedin, Cpu } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    const handleToggle = () => setOpen((o) => !o);
    
    document.addEventListener("keydown", down);
    window.addEventListener("toggle-palette", handleToggle);
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("toggle-palette", handleToggle);
    };
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => window.location.hash = "#top")}>
            <User className="mr-2 h-4 w-4" />
            <span>Hero / About</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.location.hash = "#work")}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Projects & Work</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.location.hash = "#contact")}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links & Socials">
          <CommandItem onSelect={() => runCommand(() => window.open(portfolio.socials.github, "_blank"))}>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.open(portfolio.socials.linkedin, "_blank"))}>
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.open(`mailto:${portfolio.email}`, "_self"))}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Email Me</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="System">
          <CommandItem onSelect={() => runCommand(() => {
            const ev = new CustomEvent("toggle-matrix");
            window.dispatchEvent(ev);
          })}>
            <Cpu className="mr-2 h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Toggle Matrix Mode</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
