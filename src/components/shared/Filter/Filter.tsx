import React, { useState } from "react";
import Wrapper from "../ComponentWrapper/Wrapper";
import { IoMdArrowDropdown } from "react-icons/io";

function Filter() {
  // ====> states
  const [booleanState, setBooleanState] = useState({
    allProducts: true,
    newProducts: false,
    saleProducts: false,
    dropDown: false,
  });

  return (
    <Wrapper style="h-[100px]">
      <div className="w-full h-full flex justify-between items-center">
        {/* ===> left portion */}
        <div className="flex justify-center items-center gap-14">
          <button
            onClick={() =>
              setBooleanState({
                ...booleanState,
                allProducts: true,
                newProducts: false,
                saleProducts: false,
              })
            }
            className={`capitalize text-black-main text-[16px] font-inter ${
              booleanState.allProducts
                ? "border-b-[2px] border-black-main"
                : "relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-black-main hover:after:w-full after:duration-200"
            }`}
          >
            all products
          </button>
          <button
            onClick={() =>
              setBooleanState({
                ...booleanState,
                newProducts: true,
                saleProducts: false,
                allProducts: false,
              })
            }
            className={`capitalize text-black-main text-[16px] font-inter ${
              booleanState.newProducts
                ? "border-b-[2px] border-black-main"
                : "relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-black-main hover:after:w-full after:duration-200"
            }`}
          >
            new products
          </button>
          <button
            onClick={() =>
              setBooleanState({
                ...booleanState,
                saleProducts: true,
                newProducts: false,
                allProducts: false,
              })
            }
            className={`capitalize text-black-main text-[16px] font-inter ${
              booleanState.saleProducts
                ? "border-b-[2px] border-black-main"
                : "relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-black-main hover:after:w-full after:duration-200"
            }`}
          >
            sale products
          </button>
        </div>
        {/* ====> right portion */}
        <div className="flex justify-center items-center gap-3">
          {/* ====> sorting select box */}
          <div className="flex flex-col justify-center items-center relative">
            <button
              onClick={() =>
                setBooleanState({
                    ...booleanState,
                    dropDown: !booleanState.dropDown,
                })
              }
              className="flex gap-2 text-[14px] text-white-cool font-inter capitalize w-full justify-between items-center"
            >
              default sorting
              <IoMdArrowDropdown className="text-white-cool text-[24px]" />
            </button>
            {/* ===  */}
            <div
              className={`w-[240px] shadow-2xl flex flex-col items-start gap-2 absolute top-10 z-10 bg-white-main p-3 ${
                booleanState.dropDown ? "flex" : "hidden"
              }`}
            >
              {sortingType.map((item, index) => {
                return <button>{item.name}</button>;
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const sortingType = [
  {
    name: "default sorting",
  },
  {
    name: "sort by popularity",
  },
  {
    name: "sort by latest",
  },
  {
    name: "sort by price: low to high",
  },
  {
    name: "sort by price: high to low",
  },
];

export default Filter;
