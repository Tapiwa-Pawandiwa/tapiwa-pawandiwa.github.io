import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center text-2xl rounded-full bg-dark text-light py-3 px-6 shadow-dark absolute
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:border-solid xs:border-2 
      "
      whileHover={{
        scale: 1.05,
    
      }}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y}}
      transition={{duration: 1.5}}
      
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
    
      <motion.h2 className="font-bold text-9xl mt-20 w-full font-redaction text-center md:text-6xl md:mt-32 md:mb-10"
       animate="animate"
       whileHover={{
           y: -2,
           x: 5,
         }}
      
      >Skills</motion.h2>
      
      <motion.div className="w-full h-screen lg:h-[85vh] sm:h-[65vh] xs:h-[55vh] relative flex items-center justify-center 
      rounded-full bg-circularLight lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm
      
      ">
      
        <Skill name="React Native" x="-25vw" y="-10vw" />
        <Skill name="JavasScript" x="0vw" y="0vw" />
        <Skill name="CSS" x="15vw" y="-28vw" />
        <Skill name="HTML" x="20vw" y="12vw" />
        <Skill name="C#" x="0vw" y="-15vw" />
        <Skill name="React JS" x="26vw" y="1vw" />
        <Skill name="SQL" x="-10vw" y="-28vw" />
        <Skill name="Amplify" x="-20vw" y="15vw" />
        <Skill name="MongoDB" x="10vw" y="25vw" />
        <Skill name="Figma" x="-16vw" y="27vw" />
        <Skill name="Python" x="25vw" y="-10vw" />
        <Skill name="NextJS" x="0vw" y="10vw" />
        <Skill name="SQL" x="-30vw" y="5vw" />

        <Skill name="FastAPI" x="-35vw" y="-20vw" />
        <Skill name="LangGraph" x="35vw" y="-5vw" />
        <Skill name="Claude API" x="-5vw" y="-35vw" />
        <Skill name="Agentic AI Orchestration" x="5vw" y="30vw" />
        <Skill name="PostgreSQL" x="-22vw" y="-5vw" />
        <Skill name="Supabase" x="30vw" y="20vw" />
        <Skill name="Redis" x="-35vw" y="10vw" />
        <Skill name="Docker" x="15vw" y="5vw" />
        <Skill name="TypeScript" x="-10vw" y="5vw" />
        <Skill name="Expo (EAS)" x="20vw" y="-18vw" />
        <Skill name="Svelte" x="-28vw" y="25vw" />
        <Skill name="GitHub Actions (CI/CD)" x="0vw" y="-25vw" />
        <Skill name="Render" x="32vw" y="-25vw" />
        <Skill name="Sentry" x="-15vw" y="15vw" />
        <Skill name="PostHog" x="8vw" y="-10vw" />
        <Skill name="TestFlight" x="-30vw" y="-30vw" />
        <Skill name="UI/UX Design" x="18vw" y="22vw" />
        <Skill name="User Research" x="-8vw" y="18vw" />
        <Skill name="Explainable AI (XAI)" x="25vw" y="-30vw" />

      </motion.div>
    </>
  );
};

export default Skills;
