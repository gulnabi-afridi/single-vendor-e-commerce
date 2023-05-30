import React from "react";
import { IconButton } from "@mui/material";
import {BsThreeDots} from "react-icons/bs";

interface Props {
    name:string,
    date:string,
    showDetail:()=> void;
}

const CategoryRow = ({name,date,showDetail}:Props) => {
  return (
    <div className="w-full grid grid-cols-[1fr,1fr,.3fr] border-b-[1px] h-[44px]">
      {/* 1) category name */}
      <div className="w-full flex justify-start items-center">
        <p className="text-[14px] font-inter">{name}</p>
      </div>
      {/* 2) date */}
      <div className="w-full flex justify-start items-center">
        <p className="text-[14px] font-inter">{date}</p>
      </div>
      {/* 3) editable icon */}
      <div className="w-full flex justify-start items-center">
        <div className="w-[20px]">
          <IconButton onClick={showDetail}>
            <BsThreeDots size={15} className="text-black-main" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CategoryRow;
