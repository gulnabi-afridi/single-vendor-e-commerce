import React from "react";
import Link from "next/link";
import { Data } from "../../../constants/Data/JSON";
import { useRouter } from "next/router";
const BuyerSideBar = () => {
  const Router = useRouter();
  return (
    <div className="w-full flex flex-col justify-start items-start gap-8 border-r-[2px]">
      {Data.BuyerSidebar.map((item: any, index: number) => (
        <Link
          key={index}
          href={item.route}
          className={`font-inter font-medium ${
            Router.pathname == item.route ? "text-black-main" : "text-gray-400"
          } hover:text-black-main text-[15px] hover:duration-300 cursor-pointer`}
        >
          {item.name}
        </Link>
      ))}
      <button
        className={`font-inter font-medium text-gray-400 hover:text-black-main text-[15px] hover:duration-300 cursor-pointer`}
      >
        Logout
      </button>
    </div>
  );
};

export default BuyerSideBar;
