import React from "react";
import googleIcon from "../../assets/icons/google.svg";
import githubIcon from "../../assets/icons/github.svg";
import bell from "../../assets/icons/bell.svg";
import WeOffer from "../WeOffer/WeOffer";
const Banner = () => {
  return (
    <section className=" max-w-[1400px] mx-auto px-14  py-20 ">
      <div className="lg:flex justify-between ">
        <div className="lg:max-w-[58%] pr-16 w-full lg:block flex flex-col items-center text-center lg:text-left">
          <h1 className="text-6xl font-extrabold dark:text-white text-black mb-[30px]">
            VPS HOSTING POWERFUL AND RELIABLE !
          </h1>
          <p className="dark:text-white text-black mb-[30px]">
            Check out the services we offer below. We're determined to provide
            these services at the best quality - customer satisfaction and
            convenience are of the utmost importance for us.
          </p>
          <button className="rounded-full dark:bg-[#1a1b2e] border border-[#4d4e5b] dark:text-white  flex items-center mb-[60px]">
            <span className="bg-white w-16 h-16 flex justify-center items-center rounded-full">
              <img src={bell} alt="" />
            </span>
            <p className="px-5">We don't ask for any personal information</p>
          </button>
          <div className="flex space-x-4">
            <button className="bg-[#0060fe] hover:bg-[#0f4fb6] duration-700 text-white  h-[54px] w-[167px]">
              Get Started
            </button>
            <button className="bg-[#1a1b2e] hover:border-white hover:border duration-700 text-white h-[54px] w-[167px]">
              Learn More
            </button>
          </div>
        </div>
        {/* -----------Login Form */}
        <div className="hidden lg:block max-w-[32%] ">
          <div className="rounded-xl px-7 py-14 border border-[#4d4e5b] dark:bg-[#1a1b2e]">
            <h3 className="text-2xl font-bold dark:text-white text-center">
              Try HostX hosting for free with a $100 credit
            </h3>
            <form className="space-y-4 mt-10">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[54px] rounded-lg outline-none px-3 dark:bg-[#282a3f] border border-[#4d4e5b] dark:text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[54px] rounded-lg outline-none px-3 dark:bg-[#282a3f] border border-[#4d4e5b] dark:text-white"
              />
              <button
                type="submit"
                className="bg-[#15CD72] w-full h-[54px] rounded-lg outline-none px-3  text-white font-semibold hover:bg-[#15ad61] duration-700"
              >
                Login
              </button>
            </form>
            <div className="dark:text-white text-center my-5 relative">
              <span className="after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[46%] after:h-1 after:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[46%] before:h-1 before:bg-white">
                or
              </span>
            </div>
            {/* ---------- Social Singup */}
            <div className="flex justify-between space-x-4">
              <button className="rounded-sm px-9 h-[54px] dark:text-white border flex items-center space-x-4">
                {" "}
                <img src={googleIcon} alt="" /> <span>Google</span>
              </button>
              <button className="rounded-sm px-9 h-[54px] dark:text-white border flex items-center space-x-4">
                <img src={githubIcon} alt="" /> <span>Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ----------- Offering */}
      <WeOffer />
    </section>
  );
};

export default Banner;
