import React from "react";
import { testimonialData } from "../../Utlit/testimonialData";
import Title from "../Title/Title";

const Testimonial = () => {
  
  return (
    <section className="dark:bg-[#141526]   ">
      <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[90px]">
        <Title
          main={"VPS Hosting What Our Customers Have To Say?"}
          sub={"TRUST OUR CUSTOMERS"}
        />
        <div className="xl:columns-4 md:columns-2 columns-1  space-y-5">

          {testimonialData.map(({ comment, image, name, pesion }, index) => {
            return (
              <div key={index} className=" p-[30px] overflow-hidden h-auto dark:bg-[#1a1b2e] shadow-lg bg-[#f4f8fb] border border-[#e2e9ee] dark:border-none   ">
                <img
                  src={image}
                  alt=""
                  className="mb-[10px] rounded-full w-[54px] h-[54px]"
                />
                <div>
                  <h5 className="text-[17px] dark:text-white text-[#0b0c1b] font-semibold">
                    {name}
                  </h5>
                  <small className="text-[13px] dark:text-slate-100/80 text-[#001033] ">
                    {pesion}
                  </small>
                </div>
                <i className="text-[17px] dark:text-[#9193a8] font-playfair inline-block mt-6">
                  " {comment} "
                </i>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonial;
