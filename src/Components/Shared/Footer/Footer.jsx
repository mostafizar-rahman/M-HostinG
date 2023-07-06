import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-[60px]">
      <div className="max-w-[1400px] mx-auto px-14 ">
        <div className="grid grid-cols-6">
          <ul>
            <li className="mb-5">
              <b className="text-white ">About HostX</b>
            </li>
            <li>
              <Link className="text-slate-100/80 text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-slate-100/80 text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-slate-100/80 text-sm hover:underline">
                About Us
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-5">
              <b className="text-white ">Help Center</b>
            </li>
            <li>
              <Link className="text-slate-100/80 text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-slate-100/80 text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-slate-100/80 text-sm hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
