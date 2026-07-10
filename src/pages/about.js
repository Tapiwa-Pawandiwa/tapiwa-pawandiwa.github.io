import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profileGIF from "../../public/images/profilecool_second.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="../../public/myfavicon.png"/>
        <title>About Me | Tapiwa Pawandiwa</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col item-center justify-center">
        <Layout className="pt-20">
          <AnimatedText
            text="Bits and Bytes"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            type="header"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 xl:items-center ">
                About Me
              </h2>
              <p className="font-poppinsLight text-xl justify-center">
                I&lsquo;m Tapiwa, an AI engineer and full stack developer based
                in Berlin. I recently completed my MSc in Computer Science
                (distinction) at IU Germany, where my thesis, the BERNA
                Framework, benchmarked explainable AI methods for fetal health
                classification with 17 clinicians.
              </p>
              <p className="my-4 font-poppinsLight text-xl justify-center">
                Today I&lsquo;m the lead engineer at FoodStorii, an early stage
                AI food management startup, where I own the product end to
                end. That means talking to users and shaping the roadmap,
                building the React Native app, building the FastAPI and
                LangGraph backend, and building the agentic AI systems that
                power it. Before that, I spent a year as a software
                engineering working student at Volkswagen Group, working
                across Svelte, TypeScript, and Go in an Agile, TDD driven
                team.
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

            <div className="col-span-4 flex justify-center items-center bg-light xl:col-span-4 md:col-span-8 md:order-1">
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
};

export default about;
