import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import {  AiOutlineMenu } from "react-icons/ai";

const BottomHeader = () => {
  return (
    <div className=" flex justify-between py-[15px]">
      <div className="flex items-center space-x-2 dark:text-white">
        <FiPhoneCall className="dark:text-slate-100/80 text-sm" />
        <p className="text-sm">01555</p>
      </div>
      <nav className="flex">
        <ul className="xl:flex space-x-3 hidden ">
          <li>
            <Link className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700" to={'/'}>Home</Link>
          </li>
          <li>
            <Link className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700" to={"/VPS-Hosting-Servers"}>VPS Hosting Servers</Link>
          </li>
          <li>
            <Link className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700" to={"/Shared-Hosting-Services"}>Shared Hosting Services</Link>
          </li>
          <li>
            <Link className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700" to={"/Dedicated-Hosting-Servers"}>Dedicated Hosting Servers</Link>
          </li>
          <li>
            <Link className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700" to={"/domains"}>Domains</Link>
          </li>
          <li>
            <Link className="dark:text-white opacity-70 font-semibold text-[15px] hover:dark:text-white duration-700" to={"/about"}>About</Link>
          </li>
        </ul>
        <div className="flex items-center ml-3">
        <AiOutlineMenu className="dark:text-white opacity-70 text-lg" />
        <p className="dark:text-white opacity-70 font-medium text-[15px]">Products</p>
        </div>
      </nav>
    </div>
  );
};

export default BottomHeader;
