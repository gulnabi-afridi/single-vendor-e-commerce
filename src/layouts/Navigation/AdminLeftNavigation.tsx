import Link from "next/link";
import React from "react";
import Image from "next/image";
import BadgeAvatars from "../Buyer/BadgeAvatars";
import { useRouter } from "next/router";
// import component 👇
import Drawer from "react-modern-drawer";
import * as Icons from "../../SVG/Icons";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Data } from "../../constants/Data/JSON";

const BuyerNavigationItems = [
  {
    Name: "Dashboard",
    Route: "/admin/dashboard",
  },
  {
    Name: "Buyers",
    Route: "/admin/buyers",
  },
  {
    Name: "Sellers",
    Route: "/admin/sellers",
  },
  {
    Name: "Agents",
    Route: "/admin/agents",
  },
  {
    Name: "Tickets",
    Route: "/admin/tickets",
  },
  {
    Name: "Seller Applications",
    Route: "/admin/sellerapplications",
  },
  {
    Name: "Payments",
    Route: "/admin/payment",
  },
  {
    Name: "CMS",
    Route: "/admin/cms",
  },
];

function AdminLeftNavigation() {
  const Router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <div className="w-full md:h-full flex justify-between items-center md:flex-col md:p-5 px-4 py-2">
        <div className="md:flex hidden justify-start items-center flex-col gap-6">
          {/* Logo */}
          <Link href={"/"} className="relative w-[153px] h-[44px] ">
            <Image src={Data.logo.white} alt="" fill className="object-contain" />
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
                  className={`relative font-inter text-[13px] leading-[20px] font-normal after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-main-brand after:transition-all after:duration-300 hover:after:w-full ${item.Route === Router.pathname
                      ? "text-main-brand"
                      : "text-black-soft"
                    }`}
                >
                  {item.Name}
                </Link>
              );
            })}
            <button
              className={`relative font-inter text-[13px] leading-[20px] font-normal after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-main-brand after:transition-all after:duration-300 hover:after:w-full`}
            >
              Sign out
            </button>
          </div>
        </div>
        <Link
          href={"/"}
          className={`md:block hidden w-full bg-black-soft p-2 font-inter text-[13px] leading-[20px] text-white-main font-medium  capitalize text-center`}
        >
          Continue Shopping
        </Link>

        {/* For Phone */}
        {/* Logo */}
        <button className="md:hidden block" onClick={toggleDrawer}>
          <Icons.Menu
            ClassName="w-[24px] h-[24px] cursor-pointer"
            fill="#1D1D1D"
          />
        </button>
        <Link
          href={"/"}
          className="md:hidden block relative w-[120px] h-[44px] "
        >
          <Image src={"/logo.webp"} alt="" fill className="object-contain" />
        </Link>
      </div>

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
                src={"/logo.webp"}
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
                    className={`relative font-inter text-[13px] leading-[20px] font-normal after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-main-brand after:transition-all after:duration-300 hover:after:w-full ${item.Route === Router.pathname
                        ? "text-main-brand"
                        : "text-black-soft"
                      }`}
                  >
                    {item.Name}
                  </Link>
                );
              })}
              <button
                className={`relative font-inter text-[13px] leading-[20px] font-normal after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-main-brand after:transition-all after:duration-300 hover:after:w-full`}
              >
                Sign out
              </button>
            </div>
          </div>
          <Link
            href={"/"}
            className={`w-full bg-black-soft p-2 font-inter text-[13px] leading-[20px] text-white-main font-medium  capitalize text-center`}
          >
            Continue Shopping
          </Link>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default AdminLeftNavigation;
