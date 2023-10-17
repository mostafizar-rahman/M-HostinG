import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDollarSign } from "react-icons/fa";
import { CURRENCY_CONTEXT } from "../../Context/CurrencyProvider";
import {
  HiCurrencyBangladeshi,
  HiOutlineCurrencyBangladeshi,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const DomainEndPointCard = ({ image, price, endPoint, info }) => {
  const { isCurrencyUSD } = useContext(CURRENCY_CONTEXT);

  return (
    <div
      className=" rounded-xl  h-[270px] "
      style={{ boxShadow: " 0px 0px 6px 2px #96969614" }}
    >
      <div className="relative">
        <img src={image} alt="" className="w-full h-[270px]" />
        <div className="absolute top-0 bg-[#0e0e0e] bg-opacity-25 h-full py-[30px] px-5 rounded-xl">
          <div>
            <h3 className="dark:text-white lg:text-4xl text-3xl font-bold font-poppins mb-[15px]">
              <span className="text-[#FFB830] text-4xl">.</span>
              {endPoint}
            </h3>
            <p className="text-sm font-medium text-[#9193a8]">{info}</p>
          </div>
          <div className="flex justify-between items-end mt-10">
            <div>
              <p className="text-sm font-medium text-[#9193a8] ">Starting at</p>
              <h3 className="dark:text-white text-3xl font-bold mt-2">
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
              </h3>
            </div>
            <Link
              to={"/"}
              className="w-[46px] h-[46px] rounded-full inline-flex justify-center items-center text-white bg-[#0060fe] border-none"
            >
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainEndPointCard;
