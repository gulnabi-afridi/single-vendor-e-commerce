import Link from "next/link";
import React from "react";
import Image from "next/image";
import BadgeAvatars from "@/components/shared/Avatar/BadgeAvatars";
import { BiMenuAltLeft } from "react-icons/bi";
import { useRouter } from "next/router";
// import component 👇
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

const BuyerNavigationItems = [
  {
    Name: "Dashboard",
    Route: "/admin",
  },
  {
    Name: "Buyers",
    Route: "/admin/buyers",
  },
  {
    Name: "Orders",
    Route: "/admin/orders",
  },

  {
    Name: "Products",
    Route: "/admin/products",
  },
  {
    Name: "Categories",
    Route: "/admin/categories",
  },
  {
    Name: "Account",
    Route: "/admin/account",
  },
];

function AdminLeftNavigation() {
  const Router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleLogoutDialouge = () => {
    setIsLogoutOpen((prevState) => !prevState);
  };
  return (
    <div className="bg-gray-200/30">
      <div className="w-full md:h-full flex justify-between items-center md:flex-col md:p-5 px-4 py-2">
        <div className="md:flex hidden justify-start items-center flex-col gap-6">
          {/* Logo */}
          <Link href={"/"} className="relative w-[153px] h-[44px] ">
            <Image
              src={"/Assets/logo.png"}
              alt=""
              fill
              className="object-contain"
            />
          </Link>
          {/* Profile */}
          <div className="flex justify-center items-center flex-col">
            <p className="font-inter font-medium text-black-off text-[.875rem] leading-[1.25rem] mb-4">
              Welcome back
            </p>
            <BadgeAvatars alt="seo text will come here" />
            <h2 className="font-inter font-medium text-black-off text-[1.125rem] leading-[1.75rem] mt-1">
              UserName121
            </h2>
          </div>
          {/* NavItems */}
          <div className="flex justify-center items-center flex-col gap-3 mt-4">
            {BuyerNavigationItems?.map((item: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.Route}
                  className={` font-inter text-[13px] leading-[20px] font-normal ${
                    item.Route === Router.pathname
                      ? "text-main-brand border-b-[2px] border-black-main"
                      : "text-black-soft relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-main-brand after:transition-all after:duration-300 hover:after:w-full "
                  }`}
                >
                  {item.Name}
                </Link>
              );
            })}
            <button
            onClick={toggleLogoutDialouge}
              className={`relative font-inter text-[13px] leading-[20px] font-normal after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-main-brand after:transition-all after:duration-300 hover:after:w-full`}
            >
              Sign out
            </button>
          </div>
        </div>
        <Dialog
          open={isLogoutOpen}
          // onClose={handleClick}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "white",
              borderRadius: "0px",
              width: {
                md: "400px",
                xs: "100%",
              },
            },
            overflow: "hidden",
          }}
        >
          <div className="w-full h-full bg-white-off p-4 flex justify-center items-center flex-col gap-4">
            <button onClick={toggleLogoutDialouge} className={`self-end`}>
              <RxCross1 size={20}/>
            </button>
            <h3 className="font-inter font-semibold text-[24px] leading-[28px] text-black-off">
             Confirm Logout
            </h3>
            <div className="w-full h-[40px] grid grid-cols-2 mt-4 gap-4">
              <Link
                onClick={toggleLogoutDialouge}
                href={"/"}
                className="w-full h-full flex justify-center items-center text-white-main bg-black-main font-inter font-medium text-[1rem] leading-[1.25rem] rounded-[5px]"
              >
               Logout
              </Link>
              <button
                onClick={toggleLogoutDialouge}
                className="w-full h-full flex justify-center items-center text-white-main bg-red-main font-inter font-medium text-[1rem] leading-[1.25rem] rounded-[5px]"
              >
               Cancel
              </button>
            </div>
          </div>
        </Dialog>

        {/* For Phone */}
        {/* Logo */}
        <button className="md:hidden block" onClick={toggleDrawer}>
          <BiMenuAltLeft className="w-[24px] h-[24px] cursor-pointer" />
        </button>
        <Link
          href={"/"}
          className="md:hidden block relative w-[120px] h-[44px] "
        >
          <Image
            src={"/Assets/logo.png"}
            alt=""
            fill
            className="object-contain"
          />
        </Link>
      </div>
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          style={{ width: "75%" }}
        >
          <div className="w-full h-full flex justify-between items-center flex-col overflow-auto gap-4 p-4">
            <div className="flex justify-start items-center flex-col gap-6">
              {/* Logo */}
              <Link
                href={"/"}
                className="md:hidden block relative w-[120px] h-[44px] "
              >
                <Image
                  src={"/Assets/logo.png"}
                  alt=""
                  fill
                  className="object-contain"
                />
              </Link>
              {/* Profile */}
              <div className="flex justify-center items-center flex-col">
                <p className="font-inter font-medium text-black-off text-[.875rem] leading-[1.25rem] mb-4">
                  Welcome back
                </p>
                <BadgeAvatars alt="Sahal Imran" />
                <h2 className="font-inter font-medium text-black-off text-[1.125rem] leading-[1.75rem] mt-1">
                  Sahal Imran
                </h2>
              </div>
              {/* NavItems */}
              <div className="flex justify-center items-center flex-col gap-3 mt-4">
                {BuyerNavigationItems?.map((item: any, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={item.Route}
                      onClick={toggleDrawer}
                      className={`relative font-inter text-[13px] leading-[20px] font-normal after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-main-brand after:transition-all after:duration-300 hover:after:w-full ${
                        item.Route === Router.pathname
                          ? "text-main-brand"
                          : "text-black-soft"
                      }`}
                    >
                      {item.Name}
                    </Link>
                  );
                })}
                <button
                onClick={toggleLogoutDialouge}
                  className={`relative font-inter text-[13px] leading-[20px] font-normal after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-main-brand after:transition-all after:duration-300 hover:after:w-full`}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default AdminLeftNavigation;
