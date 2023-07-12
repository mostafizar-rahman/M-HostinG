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
    <>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[#0060FE] font-semibold">
          LET'S GET TO THE JUICY DEETS
        </p>
        <h1 className="text-[42px] dark:text-white font-bold">
          Compare HostX VPS Plans and Support Services
        </h1>
      </div>
      <div className="mt-[75px]">
        
        {/* ------------- find data by category */}
        <div className="xl:block hidden">
          <SupportServiceTable id={id} />
        </div>
        <div className="xl:hidden block">
          <SupportServiceCard />
        </div>
      </div>
    </>
  );
};

export default SupportServices;
