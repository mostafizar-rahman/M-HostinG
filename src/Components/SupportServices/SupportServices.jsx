import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  supportServicesCategory,
  supportServicesData,
} from "../../Utlit/supportServiceData";
import SupportServiceTable from "./SupportServiceTable";
import SupportServiceCard from "./SupportServiceCard";

const SupportServices = () => {
  const [id, setId] = useState(1);
  const handleId = (categoryId) => {
    setId(categoryId);
  };
  return (
    <section className="dark:bg-[#0b0c1b] bg-[#ecf4fa] ">
      <div className="max-w-[1400px] mx-auto px-14 py-[90px]">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#0060FE] font-semibold">
            LET'S GET TO THE JUICY DEETS
          </p>
          <h1 className="text-[42px] dark:text-white font-bold">
            Compare HostX VPS Plans and Support Services
          </h1>
        </div>
        <div className="mt-[75px]">
          {/* -------------- Category */}
          <ul className="hidden xl:flex justify-between space-x-5 mb-8">
            {supportServicesCategory.map(({ categoryId, name }) => {
              return (
                <li
                  onClick={() => handleId(categoryId)}
                  key={categoryId}
                  className="w-full dark:text-slate-100/80 border dark:border-[#f1f1f50f] border-[#e2e9ee] text-center px-5 py-3 cursor-pointer rounded-md"
                >
                  {name}
                </li>
              );
            })}
          </ul>
          {/* ------------- find data by category */}
          <div className="xl:block hidden">
            <SupportServiceTable id={id} />
          </div>
          <div className="xl:hidden block">
            <SupportServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportServices;
