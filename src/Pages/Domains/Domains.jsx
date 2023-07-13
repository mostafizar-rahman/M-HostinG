import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import domainBg from "../../assets/images/domain-bg.png";
import { domainEndPointData } from "../../Utlit/domainEndPointData";
import DomainEndPointCard from "../../Components/DomainEndPointCard/DomainEndPointCard";
import Title from "../../Components/Title/Title";
import { DomainGiftsData } from "../../Utlit/DomainGiftsData";
import DomainGiftsCard from "../../Components/DomainGiftsCard/DomainGiftsCard";
import FeatureCard from "../../Components/Features/FeatureCard";
import { featuresData } from "../../Utlit/featuresData";
import Faqs from "../../Components/Shared/Faqs/Faqs";
import Footer from "../../Components/Shared/Footer/Footer";
import { Helmet } from "react-helmet";

const Domains = () => {
  return (
    <>
    <Helmet>
        ‍<title>Domains-M-HostinG</title>‍
        <meta
          name="description"
          content="the process where a web hosting provider stores and maintains website files and applications on a server to make its customers' websites accessible on the internet"
        />
      </Helmet>
      {/* -------------------- Banner Start */}
      <section className="dark:bg-[#0b0c1b] bg-[#ecf4fa] relative lg:h-[500px] md:h-[400px] h-[450px]">
        <div className=" lg:px-14 px-5 py-[120px]">
          <div className="max-w-[1400px] mx-auto  relative">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full absolute z-10 ">
              <h1 className="text-[#0b0c1b] dark:text-white lg:text-5xl md:text-3xl text-2xl font-bold">
                Find Perfect Domain <br />
                Name For Your Website.
              </h1>
              <div className="w-full md:w-[540px] md:flex items-center mt-[54px] relative">
                <span className="absolute left-[14px] top-[16px]">
                  <FaSearch className="text-xl filter opacity-70" />
                </span>
                <input
                  type="text"
                  placeholder="Type the one you went here"
                  className="h-[54px] outline-none rounded-sm font-[15px] pl-[44px] pr-5 w-full border-white"
                />
                <button className="h-[54px] text-[15px] font-medium outline-none px-9 rounded-sm bg-[#0060fe] text-white ml-4 mt-[15px] md:mt-0">
                  SEARCH
                </button>
              </div>

              <p className="text-sm font-medium text-[#001033] dark:text-[#9193a8] mt-[15px]">
                Already have a domain?{" "}
                <Link
                  to={"/"}
                  className="font-semibold underline dark:text-white"
                >
                  Transfer it to us
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className=" ">
            <img
              src={domainBg}
              alt=""
              className="lg:w-[840px] w-full lg:h-[500px] md:h-[400px] h-[450px]    object-cover absolute top-0 right-0 "
            />
          </div>
        </div>
      </section>
      {/* -------------------- Banner End */}
      {/* -------------------- Domains End Point Start */}
      <section className="dark:bg-[#141526]">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
          {/* -------- Title */}
          <Title
            main={"Treat yourself to the most popular top level domains."}
            sub={"GET THE WORLD'S MOST POPULAR DOMAINS"}
          />
          {/* ------------ end Point info */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {domainEndPointData.map(({ id, image, price, endPoint, info }) => (
              <DomainEndPointCard
                key={id}
                price={price}
                endPoint={endPoint}
                image={image}
                info={info}
              />
            ))}
          </div>
        </div>
      </section>
      {/* -------------------- Domains End Point End */}
      <section className="dark:bg-[#0b0c1b] bg-[#ecf4fa]">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
          {/* ---------- Title */}
          <Title
            main={"Enjoy free products and services with every registration"}
            sub={"YOUR DOMAIN COMES BEARING GIFTS"}
          />
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {DomainGiftsData.map(({ id, icon, title, info }) => (
              <DomainGiftsCard key={id} icon={icon} title={title} info={info} />
            ))}
          </div>
        </div>
      </section>
      {/* ------------------ Feature Start */}
      <section className="dark:bg-[#0b0c1b] ">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
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
      {/* ------------------ Feature End */}
      <section className="dark:bg-[#0b0c1b] bg-[#ecf4fa]">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px]">
          <Title
            main={"Got questions? Well, we've got answers."}
            sub={"FAQS"}
          />
          <Faqs />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Domains;
