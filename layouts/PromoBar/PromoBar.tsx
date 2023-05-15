
import React from "react";
import { RxCross2 } from "react-icons/rx";

function PromoBar() {
  return (
    <div className="w-full h-[40px] text-[14px] select-none font-medium text-white-main font-inter uppercase bg-main-brand flex justify-center items-center">
      free delivery on all overs above $20
      <RxCross2 className="text-[20px] cursor-pointer text-white-main absolute right-6 hover:scale-125 duration-300" />
    </div>
  );
}

export default PromoBar;
