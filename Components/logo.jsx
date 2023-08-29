"use client";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <img
          src="/abhinavlogo.png"
          alt="logo"
          className="w-[80px] h-[80px] object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
