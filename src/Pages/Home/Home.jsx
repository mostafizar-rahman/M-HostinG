import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import OperatingSystems from "../../Components/OperatingSystems/OperatingSystems";
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
import { featuresData } from "../../Utlit/featuresData";
import FeatureCard from "../../Components/Features/FeatureCard";
import { Helmet } from "react-helmet";

const Home = () => {
  const [id, setId] = useState(1);
  const handleId = (categoryId) => {
    setId(categoryId);
  };

  return (
    <>
      <Helmet>
        ‍<title>Home-M-HostinG</title>‍
        <meta
          name="description"
          content="the process where a web hosting provider stores and maintains website files and applications on a server to make its customers' websites accessible on the internet"
        />
      </Helmet>

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

      {/* ------------------ Feature Service Start */}
      <section className="dark:bg-[#141526] ">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[90px]">
          <Title
            sub={"MORE THAN JUST A TOOL"}
            main={" Fancy VPS features you get for totally free."}
          />

          <div className="mt-[75px] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {featuresData.map(({ id, title, icon }) => (
              <FeatureCard key={id} id={id} title={title} icon={icon} />
            ))}
          </div>
        </div>
      </section>
      {/* ------------------ Feature Service End */}

      {/* ------------------ Support Service Start */}
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
                    className={`w-full dark:text-slate-100/80 border dark:border-[#f1f1f50f] border-[#e2e9ee] text-center px-5 py-3 cursor-pointer rounded-md ${
                      categoryId === id ? "bg-[#0060fe]" : "bg-transparent"
                    }`}
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
      {/* ------------------ Support Service End */}
      <Testimonial />

      {/* ------------------FAQS Start */}
      <section className="dark:bg-[#0b0c1b] bg-[#ecf4fa]">
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
