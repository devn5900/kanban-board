import React from "react";
import { FiLink2 } from "react-icons/fi";
import { TbPencil } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import p1 from "../../Images/p1.png";
import p2 from "../../Images/p2.png";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.png";
import { VscFilter } from "react-icons/vsc";
import {CiCalendarDate} from 'react-icons/ci'
import {FiUsers} from "react-icons/fi"
import DropDown from "../DropDown";
import {FaPause} from "react-icons/fa"
const RightBody = () => {
  const profiles = [
    { img: p1, class: "z-40  right-[0.5rem] " },
    { img: p2, class: "z-30  right-[0.5rem] relative" },
    { img: p3, class: "z-20  right-[0.5rem] relative" },
    { img: p4, class: "z-10 right-[0.5rem]  relative" },
  ];
  console.log(profiles);
  return (
    <div className="py-8 px-7">
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-3">
          <h1 className="text-[2.875rem] text-[#0D062D] capitalize font-semibold">
            Mobile App
          </h1>
          <div className=" bg-[#dfdaf4] rounded-md p-1">
            <TbPencil className="text-[#5030E5]" />
          </div>
          <div className=" bg-[#dfdaf4] rounded-md p-1">
            <FiLink2 className="text-[#5030E5]" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-[#dfdaf4] p-[0.1rem] rounded-sm">
              <AiOutlinePlus className="text-[#5030E5] text-xs font-extrabold" />
            </div>
            <p className="text-[#5030E5] font-medium">Invite</p>
          </div>
          <div className="flex items-center -space-x-2">
            {profiles.map((el, i) => {
              return (
                <img
                  className="w-10 h-10 border-2 border-white rounded-full "
                  src={el.img}
                  alt=""
                />
              );
            })}
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-[#D25B68] bg-[#F4D7DA] border-2 border-white rounded-full "
              href="#"
            >
              +2
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-6">
        <div className="flex items-center gap-5">
        <DropDown icons={<VscFilter className="mr-2 text-base" />} drop={true} text={"Filter"} />
            <DropDown icons={<CiCalendarDate className="mr-2 text-base" />} drop={true} text={"Today"} />
        </div>
        <div className="flex items-center gap-5">
            <DropDown icons={<FiUsers className="mr-2 text-base" />} drop={false} text={"Share"} />
            <div className="flex items-center justify-center">
            <div className="bg-[#787486] text-[#787486] inline-block h-[2.3rem] min-h-full w-[0.1rem] self-stretch opacity-100 "></div>
            </div>
            <div className="w-[2.5rem] h-[2.5rem] bg-[#5030E5] rounded-lg flex items-center justify-center">
              <FaPause className="origin-center rotate-90 text-white text-lg "/>
            </div>
            <div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1949 7.99994C16.5756 7.99994 17.6949 6.88065 17.6949 5.49994C17.6949 4.11923 16.5756 2.99994 15.1949 2.99994C13.8142 2.99994 12.6949 4.11923 12.6949 5.49994C12.6949 6.88065 13.8142 7.99994 15.1949 7.99994Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.50001 7.99994C6.88072 7.99994 8 6.88065 8 5.49994C8 4.11923 6.88072 2.99994 5.50001 2.99994C4.11929 2.99994 3 4.11923 3 5.49994C3 6.88065 4.11929 7.99994 5.50001 7.99994Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1949 17.9999C16.5756 17.9999 17.6949 16.8807 17.6949 15.4999C17.6949 14.1192 16.5756 12.9999 15.1949 12.9999C13.8142 12.9999 12.6949 14.1192 12.6949 15.4999C12.6949 16.8807 13.8142 17.9999 15.1949 17.9999Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.50001 17.9999C6.88072 17.9999 8 16.8807 8 15.4999C8 14.1192 6.88072 12.9999 5.50001 12.9999C4.11929 12.9999 3 14.1192 3 15.4999C3 16.8807 4.11929 17.9999 5.50001 17.9999Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            </div>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
