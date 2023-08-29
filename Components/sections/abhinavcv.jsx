"use client";

import Link from "next/link";
import React from "react";

const Abhinavcv = ({ textstyle, name }) => {
  return (
    <div>
      <Link
        className={textstyle}
        href="/Abhinav CV Fronted.pdf"
        target={"_blank"}
        download
      >
        {name}
      </Link>
    </div>
  );
};

export default Abhinavcv;
