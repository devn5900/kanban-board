import React, { useState } from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
const SidebarChild = ({bgColor,text}) => {
  const [hide,setHide]= useState(false);
  return (
    <div className="flex rounded-sm items-center p-3 cursor-pointer hover:bg-[#5030E514] justify-between" onMouseEnter={()=>setHide(true)} onMouseLeave={()=>setHide(false)}>
    <div className='flex items-center gap-2'>
    <span className={`rounded-full w-2 h-2 ${bgColor}`}></span>  
  <p className={`text-base ${!hide?"text-[#787486]":"text-[#0D062D]"} font-inter font-medium hover:font-semibold`}>{text}</p>        
    </div>
 {hide&&
  <span ><BiDotsHorizontalRounded  className=" text-base font-extrabold font-inter text-[#0D062D] tracking-[0.07rem] " /></span>
  } </div>
  )
}

export default SidebarChild