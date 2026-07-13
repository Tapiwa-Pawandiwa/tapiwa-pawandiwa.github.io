import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profileImage from "../../public/images/profile/profile_black.png";
import profileGlitch from "../../public/images/profile/profile_glitch.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import { useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CursorGlitchEffect from "@/components/CursorGlitchEffect";
import FloatingStickers from "@/components/FloatingStickers";
import ScrollRevealStrip from "@/components/ScrollRevealStrip";
import AboutMe from "@/components/AboutMe";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function Home() {
  const [showGlitch, setShowGlitch] = useState(false);

  // Each major section fades out as it scrolls up and out of the viewport,
  // and fades in as the next one scrolls up into it, so the transition reads
  // as a soft cross-dissolve blend rather than a hard cut between sections.
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);

  const quoteRef = useRef(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"],
  });
  const quoteOpacity = useTransform(quoteProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const closingRef = useRef(null);
  const { scrollYProgress: closingProgress } = useScroll({
    target: closingRef,
    offset: ["start end", "start start"],
  });
  const closingOpacity = useTransform(closingProgress, [0, 1], [0, 1]);

  return (
    <>
      <Head>
        <title>Tapiwa Pawandiwa | AI Engineer & Full Stack Developer</title>
        <meta name="description" content="Portfolio website showcasing my work as an AI engineer and full stack developer." />
        <meta property="og:title" content="Tapiwa Pawandiwa | AI Engineer & Full Stack Developer" />
        <meta property="og:description" content="Explore my latest projects, skills, and experience building AI powered products end to end." />
        <meta property="og:type" content="website" />
      </Head>
      <CursorGlitchEffect />
      <TransitionEffect />
      <motion.main
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative flex bg-white items-center justify-center text-dark w-full min-h-screen overflow-hidden"
      >
        <FloatingStickers />
        <Layout className="pt-0 md:p-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full md:flex-col md:flex xl:flex-col">
            <div
        className="relative flex flex-col mt-10 mb-10 sm:w-full md:!inline-block mx-auto"
        onMouseEnter={() => setShowGlitch(true)}
              onMouseLeave={() => setShowGlitch(false)}
            >
              <Image
                src={profileImage}
                alt="Tapiwa Profile"
                className="h-auto self-center lg:w-[80%] md:w-[60%] sm:w-[65%] sm:mx-auto sm:mb-2 sm:mt-10"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
             {showGlitch && (
                <div 
                className="absolute inset-0 overflow-hidden flex flex-col sm:mx-auto"
                >
                  <Image
                    src={profileGlitch}
                    alt="Profile Glitch"
                    className="lg:w-[80%] h-full self-center  md:w-[60%] sm:w-[65%] object-cover transform scale-60 sm:!justify-center lg:!px:5 "
                  />
                </div>
              )}
            </div>
            <div className="w-1/2 flex flex-col sm:items-center sm:self-center  md:i!tems-center md:self-center lg:w-full lg:text-center">
              <AnimatedText
                text="TAPIWA PAWANDIWA"
                className="!text-10xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-4xl"
                type="heaer"
              />
              <AnimatedText
                text="AI ENGINEER & FULL STACK PRODUCT BUILDER"
                className="!text-2xl !text-left md:!text-center lg:!text-center sm:!text-center text-orange-700 "
                type="redaction"
              />
              <p className="my-4 font-poppinsLight md:text-lg sm:text-lg bg-text xl:text-2xl">
                I build and ship AI powered products end to end, from agentic
                backends and mobile apps to the UX that makes them usable. MSc
                Computer Science graduate (distinction) who most recently led
                engineering at an early stage AI startup through to a shipped
                beta, with a research background in explainable AI for
                healthcare. Now open to new roles and opportunities.
              </p>

              <div className="flex items-center mt-2 sm:!justify-start xl:!items-center xl:!justify-center  md:!items-center md:!justify-center">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2
               px-6  rounded text-lg sm:!justify-center md:p-2 md:px-4 md:text-base sm:!self-center hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  <span className="flex-grow">CV</span>
                </Link>
                <Link
                  href="mailto: tapiwataps14@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-2xl md:text-base rounded p-3 capitalize text-dark underline hover:bg-primary"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </motion.main>
      <TransitionEffect />
      <AboutMe />

      <motion.section
        ref={quoteRef}
        style={{ opacity: quoteOpacity }}
        className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-screen bg-dark flex flex-col items-center justify-center overflow-hidden"
      >
        <ScrollRevealStrip />
      </motion.section>

      <Skills />

      <motion.main
        ref={closingRef}
        style={{ opacity: closingOpacity }}
        className="flex w-full flex-col item-center justify-center "
      >
        <Layout className="pt-10">
          <Experience />
          <Education />
        </Layout>
      </motion.main>
    </>
  );
}
