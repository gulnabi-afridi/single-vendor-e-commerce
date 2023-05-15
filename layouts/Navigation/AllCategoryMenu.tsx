import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import { Data } from "../../constants/Data/JSON";
import {BiMenuAltLeft} from "react-icons/bi";


const AllCategoriesMenu: React.FC = () => {

  const [ShowDropdownItem, Set_DropdownItem] = useState<boolean>(false);

  // =========> check when user click out side of menu close the menu
  let useClickOutside = (handler: any) => {
    let domNode = useRef<any>();
    useEffect(() => {
      let maybeHandler = (event: any) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });

    return domNode;
  };
  let domNode = useClickOutside(() => {
    Set_DropdownItem(false);
  });


  return (
    <div ref={domNode} className="h-[90%] relative w-[270px] self-end">
      <button
        onClick={() => Set_DropdownItem(!ShowDropdownItem)}
        className="bg-white-main w-full h-full flex justify-between items-center px-4 text-[14px] leading-[1.25rem] text-black-soft font-inter font-semibold rounded-tr-lg rounded-tl-lg"
      >
        <span className="flex justify-center items-center gap-2 capitalize">
            <BiMenuAltLeft className="text-[20px] cursor-pointer fill-main-brand"/>
          All Categories
        </span>
        <RiArrowDownSLine color="#1D1D1D" />
      </button>
      {ShowDropdownItem && (
        <div
          className="w-full bg-white-main relative z-50"
          style={{ boxShadow: "rgb(0 0 0 / 14%) 0px 15px 30px 0px" }}
        >
          {Data.topSection.AllCategories?.map((item: any, index: number) => {
            return (
              <Link
                onClick={() => Set_DropdownItem(!ShowDropdownItem)}
                key={index}
                href={item.path}
                className="w-full h-[40px] px-4 capitalize flex justify-start items-center text-[.75rem] leading-[1rem] font-inter font-normal text-black-soft gap-3 border-b-[1px] border-gray"
              >
                {/* {item.Icon} */}
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllCategoriesMenu;
