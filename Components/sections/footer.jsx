"use client";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";
import { FooterLinks, socials } from "@/constants";
import Abhinavcv from "./abhinavcv";

import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:p-16 xs:p-8 px-6 py-8 relative "
    >
      <div className="2xl:max-w-[1280px] w-full mx-auto ">
        <div className=" h-[2px] bg-white my-[20px]  lg:my-[15px] opacity-10 " />
        <div className=" flex justify-between  items-center flex-wrap gap-5">
          <h4 className="font-bold md:text-[60px] my-2 text-[40px] ">
            Abhinav Kumar
          </h4>
          <div>
            <Abhinavcv
              name={"Resume"}
              textstyle="bg-[#ff5593] border-2 border-solid border-transparent hover:border-[#ff5593] text-lg font-semibold hover:bg-[#191638] hover:text-white py-2 lg:py-3 px-4 rounded-lg "
            />
          </div>
          <div>
            <div className="flex flex-1 justify-between flex-wrap lg:gap-10 mt-2 gap-8">
              {FooterLinks.map((section) => (
                <div key={section}>
                  <h4 className="text-2xl font-montserrat  leading-normal mb-2 font-bold">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((links) => (
                      <li key={links.name}>
                        <Link
                          href={links.link}
                          className="mt-3 font-montserrat text-base leading-normal cursor-pointer "
                        >
                          {links.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex space-x-5 mt-8">
              {socials.map((social) => (
                <div className="flex justify-center w-10 h-10 bg-[#9e23e5] rounded-full text-black  cursor-pointer items-center">
                  <img
                    src={social.url}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
