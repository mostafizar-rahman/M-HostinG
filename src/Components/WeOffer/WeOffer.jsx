import React from "react";
import { AiOutlineMail, AiOutlineCloudDownload } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { SlNotebook } from "react-icons/sl";
const WeOffer = () => {
  return (
    <div className="max-w-[1400px]  lg:px-14 px-5 mx-auto grid lg:grid-cols-4 grid-cols-2 gap-5 pb-20">
      <div className="dark:bg-[#1A1B2E] bg-white px-[30px] py-9 rounded-md  ">
        <AiOutlineMail className="dark:text-white md:text-5xl text-3xl mx-auto md:mx-0" />
        <h5 className="md:text-xl text-sm font-semibold dark:text-white mt-7 text-center md:text-left">
          Anonymous <br /> Access
        </h5>
      </div>
      <div className="dark:bg-[#1A1B2E] bg-white px-[30px] py-9 rounded-md  ">
        <FiLogOut className="dark:text-white md:text-5xl text-3xl mx-auto md:mx-0" />
        <h5 className="md:text-xl text-sm font-semibold dark:text-white mt-7 text-center md:text-left">
          No Usage <br /> Logs
        </h5>
      </div>
      <div className="dark:bg-[#1A1B2E] bg-white px-[30px] py-9 rounded-md  ">
        <AiOutlineCloudDownload className="dark:text-white md:text-5xl text-3xl mx-auto md:mx-0" />
        <h5 className="md:text-xl text-sm font-semibold dark:text-white mt-7 text-center md:text-left">
          No Usage <br /> Limit
        </h5>
      </div>
      <div className="dark:bg-[#1A1B2E] bg-white px-[30px] py-9 rounded-md  ">
        <SlNotebook className="dark:text-white md:text-5xl text-3xl mx-auto md:mx-0" />
        <h5 className="md:text-xl text-sm font-semibold dark:text-white mt-7 text-center md:text-left">
          100% White . . <br /> Listed
        </h5>
      </div>
    </div>
  );
};

export default WeOffer;
