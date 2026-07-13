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

// A pill starts collapsed at its group's center point and is pulled outward
// to its real (readable, non-overlapping) flex position as the group
// scrolls through the viewport — scrubbed directly to scroll position, like
// a starburst, rather than a fixed-duration animation that plays once.
const Skill = ({ name, floatY, dx, dy, progress }) => {
  const burstX = useTransform(progress, [0, 0.8], [dx, 0]);
  const burstY = useTransform(progress, [0, 0.8], [dy, 0]);
  const opacity = useTransform(progress, [0, 0.15, 0.8], [0, 0.5, 1]);
  const scale = useTransform(progress, [0, 0.8], [0.2, 1]);
  const y = useTransform([burstY, floatY], ([b, f]) => b + f);

  return (
    <motion.span
      style={{ x: burstX, y, opacity, scale }}
      whileHover={{ scale: 1.1 }}
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
  const groupRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: groupRef,
    offset: ["start 0.95", "start 0.35"],
  });

  // Approximate each pill's position on a grid so the "burst" pulls it in
  // from a direction radiating away from the group's own center, rather than
  // a flat left/right convergence.
  const cols = Math.max(1, Math.ceil(Math.sqrt(skills.length * 1.8)));
  const rows = Math.ceil(skills.length / cols);
  const centerCol = (cols - 1) / 2;
  const centerRow = (rows - 1) / 2;

  return (
    <div ref={groupRef} className="w-full flex flex-col items-center mb-10 last:mb-0">
      <h3 className="text-primary font-poppins uppercase tracking-wide text-sm mb-4 md:text-xs">
        {label}
      </h3>
      <div className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-2.5 xs:gap-2">
        {skills.map((name, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const dx = (centerCol - col) * 90;
          const dy = (centerRow - row) * 70;
          return (
            <Skill
              key={name}
              name={name}
              floatY={floatYs[i % floatYs.length]}
              dx={dx}
              dy={dy}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
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

        <div className="w-full mx-auto py-12 px-5">
          {skillGroups.map((group) => (
            <SkillGroup key={group.label} {...group} floatYs={floatYs} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
