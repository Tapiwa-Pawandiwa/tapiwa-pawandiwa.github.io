import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { LinkedInIcon, TwitterIcon, GithubIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  //as path shows us the url of where the user is
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  //as path shows us the url of where the user is
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light  my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-10 text-3xl z-10 lg:px-16 md:px-12 sm:px-8 font-poppinsLight relative flex items-center justify-between">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-1 w-10 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-1 w-10 my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-1 w-10 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* DESKTOP */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://www.linkedin.com/in/tapiwa-pawandiwa"
            target={"_blank"}
            whileHover={{
              y: -3,
            }}
            whileTap={{ scale: 1 }}
            className="w-10 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Tapiwa-Pawandiwa"
            target={"_blank"}
            whileHover={{
              y: -3,
            }}
            whileTap={{ scale: 1 }}
            className="w-10 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/tapsydoodle"
            target={"_blank"}
            whileHover={{
              y: -3,
            }}
            whileTap={{ scale: 1 }}
            className="w-10 mx-3"
          >
            <TwitterIcon />
          </motion.a>
        </nav>
      </div>

      {/* MOBILE */}
      {isOpen ? (
        <motion.div
        initial={{scale:0, opacity: 0, x: "-50%", y: "-50%"}}
        animate={{scale:1,opacity:1}}
        className="min-w-[70vw] flex flex-col fixed justify-between  z-30 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
bg-gray/90  text-light backdrop-blur-sm rounded-lg py-32
"
        >
          <nav className="flex items-center flex-col justify-center mb-2 ">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2 ">
            <motion.a
              href="https://www.linkedin.com/in/tapiwa-pawandiwa"
              target={"_blank"}
              whileHover={{
                y: -3,
              }}
              whileTap={{ scale: 1 }}
              className="w-10 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Tapiwa-Pawandiwa"
              target={"_blank"}
              whileHover={{
                y: -3,
              }}
              whileTap={{ scale: 1 }}
              className="w-10 mx-3 sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/tapsydoodle"
              target={"_blank"}
              whileHover={{
                y: -3,
              }}
              whileTap={{ scale: 1 }}
              className="w-10 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
