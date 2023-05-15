import React from "react";
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import Search from "./Search";
import Favorite from "./Favorite";
import Cart from "./Cart";
import {MdOutlinePersonAddAlt} from "react-icons/md";


function Navigation() {
  return (
    <Wrapper style="">
      <div className="w-full h-[100px] flex justify-between items-center">
        {/* ===> logo */}
        <div className="w-[50px] h-[50px] relative cursor-pointer">
          <Image
            fill
            src="/Assets/logo.png"
            alt="logo"
            className="object-contain"
          />
        </div>
        {/* =====> search product or find category */}
        <Search />
        <div className="flex justify-center items-center gap-6">
        {/* =====> product added to favorite */}
        <Favorite/>
        {/* ======> product added to cart */}
        <Cart/>
        {/* ======> add account button */}
        <MdOutlinePersonAddAlt className="text-[30px] cursor-pointer"/>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navigation;
