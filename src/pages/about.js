import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>About Me | Tapiwa Pawandiwa</title>
      </Head>
      <TransitionEffect />
      <AboutMe />
      <Skills />
      <main className="flex w-full flex-col item-center justify-center">
        <Layout className="pt-10">
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
