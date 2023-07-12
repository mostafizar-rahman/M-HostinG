import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logol from "../../../assets/images/logo-l.png";
import logo2 from "../../../assets/images/logo-d.png";
const SingupForm = () => {
  return (
    <form className="w-[380px]  overflow-y-auto overflow-x-hidden lg:fixed top-5 lg:left-5  bottom-5 rounded-xl px-10 pt-[30px] pb-[100px] border dark:border-white/[.1] border-[#e2e9ee] dark:bg-[#0b0c1b] bg-white">
      <div className="relative">
        <Link to={"/"} className="mb-[90px] inline-flex">
          <img src={logol} alt="" className="w-10" />
          <img src={logo2} alt="" className="w-10" />
        </Link>
        <h3 className="text-[24px] font-bold dark:text-white text-[#0b0c1b] mb-[60px] leading-[1.2]">
          Welcome in <br /> Hostx Website
        </h3>
        <form className=" mt-10">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[54px] rounded-lg outline-none px-[20px] dark:bg-[#282a3f] bg-[#f4f8fb] border dark:border-white/[.1] border-[#e2e9ee] dark:text-white text-sm mb-[10px] "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[54px] rounded-lg outline-none px-[20px] dark:bg-[#282a3f] bg-[#f4f8fb] border dark:border-white/[.1] border-[#e2e9ee] dark:text-white text-sm mb-[10px] "
          />
          <div className="mt-[30px]">
            <button
              type="submit"
              className="bg-[#15CD72] w-full h-[54px] rounded-lg outline-none px-3  text-white font-semibold hover:bg-[#15ad61] duration-700 "
            >
              Login
            </button>
          </div>
        </form>
        <div className="dark:text-white text-center my-5 relative">
          <span className="after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[30%] after:h-[1px] after:dark:bg-white after:bg-black/[.2] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[30%] before:h-[1px] before:dark:bg-white before:bg-black/[.1]">
            Or sign up with
          </span>
        </div>
        {/* ---------- Social Singup */}
        <div className="flex justify-between space-x-4">
          <button className="rounded-full h-10 w-10 dark:text-white border flex items-center justify-center">
            <FaGoogle />
          </button>
          <button className="rounded-full h-10 w-10 dark:text-white border flex items-center justify-center">
            <FaGithub />
          </button>
        </div>
        <div className="mt-[45px] text-center">
          <small className="text-[#9193a8] font-medium">
            By signing up, you confirm our <br />{" "}
            <Link className="dark:text-white hover:underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link className="dark:text-white hover:underline">
              Privacy Policy
            </Link>
          </small>
        </div>
        <div className="bg-[#171827] w-[380px] fixed  left-5   bottom-5 py-[15px] rounded-br-xl rounded-bl-xl">
          <p className="text-[#9193a8] text-sm text-center">
            Have not account? <Link>Register</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SingupForm;
