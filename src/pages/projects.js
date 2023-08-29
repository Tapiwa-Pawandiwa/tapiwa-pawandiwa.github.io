import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import recipe from "../../public/images/projects/recipe.png";
import Diner_Cover from "../../public/images/projects/Diner/DinerHead.jpg";
import uber_eats_clone from "../../public/images/projects/UberEats/uber_eats_clone.png";
import guessing from "../../public/images/projects/guessing.png";
import expense_tracker from "../../public/images/projects/Expense/expense_tracker.png";
import ProjectsImage from "../../public/images/ProjectsImage.png";
import TransitionEffect from "@/components/TransitionEffect";

const projectsData = [
  {
    title: "Diner",
    summary:
      "A React Native Mobile application where hosts can invite guests to have a meal in their home at a cost. Guests have the opportunity to experience authentic home food nearby.  ",
    fullDescription: "",
    img: Diner_Cover,
    type: "Mobile App",
    videoURL: "",
    github: "https://github.com/Tapiwa-Pawandiwa/DinerExpoFood",
    // stack: [JavaScriptImage, ReactNativeImage, AWSImage, GraphQLImage],
  },
  {
    title: "Recipe Lister",
    summary:
      "A simple app that displays recipes from different cuisines and categories",
    fullDescription: "",
    type: "Mobile App",
    img: recipe,
    github: "https://github.com/Tapiwa-Pawandiwa/MealsApp",
    // stack: [JavaScriptImage, ReactNativeImage],
  },
  {
    title: "Uber Eats Clone",
    summary:
      "I developed an Uber Eats Clone using React Native and AWS Amplify",
    fullDescription: "",
    img: uber_eats_clone,
    type: "Mobile App",
    github: "https://github.com/Tapiwa-Pawandiwa/UberEatsUser",
    // stack: [JavaScriptImage, ReactNativeImage, AWSImage, GraphQLImage],
  },
  {
    title: "Number Guessing Game",
    summary: "A simple number guessing game",
    fullDescription: "",
    type: "Mobile App",
    img: guessing,
    github: "https://github.com/Tapiwa-Pawandiwa/RandomGuessingApp",
    // stack: [JavaScriptImage, ReactNativeImage],
  },
  {
    title: "Expense Tracker",
    type: "Mobile App",
    summary: "A simple expense tracker app",
    fullDescription: "",
    img: expense_tracker,
    github: "https://github.com/Tapiwa-Pawandiwa/ExpenseTracker",
    //stack: [JavaScriptImage, ReactNativeImage],
  },
];

const FeaturedProject = ({ type, title, summary, img, github }) => {
  return (
    <>
      <article
        className=" mt-20 flex items-center  p-4 shadow-2xl 
        justify-between rounded-3xl border-double border border-spacing-5 
        relative border-gray lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      bg-light 
        "
      >
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark xs:-right-2 xs:h-[102%] sm:h-[102%] xs:w-full " />
        <Link
          href={github}
          target="_blank"
          className="w-full h-auto cursor-pointer overflow-hidden rounded-lg lg:w-full "
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-poppins text-xl xs:text-base">
            {type}
          </span>
          <Link
            href={github}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold font-mont sm:text-sm ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark sm:text-sm  ">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-primary hover:text-dark sm:px-4 sm:tex-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({ type, title, summary, img, github }) => {
  return (
    <article
      className="mt-20  w-full flex flex-col items-center bg-light p-6 shadow-2xl 
    justify-center rounded-2xl border-solid border border-spacing-5 relative border-gray"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gray md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={github}
        target="_blank"
        className="w-full h-auto cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-poppins text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={github}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold font-mont lg:text-2xl ">
            {title}{" "}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 w-full flex items-center">
          <Link
            href={github}
            target="_blank"
            className=" rounded-lg mr-2 text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Tapiwa&apos;s Portfolio | Projects </title>
        <meta name="projects" content="projects by Tapiwa" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-0">
            <div className="col-span-4 sm:col-span-12 relative">
              <Image
                src={ProjectsImage}
                alt="projects"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col justify-center text-center">
                <AnimatedText
                  type="header"
                  text="Featured Project"
                  className="text-white lg:!text-5xl md:!text-4xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
                />
              </div>
            </div>
            <div className="col-span-8 sm:col-span-12 ">
              <FeaturedProject
                type={projectsData[0].type}
                img={projectsData[0].img}
                title={projectsData[0].title}
                github={projectsData[0].github}
                summary={projectsData[0].summary}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={projectsData[1].type}
                img={projectsData[1].img}
                title={projectsData[1].title}
                github={projectsData[1].github}
                summary={projectsData[1].summary}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={projectsData[2].type}
                img={projectsData[2].img}
                title={projectsData[2].title}
                github={projectsData[2].github}
                summary={projectsData[2].summary}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={projectsData[3].type}
                img={projectsData[3].img}
                title={projectsData[3].title}
                github={projectsData[3].github}
                summary={projectsData[3].summary}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={projectsData[4].type}
                img={projectsData[4].img}
                title={projectsData[4].title}
                github={projectsData[4].github}
                summary={projectsData[4].summary}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
