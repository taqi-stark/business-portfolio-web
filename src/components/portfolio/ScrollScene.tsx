import { motion, useReducedMotion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState, ReactNode } from "react";
import { Code2, Database, Server, Terminal as TerminalIcon, Boxes, Braces, Cloud, Container } from "lucide-react";
import { ScrollProgressProvider } from "@/hooks/use-scroll-progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMediaQuery } from "@/hooks/use-media-query";

const Laptop3D = lazy(() =>
  import("./Laptop3D").then((module) => ({ default: module.Laptop3D }))
);

const scheduleIdle = (callback: () => void) => {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(callback, { timeout: 1200 });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(callback, 250);
  return () => window.clearTimeout(id);
};

/**
 * Animated, scroll-reactive background:
 *  - Smoothly shifts the page background color across sections.
 *  - Two large color blobs drift with parallax.
 *  - Floating tech glyphs move + rotate as you scroll.
 */
export const ScrollScene = ({ children }: { children?: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const isCoarsePointer = useMediaQuery("(pointer: coarse)");
  const isCompactScene = isMobile || isCoarsePointer;
  const shouldRender3D = !prefersReducedMotion && !isCompactScene;
  const [showLaptop, setShowLaptop] = useState(false);
  const currentTheme = useRef<"light" | "dark">("light");

  // Background color per section. Lightness values are tracked separately so
  // we can flip the foreground theme to stay readable.
  const stops = [0, 0.18, 0.4, 0.6, 0.8, 1];
  const colors = [
    "hsl(0 0% 100%)",        // white
    "hsl(258 60% 60%)",      // violet
    "hsl(330 70% 35%)",      // magenta-ink
    "hsl(180 80% 25%)",      // teal-ink
    "hsl(240 60% 10%)",      // deep indigo
    "hsl(0 0% 0%)",          // black
  ];
  const lightness = [100, 60, 35, 25, 10, 0];
  const background = useTransform(progress, stops, colors);
  const bgLightness = useTransform(progress, stops, lightness);

  // Toggle a light/dark data attribute on <html> based on background brightness.
  useMotionValueEvent(bgLightness, "change", (l) => {
    const nextTheme = l > 55 ? "light" : "dark";
    if (currentTheme.current !== nextTheme) {
      currentTheme.current = nextTheme;
      document.documentElement.dataset.bgTheme = nextTheme;
    }
  });
  useEffect(() => {
    currentTheme.current = "light";
    document.documentElement.dataset.bgTheme = "light";
    return () => { delete document.documentElement.dataset.bgTheme; };
  }, []);
  useEffect(() => {
    if (!shouldRender3D) {
      setShowLaptop(false);
      return undefined;
    }

    return scheduleIdle(() => setShowLaptop(true));
  }, [shouldRender3D]);

  // Two parallax glow blobs.
  const blobAY = useTransform(progress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "120%"]);
  const blobAX = useTransform(progress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "20%"]);
  const blobBY = useTransform(progress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "-80%"]);
  const blobBX = useTransform(progress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "-15%"]);
  const blobHue = useTransform(progress, [0, 1], [243, 190]);
  const blobABackground = useTransform(
    blobHue,
    (h) => `radial-gradient(circle, hsl(${h} 90% 55% / 0.35), transparent 60%)`
  );
  const blobBBackground = useTransform(
    blobHue,
    (h) => `radial-gradient(circle, hsl(${(h + 60) % 360} 85% 55% / 0.28), transparent 60%)`
  );

  return (
    <ScrollProgressProvider progress={progress}>
      <>
        {/* Animated base color */}
        <motion.div
          className="pointer-events-none fixed inset-0 -z-30"
          style={{ backgroundColor: background }}
        />

        {/* Drifting glow blobs */}
        <motion.div
          className="pointer-events-none fixed -z-20 h-[60vmax] w-[60vmax] rounded-full blur-3xl"
          style={{
            top: "-20vmax",
            left: "-10vmax",
            x: blobAX,
            y: blobAY,
            background: blobABackground,
          }}
        />
        <motion.div
          className="pointer-events-none fixed -z-20 h-[55vmax] w-[55vmax] rounded-full blur-3xl"
          style={{
            bottom: "-15vmax",
            right: "-10vmax",
            x: blobBX,
            y: blobBY,
            background: blobBBackground,
          }}
        />

        {/* Subtle dotted grid */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-50" />

        {/* 3D laptop that rotates with scroll */}
        {!showLaptop && shouldRender3D && (
          <SceneFallback />
        )}
        {shouldRender3D && showLaptop && (
          <Suspense fallback={<SceneFallback />}>
            <Laptop3D progress={progress} />
          </Suspense>
        )}

        {/* Floating tech glyphs with parallax */}
        {!prefersReducedMotion && <FloatingGlyphs progress={progress} compact={isCompactScene} />}
        
        {/* Render children with scroll context */}
        {children}
      </>
    </ScrollProgressProvider>
  );
};

const SceneFallback = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center px-6">
    <div className="scene-fallback w-full max-w-4xl">
      <div className="scene-shell">
        <div className="scene-screen">
          <div className="scene-line scene-line-wide" />
          <div className="scene-line" />
          <div className="scene-line scene-line-short" />
        </div>
        <div className="scene-base" />
      </div>
    </div>
  </div>
);

const glyphs = [
  { Icon: Braces,    top: "12%", left: "6%",  size: 72,  range: [-80, 140],  rot: [-12, 18] },
  { Icon: Code2,     top: "28%", left: "88%", size: 56,  range: [60, -180],  rot: [10, -22] },
  { Icon: Database,  top: "48%", left: "4%",  size: 64,  range: [-40, 220],  rot: [-6, 24] },
  { Icon: Server,    top: "62%", left: "92%", size: 60,  range: [120, -160], rot: [8, -18] },
  { Icon: Cloud,     top: "78%", left: "10%", size: 80,  range: [-60, 180],  rot: [-10, 16] },
  { Icon: Container, top: "88%", left: "82%", size: 58,  range: [40, -140],  rot: [12, -20] },
  { Icon: TerminalIcon, top: "8%",  left: "70%", size: 48, range: [-30, 200], rot: [-8, 22] },
  { Icon: Boxes,     top: "40%", left: "78%", size: 52,  range: [80, -200],  rot: [14, -24] },
];

const compactGlyphs = [
  { Icon: Braces, top: "16%", left: "8%", size: 46, range: [-24, 56], rot: [-10, 12] },
  { Icon: Code2, top: "20%", left: "82%", size: 38, range: [26, -54], rot: [8, -10] },
  { Icon: Database, top: "46%", left: "6%", size: 42, range: [-20, 64], rot: [-8, 12] },
  { Icon: Cloud, top: "72%", left: "78%", size: 50, range: [18, -44], rot: [6, -8] },
  { Icon: TerminalIcon, top: "82%", left: "14%", size: 36, range: [-14, 36], rot: [-6, 8] },
];

const FloatingGlyphs = ({
  progress,
  compact = false,
}: {
  progress: ReturnType<typeof useSpring>;
  compact?: boolean;
}) => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {(compact ? compactGlyphs : glyphs).map(({ Icon, top, left, size, range, rot }, i) => (
      <Glyph
        key={i}
        Icon={Icon}
        top={top}
        left={left}
        size={size}
        progress={progress}
        range={range as [number, number]}
        rot={rot as [number, number]}
      />
    ))}
  </div>
);

const Glyph = ({
  Icon, top, left, size, progress, range, rot,
}: {
  Icon: typeof Code2;
  top: string;
  left: string;
  size: number;
  progress: ReturnType<typeof useSpring>;
  range: [number, number];
  rot: [number, number];
}) => {
  const y = useTransform(progress, [0, 1], range);
  const rotate = useTransform(progress, [0, 1], rot);
  const opacity = useTransform(progress, [0, 0.05, 0.95, 1], [0, 0.18, 0.18, 0]);
  return (
    <motion.div
      className="absolute"
      style={{ top, left, y, rotate, opacity }}
    >
      <Icon size={size} className="text-primary-glow" strokeWidth={1.1} />
    </motion.div>
  );
};
