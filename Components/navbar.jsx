"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Link from "next/link";
import Logo from "./logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CustomLinks = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className}relative group`}>
      {title}

      <span
        className={
          "h-[1px] w-0 inline-block  absolute bg-white left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300"
        }
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLinks = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className}relative group my-4 `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      className="sm:px-16 px-6 py-8 relative flex justify-between items-center mx-auto o "
    >
      <div className="lg:hidden  text-white">
        {open ? (
          <div onClick={handleClick}>
            <IoCloseSharp size="35px" color="white" />
          </div>
        ) : (
          <div onClick={handleClick}>
            <RxHamburgerMenu size="35px" color="white" />
          </div>
        )}
      </div>
      {open ? (
        <div
          className="
        absolute left-0 top-[125px]  bg-white   w-full z-40 transition-all duration-500 ease-in md:z-auto rounded-md backdrop-blur-md py-32   text-black flex  flex-col items-center lg:hidden text-[20px]"
        >
          <CustomMobileLinks
            href="/"
            title="Home"
            className=""
            toggle={handleClick}
          />
          <CustomMobileLinks
            href="/about"
            title="About"
            className=""
            toggle={handleClick}
          />
          <CustomMobileLinks
            href="/projects"
            title="Project"
            className=""
            toggle={handleClick}
          />
          <CustomMobileLinks
            href="/articles"
            title="Articles"
            className=""
            toggle={handleClick}
          />
        </div>
      ) : null}
      <div className="2xl:max-w-[1280px] flex items-center ">
        <Logo />
        <h2 className="font-extrabold text-[24px] tracking-[.10em] uppercase line">
          Abhinav
        </h2>
      </div>

      <div className="hidden items-center lg:flex text-[20px] space-x-10 ">
        <CustomLinks href="/" title="Home" className="" />
        <CustomLinks href="/about" title="About" className="" />
        <CustomLinks href="/projects" title="Project" className="" />
        <CustomLinks href="/articles" title="Articles" className="" />
      </div>

      <div>
        <img
          src="/search.svg"
          alt="logo"
          className="w-[25px] h-[25px]  object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
