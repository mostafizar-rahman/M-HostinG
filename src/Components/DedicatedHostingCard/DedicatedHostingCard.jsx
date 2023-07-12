import React, { useContext, useState } from "react";
import { CURRENCY_CONTEXT } from "../../Context/CurrencyProvider";
import {
  HiOutlineCurrencyBangladeshi,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const DedicatedHostingCard = ({
  title,
  subTitle,
  countryFlag,
  price,
  hostingInfo,
}) => {
  const { isCurrencyUSD } = useContext(CURRENCY_CONTEXT);
  const setXXX = [];
  hostingInfo.forEach((element) => {
    setXXX.push(element.hostInfoId);
  });

  return (
    <div className="bg-[#1a1b2e] mb-[15px] rounded-lg">
      <div className="flex flex-wrap">
        <div className="group px-[30px] py-[34px] border-r border-[#0b0c1b] lg:basis-1/3 w-full">
          <b className="text-lg font-semibold dark:text-white">{title}</b>
          <p className="font-medium mb-[15px] text-[#9193a8] block">
            {subTitle}
          </p>
          <div className="flex">
            {countryFlag.map((flag, id) => (
              <img
                src={flag}
                key={id}
                alt="imag"
                className="w-8 first:-ml-0 -ml-[10px] group-hover:first:ml-0 group-hover:ml-[8px] duration-700"
              />
            ))}
          </div>
        </div>

        <div className={` flex flex-wrap w-full lg:order-3`}>
          {hostingInfo.map(({ icon, name, subName, hostInfoId }, id) => {
            return (
              <div
                key={id}
                className={` lg:basis-1/3 w-full  border-r border-t border-[#0b0c1b]   p-[15px]`}
              >
                <img src={icon} alt="" className="w-4 invert opacity-[0.6] " />
                <p className="text-[#9193a8] text-sm font-medium">
                  <b>{name}</b>
                  <br />
                  {subName}
                </p>
              </div>
            );
          })}
        </div>

        <div className="px-[30px] py-[34px]  col-span-5 lg:basis-[66%] w-full lg:order-2  ">
          <h3 className="dark:text-white font-bold text-[30px]">
            {isCurrencyUSD ? (
              <p className="flex items-center ">
                <HiOutlineCurrencyDollar className=" text-xl" />

                {price.usd}
              </p>
            ) : (
              <p className="flex items-center ">
                <HiOutlineCurrencyBangladeshi className=" text-xl" />

                {price.bdt}
              </p>
            )}
          </h3>
          <small className="text-[#9193a8] text-[12px] font-medium">
            40.00 USD/mo when you renew<sup>4</sup>{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default DedicatedHostingCard;
