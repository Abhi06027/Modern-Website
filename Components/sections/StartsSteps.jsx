import React from "react";

const StartsSteps = ({ number, text }) => {
  return (
    <div className="flex justify-center items-center flex-row">
      <div className="flex justify-center items-center w-[50px] h-[50px]  lg:w-[70px] lg:h-[70px] bg-[#ff5593]  rounded-full">
        <p className=" font-bold text-[20px]">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text[12px] lg:text-[18px] leading-[22px] lg:leading-[28px]">
        {text}
      </p>
    </div>
  );
};

export default StartsSteps;
