import React, { useState } from "react";
import Wrapper from "../ComponentWrapper/Wrapper";
import { IoMdArrowDropdown } from "react-icons/io";
import OutSideClick from "@/hooks/OutSideClick";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BiGridSmall } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { BiFilterAlt } from "react-icons/bi";

function Filter() {
  // ====> states
  const [booleanState, setBooleanState] = useState({
    allProducts: true,
    newProducts: false,
    saleProducts: false,
    dropDown: false,
    sixGidLayout: false,
    fiveGridLayout: false,
    fourGridLayout: true,
  });

  const [sorting, setSorting] = useState("default sorting");

  return (
    <Wrapper style="h-[100px]">
      <div className="w-full h-full flex justify-between items-center">
        {/* ===> left portion */}
        <div className="hidden sm:flex justify-center items-center gap-6 md:gap-14">
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
        <div className="sm:w-auto w-full flex justify-center items-center gap-3">
          {/* ====> sorting select box */}
          <div className="w-full flex justify-between items-center">
            <div className="lg:flex sm:hidden flex flex-col justify-center items-center relative">
              <button
                onClick={() =>
                  setBooleanState({
                    ...booleanState,
                    dropDown: !booleanState.dropDown,
                  })
                }
                className="flex gap-2 text-[14px] text-white-cool font-inter capitalize w-full justify-between items-center"
              >
                {sorting}
                <IoMdArrowDropdown
                  className={`text-white-cool text-[24px] ${
                    booleanState.dropDown && "rotate-180"
                  }`}
                />
              </button>
              {/* ===  */}
              {booleanState.dropDown && (
                <OutSideClick
                  style="w-[240px] shadow-2xl flex flex-col absolute top-10 z-10 bg-white-main"
                  Event={() =>
                    setBooleanState({
                      ...booleanState,
                      dropDown: false,
                    })
                  }
                >
                  {sortingType.map((item, index) => {
                    return (
                      <button
                        onClick={() => {
                          setSorting(item.name);
                          setBooleanState({
                            ...booleanState,
                            dropDown: false,
                          });
                        }}
                        className={`hover:bg-black-main ${
                          sorting === item.name
                            ? "bg-black-main text-white-main"
                            : "text-black-main bg-white-main"
                        } text-[16px] w-full flex justify-start items-center px-4 capitalize h-[46px] hover:text-white-main`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </OutSideClick>
              )}
            </div>
            {/* ===> filter for small screen */}
            <button className="lg:hidden flex justify-center items-center gap-2">
              <BiFilterAlt className="text-white-cool cursor-pointer text-[28px]" />
              <p className="text-[16px] text-white-cool font-inter font-medium capitalize">
                filter
              </p>
            </button>
          </div>
          {/* ===> divider */}
          <div className="lg:flex hidden w-[2px] h-[22px] border-[1px] bg-white-cool"></div>
          {/* ====> view icons*/}
          <div className="lg:flex hidden justify-center items-center gap-6">
            <BsGrid3X3GapFill
              onClick={() =>
                setBooleanState({
                  ...booleanState,
                  sixGidLayout: true,
                  fourGridLayout: false,
                  fiveGridLayout: false,
                })
              }
              className={`${
                booleanState.sixGidLayout
                  ? "text-black-main"
                  : "text-white-cool"
              } hover:text-black-main text-[18px] cursor-pointer`}
            />
            <BiGridSmall
              onClick={() =>
                setBooleanState({
                  ...booleanState,
                  sixGidLayout: false,
                  fourGridLayout: false,
                  fiveGridLayout: true,
                })
              }
              className={`${
                booleanState.fiveGridLayout
                  ? "text-black-main"
                  : "text-white-cool"
              } hover:text-black-main text-[30px] cursor-pointer`}
            />
            <GoPrimitiveDot
              onClick={() =>
                setBooleanState({
                  ...booleanState,
                  sixGidLayout: false,
                  fourGridLayout: true,
                  fiveGridLayout: false,
                })
              }
              className={`${
                booleanState.fourGridLayout
                  ? "text-black-main"
                  : "text-white-cool"
              } hover:text-black-main text-[30px] cursor-pointer`}
            />
          </div>

          {/* ===> divider */}
          <div className="lg:flex hidden w-[2px] h-[22px] border-[1px] bg-white-cool"></div>
          {/* ====> filter */}
          <button className="lg:flex hidden justify-center items-center gap-2">
            <BiFilterAlt className="text-white-cool cursor-pointer text-[28px]" />
            <p className="text-[16px] text-white-cool font-inter font-medium capitalize">
              filter
            </p>
          </button>
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
