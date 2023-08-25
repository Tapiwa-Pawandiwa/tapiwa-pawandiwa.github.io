import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time,link ,place, info , address}) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between  md:w-[80%]">
  
  
    <LiIcon reference={ref}/>
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring, bounce:0.3'}}
      >
        <h3 className="capitalize text-3xl sm:text-xl xs:text-lg">
          {type} &nbsp;{" "}
          <a
            href={link}
            className="text-primary capitalize"
            target={"_blank"}
          >
            @{place}
          </a>
        </h3>
        <span className="capitalize text-dark/70 sm:text-xl xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-poppinsLight w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], //we want the start of the target to meet the end of the container and the center should start at the viewport
  });
  return (
    <div className="my-64">
      <motion.h2 className="font-bold text-9xl mb-32 w-full text-center font-redaction md:text-7xl xs:text-6xl md:mb-16 "
       animate="animate"
       whileHover={{
           y: -2,
           x: 5,
         }}
      >
       Education
      </motion.h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[5px] h-full bg-dark origin-top md:w-[3px] md:left-[30px] xs:left-[20px]" />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
            <Details
            type="Masters in Computer Science"
            place="IU"
            time="2021-Present"
            link= 'https://www.iu.de'
            address="Berlin, Germany"
            info="I am currently completing my Masters in Computer Science at IU. I have taken a keen interest in Blockchain and Data Science. I also have some projects which you can find in the projects section "
          />

           <Details
            type="Honors in Information Systems"
            place="Rhodes University"
            time="2019 - 2020"
            link= 'https://www.ru.ac.za'
            address="Makhanda, South Africa"
            info="Completed my Bachelors degree majoring in Information Systems and Computer Sciences. My minors were Economics, Electronics , Mathematics, Geology and Earth Sciences. 
            I was also a member of a computer science society called Sudo-Soc where we would build and maintain computer labs in the local community. "
          />
           <Details
            type="Data Science Certificate"
            place="University of Cape Town"
            time="2019 - 2020"
            link= 'https://uct.ac.za'
            address="Cape Town, South Africa"
            info="Completed a certificate in Data Science studies where we learnt how to build machine learning models to solve problems in various industries. My favorite project was building a model that could help investors decide which real estate areas will be most profitable to invest in. "
          />
       
          <Details
            type="Bachelor of Science in Computer Science"
            place="Rhodes University"
            time="2017 - 2019"
            link= 'https://www.ru.ac.za'
            address="Makhanda, South Africa"
            info="Completed my Bachelors degree majoring in Information Systems and Computer Sciences. My minors were Economics, Electronics , Mathematics, Geology and Earth Sciences. 
            I was also a member of a computer science society called Sudo-Soc where we would build and maintain computer labs in the local community. "
          />
         
        </ul>
      </div>
    </div>
  );
};

export default Education;
