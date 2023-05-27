import React from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

interface Props {
  Title: string;
  ViewMoreLink: string;
  TableHeaders: Array<string>;
  children: React.ReactNode;
  GridCols: string;
}

const MiniGrid: React.FC<Props> = ({
  Title,
  ViewMoreLink,
  TableHeaders,
  GridCols,
  children,
}: Props) => {
  return (
    <div className="w-full bg-[#F7F7F7] rounded-[8px]  border-[1px] border-[#D1D9E2] Shadow">
      <div className="w-full flex items-center justify-between border-b-[2px] border-gray p-4">
        <p className="font-inter font-medium text-black-main text-[16px]">
          {Title}
        </p>

        <Link
          href={ViewMoreLink}
          className="h-[36px] w-[100px] flex  text-[13px] items-center justify-center bg-black-soft text-white-main font-medium font-inter"
        >
          View More
        </Link>
      </div>
      <div className="w-full overflow-auto HideScroll">
        <div
          className={`w-full h-[50px] grid ${GridCols} min-w-[600px] border-b-[2px] border-gray p-4`}
        >
          {TableHeaders.map((item: string, index: any) => (
            <div
              key={index}
              className="w-full  flex items-center justify-start font-medium text-black-main text-[13px] font-inter"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
};

export default MiniGrid;
