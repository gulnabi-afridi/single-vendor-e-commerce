import React, { useState } from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import Search from "./Search";
import Favorite from "./Favorite";
import Cart from "./Cart";
import { BsPerson } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { Data } from "../../../constants/Data/JSON";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import Divider from "@/components/shared/Divider/Divider";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import DialougeWrapper from "@/components/shared/DialogueWrapper/DialougeWrapper";
import TextInput from "@/components/shared/Inputs/TextInput";

function SearchHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [IsMainMenu, setMainMenu] = React.useState(true);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  // state for opening all the dailogues
  const [open, setOpen] = React.useState({
    account: false,
    wishlist: false,
    cart: false,
  });
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [loginInputs, setLoginInputs] = useState({
    userName: "",
    password: "",
  });
  const [registerInputs, setRegisterInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handleLoginInputs = (e: any) => {
    const { name, value } = e.target;
    setLoginInputs({ ...loginInputs, [name]: value });
  };
  const handleRegisterInputs = (e: any) => {
    const { name, value } = e.target;
    setRegisterInputs({ ...registerInputs, [name]: value });
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
            <Favorite
              open={open.wishlist}
              setOpen={() => setOpen({ ...open, wishlist: true })}
              onClose={() => setOpen({ ...open, wishlist: false })}
            />
          </div>
          {/* ======> product added to cart */}
          <div className="lg:block hidden">
            <Cart
              open={open.cart}
              setOpen={() => setOpen({ ...open, cart: true })}
              onClose={() => setOpen({ ...open, cart: false })}
            />
          </div>
          {/* ======> add account button */}
          <BsPerson
            onClick={() => setOpen({ ...open, account: true })}
            className="text-[28px] sm:text-[30px] cursor-pointer"
          />
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
              <Favorite
                open={open.wishlist}
                setOpen={() => setOpen({ ...open, wishlist: true })}
                onClose={() => setOpen({ ...open, wishlist: false })}
              />
              <Cart
                open={open.cart}
                setOpen={() => setOpen({ ...open, cart: true })}
                onClose={() => setOpen({ ...open, cart: false })}
              />
            </div>
            <button onClick={toggleDrawer}>
              <RxCross2 className="text-[34px] cursor-pointer text-main-brand" />
            </button>
          </div>
          <div className={`w-full flex justify-center items-center my-6`}>
            <button
              onClick={() => setMainMenu(true)}
              className={`font-inter text-[1rem] leading-[1.5rem] ${
                IsMainMenu ? "text-main-brand" : "text-main-brand/40"
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
              {Data.topSection.AllCategories?.map(
                (item: any, index: number) => {
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
                }
              )}
            </div>
          ) : (
            <div className="flex justify-center items-start flex-col w-full">
              {Data.topSection.Menu.map((item: any, index: number) => {
                return (
                  <Link
                    onClick={toggleDrawer}
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
        {/* Account login and resgistration dialogue */}
        <DialougeWrapper
          open={open.account}
          setState={() => setOpen({ ...open, account: false })}
          title="My Account"
        >
          <div className="w-full md:w-[40%] flex flex-col items-center justify-center gap-12 mx-auto">
            <div className="w-full flex items-center justify-center gap-10">
              <button
                onClick={() => setIsLogin(true)}
                className={`h-[40px] w-[80px] font-inter font-medium text-black-main text-[20px] relative after:absolute ${
                  isLogin ? "after:w-full" : "after:w-0"
                } after:bottom-0 after:left-0 after:h-[2px] after:bg-main-brand after:z-10 hover:after:w-full after:duration-300 transition-all`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`h-[40px] w-[90px] font-inter font-medium text-black-main text-[20px] relative after:absolute ${
                  !isLogin ? "after:w-full" : "after:w-0"
                } after:bottom-0 after:left-0 after:h-[2px] after:bg-main-brand after:z-10 hover:after:w-full after:duration-300 transition-all`}
              >
                Register
              </button>
            </div>
            {/* login Form */}
            {isLogin && (
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full flex flex-col items-center justify-center gap-10"
              >
                <TextInput
                  state={loginInputs.userName}
                  IsCompulsory={true}
                  placeholder="Enter Name Here"
                  Type="text"
                  Name="userName"
                  SetState={handleLoginInputs}
                  label="User Name"
                />
                <TextInput
                  state={loginInputs.password}
                  IsCompulsory={true}
                  placeholder="Enter Password Here"
                  Type="password"
                  Name="password"
                  SetState={handleLoginInputs}
                  label="Password"
                />
                <button
                  type="submit"
                  className="h-[50px] w-full relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize"
                >
                  Login
                </button>
              </form>
            )}

            {/* RegisterForm */}
            {!isLogin && (
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full flex flex-col items-center justify-center gap-10"
              >
                <TextInput
                  state={registerInputs.userName}
                  IsCompulsory={true}
                  placeholder="Enter Name Here"
                  Type="text"
                  Name="userName"
                  SetState={handleRegisterInputs}
                  label="User Name"
                />
                <TextInput
                  state={registerInputs.email}
                  IsCompulsory={true}
                  placeholder="Enter Email Here"
                  Type="email"
                  Name="email"
                  SetState={handleRegisterInputs}
                  label="Email"
                />
                <TextInput
                  state={registerInputs.password}
                  IsCompulsory={true}
                  placeholder="Enter Password Here"
                  Type="password"
                  Name="password"
                  SetState={handleRegisterInputs}
                  label="Password"
                />
                <button
                  type="submit"
                  className="h-[50px] w-full relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize"
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </DialougeWrapper>
      </div>
    </Wrapper>
  );
}

export default SearchHeader;
