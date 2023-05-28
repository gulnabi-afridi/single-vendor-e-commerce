import React from "react";
import { BiSearch } from "react-icons/bi";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MUIPagination from "../Pagination/MUIPagination";

interface Props {
  Title: string;
  TableHeaders: Array<string>;
  children: React.ReactNode;
  GridCols: string;
  State: string;
  SetState: any;
  Pages: number;
  CurrentPage: number;
  OnPageChange: any;
}

const TableGrid: React.FC<Props> = ({
  Title,
  TableHeaders,
  GridCols,
  children,
  State,
  SetState,
  Pages,
  CurrentPage,
  OnPageChange
}: Props) => {
  return (
    <div className="w-full bg-[#F7F7F7] border-[1px] border-[#D1D9E2] rounded-[8px] Shadow">
      {/* table heading here */}
      <div className="w-full flex items-center justify-between border-b-[2px] border-gray p-4">
        <p className="font-inter capitalize font-medium text-black-main text-[16px]">
          {Title}
        </p>
        {/* search bar here */}
        <div className="w-[300px] flex items-center justify-center">
          <input
            value={State}
            onChange={SetState}
            className="w-[calc(100%-40px)] h-[40px] font-inter font-medium bg-white-main/60 text-black-main/50 text-[14px] focus:outline-none rounded-l-[5px] p-2 border-[1px] border-transparent focus:border-black-main placeholder:font-inter"
            type="text"
            placeholder="Search here..."
          />
          <button className="h-[40px] w-[40px] flex items-center justify-center rounded-r-[5px] text-white-main bg-black-main border-[3px] border-black-main">
            <BiSearch size={20} />
          </button>
        </div>
      </div>
      <div className="w-full overflow-auto HideScroll">
        {/* table columns here */}
        <div
          className={`w-full h-[50px] grid ${GridCols} min-w-[600px] border-b-[2px] border-gray p-4`}
        >
          {TableHeaders.map((item: string, index: any) => (
            <div
              key={index}
              className="w-full capitalize font-medium text-black-main text-[13px] font-inter"
            >
              {item}
            </div>
          ))}
        </div>
        {/* rows here */}
        {children}
      </div>
      <div>
        {/* pagination here */}
        <div className="w-full flex justify-center items-center p-4 ">
          <MUIPagination Pages={Pages} CurrentPage={CurrentPage} OnPageChange={OnPageChange} />
        </div>
      </div>
    </div>
  );
};

export default TableGrid;
