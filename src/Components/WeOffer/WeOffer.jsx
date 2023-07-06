import React from "react";
import { AiOutlineMail, AiOutlineCloudDownload } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { SlNotebook } from "react-icons/sl";
const WeOffer = () => {
  return (
    <div className="flex justify-between space-x-7 pt-20">
      <div className="dark:bg-[#1A1B2E] px-[30px] py-9 rounded-md flex-grow ">
        <AiOutlineMail className="dark:text-white text-5xl" />
        <h5 className="text-xl font-semibold dark:text-white mt-7">
          Anonymous <br /> Access
        </h5>
      </div>
      <div className="dark:bg-[#1A1B2E] px-[30px] py-9 rounded-md flex-grow ">
        <FiLogOut className="dark:text-white text-5xl" />
        <h5 className="text-xl font-semibold dark:text-white mt-7">
          No Usage <br /> Logs
        </h5>
      </div>
      <div className="dark:bg-[#1A1B2E] px-[30px] py-9 rounded-md flex-grow ">
        <AiOutlineCloudDownload className="dark:text-white text-5xl" />
        <h5 className="text-xl font-semibold dark:text-white mt-7">
          No Usage <br /> Limit
        </h5>
      </div>
      <div className="dark:bg-[#1A1B2E] px-[30px] py-9 rounded-md flex-grow ">
        <SlNotebook className="dark:text-white text-5xl" />
        <h5 className="text-xl font-semibold dark:text-white mt-7">
          100% White . . <br /> Listed
        </h5>
      </div>
    </div>
  );
};

export default WeOffer;
