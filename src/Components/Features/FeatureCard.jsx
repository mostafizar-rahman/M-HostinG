import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const FeatureCard = ({ id, title, icon }) => {
  if (id == 1) {
  }
  return (
    <div className="pt-9 pb-3 px-8 rounded-md dark:bg-[#1a1b2e] hover:dark:bg-[#212235] duration-700 group">
      <Link to={"/"} className="">
        <div
          className={`w-[70px] h-[70px] rounded-md ${
            id === 1 && "bg-[#26C6DA]"
          } ${
            id === 2 && "bg-[#576e0c]"
          } bg-opacity-10 flex justify-center items-center mb-[30px]`}
        >
          <img src={icon} alt="" className="w-[34px]" />
        </div>
        <div>
          <h5 className="dark:text-white text-xl font-semibold">
            Upgrade <br />
            Management
          </h5>
          <p className="text-sm dark:text-[#9193a8] mt-2">
            It’s hard to believe anyone would want to harm your website, but
            they do.
          </p>
        </div>
        <div className="flex justify-end mt-5">
          <HiOutlineArrowRight className="text-2xl  text-[#9193a8] group-hover:text-[#15CD72] duration-700" />
        </div>
      </Link>
    </div>
  );
};

export default FeatureCard;
