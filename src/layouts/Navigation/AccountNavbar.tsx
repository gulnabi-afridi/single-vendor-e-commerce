import React from "react";
import Link from "next/link";
import { Data } from "../../../constants/Data/JSON";
import { useRouter } from "next/router";

const AccountNavbar = () => {
  const Router = useRouter();

  return (
    <div className="w-full h-[70px] bg-[#F1F2F4]">
      <div className="h-full w-full overflow-auto ThinScrollbar">
        <div className="w-full md:w-[60%] min-w-[700px] mx-auto h-full flex justify-between items-center md:px-0 px-4">
          {Data.AccountNavbar.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.route}
              className={`h-full flex items-center justify-center gap-2 font-inter font-[400] ${
                Router.pathname == item.route
                  ? "text-black-main after:w-full"
                  : "text-gray-400"
              } hover:text-black-main text-[17px] relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-main-brand hover:after:w-full after:duration-300 group`}
            >
              {item.name}
              {item.number && (
                <p
                  className={`h-[20px] w-[20px] flex items-center justify-center rounded-full ${
                    Router.pathname == item.route
                      ? "bg-black-main text-white-main"
                      : "bg-gray-300 text-gray-400"
                  } group-hover:bg-black-main group-hover:text-white-main group-hover:duration-500 text-[12px]`}
                >
                  {item.number}
                </p>
              )}
            </Link>
          ))}
          <button className="h-full flex items-center justify-center gap-2 font-inter font-[400] hover:text-black-main text-gray-400 text-[17px] relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-main-brand hover:after:w-full after:duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountNavbar;
