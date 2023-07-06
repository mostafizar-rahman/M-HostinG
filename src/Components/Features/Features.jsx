import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import businessman from "../../assets/images/businessman.svg";
import { featuresData } from "../../Utlit/featuresData";
import FeatureCard from "./FeatureCard";
const Features = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-14 py-[60px]">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[#0060FE] font-semibold">MORE THAN JUST A TOOL</p>
        <h1 className="text-[42px] dark:text-white font-bold">
          Fancy VPS features you get for totally free.
        </h1>
      </div>
      <div className="mt-[75px] flex space-x-5">
        {featuresData.map(({id, title, icon})=> <FeatureCard key={id} id={id} title={title} icon={icon}/>)}
      </div>
    </section>
  );
};

export default Features;
