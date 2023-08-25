import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 md:right-8 md:left-auto md:top-0 md:bottom-auto bottom-4 flex  items-center justify-center overflow-hidden z-40">
     <div className=" w-48 h-auto flex flex-col items-center justify-center relative md:w-24">
        <CircularText className={"fill-dark animate-spin-slow"}/>
        <Link href="mailto:tapiwataps14@gmail.com" className="flex items-center justify-center
         absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark
          text-light text-center shadow-md border
           border-solid border-dark
            w-20 h-20 rounded-full z-10 hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px] ">
           Hire Me
           
        </Link>
     </div>
    </div>
  );
};

export default HireMe;
