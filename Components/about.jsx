"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from "./customText";

const About = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col "
      >
        <TypingText title="About Me" textStyle="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", "0.2", "1")}
          className="mt-5 text-normal max-w-4xl text-lg text-white text-center"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white"> VR </span>
          devices you can easily explore the metaverse world you want, turn your
          dreams into reality. Let's{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", "0.3", "1")}
          src="/arrow-down.svg"
          alt="arrow down"
          className=" w-[18px] h-[28px] object-contain mt-[28px]"
        ></motion.img>
      </motion.div>
    </section>
  );
};

export default About;
