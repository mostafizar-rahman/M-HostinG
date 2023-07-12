import React, { useState } from 'react';

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
        <span className={`transform ${isOpen ? 'rotate-180' : ''} `}>
          &#8595;
        </span>
      </div>
      {isOpen && (
        <div className="pt-[10px] pb-[30px] dark:text-[#9193a8] text-base ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
