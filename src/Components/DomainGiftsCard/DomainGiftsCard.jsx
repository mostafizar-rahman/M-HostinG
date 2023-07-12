import React from 'react'

const DomainGiftsCard = ({icon, title, info}) => {
  return (
    <div className='mb-[60px]'>
      <img src={icon} alt="" className='w-12 mb-[25px]' />
      <h4 className='text-lg font-semibold text-white mb-[10px]'>{title}</h4>
      <p className='font-medium text-[15px] text-[#9193a8] leading-[1.7]'>{info}</p>
    </div>
  )
}

export default DomainGiftsCard