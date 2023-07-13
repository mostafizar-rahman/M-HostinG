import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-white/[.1] ">
      <div
        className="flex justify-between items-center py-5  cursor-pointer "
        onClick={toggleAccordion}
      >
        <h3 className="text-base dark:text-white font-medium">{title}</h3>
        <div className="relative after:absolute after:left-0 after:w-[10px] after:h-[1px] after:bg-white"></div>
      </div>

      <div
        className={` dark:text-[#9193a8] text-base   ${
          isOpen ? "pt-[10px] pb-[30px] h-full visible transition-all" : "h-0 invisible  transition-all"
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
