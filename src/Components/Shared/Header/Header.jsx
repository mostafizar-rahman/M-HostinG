import React from "react";

import BottomHeader from "./BottomHeader/BottomHeader";
import TopHeader from "./TopHeader/TopHeader";

const Header = () => {
  return (
    <header className="px-14">
      <TopHeader/>
      <hr />
      <BottomHeader/>
    </header>
  );
};

export default Header;
