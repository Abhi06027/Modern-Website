"use client";

import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "@/utils/motion";
export const TypingText = ({ title, textStyle }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-white ${textStyle}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyle }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[30px] font-bold md:text-[64px] text-[40px] ${textStyle} `}
    >
      {title}
    </motion.h2>
  );
};
