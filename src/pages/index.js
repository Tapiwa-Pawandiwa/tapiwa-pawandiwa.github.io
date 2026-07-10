import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profileImage from "../../public/images/profile/profile_black.png";
import profileGlitch from "../../public/images/profile/profile_glitch.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import { useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import profileGIF from "../../public/images/profilecool_second.png";


export default function Home() {
  const [showGlitch, setShowGlitch] = useState(false);
  return (
    <>
      <Head>
        <title>Tapiwa Pawandiwa | AI Engineer & Full Stack Developer</title>
        <meta name="description" content="Portfolio website showcasing my work as an AI engineer and full stack developer." />
        <meta property="og:title" content="Tapiwa Pawandiwa | AI Engineer & Full Stack Developer" />
        <meta property="og:description" content="Explore my latest projects, skills, and experience building AI powered products end to end." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="../../public/favicon.ico"/>
      </Head>
      <TransitionEffect />
      <main className="flex bg-white items-center justify-center text-dark w-full min-h-screen ">
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
      </main>
      <TransitionEffect />
      <main className="flex w-full flex-col item-center justify-center ">
        <Layout className="pt-10">
          <AnimatedText
            text="Bits and Bytes"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            type="header"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 items-center ">
                About Me
              </h2>
              <p className="font-poppinsLight text-xl justify-center ">
                I&lsquo;m Tapiwa, an AI engineer and full stack developer based
                in Berlin. I recently completed my MSc in Computer Science
                (distinction) at IU Germany, where my thesis, the BERNA
                Framework, benchmarked explainable AI methods for fetal health
                classification with 17 clinicians.
              </p>
              <p className="my-4 font-poppinsLight text-xl justify-center">
                From January to July 2026, I was the lead engineer at
                FoodStorii, an early stage AI food management startup, where I
                owned the product end to end: talking to users and shaping
                the roadmap, building the React Native app, the FastAPI and
                LangGraph backend, and the agentic AI systems that powered it.
                My goal was to take the product from MVP to a live beta with
                real users, and with that shipped, I&lsquo;m now open to new
                roles and opportunities. Before FoodStorii, I spent a year as
                a software engineering working student at Volkswagen Group,
                working across Svelte, TypeScript, and Go in an Agile, TDD
                driven team.
              </p>
              <p className="my-4 font-poppinsLight text-xl justify-center">
                I&lsquo;m especially drawn to the intersection of AI, product,
                and real world deployment. I want to build systems that are
                not just technically sound but genuinely usable, and I bring
                the same lens to my research interests in applied AI for
                maternal and fetal healthcare.
              </p>
              <p className="my-4 font-poppinsLight text-xl justify-center">
                Outside of engineering, I paint, and I keep close tabs on AI
                research at a conceptual level. It&apos;s a personal interest
                as much as a professional one.
              </p>

              <p className="text-lg mt-8 italic font-poppinsLight bg-text text-center relative">
                <span className="absolute top-0 left-0 transform -translate-x-2/3 -translate-y-1/4 text-5xl text-primary">
                  &ldquo;
                </span>
                Technology empowers people to do what they want to do. It lets
                people be creative. It lets people be productive. It lets people
                learn things they didn&apos;t think they could learn before, and
                so in a sense, it is all about potential.
                <span className="absolute bottom-0 right-0 transform translate-x-2/3 translate-y-1/4 text-5xl text-primary">
                  &rdquo;
                </span>
              </p>
              <h2 className="text-center mt-4">- Steve Ballmer</h2>
            </div>

            <div className="col-span-4 flex justify-center items-center bg-white xl:col-span-4 md:col-span-8 md:order-1">
              <div className=" w-auto relative" />
              <Image
                src={profileGIF}
                alt="Tapiwa"
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
