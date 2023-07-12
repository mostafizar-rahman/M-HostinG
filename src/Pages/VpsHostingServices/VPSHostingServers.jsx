import React, { useState } from "react";
import { Link } from "react-router-dom";
import herobg from "../../assets/images/hero-01.png";
import SubNav from "../../Components/Shared/SubNav/SubNav";
import { VPSHostingServicesData } from "../../Utlit/VPSHostingServicesData";
import VPSHostingServiceCard from "../../Components/VPSHostingServiceCard/VPSHostingServiceCard";
import Title from "../../Components/Title/Title";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";
import Faqs from "../../Components/Shared/Faqs/Faqs";
import HostingFeature from "../../Components/Shared/HostingFeature/HostingFeature";

const VPSHostingServers = () => {
  const [managedPlan, setManagedPlan] = useState(true);
  // ----- FIlter data by full managed and self managed
  const filteringVPSData = VPSHostingServicesData.filter(
    ({ fullManaged }) => fullManaged === managedPlan
  );

  return (
    <>
      {/* --------------------Banner start */}
      <section className=" bg-[#ffe05d] ">
        <BannerTwo
          herobg1={herobg}
          title={"VPS hosting that puts the  power in your hands."}
          subTitle={"Virtual Private Server"}
          content={`With full SSD storage dedicated solely to you, our virtual private
            server hosting gives you the flexibility and control to build
            exactly the website you want.`}
          id={1}
        />
      </section>
      {/* -------------------Banner End */}
      {/* ------------------VPS Hosting plans Start */}
      <section className="dark:bg-[#141526] ">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
          <Title
            main={"   Self & Fully Managed VPS Hosting plans"}
            sub={"WHAT ABOUT OUR PLANS"}
          />

          {/* --------------- Hosting Plans */}
          <div className="flex  justify-center space-x-5">
            <button
              onClick={() => setManagedPlan(true)}
              className={`dark:text-[#9193a8] text-sm px-7 py-[14px] font-semibold rounded-sm border border-[#ffffff0d] xl:w-[16%] lg:w-[23%] md:w-[33%] w-full  ${
                managedPlan === true && "bg-[#0060fe] dark:text-white"
              }`}
            >
              Self Managed
            </button>
            <button
              onClick={() => setManagedPlan(false)}
              className={`dark:text-[#9193a8] text-sm px-7 py-[14px] font-semibold rounded-sm border border-[#ffffff0d] xl:w-[16%] lg:w-[23%] md:w-[33%] w-full  ${
                managedPlan === false && "bg-[#0060fe] dark:text-white"
              }`}
            >
              Fully Managed
            </button>
          </div>

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 mb-[30px]">
            {filteringVPSData.map(({ id, title, subTitle, hostingInfo }) => (
              <VPSHostingServiceCard
                key={id}
                title={title}
                subTitle={subTitle}
                hostingInfo={hostingInfo}
              />
            ))}
          </div>
          <HostingFeature />
        </div>
      </section>
      {/* ------------------VPS Hosting plans End */}
      {/* ------------------FAQS Start */}
      <section className="dark:bg-[#0b0c1b]">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
          <Title
            main={"Got questions? Well, we've got answers."}
            sub={"FAQS"}
          />
          <Faqs />
        </div>
      </section>
      {/* ------------------FAQS End */}
    </>
  );
};

export default VPSHostingServers;
