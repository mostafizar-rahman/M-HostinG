import React from "react";

import BottomHeader from "./BottomHeader/BottomHeader";
import TopHeader from "./TopHeader/TopHeader";

const Header = () => {
  return (
    <header className=" dark:bg-[#0b0c1b]">
      <div className="max-w-[1500px] mx-auto lg:px-14 px-5">
      <TopHeader />
      <div className="border-b border-b-[#ffffff1a] " />
      <BottomHeader />
      </div>
    </header>
  );
};

export default Header;
