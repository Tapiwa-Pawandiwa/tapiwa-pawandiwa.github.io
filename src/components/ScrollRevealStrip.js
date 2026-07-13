import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STRIP_TEXT = "CREATIVE PROBLEM SOLVER. INNOVATIVE. DESIGN. RESEARCHER. AI.";

// Reveals one character at a time, scrubbed directly to scroll position
// (not a fixed-duration animation) — scrolling back up un-reveals it too.
const Char = ({ children, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [14, 0]);
  return (
    <motion.span style={{ opacity, y, display: "inline-block" }}>
      {children}
    </motion.span>
  );
};

const ScrollRevealStrip = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = STRIP_TEXT.split(" ");
  const totalChars = STRIP_TEXT.replace(/ /g, "").length;
  let charCursor = 0;

  return (
    <div ref={ref} className="w-full flex justify-center">
      {/* Always allowed to wrap and center — the full sentence at this font
          size is wider than most viewports, not just phones, so betting on
          a single-line width at any one breakpoint just moves the overflow
          around. Wrapping is the only width-proof fix. */}
      <p className="whitespace-normal text-center text-light font-bold text-5xl lg:text-4xl md:text-2xl sm:text-base xs:text-sm tracking-wide px-8">
        {words.map((word, wi) => (
          <span key={wi} className="inline-block mr-5 md:mr-3 sm:mr-1.5 xs:mr-1">
            {word.split("").map((ch, ci) => {
              const i = charCursor++;
              const start = (i / totalChars) * 0.85;
              const end = start + 1.2 / totalChars;
              return (
                <Char key={ci} progress={scrollYProgress} start={start} end={end}>
                  {ch}
                </Char>
              );
            })}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ScrollRevealStrip;
