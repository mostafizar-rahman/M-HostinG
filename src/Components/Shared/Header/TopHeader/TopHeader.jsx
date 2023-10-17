import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbSettingsStar } from "react-icons/tb";
import {
  AiFillSetting,
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const TopHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-[15px] ">
        <div className="flex items-center space-x-2">
          <button
            className="block xl:hidden"
            onClick={() => setToggleMenu(true)}
          >
            <AiOutlineMenu className="dark:text-white text-3xl" />
          </button>
          <Link className="font-bold dark:text-white">HostCity</Link>
        </div>
        <div className="flex items-center space-x-5">
          <div className="lg:flex items-center space-x-2 hidden ">
            <TbSettingsStar className="dark:text-slate-100/80 text-3xl" />
            <small className="dark:text-slate-100/80">
              Shared Control Panel
            </small>
          </div>
          <div className="lg:flex items-center space-x-2 hidden">
            <AiFillSetting className="dark:text-slate-100/80 text-3xl" />
            <small className="dark:text-slate-100/80">VPS Control Panel</small>
          </div>
          <Link className="w-[130px] h-[42px] rounded-full md:flex justify-center items-center hidden bg-[#0060FE] hover:bg-[#004ac2] duration-700 text-white">
            FREE TRIAL
          </Link>
          <Link
            to={"/login"}
            className="w-[110px] h-[42px] rounded-full md:flex justify-center items-center hidden border border-[#4d4e5b] dark:bg-[#1a1b2e] hover:border-slate-200/70 duration-700 dark:text-white"
          >
            Login
          </Link>
          {/* ----------  */}
          <div className="flex items-center space-x-5 md:hidden">
            <Link>
              <AiOutlineQuestionCircle className="dark:text-white text-3xl " />
            </Link>
            <Link to={"/login"}>
              <AiOutlineUser className="dark:text-white text-3xl " />
            </Link>
          </div>
        </div>
      </div>
      {/* -------------- Nav for mobile or tablet */}
      <nav
        className={`block xl:hidden fixed top-0 z-50 ${
          toggleMenu ? "left-0" : "-left-full"
        } dark:bg-[#1a1b2e] bg-white max-w-[390px] w-full h-full py-[60px]  duration-1000`}
      >
        <ul className="">
          <li
            className="absolute top-[20px] right-[20px]"
            onClick={() => setToggleMenu(false)}
          >
            <FaTimes className="dark:text-white text-lg cursor-pointer" />
          </li>
          <li className="px-5 py-[10px]">
            <Link className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700">
              Home
            </Link>
          </li>
          <li className="px-5 py-[10px]">
            <Link
              className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700"
              to={"/VPS-Hosting-Servers"}
            >
              VPS Hosting Servers
            </Link>
          </li>
          <li className="px-5 py-[10px]">
            <Link
              className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700"
              to={"/Shared-Hosting-Services"}
            >
              Shared Hosting Services
            </Link>
          </li>
          <li className="px-5 py-[10px]">
            <Link
              className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700"
              to={"/Dedicated-Hosting-Servers"}
            >
              Dedicated Hosting Servers
            </Link>
          </li>
          <li className="px-5 py-[10px]">
            <Link
              className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700"
              to={"/domains"}
            >
              Domains
            </Link>
          </li>
          <li className="px-5 py-[10px]">
            <Link
              className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
          <li className="px-5 py-[10px]">
            <Link
              className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700"
              to={"/about"}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopHeader;
