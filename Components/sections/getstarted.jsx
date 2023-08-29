"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TitleText, TypingText } from "../customText";
import ExploreCard from "../exploreCard";
import { startingFeatures } from "@/constants";
import StartsSteps from "./StartsSteps";

const Getstarted = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex lg:flex-row flex-col space-x-8"
      >
        <motion.div
          variants={planetVariants("left")}
          className=" flex-1 flex justify-center items-center"
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[50%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", "0.2", "1")}
          className="flex-[0.75] flex justify-center text-center lg:text-left flex-col "
        >
          <TypingText title={"How Metaverus Works"} />
          <TitleText title={<>Get Started just a few click away</>} />
          <div className="mt-[31px] flex flex-col  max-w-[370px] space-y-24 ">
            {startingFeatures.map((feature, index) => (
              <StartsSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Getstarted;
