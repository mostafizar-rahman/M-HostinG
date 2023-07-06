import React from "react";
import { hostingPlanCard } from "../../Utlit/hostingPlansData";
import HostingPlanCard from "./HostingPlanCard";

const HostingPlans = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-14 py-[60px]">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[#0060FE] font-semibold">WHAT ABOUT OUR PLANS</p>
        <h1 className="text-[42px] dark:text-white font-bold">
          Get More Power With Our Web Hosting Products
        </h1>
      </div>
      <div className="mt-[75px] rounded-md flex dark:bg-[#141526]">
        {hostingPlanCard.map(({ id, title,subTitle, topFeature, price, subPrice, name }) => (
          <HostingPlanCard
            key={id}
            title={title}
            subTitle={subTitle}
            topFeature={topFeature}
            price={price}
            subPrice={subPrice}
            name={name}
          />
        ))}
      </div>
    </section>
  );
};

export default HostingPlans;
