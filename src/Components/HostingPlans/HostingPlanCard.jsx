import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCheck, BsQuestion } from "react-icons/bs";
import { CURRENCY_CONTEXT } from "../../Context/CurrencyProvider";
import { HiOutlineCurrencyBangladeshi, HiOutlineCurrencyDollar } from "react-icons/hi";
const HostingPlanCard = ({
  title,
  subTitle,
  topFeature,
  websiteBuilder,
  price,
  subPrice,

  image,
}) => {
  const { isCurrencyUSD } = useContext(CURRENCY_CONTEXT);

  return (
    <div
      className={`px-10 py-[50px] lg:border-r dark:border-[#f1f1f50f] border-[#0000001f] last:border-none  ${
        image ? "dark:bg-[#0b0c1b]" : "dark:bg-[#141526]"
      }  bg-white dark:rounded-xl lg:dark:rounded-none last:rounded-lg `}
    >
      <div className={`${image && "pb-3"}`}>
        {image && (
          <div className="w-[54px] h-[54px] mb-5">
            <img src={image} alt="" className="w-full h-full " />
          </div>
        )}

        <h4 className="dark:text-white text-xl font-semibold">{title}</h4>
        <small className="text-sm dark:text-[#9193a8] font-medium min-h-[54px] inline-block">
          {subTitle}
        </small>
      </div>

      <div
        className={`${
          image ? "pt-8 pb-5 border-t" : "border-b pb-5 mb-5"
        }   dark:border-[#f1f1f50f] border-[#0000001f]`}
      >
        <h1 className="text-3xl dark:text-white font-bold">
          {isCurrencyUSD ? (
            <p className="flex items-center ">
              <sup>
                <HiOutlineCurrencyDollar className=" text-xl" />
              </sup>
              {price.usd}
            </p>
          ) : (
            <p className="flex items-center ">
              <sup>
                <HiOutlineCurrencyBangladeshi className=" text-xl" />
              </sup>
              {price.bdt}
            </p>
          )}
        </h1>
        <small className="text-sm dark:text-[#9193a8] font-medium">
          Normally {isCurrencyUSD ?price.usd: price.bdt} - 12/mo term
        </small>
      </div>
      <Link className="w-full flex justify-center items-center rounded-sm h-[48px] bg-[#0060fe] text-white">
        Choose Basic
      </Link>
      {/* ---------- Top Featur */}
      <div className="mt-14">
        <h4 className="dark:text-white text-base font-medium mb-5">
          Top Features
        </h4>
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
      {/* -------------- Web Builder */}
      <div className="mt-14">
        <h4 className="dark:text-white text-base font-medium mb-5">
          Website Builder Available
        </h4>
        {websiteBuilder.map(({ feature, name }, index) => {
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
