import React, { useState } from "react";
import { faqsCategory, faqsData } from "../../../Utlit/faqsData";
import Accordion from "../Accordion/Accordion";

const Faqs = () => {
  const [id, setId] = useState(1);
  const handleFaqaCategory = (categoryId) => {
    setId(categoryId);
  };
  return (
    <div className="xl:flex xl:space-x-12 mt-[75px]">
      <div className="xl:max-w-sm w-full">
        <div className=" xl:block grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-5 ">
          {faqsCategory.map(({ categoryId, icon, subTitle, title }) => {
            return (
              <div
                onClick={() => handleFaqaCategory(categoryId)}
                key={categoryId}
                className={`dark:bg-[#212235] p-[25px] mb-5  rounded-lg flex cursor-pointer w-full `}
              >
                <img src={icon} alt="" className="w-9 h-9  object-contain" />
                <div className="ml-5">
                  <h5 className="dark:text-white text-base font-semibold">
                    {title}
                  </h5>
                  <small className="dark:text-[#9193a8]">{subTitle}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <div className="dark:bg-[#212235] pt-[60px] pb-[50px] px-[50px] rounded-lg">
          {faqsData.map(({ categoryId, icon, info, subTitle, title }) => {
            return (
              <div key={categoryId}>
                {categoryId === id && (
                  <div>
                    <div className="flex">
                      <img
                        src={icon}
                        alt=""
                        className="w-9 h-9  object-contain"
                      />
                      <div className="ml-5">
                        <h5 className="dark:text-white text-base font-semibold">
                          {title}
                        </h5>
                        <small className="dark:text-[#9193a8]">
                          {subTitle}
                        </small>
                      </div>
                    </div>

                    <div className="px-14 pt-10 ">
                      {info.map(({ details, name }) => {
                        return <Accordion title={name}>{details}</Accordion>;
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
