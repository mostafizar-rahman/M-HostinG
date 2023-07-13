import React, { useState } from "react";
import { supportServicesData } from "../../Utlit/supportServiceData";
import { Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi";

const SupportServiceCard = () => {
  const [planName, setPlanName] = useState("selfManaged");
  return (
    <div>
      <div className=" border border-[#1a1b2e] mb-[30px]">
        <div className="flex  border-b border-[#1a1b2e]  ">
          <button
            onClick={() => setPlanName("selfManaged")}
            className={`dark:text-white font-bold border-r text-left border-[#1a1b2e] w-1/2 py-[15px] px-[30px] ${
              planName === "selfManaged" && "bg-[#1a1b2e]"
            }`}
          >
            Self Managed
          </button>
          <button
            onClick={() => setPlanName("fullyManaged")}
            className={`dark:text-white font-bold w-1/2 text-left py-[15px] px-[30px] ${
              planName === "fullyManaged" && "bg-[#1a1b2e]"
            }`}
          >
            Fully Managed
          </button>
        </div>

        <div className="mt-[15px] flex sm:flex-row flex-col  items-center ">
          <div className="sm:w-1/2 sm:p-[30px] py-[30px]">
            <p className="dark:text-slate-100/80 text-sm">As low as</p>
            <h1 className="text-[46px] dark:text-white">
              <sup className="text-2xl">$</sup>
              {planName === "selfManaged" && 99}
              {planName === "fullyManaged" && 100}
              <sub className="dark:text-slate-100/80 text-sm">/mo</sub>{" "}
            </h1>
          </div>
          <div className="sm:w-1/2 sm:p-[30px] pb-[30px]">
            <Link className="h-[46px] inline-flex justify-center items-center px-[26px] bg-[#0060fe] border-none text-white text-sm font-semibold rounded-sm hover:bg-[#0953ca] duration-700">
              See Plans & Pricing
            </Link>
          </div>
        </div>
      </div>
      {supportServicesData.map(({ categoryId, servicePlan }) => {
        return (
          <div key={categoryId}>
            {servicePlan.map(({ plan, selfManaged, fullyManaged }, index) => (
              <div key={index} className="flex border border-[#1a1b2e] hover:bg-[#1a1b2e62]">
                <p className="dark:text-[#9193a8] w-1/2 border-r  border-[#1a1b2e] py-5 px-[30px] text-right">{plan}</p>
                <p className="dark:text-[#9193a8] w-1/2 py-5 px-[30px] text-center">
                  {"selfManaged" === planName && <p>{selfManaged.length?selfManaged:<HiCheck className="text-[#0060fe] mx-auto text-2xl"/>}</p>}
                  {"fullyManaged" === planName && <p>{fullyManaged.length?fullyManaged:<HiCheck className="text-[#0060fe] mx-auto text-2xl"/>}</p>}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SupportServiceCard;
