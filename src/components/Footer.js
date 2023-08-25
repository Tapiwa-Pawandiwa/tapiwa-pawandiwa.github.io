import Layout from "./Layout";
import Link from "next/link";
import React from "react";

const dateCalculator = () => {
  const date = new Date();
  const year = date.getFullYear();
  //get number of days from Feb 20 2017 to today
  const days = Math.floor(
    (date - new Date(2017, 1, 20)) / (1000 * 60 * 60 * 24)
  );

  return days;
};

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dark text-lg justify-center items-center self-center sm:text-base  bg-slate-400">
      <Layout className="py-5 flex items-center justify-center lg: flex-col lg:py-6">
        <span className=" flex flex-col items-center justify-center self-center">
          <div className="text-primary text-2xl font-bold">
        
            {`${dateCalculator()}`}
          </div>
          <p>Days since first &quot;Hello World&quot; </p>
          
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
