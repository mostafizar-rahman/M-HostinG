import React from 'react'
import { BsCheck } from 'react-icons/bs'

const HostingFeature = () => {
  return (
    <ul className="flex justify-center">
    <li className="flex items-center mx-[12px] my-[6px]">
      <span className="w-4 h-4 rounded-full bg-[#0060fe] mr-[10px]">
        <BsCheck className="text-white" />
      </span>
      <span className="dark:text-[#9193a8] text-[#001033] text-sm font-medium">Backups monthly</span>
    </li>
    <li className="flex items-center mx-[12px] my-[6px]">
      <span className="w-4 h-4 rounded-full bg-[#0060fe] mr-[10px]">
        <BsCheck className="text-white" />
      </span>
      <span className="dark:text-[#9193a8] text-[#001033] text-sm font-medium">Free white-glove migrations</span>
    </li>
    <li className="flex items-center mx-[12px] my-[6px]">
      <span className="w-4 h-4 rounded-full bg-[#0060fe] mr-[10px]">
        <BsCheck className="text-white" />
      </span>
      <span className="dark:text-[#9193a8] text-[#001033] text-sm font-medium">Staging enviroments, ande more.</span>
    </li>
  </ul>
  )
}

export default HostingFeature