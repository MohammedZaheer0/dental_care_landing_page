import React from 'react'
const Button = ({text,customClass,ctaCustomClass}) => {
  return (
    <>
        <button className={`col-span-1 ${customClass} ${ctaCustomClass}`}><span className='border-[2px] border-[#89DB7B] p-4 px-7 rounded-full bg-[#89DB7B] hover:bg-[white] duration-300 lg:inline-block cursor-pointer'>{text}<i className="fa-solid fa-arrow-right rotate-45 ml-[5px]"></i></span></button> 
    </>
  )
}
export default Button
