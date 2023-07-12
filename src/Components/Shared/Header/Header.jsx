import React from "react";

import BottomHeader from "./BottomHeader/BottomHeader";
import TopHeader from "./TopHeader/TopHeader";

const Header = () => {
  return (
    <header className="max-w-[1600px] mx-auto md:px-14 px-5 dark:bg-[#0b0c1b]">
      <TopHeader />
      <div className="border-b border-b-[#ffffff1a] " />
      <BottomHeader />
    </header>
  );
};

export default Header;
