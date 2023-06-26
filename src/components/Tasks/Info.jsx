import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
const Info = ({color,text,icon,lineColor , length}) => {
  return (
    <>
    <div className='flex items-center justify-between '>
        <div className='flex items-center gap-2'>
            <span className={` rounded-md w-2 h-2  ${color}`}></span>
            <p className='text-[#0D062D] text-base font-medium font-inter'>{text}</p>
            <p className='text-[#625F6D] text-xs bg-[#E0E0E0] rounded-full px-1.5 py-0.5 '>{length}</p>
        </div>
        {
            icon && <div className="bg-[#dfdaf4] p-[0.1rem] rounded-sm">
            <AiOutlinePlus className="text-[#5030E5] text-xs font-extrabold" />
          </div>
        }
  </div>
  <div className={`m-auto h-[0.2rem] w-full mt-5 mb-3 ${lineColor||color}`}></div>
  </>
  )
}

export default Info