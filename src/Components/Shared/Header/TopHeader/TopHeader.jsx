import React from "react";
import { Link } from "react-router-dom";
import { TbSettingsStar } from "react-icons/tb";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
const TopHeader = () => {
  return (
    <div className="flex items-center justify-between py-4 ">
      <div className="flex items-center space-x-2">
        <button className="block lg:hidden">
            <AiOutlineMenu className="dark:text-white text-3xl"/>
        </button>
        <Link className="font-bold dark:text-white">M-HostinG</Link>
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-2">
          <TbSettingsStar className="dark:text-slate-100/80 text-3xl" />
          <small className="dark:text-slate-100/80">Shared Control Panel</small>
        </div>
        <div className="flex items-center space-x-2">
          <AiFillSetting className="dark:text-slate-100/80 text-3xl" />
          <small className="dark:text-slate-100/80">VPS Control Panel</small>
        </div>
        <button className="w-[130px] h-[42px] rounded-full bg-[#0060FE] hover:bg-[#004ac2] duration-700 text-white">
          FREE TRIAL
        </button>
        <button className="w-[110px] h-[42px] rounded-full border border-[#4d4e5b] dark:bg-[#1a1b2e] hover:border-slate-200/70 duration-700 dark:text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
