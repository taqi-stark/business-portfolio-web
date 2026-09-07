import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Tile = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={prefersReducedMotion ? undefined : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("tile p-6", className)}
    >
      {children}
    </motion.div>
  );
};

export const TileLabel = ({ children }: { children: ReactNode }) => (
  <div className="mb-4 flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-foreground">
    <span className="h-2 w-2 rounded-full bg-primary" />
    {children}
  </div>
);
