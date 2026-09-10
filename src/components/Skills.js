import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { poppinsProjects, dmMono } from "@/styles/projectFonts";
import styles from "@/styles/SkillsSection.module.css";
import { SKILL_GROUPS, FOCUS_SKILL, totalTools } from "@/data/skills";

const DisciplineRow = ({ group, index }) => {
  const n = "0" + (index + 1);
  const count = (group.items.length < 10 ? "0" : "") + group.items.length;
  const rowStyle = group.focus
    ? { background: "var(--accent)", color: "var(--ink)" }
    : undefined;
  const chipBorderColor = group.focus ? "rgba(17,17,17,0.4)" : "rgba(247,243,238,0.35)";
  const metaOpacity = group.focus ? 1 : 0.6;

  return (
    <div className={styles.row} style={rowStyle}>
      <div className={styles.rowLeft}>
        <span className={`${styles.rowIndex} ${dmMono.className}`}>{n}</span>
        <div className="min-w-0">
          <h3 className={styles.rowName}>{group.name}</h3>
          <p
            className={`${styles.rowMeta} ${dmMono.className}`}
            style={{ opacity: metaOpacity }}
          >
            {count} tools · {group.note}
          </p>
        </div>
      </div>
      <ul className={styles.chipList}>
        {group.items.map((skill) => (
          <li
            key={skill}
            className={`${styles.chip} ${dmMono.className}`}
            style={{ borderColor: chipBorderColor }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Cross-dissolve into the previous/next section as it scrolls through.
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);

  const total = totalTools();

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      aria-label="Skills"
      className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#111111] ${poppinsProjects.className}`}
    >
      <div className={styles.frame}>
        <div className={styles.masthead}>
          <div className={styles.mastheadLeft}>
            <p className={`${styles.eyebrow} ${dmMono.className}`}>Issue 01 · Capabilities</p>
            <AnimatedText
              text="Skills"
              className="!text-left !text-[clamp(44px,11cqi,118px)] !leading-[0.9] !tracking-[-0.045em] !font-extrabold !uppercase !text-[#F7F3EE] !mb-0 !mx-0 !p-0 !w-auto"
            />
          </div>
          <div className={styles.mastheadRight}>
            <p className={`${styles.metaLine} ${dmMono.className}`}>
              {total} tools · {"0" + SKILL_GROUPS.length} disciplines
            </p>
            <p className={styles.summary}>
              Full stack mobile and AI engineering — shipped in production, not just tried.
            </p>
          </div>
        </div>

        <div>
          {SKILL_GROUPS.map((group, i) => (
            <DisciplineRow key={group.name} group={group} index={i} />
          ))}
        </div>

        <div className={`${styles.footer} ${dmMono.className}`}>
          <span>
            <span className={styles.footerAccent}>{FOCUS_SKILL}</span> — current focus
          </span>
          <span className={styles.footerRight}>Berlin · Available for work</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
