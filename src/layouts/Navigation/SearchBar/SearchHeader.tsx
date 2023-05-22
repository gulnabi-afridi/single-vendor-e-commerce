import React from "react";
import Wrapper from "../../../components/shared/ComponentWrapper/Wrapper"
import Image from "next/image";
import Search from "./Search";
import Favorite from "./Favorite";
import Cart from "./Cart";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { Data } from "../../../../constants/Data/JSON";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import Divider from '../../../components/shared/Divider/Divider'

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import DialougeWrapper from "@/components/shared/DialogueWrapper/DialougeWrapper";



function SearchHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [IsMainMenu, setMainMenu] = React.useState(true);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper style="">
      <div className="w-full h-[100px] flex justify-between items-center">
        {/* ======> for small screem */}
        <BiMenuAltLeft
          onClick={toggleDrawer}
          className="text-[40px] sm:text-[50px] text-black-main lg:hidden block"
        />
        {/* ===> logo */}
        <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] relative cursor-pointer">
          <Image
            fill
            src="/Assets/logo.png"
            alt="logo"
            className="object-contain"
          />
        </div>
        {/* =====> search product or find category */}
        <div className="lg:flex hidden justify-center items-center">
          <Search />
        </div>
        <div className="flex justify-center items-center gap-4 sm:gap-6">
          {/* =====> product added to favorite */}
          <div className="lg:block hidden">
            <Favorite />
          </div>
          {/* ======> product added to cart */}
          <div className="lg:block hidden">
            <Cart />
          </div>
          {/* ======> add account button */}
          <MdOutlinePersonAddAlt onClick={()=> setOpen(true)} className="text-[28px] sm:text-[30px] cursor-pointer" />
        </div>
      </div>
      {/* ===> search bar for small screen */}
      <div className="w-full lg:hidden flex justify-center items-center mb-10">
        <Search />
      </div>
      {/* ======> drawer for small screen */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{ width: "75%" }}
      >
        <div className="w-full h-full p-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <Favorite />
              <Cart />
            </div>
            <button onClick={toggleDrawer}>
              <RxCross2 className="text-[34px] cursor-pointer text-main-brand" />
            </button>
          </div>
          <div className={`w-full flex justify-center items-center my-3`}>
            <button
              onClick={() => setMainMenu(true)}
              className={`font-inter text-[1rem] leading-[1.5rem] ${
                IsMainMenu ? "text-black-off" : "text-black-cool"
              } capitalize font-semibold`}
            >
              Menu
            </button>
            <Divider styles="w-[1px] h-[18px] bg-main-brand mx-4 " />
            <button
              onClick={() => setMainMenu(false)}
              className={`font-inter text-[1rem] leading-[1.5rem] ${
                !IsMainMenu ? "text-main-brand" : "text-main-brand/40"
              } capitalize font-semibold`}
            >
              All categories
            </button>
          </div>
          {!IsMainMenu ? (
            <div>
              {Data.topSection.AllCategories?.map((item: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className="w-full h-[44px] px-4 flex justify-start items-center text-[.9rem] leading-[1rem] font-inter font-normal text-black-soft gap-3 border-b-[1px] border-gray"
                  >
                    {item.Icon}
                    {item.Name}
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center items-start flex-col w-full">
              {Data.topSection.Menu.map((item: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className="w-full h-[44px] px-4 capitalize flex justify-start items-center text-[.9rem] leading-[1rem] font-inter font-normal text-black-soft gap-3 border-b-[1px] border-gray"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </Drawer>
      <div>
  
      <DialougeWrapper open={open} setState={()=> setOpen(false)} title="My Account">
<div className="w-full md:w-[60%] flex flex-col items-center justify-center gap-4 mx-auto">
<div className="w-full flex items-center justify-center gap-4">
<button className="font-inter font-medium text-black-main text-[20px]">Login</button>
</div>
</div>
      </DialougeWrapper>
    </div>
    </Wrapper>
  );
}

export default SearchHeader;