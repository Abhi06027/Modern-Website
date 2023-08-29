"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import Link from "next/link";
import MyText from "./myText";
import Developerlogo from "./Developerlogo";
import Abhinavcv from "./abhinavcv";

const Hero = () => {
  return (
    <section className="sm:py-16 xs:py-8 py-10 overflow-hidden sm:pl-16 px-6  ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col lg:flex-row items-center lg:text-left justify-evenly"
      >
        <div>
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[30px] flex-wrap  lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[40px] uppercase overflow-hidden text-white"
          >
            Thinking{" "}
            <span>
              <br className="md:block hidden" /> Different
            </span>
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className=" my-4 font-medium break-words text-base flex-wrap overflow-hidden max-w-2xl lg:max-w-3xl"
          >
            <MyText />
            <div className="my-8 flex space-x-3">
              <Abhinavcv
                name={"Resume"}
                textstyle="bg-[#ff5593] border-2 border-solid border-transparent hover:border-[#ff5593] text-lg font-semibold hover:bg-[#191638] hover:text-white py-2 lg:py-3 px-4 rounded-lg "
              />
              <Link href="mailto:abhinavk67@gmail.com" target={"_blank"}>
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.1, 1)}
          className="w-[90%] md:w-[80%] lg:w-[40%] flex-wrap "
        >
          <Developerlogo />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
