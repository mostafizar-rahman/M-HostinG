import React from "react";
import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <nav className="flex  items-center ">
      <b className="text-[#0b0c1b] text-base font-medium mr-[25px] relative after:absolute after:top-0 after:-right-[24px] after:w-[1px] after:h-full after:bg-[#0b0c1b]">
        Hosting / Servers
      </b>
      <ul className="flex justify-between items-center ml-[25px]">
        <li>
          <Link
            to={"/VPS-Hosting-Servers"}
            className="text-[15px] text-[#0b0c1b] mr-[25px] font-light active:border border-b-[#0b0c1b] active:font-medium"
          >
            VPS Hosting
          </Link>
        </li>
        <li>
          <Link to={"/Shared-Hosting-Services"} className="text-[15px] text-[#0b0c1b] mr-[25px] font-light">
            Shared Hosting
          </Link>
        </li>
        <li>
          <Link to={"/Dedicated-Hosting-Servers"} className="text-[15px] text-[#0b0c1b] mr-[25px] font-light">
            Dedicated Servers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SubNav;
