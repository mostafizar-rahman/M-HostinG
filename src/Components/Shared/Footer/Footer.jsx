import React from "react";
import { Link } from "react-router-dom";
import bgShape from "../../../assets/images/shape.png";
import {BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoReddit} from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="bg-black py-[60px]">
      <div className=" px-14 ">
        {/* -------------- Top Footer-----  */}
        <div className="flex justify-between flex-wrap pb-5">
          <ul className="pb-[18px] w-full  md:w-[30%] xl:w-auto ">
            <li className="mb-5">
              <b className="text-white ">About HostX</b>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Newsroom
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Investor Relations
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Careers
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Corporate Responsibility
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Trust Center
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Legal
              </Link>
            </li>
          </ul>
          <ul className="pb-[18px] w-full  md:w-[30%] xl:w-auto ">
            <li className="mb-5">
              <b className="text-white ">Help Center</b>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Help Center
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Community
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                M-HostinG Blog
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Contact Us
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Report Abuse
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Resources
              </Link>
            </li>
          </ul>
          <ul className="pb-[18px] w-full  md:w-[30%] xl:w-auto ">
            <li className="mb-5">
              <b className="text-white ">Resources</b>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Webmail
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                WHOIS
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                HostX Mobile App
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                ICANN Confirmation
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Designers & Developers
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Corporate Domains
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Redeem Code
              </Link>
            </li>
          </ul>
          <ul className="pb-[18px] w-full  md:w-[30%] xl:w-auto ">
            <li className="mb-5">
              <b className="text-white ">Partner Programs</b>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Affiliates
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Reseller Programs
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                M-Hosting Pro
              </Link>
            </li>
          </ul>
          <ul className="pb-[18px] w-full  md:w-[30%] xl:w-auto ">
            <li className="mb-5">
              <b className="text-white ">Account</b>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                My Products
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Renewals & Billing
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Create Account
              </Link>
            </li>
          </ul>
          <ul className="pb-[18px] w-full  md:w-[30%] xl:w-auto ">
            <li className="mb-5">
              <b className="text-white ">Shopping</b>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Domain Search
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Websites
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                WordPress
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Hosting
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Web Security
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Email & Office
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Phone Numbers
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-slate-100/80 text-sm hover:underline">
                Promos
              </Link>
            </li>
          </ul>
        </div>

        {/* --------------- Middle Footer */}
        <div
          className="py-[30px] px-10 rounded-md bg-[#2C2891] flex lg:flex-row flex-col justify-between md:items-start items-center"
          style={{
            backgroundImage: `url(${bgShape})`,
            backgroundSize: "contain",
            backgroundPosition: "right bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center md:text-start">
            <h2 className="text-white md:text-[26px] text-[22px] font-semibold mb-4">
              Switch to Pro Plan today and <br /> save up to 30% off
            </h2>
            <p className="text-slate-100/80 md:text-base text-sm max-w-lg">
              Check which version are available to upgrade to and validate
              wheter your current subscription is upgradeable.
            </p>
          </div>
          <div className="mt-11">
            <Link className="h-[46px] lg:h-[54px] inline-flex justify-center items-center px-[26px] lg:px-[36px] bg-[#0060fe] border-none text-white text-[15px] font-semibold rounded-sm hover:bg-[#211df4] duration-700">
              UPGRADE MY PLAN
            </Link>
          </div>
        </div>

        {/* ---------------- Bottom Footer */}
        <div className="mt-[60px]">
          <div className="lg:flex items-start justify-between">
            <div className="lg:flex lg:space-x-7 space-x-0">
              <Link className="text-white text-3xl font-bold">M-HostinG</Link>
              <div>
                <ul className="flex flex-wrap">
                  <li className="border-r pr-3 ">
                    <Link className="text-white text-[13px] font-semibold  whitespace-nowrap">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="border-r px-3 ">
                    <Link className="text-white text-[13px] font-semibold  whitespace-nowrap">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="border-r px-3 ">
                    <Link className="text-white text-[13px] font-semibold  whitespace-nowrap ">
                      Trademarks
                    </Link>
                  </li>
                  <li className="pl-3">
                    <Link className="text-white text-[13px] font-semibold  whitespace-nowrap">
                      License Agreements
                    </Link>
                  </li>
                </ul>
                <small className="text-slate-100/80">
                  Copyright © 2021, HostX Operating Company, LLC. All Rights
                  Reserved. The HostX word mark is a registered trademark of
                  HostX Operating Company,
                </small>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <ul className="flex space-x-3">
                <li>
                  <Link className="w-7 h-7 rounded-full bg-white hover:bg-slate-200 flex justify-center items-center">
                    <BiLogoFacebook className="text-xl"/>
                  </Link>
                </li>
                <li>
                  <Link className="w-7 h-7 rounded-full bg-white hover:bg-slate-200 flex justify-center items-center">
                    <BiLogoLinkedin  className="text-xl"/>
                  </Link>
                </li>
                <li>
                  <Link className="w-7 h-7 rounded-full bg-white hover:bg-slate-200 flex justify-center items-center">
                    <BiLogoTwitter  className="text-xl"/>
                  </Link>
                </li>
                <li>
                  <Link className="w-7 h-7 rounded-full bg-white hover:bg-slate-200 flex justify-center items-center">
                    <BiLogoReddit  className="text-xl"/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ------- */}
          <div className="lg:flex justify-between mt-[30px]">
            <p>
              <small className="text-slate-100/80 font-medium ">
                Use of this Site is subject to express terms of use. <br /> By using
                this site, you signify that you agree to be bound by these{" "}
                <Link className="text-white font-semibold hover:underline">
                  Universal Terms of Service.
                </Link>
              </small>
            </p>

            <p>
              <small className="text-slate-100/80 font-medium">
                Developed by{" "}
                <Link className="text-white font-semibold hover:underline">
                  Nifty Theme
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
