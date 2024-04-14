import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function MenuCard(props) {
  return (
  
      <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
        <div>
            <img src={props.img} className=" rounded-xl" />
        </div>
        <div className=" p-2 mt-5">
            <div className=" flex flex-row justify-between">
                <h3 className=" font-semibold text-xl">{props.title}</h3>
                <h3 className=" font-semibold text-xl">{props.value}</h3>
            </div>
            <div className="flex gap-2 my-4">
                <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg"> Hot</button>
                <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">Cold</button>
            </div>
            <span className=" flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer">
                <FaShoppingCart size={20}/>
            </span>
        </div>
      </div>
  
  );
}

export default MenuCard;
