import React from "react";
import windowsImage from "../../assets/images/windows.png";
import android from "../../assets/images/android.png";
import ubuntu from "../../assets/images/ubuntu.png";
import debian from "../../assets/images/debian.png";
import centOS from "../../assets/images/centos.png";
import openSuse from "../../assets/images/open-suse.png";

const OperatingSystems = () => {
  return (
    <section className="dark:bg-[#141526] py-[60px]">
      <div className="max-w-[1400px] mx-auto px-14 ">
        <div className="lg:flex items-center justify-between lg:space-x-6">
          <div className="lg:w-[30%] text-center lg:text-left">
            <h1 className="dark:text-white text-5xl font-bold mb-4">
              Popular operating systems.
              <br />
              <span className="text-[#0060FE]">Your Choice.</span>
            </h1>
            <p className="dark:text-slate-100/80 text-sm">
              With ability to upload your own Operating system.
            </p>
          </div>
          <div className="flex justify-between flex-wrap lg:w-[70%]  mt-16 lg:mt-0  space-x-8">
            <div className="dark:bg-[#1A1B2E] py-5 px-4 rounded-md  text-center flex-1 ">
              <img src={windowsImage} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 mt-5 block">
                Windows
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] py-5 px-4 rounded-md  text-center flex-1 ">
              <img src={android} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 mt-5 block">
                Android
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] py-5 px-4 rounded-md  text-center flex-1 ">
              <img src={ubuntu} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 mt-5 block">
                Ubuntu
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] py-5 px-4 rounded-md  text-center flex-1 ">
              <img src={debian} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 mt-5 block">
                Debian
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] py-5 px-4 rounded-md  text-center flex-1 ">
              <img src={centOS} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 mt-5 block">
                CentOS
              </small>
            </div>
            <div className="dark:bg-[#1A1B2E] py-5 px-4 rounded-md  text-center flex-1 ">
              <img src={openSuse} alt="" className="w-[50px] mx-auto" />
              <small className="dark:text-slate-100/80 mt-5 block">
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
