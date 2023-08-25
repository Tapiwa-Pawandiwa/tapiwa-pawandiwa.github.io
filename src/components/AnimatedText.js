import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const redaction = localFont({
  src: "../../public/fonts/Redaction50-Regular.otf",
});
const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "", type }) => {
  const fontMapping = {
    poppins: "font-poppins",
    redaction: "font-redaction",
  };

  const words = text.split(" ");

  return (
    <div className="w-full mx-auto py-2 flex items-center text-center bg-textBackground sm:py-0 overflow-hidden">
      <motion.h1
        className={` inline-block w-full bg-gradient-tor from-black to-primary text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
        whileHover={{
          y: -2,
          x: 5,
        }}
      >
        {words.map((word, wordIndex) => (
          <motion.span key={word + "-" + wordIndex} className="inline-block">
            {word.split("").map((character, characterIndex) => (
              <span
                key={character + "-" + characterIndex}
                className={`${
                  characterIndex % 2 === 0 ? "font-poppins" : "font-redaction"
                } `}
              >
                {character}
              </span>
            ))}
            &nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
