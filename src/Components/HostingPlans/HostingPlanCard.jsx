import React from "react";
import { Link } from "react-router-dom";
import { BsCheck, BsQuestion } from "react-icons/bs";
const HostingPlanCard = ({ title, subTitle, topFeature, price, subPrice, name }) => {
  return (
    <div className="px-10 py-[50px] border-r last:border-none">
      <div className="pb-5">
        <h4 className="dark:text-white text-xl font-semibold">{title}</h4>
        <small className="text-sm dark:text-slate-100/80">{subTitle}</small>
      </div>

      <div className="pb-5 mb-5  border-b">
        <h1 className="text-3xl dark:text-white font-bold">${price}</h1>
        <small className="text-sm dark:text-slate-100/80">{subPrice}</small>
      </div>
      <Link className="w-full flex justify-center items-center rounded-sm h-[48px] bg-[#0060fe] text-white">
        Choose Basic
      </Link>
      <div className="mt-14">
        <h4 className="dark:text-white text-base font-medium mb-5">{name}</h4>
        {topFeature.map(({ feature, name }, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="w-4 h-4 rounded-full bg-[#15CD72]">
                  <BsCheck className="text-white" />
                </p>
                <p className="dark:text-gray-100/80 ml-4">{feature}</p>
              </div>

              <p className="w-4 h-4 rounded-full bg-[#333446] ">
                <BsQuestion className="text-white" />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HostingPlanCard;
