import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SkillsCursorTrail from "./SkillsCursorTrail";

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Golang", "C#", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React Native", "React JS", "NextJS", "Svelte", "Expo (EAS)", "TestFlight"],
  },
  {
    label: "Backend & AI",
    skills: [
      "FastAPI",
      "LangGraph",
      "Claude API",
      "Agentic AI Orchestration",
      "Explainable AI (XAI)",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Docker", "GitHub Actions (CI/CD)", "Render", "Amplify", "Sentry", "PostHog"],
  },
  {
    label: "Design & Research",
    skills: ["Figma", "UI/UX Design", "User Research"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

// Pills start collapsed at the group's center point and burst outward to
// their real (readable, non-overlapping) flex position — approximating the
// original "explode from center" cloud without bringing back the overlap.
const pill = {
  hidden: (custom) => ({
    opacity: 0,
    scale: 0.15,
    x: custom.dx,
    y: custom.dy,
  }),
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 16, mass: 0.7 },
  },
};

// Each pill is given one of a few float "speeds" (index % 3) that drift it up
// or down slightly as the section scrolls through the viewport, so the whole
// field feels alive without breaking the readable, non-overlapping layout.
const Skill = ({ name, floatY, burst }) => {
  return (
    <motion.span
      variants={pill}
      custom={burst}
      style={{ y: floatY }}
      whileHover={{ scale: 1.06 }}
      className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-light
      text-base py-2.5 px-5
      md:text-sm md:py-2 md:px-4
      xs:text-xs xs:py-1.5 xs:px-3"
    >
      {name}
    </motion.span>
  );
};

const SkillGroup = ({ label, skills, floatYs }) => {
  // Approximate each pill's position on a grid so the "burst" pulls it in
  // from a direction radiating away from the group's own center, rather than
  // a flat left/right convergence.
  const cols = Math.max(1, Math.ceil(Math.sqrt(skills.length * 1.8)));
  const rows = Math.ceil(skills.length / cols);
  const centerCol = (cols - 1) / 2;
  const centerRow = (rows - 1) / 2;

  return (
    <motion.div
      className="w-full flex flex-col items-center mb-10 last:mb-0"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <h3 className="text-primary font-poppins uppercase tracking-wide text-sm mb-4 md:text-xs">
        {label}
      </h3>
      <div className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-2.5 xs:gap-2">
        {skills.map((name, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const burst = {
            dx: (centerCol - col) * 60,
            dy: (centerRow - row) * 46,
          };
          return (
            <Skill
              key={name}
              name={name}
              floatY={floatYs[i % floatYs.length]}
              burst={burst}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const floatSlow = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const floatMed = useTransform(scrollYProgress, [0, 1], [-22, 22]);
  const floatFast = useTransform(scrollYProgress, [0, 1], [26, -26]);
  const floatYs = [floatSlow, floatMed, floatFast];

  // Cross-dissolve into the previous/next section as it scrolls through.
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-screen bg-dark overflow-hidden flex items-center"
    >
      {/* orange glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(235,94,40,0.65) 0%, rgba(235,94,40,0.32) 30%, rgba(235,94,40,0.1) 55%, transparent 75%)",
        }}
      />
      {/* grid lines */}
      <div className="absolute inset-0 bg-grid-dark" />

      <SkillsCursorTrail containerRef={sectionRef} />

      <div className="relative z-10 py-20 md:py-16 w-full">
        <motion.h2
          className="font-bold text-9xl w-full font-redaction text-center text-light md:text-6xl md:mb-10"
          animate="animate"
          whileHover={{
            y: -2,
            x: 5,
          }}
        >
          Skills
        </motion.h2>

        <div className="w-full max-w-4xl mx-auto py-12 px-4">
          {skillGroups.map((group) => (
            <SkillGroup key={group.label} {...group} floatYs={floatYs} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
