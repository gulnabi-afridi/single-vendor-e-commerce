
import React from "react";
import Wrapper from "../ComponentWrapper/Wrapper";
import Image from "next/image";
import Search from "../Search/Search";

function NavigationBar() {
  return (
    <Wrapper style="">
      <div className="w-full h-[100px] flex justify-between items-center">
        {/* ===> logo */}
        <div className="w-[50px] h-[50px] relative">
          <Image fill src="/Assets/logo.png" alt="logo" className="object-contain" />
        </div>
        {/* =====> search product or find category */}
        <Search/>
      </div>
    </Wrapper>
  );
}

export default NavigationBar;
