import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import computersImg from "../../public/images/profile/computers_tapiwa.png";
import suitImg from "../../public/images/profile/suit_portrait.jpg";
import coolImg from "../../public/images/profile/profile_cool.png";

const Emph = ({ children }) => (
  <span className="font-bold text-[#111111] underline underline-offset-[6px] decoration-2">
    {children}
  </span>
);

const bodyTextClass =
  "font-inter text-[#a9b3bd] font-medium text-[40px] lg:text-[32px] md:text-[26px] sm:text-[22px] xs:text-[19px] leading-[1.32] tracking-[-0.01em]";

const AboutBlock = ({ image, alt, reverse, children }) => (
  <motion.div
    className={`flex items-center gap-20 md:gap-10 xs:gap-8 md:flex-col md:items-start ${
      reverse ? "flex-row-reverse" : "flex-row"
    }`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.7 }}
  >
    <div className="w-[42%] md:w-full shrink-0">
      <Image src={image} alt={alt} className="w-full h-auto" />
    </div>
    <div className="w-[58%] md:w-full">
      <p className={bodyTextClass}>{children}</p>
    </div>
  </motion.div>
);

const AboutMe = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-4 py-32 md:py-20">
        <div className="mb-[120px] md:mb-20">
          <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#9a9a9a] mb-4">
            About Me
          </p>
          <p className="text-[15px] font-semibold text-black max-w-[520px]">
            Tapiwa &mdash; AI engineer and full-stack developer, based in
            Berlin.
          </p>
        </div>

        <div className="flex flex-col gap-[120px] md:gap-20 xs:gap-16">
          <AboutBlock image={computersImg} alt="Tapiwa graduating, surrounded by laptops" reverse>
            I&apos;m an <Emph>AI engineer and full-stack developer</Emph> who
            builds at the intersection of LLMs, agents, and real product —
            and likes sitting close to the problem, talking to the people who
            have it. MSc Computer Science, distinction,{" "}
            <Emph>IU Germany</Emph>, where my thesis, the{" "}
            <Emph>BERNA Framework</Emph>, benchmarked{" "}
            <Emph>explainable AI (XAI)</Emph> methods for fetal health
            classification with 17 clinicians.
          </AboutBlock>

          <AboutBlock image={suitImg} alt="Tapiwa portrait in a suit">
            From January to July 2026, I was <Emph>lead engineer</Emph> at{" "}
            <Emph>FoodStorii</Emph>, an early-stage AI food management
            startup — talking directly to users, then shipping what they
            needed: a <Emph>React Native</Emph> app, a{" "}
            <Emph>Python/FastAPI</Emph> backend, and a <Emph>LangGraph</Emph>
            -based AI agent handling reasoning and conversation. Took it from
            MVP to a live beta with real users. Before that, a year as a{" "}
            <Emph>software engineer</Emph> at <Emph>Volkswagen Group</Emph>,
            shipping in Svelte, TypeScript, and Go on an Agile, TDD-driven
            team.
          </AboutBlock>

          <AboutBlock image={coolImg} alt="Tapiwa at his desk with a laptop and rubber duck" reverse>
            I pick up new stacks fast — languages, frameworks, AI tooling,
            whatever the problem needs. I design in <Emph>Figma</Emph>, code
            full-stack, and bring a builder&apos;s and an artist&apos;s eye to
            the same work. I like research, I like people, and I like
            creating things where the impact is real and visible.
          </AboutBlock>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
