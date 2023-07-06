import React from "react";
import { Link, Outlet } from "react-router-dom";
import { supportServicesData } from "../../Utlit/supportServiceData";

const SupportServices = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-14 py-[60px]">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[#0060FE] font-semibold">
          LET'S GET TO THE JUICY DEETS
        </p>
        <h1 className="text-[42px] dark:text-white font-bold">
          Compare HostX VPS Plans and Support Services
        </h1>
      </div>
      <div className="mt-[75px]">
        <ul className=" flex space-x-5">
          <li>
            <Link to={""} className="dark:text-slate-100/80 border px-5 py-2">
              Hardware
            </Link>
          </li>
          <li>
            <Link to={""} className="dark:text-slate-100/80 border px-5 py-2">
              VPS Features
            </Link>
          </li>
        </ul>
        {supportServicesData.map(({ name, servicePlan }) => {
          console.log(servicePlan)
          return <div></div>;
        })}

        <Outlet />
      </div>
    </section>
  );
};

export default SupportServices;
