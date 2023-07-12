import React from "react";
import SubNav from "../Shared/SubNav/SubNav";
import { Link } from "react-router-dom";

const BannerTwo = ({ herobg1, title, subTitle, content, id }) => {
  let imageStyle;
  if (id === 1) {
    imageStyle = `-bottom-[0px] w-[420px] right-[12vw]`;
  } else if (id === 2) {
    imageStyle = `-bottom-[50px] w-[800px] left-1/2`;
  }
  else if(id === 3){
    imageStyle = `-bottom-[30px] w-[300px] left-[60%]`
  }
  return (
    <div className="max-w-[1400px] mx-auto lg:px-14 px-5 pt-[30px] pb-[50px] relative overflow-hidden">
      {/* ------------Sub Navigator */}
      <div className="mb-[120px] ">
        <SubNav />
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between">
        {/* ----------Left side */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-[17px] font-medium mb-[10px] text-[#0b0c1b]">
            {subTitle}
          </p>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold leading-[1.1] mb-[30px] text-[#0b0c1b]">
            {title}
          </h1>
          <p className="mb-11 leading-[1.7]">{content}</p>

          <Link
            to={""}
            className="bg-[#15CD72] text-white lg:text-[15px] text-sm outline-none lg:h-[54px] h-[46px] rounded-sm inline-flex justify-center items-center lg:px-[36px] px-[26px] tracking-tighter[.8px] font-medium"
          >
            Choose a Plan
          </Link>
        </div>
        {/* -----------Right Side */}
        
      </div>
      <div className={` hidden lg:block absolute  ${imageStyle}`}>
          <img
            src={herobg1}
            alt="hero bg"
            className={`  w-full `}
          />
        </div>
    </div>
  );
};

export default BannerTwo;
