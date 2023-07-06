import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const BottomHeader = () => {
  return (
    <div className=" flex justify-between py-4">
      <div className="flex items-center space-x-2 dark:text-white">
        <FiPhoneCall className="dark:text-slate-100/80 text-sm" />
        <p className="text-sm">01555</p>
      </div>
      <nav>
        <ul className="flex space-x-3">
          <li>
            <Link className="dark:text-slate-100/80">Home</Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link className="dark:text-slate-100/80">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomHeader;
