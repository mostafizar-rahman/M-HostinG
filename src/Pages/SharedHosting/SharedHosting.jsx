import React from "react";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";
import herobg from "../../assets/images/hero-02.png";
import Title from "../../Components/Title/Title";
import Faqs from "../../Components/Shared/Faqs/Faqs";
import { hostingPlanData } from "../../Utlit/hostingPlansData";
import HostingPlanCard from "../../Components/HostingPlans/HostingPlanCard";
import Footer from "../../Components/Shared/Footer/Footer";
import { BsCheck } from "react-icons/bs";
import HostingFeature from "../../Components/Shared/HostingFeature/HostingFeature";
import { Helmet } from "react-helmet";
const SharedHosting = () => {
  return (
    <>
    <Helmet>
        ‍<title>SharedHosting-HostCity</title>‍
        <meta
          name="description"
          content="the process where a web hosting provider stores and maintains website files and applications on a server to make its customers' websites accessible on the internet"
        />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {/* --------------------Banner start */}
      <section className=" bg-[#FFD369] ">
        <BannerTwo
          herobg1={herobg}
          title={"VPS hosting that puts the  power in your hands."}
          subTitle={"Virtual Private Server"}
          content={`With full SSD storage dedicated solely to you, our virtual private
            server hosting gives you the flexibility and control to build
            exactly the website you want.`}
          id={2}
        />
      </section>
      {/* -------------------Banner End */}

      {/* ------------------Hosting Plan Start */}
      <section className="dark:bg-[#141526]">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
          <Title
            main={"Shared server hosting plans and pricing"}
            sub={"WHAT ABOUT OUR PLANS"}
          />
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6  mb-[30px]">
            {hostingPlanData.map(
              ({
                id,
                title,
                subTitle,
                topFeature,
                price,
                subPrice,
                image,
                websiteBuilder,
              }) => (
                <HostingPlanCard
                  key={id}
                  title={title}
                  subTitle={subTitle}
                  topFeature={topFeature}
                  websiteBuilder={websiteBuilder}
                  price={price}
                  subPrice={subPrice}
                  image={image}
                />
              )
            )}
          </div>
          <HostingFeature/>
        </div>
      </section>
      {/* ------------------Hosting Plan End */}

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

export default SharedHosting;
