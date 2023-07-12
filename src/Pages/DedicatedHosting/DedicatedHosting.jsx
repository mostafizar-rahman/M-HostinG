import React, { useState } from "react";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";
import herobg from "../../assets/images/hero-03.svg";
import Title from "../../Components/Title/Title";
import { dedicatedHostingData } from "../../Utlit/dedicatedHostingData";
import DedicatedHostingCard from "../../Components/DedicatedHostingCard/DedicatedHostingCard";
import SupportServices from "../../Components/SupportServices/SupportServices";
import { supportServicesCategory } from "../../Utlit/supportServiceData";
import SupportServiceTable from "../../Components/SupportServices/SupportServiceTable";
import SupportServiceCard from "../../Components/SupportServices/SupportServiceCard";
import Faqs from "../../Components/Shared/Faqs/Faqs";
import Footer from "../../Components/Shared/Footer/Footer";

const DedicatedHosting = () => {
  const [serverPlans, setServerPlans] = useState(true);
  const [id, setId] = useState(1);
  const handleId = (categoryId) => {
    setId(categoryId);
  };
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
          {/* ----------- Buttons */}
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
          <div className="mt-11 lg:block grid md:grid-cols-2 grid-cols-1 gap-5">
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

      {/* ------------------ Support Service Start  */}
      <section className="dark:bg-[#141526]">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
          <Title
            main={"Compare HostX Dedicated Plans and Support Services"}
            sub={"LET'S GET TO THE JUICY DEETS"}
          />
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
          <div className="mt-[75px]">
            {/* ------------- find data by category */}
            <div className="xl:block hidden">
              <SupportServiceTable id={id} bgColorId={1} />
            </div>
            <div className="xl:hidden block">
              <SupportServiceCard />
            </div>
          </div>
        </div>
      </section>
      {/* ------------------ Support Service End */}
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
      <Footer />
    </>
  );
};

export default DedicatedHosting;
