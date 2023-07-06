import React from "react";

const Testimonial = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-14 py-[60px]">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[#0060FE] font-semibold">WHAT ABOUT OUR PLANS</p>
        <h1 className="text-[42px] dark:text-white font-bold">
          Get More Power With Our Web Hosting Products
        </h1>
      </div>
      <div className="flex">
        <div className="p-[30px] mb-[30px] dark:bg-[#1a1b2e] rounded-md">
          <img
            src=""
            alt=""
            className="mb-[10px] rounded-full w-[54px] h-[54px]"
          />
          <div>
            <h5 className="text-[17px] text-white font-semibold">Lea</h5>
            <small className="text-[13px] dark:text-slate-100/80">Own CEO</small>
          </div>
          <p className="text-[17px] dark:text-slate-100/80">
            " I rally like using this product! Hands down, one of the best apps
            out there! "
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
