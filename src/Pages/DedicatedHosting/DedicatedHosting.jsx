import React, { useState } from "react";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";
import herobg from "../../assets/images/hero-03.svg";
import Title from "../../Components/Title/Title";
import { dedicatedHostingData } from "../../Utlit/dedicatedHostingData";
import DedicatedHostingCard from "../../Components/DedicatedHostingCard/DedicatedHostingCard";

const DedicatedHosting = () => {
  const [serverPlans, setServerPlans] = useState(true);
  return (
    <>
      {/* --------------------Banner start */}
      <section className=" bg-[#88E0EF] ">
        <BannerTwo
          herobg1={herobg}
          title={"VPS hosting that puts the  power in your hands."}
          subTitle={"Virtual Private Server"}
          content={`With full SSD storage dedicated solely to you, our virtual private
            server hosting gives you the flexibility and control to build
            exactly the website you want.`}
          id={3}
        />
      </section>
      {/* -------------------Banner End */}
      {/* ------------------ Dedicated Plans and Pricing Start */}
      <section className="dark:bg-[#0b0c1b] bg-[#ecf4fa]">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
          <Title
            main={"Dedicated Server Hosting plans and pricing:"}
            sub={"WHAT ABOUT OUR PLANS"}
          />
          <div className="flex  justify-center space-x-5">
            <button
              onClick={() => setServerPlans(true)}
              className={`dark:text-[#9193a8] text-sm px-7 py-[14px] font-semibold rounded-sm border border-[#ffffff0d] xl:w-[16%] lg:w-[23%] md:w-[33%] w-full  ${
                serverPlans === true && "bg-[#0060fe] dark:text-white"
              }`}
            >
              Self Managed
            </button>
            <button
              onClick={() => setServerPlans(false)}
              className={`dark:text-[#9193a8] text-sm px-7 py-[14px] font-semibold rounded-sm border border-[#ffffff0d] xl:w-[16%] lg:w-[23%] md:w-[33%] w-full  ${
                serverPlans === false && "bg-[#0060fe] dark:text-white"
              }`}
            >
              Fully Managed
            </button>
          </div>
          <div className="mt-11">
            {dedicatedHostingData.map(
              ({
                id,
                title,
                subTitle,
                countryFlag,
                hostingInfo,
                price,
                subPrice,
              }) => (
                <DedicatedHostingCard
                  key={id}
                  title={title}
                  subTitle={subTitle}
                  countryFlag={countryFlag}
                  hostingInfo={hostingInfo}
                  price={price}
                  subPrice={subPrice}
                />
              )
            )}
          </div>
        </div>
      </section>
      {/* ------------------ Dedicated Plans and Pricing End */}
    </>
  );
};

export default DedicatedHosting;
