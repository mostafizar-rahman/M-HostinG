import React from "react";
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

const Home = () => {
  return (
    <>
      <Banner />
      <OperatingSystems />
      <section className=" dark:bg-[#0b0c1b] bg-[#ecf4fa] ">
        <div className="max-w-[1400px] mx-auto px-14 py-[90px]">
          <Title
            main={"Get More Power With Our Web Hosting Products"}
            sub={"WHAT ABOUT OUR PLANS"}
          />
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-0 ">
            {hostingPlanData.map(
              ({ id, title, subTitle, topFeature, price, subPrice, websiteBuilder }) => (
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
        </div>
      </section>

      <Features />
      <SupportServices />
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
