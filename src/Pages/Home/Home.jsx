import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import OperatingSystems from "../../Components/OperatingSystems/OperatingSystems";
import HostingPlans from "../../Components/HostingPlans/HostingPlans";
import Features from "../../Components/Features/Features";
import SupportServices from "../../Components/SupportServices/SupportServices";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Faqs from "../../Components/Shared/Faqs/Faqs";
import Footer from "../../Components/Shared/Footer/Footer";
import { hostingPlanData } from "../../Utlit/hostingPlansData";
import HostingPlanCard from "../../Components/HostingPlans/HostingPlanCard";
import Title from "../../Components/Title/Title";
import HostingFeature from "../../Components/Shared/HostingFeature/HostingFeature";
import SupportServiceTable from "../../Components/SupportServices/SupportServiceTable";
import SupportServiceCard from "../../Components/SupportServices/SupportServiceCard";
import { supportServicesCategory } from "../../Utlit/supportServiceData";

const Home = () => {
  const [id, setId] = useState(1);
  const handleId = (categoryId) => {
    setId(categoryId);
  };
  return (
    <>
      <Banner />
      <OperatingSystems />
      {/* ---------------- Hosting Plan */}
      <section className=" dark:bg-[#0b0c1b] bg-[#ecf4fa] ">
        <div className="max-w-[1400px] mx-auto px-14 py-[90px]">
          <Title
            main={"Get More Power With Our Web Hosting Products"}
            sub={"WHAT ABOUT OUR PLANS"}
          />
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-0 mb-[30px]">
            {hostingPlanData.map(
              ({
                id,
                title,
                subTitle,
                topFeature,
                price,
                subPrice,
                websiteBuilder,
              }) => (
                <HostingPlanCard
                  key={id}
                  title={title}
                  subTitle={subTitle}
                  websiteBuilder={websiteBuilder}
                  topFeature={topFeature}
                  price={price}
                  subPrice={subPrice}
                />
              )
            )}
          </div>
          <HostingFeature />
        </div>
      </section>

      <Features />

      <section className="dark:bg-[#0b0c1b] bg-[#ecf4fa] ">
        <div className="max-w-[1400px] mx-auto px-14 py-[90px]">
          <div className="mt-[75px]">
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
            {/* ------------- find data by category */}
            <div className="xl:block hidden">
              <SupportServiceTable id={id} bgColorId={2} />
            </div>
            <div className="xl:hidden block">
              <SupportServiceCard />
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

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
      <Footer />
    </>
  );
};

export default Home;
