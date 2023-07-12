import React from "react";

const DedicatedHostingCard = ({
  title,
  subTitle,
  countryFlag,
  price,
  hostingInfo,
}) => {
  return (
    <div className="bg-[#1a1b2e] mb-[15px] rounded-lg">
      <div className="flex">
        <div className="group px-[30px] py-[34px] border-r border-r-[#0b0c1b]">
          <b className="text-lg font-semibold dark:text-white">{title}</b>
          <p className="font-medium mb-[15px] text-[#9193a8] block">
            {subTitle}
          </p>
          <div className="flex">
            {countryFlag.map((flag, id) => (
              <img
                src={flag}
                key={id}
                alt="imag"
                className="w-8 first:-ml-0 -ml-[10px] group-hover:first:ml-0 group-hover:ml-[8px] duration-700"
              />
            ))}
          </div>
        </div>
        <div className="py-5 px-[30px]">
          <h3 className="dark:text-white font-bold text-[30px]">{price}</h3>
          <small className="text-[#9193a8] text-[12px] font-medium">
            40.00 USD/mo when you renew<sup>4</sup>{" "}
          </small>
        </div>
        <div>
          {hostingInfo.map(({ icon, name }, id) => {
            return (
              <div key={id}>
                <img src={icon} alt="" className="w-4" />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DedicatedHostingCard;
