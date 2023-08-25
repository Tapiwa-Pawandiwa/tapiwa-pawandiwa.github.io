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
      
      <motion.div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center 
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
      </motion.div>
    </>
  );
};

export default Skills;
