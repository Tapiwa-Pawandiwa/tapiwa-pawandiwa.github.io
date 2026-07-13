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
import ShareWhere from "../../public/images/projects/ShareWhere/ShareWhere.png";
import foodstorii_add_item from "../../public/images/projects/FoodStorii/add-item-flow.png";
import foodstorii_item_edit from "../../public/images/projects/FoodStorii/item-edit-fill-level.png";
import foodstorii_dashboard from "../../public/images/projects/FoodStorii/kitchen-dashboard.png";
import foodstorii_recipes from "../../public/images/projects/FoodStorii/recipe-discovery.png";

// 🔹 Featured project (no public repo — shown via product screenshots instead)
const featuredProject = {
  title: "FoodStorii",
  type: "AI Powered Product · React Native · Full Stack · Co-Founder",
  summary:
    "An AI powered kitchen management app I co-founded and built as lead engineer. I designed and built the core experience: an AI photo scanning flow that lets users add items by snapping a photo of a receipt, fridge, or ingredient, alongside barcode scanning and manual entry, and a fill level tracker so users can log roughly how much of an item is left rather than just yes or no.",
  extendedSummary:
    "I designed the UI end to end, from the kitchen dashboard (pantry, fridge, and freezer at a glance) to the item editing screens, and built the conversational AI assistant, Tina, that recommends recipes based on what is actually in the user's kitchen. On the backend, I built the FastAPI and LangGraph services behind the AI features, with Supabase for data and Redis for caching, plus rate limiting and row level security. I also built the CI/CD pipeline and EAS distribution that took the app from MVP to a live TestFlight beta with real test users.",
  stack:
    "React Native, Expo, FastAPI, LangGraph, Anthropic Claude API, Supabase, PostgreSQL, Redis, Sentry, PostHog",
  screenshots: [
    { src: foodstorii_add_item, alt: "FoodStorii AI, barcode, and manual add-item flow" },
    { src: foodstorii_item_edit, alt: "FoodStorii item editing screen with fill level tracker" },
    { src: foodstorii_dashboard, alt: "FoodStorii kitchen dashboard showing pantry, fridge, and freezer" },
    { src: foodstorii_recipes, alt: "FoodStorii recipe discovery screen with Tina" },
  ],
};

const projectsData = [
  {
    title: "ShareWhere",
    type: "Full Stack Mobile Donations Platform · React Native · Beta",
    summary:
      "A hyper local, item based donations platform connecting people who have things to give with people nearby who need them, built around a 24 hour commitment timer to keep listings moving. I replaced an early cron based polling architecture with a fully event driven system using Supabase database triggers and Edge Functions, and implemented dual portal access with row level security and real time status synchronisation.",
    stack:
      "React Native, Expo, Supabase (PostgreSQL, RLS, Edge Functions, Triggers), React Query, TypeScript",
    img: ShareWhere,
    github: "https://github.com/Tapiwa-Pawandiwa/Sharewear",
    videoURL: "https://d1ilajauo306z1.cloudfront.net/ShareWhere_trimmed.mp4",
  },
  {
    title: "Diner",
    type: "Full Stack Mobile Marketplace · React Native · Beta",
    summary:
      "A marketplace app connecting travellers with local hosts offering home cooked meals, featuring location based discovery, multi basket booking, authentication flows, favourites, and device calendar integration. I managed complex global state across four React Context providers and wrote end to end and unit tests with Jest.",
    stack:
      "React Native, Expo, AWS Amplify (DynamoDB, GraphQL, S3, Cognito), TypeScript, React Query, Node.js",
    img: Diner_Cover,
    github: "https://github.com/Tapiwa-Pawandiwa/DinerExpoFood",
  },
  {
    title: "BERNA Framework",
    type: "Clinical AI · Explainable AI · Research · Thesis awarded Distinction",
    summary:
      "My Master's thesis: a systematic benchmarking framework evaluating the stability and robustness of post hoc explainable AI methods (SHAP, counterfactuals, prototypes, uncertainty estimation) applied to machine learning models for fetal health classification. I validated the framework with 17 clinical practitioners and applied statistical significance testing across perturbation conditions.",
    highlight:
      "Key finding: the choice of XAI method is a stronger determinant of robustness than the choice of model class, and uncertainty estimation held up far better than popular methods like SHAP under real world noise.",
    stack: "Python, PyTorch, Scikit-learn, SHAP · Dataset: UCI CTG",
  },
];

const earlierProjectsData = [
  {
    title: "Recipe Lister",
    summary:
      "A simple app that displays recipes from different cuisines and categories",
    img: recipe,
    github: "https://github.com/Tapiwa-Pawandiwa/MealsApp",
  },
  {
    title: "Uber Eats Clone",
    summary:
      "I developed an Uber Eats Clone using React Native and AWS Amplify",
    img: uber_eats_clone,
    github: "https://github.com/Tapiwa-Pawandiwa/UberEatsUser",
  },
  {
    title: "Number Guessing Game",
    summary: "A simple number guessing game",
    img: guessing,
    github: "https://github.com/Tapiwa-Pawandiwa/RandomGuessingApp",
  },
  {
    title: "Expense Tracker",
    summary: "A simple expense tracker app",
    img: expense_tracker,
    github: "https://github.com/Tapiwa-Pawandiwa/ExpenseTracker",
  },
];

const FeaturedProject = ({
  type,
  title,
  summary,
  extendedSummary,
  stack,
  screenshots,
  img,
  github,
  videoURL,
}) => {
  return (
    <article
      className=" mt-30 flex items-center  p-4
        justify-between rounded-3xl
        relative lg:flex-col lg:p-8
      bg-white
        "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark xs:-right-2 xs:h-[102%] sm:h-[102%] xs:w-full " />

      {/* Media: screenshot grid (no repo), video, or single image, in that order of preference */}
      {screenshots && screenshots.length > 0 ? (
        <div className="w-[45%] mr-10 grid grid-cols-2 gap-3 rounded-lg overflow-hidden lg:w-full lg:mr-0 lg:mb-6">
          {screenshots.map(({ src, alt }, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg">
              <Image src={src} alt={alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      ) : videoURL ? (
        <div className="w-[45%] md:w-[70%] mr-10 rounded-lg overflow-hidden shadow-lg mb-4">
          <video className="w-full rounded-lg" controls autoPlay loop muted>
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : img ? (
        <Link
          href={github}
          target="_blank"
          className="w-[45%] mr-10 h-auto cursor-pointer overflow-hidden rounded-lg lg:w-full lg:mr-0"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
      ) : null}

      <div className="w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-poppins text-xl xs:text-base">
          {type}
        </span>
        {github ? (
          <Link
            href={github}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold font-mont sm:text-sm ">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-4xl font-bold font-mont sm:text-sm ">
            {title}
          </h2>
        )}
        <p className="my-2 font-medium text-dark sm:text-sm  ">{summary}</p>
        {extendedSummary && (
          <p className="my-2 font-medium text-dark sm:text-sm">
            {extendedSummary}
          </p>
        )}
        {stack && (
          <p className="my-2 text-sm text-dark/60 font-poppinsLight">
            Stack: {stack}
          </p>
        )}
        {github && (
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
        )}
      </div>
    </article>
  );
};

const Project = ({
  type,
  title,
  summary,
  stack,
  highlight,
  img,
  github,
  videoURL,
}) => {
  return (
    <article
      className="mt-20  w-full flex flex-col items-center bg-white p-6
    justify-center rounded-2xl relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-white md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

      {videoURL ? (
        <div className="w-full rounded-lg overflow-hidden shadow-lg mb-4">
          <video className="w-full rounded-lg" controls loop muted>
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : img ? (
        <Link
          href={github}
          target="_blank"
          className="w-full h-auto cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
      ) : null}

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-poppins text-xl lg:text-lg md:text-base">
          {type}
        </span>
        {github ? (
          <Link
            href={github}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-2xl font-bold font-mont lg:text-2xl ">
              {title}{" "}
            </h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-2xl font-bold font-mont lg:text-2xl ">
            {title}
          </h2>
        )}
        <p className="my-2 font-medium text-dark ">{summary}</p>
        {highlight && (
          <p className="my-2 p-3 rounded-lg bg-primary/10 border-l-4 border-primary font-medium text-dark text-sm">
            {highlight}
          </p>
        )}
        {stack && (
          <p className="my-2 text-sm text-dark/60 font-poppinsLight">
            Stack: {stack}
          </p>
        )}
        {github && (
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
        )}
      </div>
    </article>
  );
};

const EarlierProject = ({ title, summary, img, github }) => {
  return (
    <article className="w-full flex items-center gap-4 bg-white/60 p-4 rounded-xl">
      <Link
        href={github}
        target="_blank"
        className="w-20 h-20 shrink-0 overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-full object-cover" />
      </Link>
      <div className="flex flex-col items-start min-w-0">
        <Link href={github} target="_blank" className="hover:underline underline-offset-2">
          <h3 className="text-base font-semibold font-mont text-dark/80">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-dark/50 font-poppinsLight truncate">
          {summary}
        </p>
      </div>
      <Link href={github} target="_blank" className="ml-auto w-6 shrink-0 opacity-60">
        <GithubIcon />
      </Link>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Tapiwa&apos;s Portfolio | Projects</title>
        <meta name="projects" content="projects by Tapiwa" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 mt-20 flex flex-col items-center justify-center">
  <Layout className="pt-30">

    {/* 🔹 Main Title */}
    <AnimatedText
      text="Projects"
      className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
    />

    {/* 🔹 Centered Projects Image for Small Screens / Left for Large */}


    {/* 🔹 Featured Project Title */}
    <div className="w-full flex justify-center text-center mb-8">
    <div className="w-full flex sm:justify-center lg:justify-start mb-8">
      <div className="w-[90%] sm:w-[70%] lg:w-[40%] max-w-[500px]">
        <Image src={ProjectsImage} alt="projects" className="w-full h-auto" />
      </div>
    </div>
      <AnimatedText
        type="header"
        text="Featured Project"
        className="lg:!text-5xl md:!text-4xl sm:mb-8 sm:!text-6xl xs:!text-4xl text-orange-500"
      />
    </div>

    {/* 🔹 Featured Project */}
    <div className="w-full">
      <FeaturedProject {...featuredProject} />
    </div>

    {/* 🔹 Regular Projects */}
    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-0 mt-12">
      {projectsData.map((project, index) => (
        <div key={index} className="col-span-6 sm:col-span-12">
          <Project {...project} />
        </div>
      ))}
    </div>

    {/* 🔹 Earlier Projects (de-emphasized) */}
    <div className="w-full mt-32">
      <h2 className="text-2xl font-bold font-mont text-dark/50 mb-8 text-center">
        Earlier Projects
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
        {earlierProjectsData.map((project, index) => (
          <EarlierProject key={index} {...project} />
        ))}
      </div>
    </div>

  </Layout>
</main>
    </>
  );
};

export default projects;
