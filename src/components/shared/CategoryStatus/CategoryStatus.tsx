import React from "react";
import Wrapper from "../ComponentWrapper/Wrapper";
import Link from "next/link";

function CategoryStatus() {
  return (
    <div className="w-full h-[90px] bg-white-off">
      <Wrapper style="h-full">
        <div className="w-full h-full flex sm:flex-row flex-col justify-center gap-2 sm:gap-0 sm:justify-between items-center">
          {/* ==> current category  */}
          <p className="text-[20px] text-black-main font-normal">Anime</p>
          {/* ===>  */}
          <div className="flex justify-center items-center gap-2">
            <Link href="/" className="text-white-cool text-[16px] font-inter">
              Home
            </Link>
            <p className="text-white-cool text-[14px] font-inter">/</p>
            <p className="text-black-main text-[16px] font-inter">
              Product Category
            </p>
            <p className="text-white-cool">/</p>
            <p className="text-black-main text-[16px] font-inter">Anime</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default CategoryStatus;
