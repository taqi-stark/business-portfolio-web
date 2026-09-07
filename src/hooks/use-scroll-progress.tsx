import { createContext, useContext, ReactNode } from "react";
import { MotionValue } from "framer-motion";

const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

export const ScrollProgressProvider = ({
  children,
  progress,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
}) => (
  <ScrollProgressContext.Provider value={progress}>
    {children}
  </ScrollProgressContext.Provider>
);

export const useScrollProgress = (): MotionValue<number> => {
  const context = useContext(ScrollProgressContext);
  if (!context) {
    throw new Error("useScrollProgress must be used within ScrollProgressProvider");
  }
  return context;
};
