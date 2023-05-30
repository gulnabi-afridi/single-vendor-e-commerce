import React from "react";
import CategoryRow from "@/components/Admin/Rows/CategoryRow";

const Category = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full border-[1px] bg-[#F7F7F7] rounded-[5px] Shadow">
        <p className="w-full h-[44px] text-center flex justify-center items-center text-[22px] text-black-main capitalize border-b-[1px] font-medium">
          All category
        </p>
        <div className="w-full grid grid-cols-[1fr,1fr,.3fr] border-b-[1px] px-4">
          {/* => 1 category name */}
          <p className="capitalize text-[16px] flex font-medium justify-start items-center text-black-main font-inter h-[44px]">
            category name
          </p>
          {/* 2  date */}
          <p className="capitalize text-[16px] flex font-medium justify-start items-center text-black-main font-inter h-[44px]">
            date
          </p>
          {/* 3) action */}
          <p className="capitalize text-[16px] flex font-medium justify-start items-center text-black-main font-inter h-[44px]">
            action
          </p>
        </div>
        {/* ===> categories row */}
        <div className="w-full h-full HideScroll flex flex-col px-4">
          <div className="w-full h-[calc(100%-100px)] overflow-auto HideScroll">
            {productCategory.map((item, index) => {
              return (
                <CategoryRow key={index} name={item.name} date={item.date} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const productCategory = [
  {
    name: "t-shirts",
    date: "28.04.2021",
  },
  {
    name: "switters",
    date: "28.04.2021",
  },
  {
    name: "polo shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "t-shirts",
    date: "28.04.2021",
  },
  {
    name: "switters",
    date: "28.04.2021",
  },
  {
    name: "polo shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
];

export default Category;
