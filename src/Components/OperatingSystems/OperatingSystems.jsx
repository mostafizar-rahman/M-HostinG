import React from "react";
import windowsImage from "../../assets/images/windows.png";
import android from "../../assets/images/android.png";
import ubuntu from "../../assets/images/ubuntu.png";
import debian from "../../assets/images/debian.png";
import centOS from "../../assets/images/centos.png";
import openSuse from "../../assets/images/open-suse.png";

const OperatingSystems = () => {
  return (
    <section className="dark:bg-[#141526] bg-white ">
      <div className="max-w-[1400px] mx-auto md:px-14 px-5  py-[60px]">
        <div className="xl:flex items-center justify-between xl:space-x-6">
          <div className="xl:w-[30%] text-center xl:text-left">
            <h1 className="dark:text-white xl:text-5xl md:text-4xl text-[26px] font-bold mb-4">
              Popular operating systems.
              <br />
              <span className="text-[#0060FE]">Your Choice.</span>
            </h1>
            <p className="dark:text-slate-100/80 text-sm">
              With ability to upload your own Operating system.
            </p>
          </div>
          <div className="flex flex-wrap justify-center xl:justify-between xl:w-[70%]  mt-16 xl:mt-0 ">
            <div className="dark:bg-[#1A1B2E] bg-[#f4f8fb] border border-[#e2e9ee] dark:border-0  py-5 px-4 rounded-md  text-center w-[45%] md:w-[20%] lg:w-[15%] m-[2%] xl:m-0 ">
              <img src={windowsImage} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 text-[#001033] mt-5 block font-medium">
                Windows
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] bg-[#f4f8fb] border border-[#e2e9ee] dark:border-0  py-5 px-4 rounded-md  text-center w-[45%] md:w-[20%] lg:w-[15%] m-[2%] xl:m-0 ">
              <img src={android} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 text-[#001033] mt-5 block font-medium">
                Android
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] bg-[#f4f8fb] border border-[#e2e9ee] dark:border-0  py-5 px-4 rounded-md  text-center w-[45%] md:w-[20%] lg:w-[15%] m-[2%] xl:m-0 ">
              <img src={ubuntu} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 text-[#001033] mt-5 block font-medium">
                Ubuntu
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] bg-[#f4f8fb] border border-[#e2e9ee] dark:border-0  py-5 px-4 rounded-md  text-center w-[45%] md:w-[20%] lg:w-[15%] m-[2%] xl:m-0 ">
              <img src={debian} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 text-[#001033] mt-5 block font-medium">
                Debian
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] bg-[#f4f8fb] border border-[#e2e9ee] dark:border-0  py-5 px-4 rounded-md  text-center w-[45%] md:w-[20%] lg:w-[15%] m-[2%] xl:m-0 ">
              <img src={centOS} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 text-[#001033] mt-5 block font-medium">
                CentOS
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] bg-[#f4f8fb] border border-[#e2e9ee] dark:border-0  py-5 px-4 rounded-md  text-center w-[45%] md:w-[20%] lg:w-[15%] m-[2%] xl:m-0 ">
              <img src={openSuse} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 text-[#001033] mt-5 block font-medium">
                Open Suse
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingSystems;
