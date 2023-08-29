"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const ExploreCard = ({ title, imgUrl, id, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      }
        flex items-center justify-center min-w-[170px] h-[700px] transition-[flex]
        duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={200}
        height={200}
        layout="lazy"
        className=" absolute w-full h-full object-cover rounded-[24px] "
      />
      {active !== id ? (
        <h3 className="absolute font-semibold text-[18px] sm:text-[26px] z-0 lg:bottom-28 text-white  lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className=" absolute  bottom-0 rounded-b-[24px] bg-[rgba(0,0,0,0.5)]  object-cover  w-full p-8">
          <h2 className="font-semibold text-[24px] sm:text-[28px] ">{title}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
