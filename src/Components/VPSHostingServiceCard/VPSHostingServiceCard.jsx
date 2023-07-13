import React from "react";
import { Link } from "react-router-dom";

const VPSHostingServiceCard = ({ title, subTitle, hostingInfo }) => {
  return (
    <div className="dark:bg-[#1a1b2e] bg-[#ecf4fa] hover:bg-transparent rounded-md border dark:border-[#ffffff0d] ">
      {/* ---------- Title */}
      <div className="py-5 px-3">
        <div className="flex items-center">
          <img src={title.titleIcon} alt="" className="w-[17px] h-[17px]" />
          <b className="dark:text-white text-sm font-semibold ml-3">
            {title.titleName}
          </b>
        </div>
        <div className="flex items-center mt-2">
          <img src={title.titleIcon} alt="" className="w-[17px] h-[17px]" />
          <small className="dark:text-[#9193a8] font-medium ml-3">
            {subTitle.subTitleName}
          </small>
        </div>
      </div>
      {/* ------------ Detalis */}
      <div>
        {hostingInfo.map(({ icon, name, subName }, index) => {
          return (
            <div key={index}>
              <div className="flex border-b dark:border-[#ffffff0d] border-[#e2e9ee] first:border-t first:dark:border-[#ffffff0d] first:border-[#e2e9ee]">
                <div className="w-10 inline-flex justify-center items-center border-r dark:border-[#ffffff0d] border-[#e2e9ee]">
                  <img
                    src={icon}
                    alt="image"
                    className="w-[17px] dark:invert opacity-[0.6] "
                  />
                </div>
                <div className=" ml-4 p-[6px]">
                  <p className="text-sm font-medium dark:text-[#9193a8]">{name}</p>
                  <p className="text-sm font-normal dark:text-[#9193a8]">
                    {subName}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-[10px]">
        <Link
          to={""}
          className="flex justify-center items-center text-white bg-[#0060fe] text-[13px] font-normal rounded-sm py-2 px-5 h-[46px]"
        >
          CONFIGURE
        </Link>
      </div>
    </div>
  );
};

export default VPSHostingServiceCard;
