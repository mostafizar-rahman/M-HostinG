import React, { useContext } from "react";
import { supportServicesData } from "../../Utlit/supportServiceData";
import { Link } from "react-router-dom";
import {
  HiCheck,
  HiOutlineCurrencyBangladeshi,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";
import { CURRENCY_CONTEXT } from "../../Context/CurrencyProvider";

const SupportServiceTable = ({ id, bgColorId }) => {
  const { isCurrencyUSD } = useContext(CURRENCY_CONTEXT);

  const bgColor = {
    1: "dark:bg-[#141526]",
    2: "dark:bg-[#0b0c1b]",
  };
  const selectBg = bgColor[bgColorId];
  return (
    <table className={`w-full ${selectBg} bg-white `}>
      <thead>
        <tr>
          <th className="pb-10 pt-8 border dark:border-[#f1f1f50f] border-[#e2e9ee] pl-7 align-top min-w-[450px]">
            <h1 className="text-[32px] dark:text-slate-100/25 text-[#0b0c1b] text-opacity-[.5] text-left">
              Swipe to <br /> check plans
            </h1>
          </th>
          <th className="pb-10 pt-8 border dark:border-[#f1f1f50f] border-[#e2e9ee]">
            <h4 className="text-[17px] mb-9 dark:text-white">Self Managed</h4>
            <div className="mb-[15px]">
              <p className="dark:text-slate-100/80 text-sm">As low as</p>
              {isCurrencyUSD ? (
                <h1 className="text-[46px] dark:text-white ">
                  <sup>
                    <HiOutlineCurrencyDollar className=" text-xl inline" />
                  </sup>
                  99
                  <sub className="dark:text-slate-100/80 text-sm">/mo</sub>
                </h1>
              ) : (
                <h1 className="text-[46px] dark:text-white ">
                  <sup>
                    <HiOutlineCurrencyBangladeshi className=" text-xl inline" />
                  </sup>
                  999
                  <sub className="dark:text-slate-100/80 text-sm">/mo</sub>
                </h1>
              )}
            </div>
            <Link className="h-[46px] inline-flex justify-center items-center px-[26px] bg-[#0060fe] border-none text-white text-sm font-semibold rounded-sm hover:bg-[#0953ca] duration-700">
              See Plans & Pricing
            </Link>
          </th>
          <th className="pb-10 pt-8 border dark:border-[#f1f1f50f] border-[#e2e9ee] ">
            <h4 className="text-[17px] mb-9 dark:text-white">Self Managed</h4>
            <div className="mb-[15px]">
              <p className="dark:text-slate-100/80 text-sm">As low as</p>
              {isCurrencyUSD ? (
                <h1 className="text-[46px] dark:text-white ">
                  <sup>
                    <HiOutlineCurrencyDollar className=" text-xl inline" />
                  </sup>
                  99
                  <sub className="dark:text-slate-100/80 text-sm">/mo</sub>
                </h1>
              ) : (
                <h1 className="text-[46px] dark:text-white ">
                  <sup>
                    <HiOutlineCurrencyBangladeshi className=" text-xl inline" />
                  </sup>
                  999
                  <sub className="dark:text-slate-100/80 text-sm">/mo</sub>
                </h1>
              )}
            </div>
            <Link className="h-[46px] inline-flex justify-center items-center px-[26px] bg-[#0060fe] border-none text-white text-sm font-semibold rounded-sm hover:bg-[#0953ca] duration-700">
              See Plans & Pricing
            </Link>
          </th>
        </tr>
        <tr className="dark:bg-[#1a1b2e] bg-[#f4f8fb]">
          <th className="py-5 px-[30px] border dark:border-[#f1f1f50f] border-[#e2e9ee]"></th>
          <th className="py-5 px-[30px] border dark:border-[#f1f1f50f] border-[#e2e9ee]">
            <p className="dark:text-slate-100/80 text-[15px] font-normal">
              For experienced users that want full control over their server.
            </p>
          </th>
          <th className="py-5 px-[30px] border dark:border-[#f1f1f50f] border-[#e2e9ee]">
            <p className="dark:text-slate-100/80 text-[15px] font-normal">
              For experienced users that want full control over their server.
            </p>
          </th>
        </tr>
      </thead>

      {supportServicesData.map(({ categoryId, servicePlan }) => {
        return (
          <tbody key={categoryId}>
            {categoryId === id && (
              <>
                {servicePlan.map(({ plan, selfManaged, fullyManaged }, index) => (
                  <tr key={index}>
                    <td className="text-right dark:text-slate-100/80 font-semibold text-sm py-5 px-[30px] border dark:border-[#f1f1f50f] border-[#e2e9ee]">
                      {plan}
                    </td>
                    <td className="text-center dark:text-slate-100/80 font-semibold text-sm py-5  px-[30px] border dark:border-[#f1f1f50f] border-[#e2e9ee]">
                      {selfManaged === true ? (
                        <HiCheck className="text-[#0060fe] mx-auto text-2xl" />
                      ) : (
                        selfManaged
                      )}
                    </td>
                    <td className="text-center dark:text-slate-100/80 font-semibold text-sm py-5 px-[30px] border dark:border-[#f1f1f50f] border-[#e2e9ee]">
                      {fullyManaged === true ? (
                        <HiCheck className="text-[#0060fe] mx-auto text-2xl" />
                      ) : (
                        fullyManaged
                      )}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        );
      })}
    </table>
  );
};

export default SupportServiceTable;
