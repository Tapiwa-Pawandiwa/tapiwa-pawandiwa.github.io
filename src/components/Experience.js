import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import ProjectBanner from '../../public/images/ProjectBanner.png';
import Image from 'next/image';
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center
     justify-between md:w-[80%]">
  
  
    <LiIcon reference={ref}/>
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring, bounce:0.3'}}
      >
        <h3 className="capitalize text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;{" "}
          <a
            href={companyLink}
            className="text-primary capitalize"
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/70 xs:text-sm">
          {time} | {address}{" "}
        </span>
        <p className="font-poppinsLight w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], //we want the start of the target to meet the end of the container and the center should start at the viewport
  });
  return (
    <div className="my-64">
      <motion.h2 className="font-bold text-9xl mb-32 w-full md:text-7xl xs:text-6xl md:mb-16 text-center 
      font-redaction"
      
      animate="animate"
      whileHover={{
          y: -2,
          x: 5,
        }}>
        Experience
      </motion.h2>
  

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full " >
        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[5px] h-full bg-dark origin-top md:w-[3px] md:left-[30px] xs:left-[20px]" />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
        <Details
            position="Lead Engineer"
            company="FoodStorii"
            time="Jan 2026 - Jul 2026"
            address="Berlin, Germany"
            companyLink="/"
            work="
            Helped build and ship the product for FoodStorii, an early stage AI food management startup, for 7 months following my masters, owning the product end to end from technical architecture to the features users touched every day. The goal was to take the product from MVP to a live beta with real users; with that shipped, I've since moved on and am open to new roles and opportunities.
            • Built the React Native (Expo) mobile app, including onboarding, shopping list, inventory, and AI assisted cooking flows.
            • Designed and built the full stack backend: FastAPI and LangGraph services power an AI assistant, with Supabase and PostgreSQL for data and Redis for caching.
            • Designed and implemented agentic AI workflows with guardrails, including tool and skill orchestration and a barcode/vision product ID pipeline via a proxied Anthropic API integration.
            • Led UI/UX design for core screens (onboarding, item editing, shopping list), balancing usability with fast iteration.
            • Owned DevOps: CI/CD pipelines, GitHub based workflows, Render deployment, PostHog analytics, and Sentry error monitoring.
            • Handled database design, security hardening, and debugging across the stack, including a security review covering RLS policies, rate limiting, and PII exposure.
            • Took the app from MVP to a live beta, testing and distributing via TestFlight and EAS to internal test users.
            "
          />
        <Details
            position="Software Engineer Working Student"
            company="Volkswagen SID"
            time="2023 - 2024"
            address="Berlin, Germany"
            companyLink="https://www.volkswagen-group.com/en"
            work="
            Working as a full stack developer in an Agile environment, supporting the development of software tools for the Volkswagen Group. 
            "
          />
              <Details
            position="WordPress Developer"
            company="Self"
            time="2020 - Present"
            address="Remote"
            companyLink="/"
            work="
            Designing and maintaining WordPress websites for clients. Some websites include: 
            https://lokalimglas.de and https://grandeurbarbers.com
            "
          />
          <Details
            position="Software Engineer Intern"
            company="Singular Systems"
            time="July 2019"
            address="Cape Town, South Africa"
            companyLink="https://www.singular.co.za"
            work="
            Worked on a team responsible for developing a new recruitment portal for the company 
            • Designed and Implemented both front-end and backend recruitment portal using C#, Microsoft
            SQL Server and React JS"
          />
          <Details
            position="IT Support"
            company="Rhodes University"
            time="2019 - 2020"
            address="Makhanda, South Africa"
            companyLink="https://www.ru.ac.za"
            work="
            In my IT support role, I provided assistance to students by troubleshooting laptop issues, performing software installations, detecting and cleaning malware, and ensuring data backups. I supported a variety of operating systems, including Mac, Linux, and Windows, to deliver comprehensive technical solutions for a seamless user experienc"
          />
     
       
        </ul>
      </div>
    </div>
  );
};

export default Experience;
