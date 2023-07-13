import React from "react";
import visubg from "../../assets/images/visu-bg-1.png";
import { FaHome } from "react-icons/fa";
import { BiSolidHome } from "react-icons/bi";
import web from "../../assets/images/web.png";

const Contact = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${visubg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="bg-[#131240e6] w-full h-full bg-blend-multiply"
    >
      <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[60px]">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="pb-[60px] lg:pb-0 lg:basis-1/2 basis-full flex flex-col justify-between">
            <div className="mb-[75px]">
              <h3 className="lg:text-xl text-lg text-white opacity-70 pt-[60px]">
                Contact Us
              </h3>
              <h1 className="lg:text-[42px] text-[32px] text-white mb-[30px] pb-5 border-b">
                Get in Touch With Us
              </h1>
              <p className=" "></p>
              <p className="text-white opacity-70 lg:text-base text-sm">
                Every guide is trained and excited to work with you, whether you
                need help with a password reset or you're looking for a team to
                build your complete web presence.
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="mb-5 flex justify-center items-center w-[42px] h-[42px] rounded-full border-2">
                  <BiSolidHome className="text-white text-2xl" />
                </div>

                <b className="text-[15px] font-medium leading-[1.4] text-white">
                  21 Johan Islands <br />
                  New Estell, Bilzen, USA{" "}
                </b>
              </div>
              <div>
                <div className="mb-5 flex justify-center items-center w-[42px] h-[42px] rounded-full border-2">
                  <BiSolidHome className="text-white text-2xl" />
                </div>

                <b className="text-[15px] font-medium leading-[1.4] text-white">
                  21 Johan Islands <br />
                  New Estell, Bilzen, USA{" "}
                </b>
              </div>
              <div>
                <div className="mb-5 flex justify-center items-center w-[42px] h-[42px] rounded-full border-2">
                  <BiSolidHome className="text-white text-2xl" />
                </div>

                <b className="text-[15px] font-medium leading-[1.4] text-white">
                  21 Johan Islands <br />
                  New Estell, Bilzen, USA{" "}
                </b>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/3 basis-full">
            <div
              style={{
                backgroundImage: `url(${web})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="bg-[#0b0c1b] rounded-[28px] py-[70px] px-[40px]"
            >
              <h3 className="text-white font-bold text-lg leading-[1.2] mb-[60px]">
                Fill up the form and our team will get back to you within 24
                hours.
              </h3>
              <form className=" mt-10">
                <label className="mb-5 block" htmlFor="name">
                  <span className="text-[12px] text-white font-medium mb-[6px] block">
                    Full Name
                  </span>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jone Doe"
                    className="w-full h-[48px] rounded-lg outline-none px-[20px] bg-[#282a3f] bg-[#f4f8fb] border border-white/[.1] border-[#e2e9ee] text-white text-sm  "
                  />
                </label>
                <label className="mb-5 block" htmlFor="email">
                  <span className="text-[12px] text-white font-medium mb-[6px] block">
                    Email
                  </span>
                  <input
                    type="email"
                    id="email"
                    placeholder="jhon@gmail.com"
                    className="w-full h-[48px] rounded-lg outline-none px-[20px] bg-[#282a3f] bg-[#f4f8fb] border border-white/[.1] border-[#e2e9ee] text-white text-sm  "
                  />
                </label>
                <label className="mb-5 block" htmlFor="message">
                  <span className="text-[12px] text-white font-medium mb-[6px] block">
                    Mwssage
                  </span>
                  <textarea
                    name="message"
                    placeholder="Hello"
                    id="message"
                    className="w-full min-h-[130px] rounded-lg outline-none px-[20px] py-[14px] bg-[#282a3f] bg-[#f4f8fb] border border-white/[.1] border-[#e2e9ee] text-white text-sm  "
                  />
                </label>
                <div className="mt-[30px]">
                  <button
                    type="submit"
                    className="bg-[#15CD72] w-full h-[48px] rounded-lg outline-none px-3   text-white font-semibold hover:bg-[#15ad61] duration-700 "
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
