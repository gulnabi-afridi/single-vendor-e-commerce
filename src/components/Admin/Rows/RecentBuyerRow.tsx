import React from "react";
import { IconButton } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  name: string;
  address: string;
  purchasedProducts: number;
  amountSpent: string;
}

const RecentBuyerRow: React.FC<Props> = ({
  name,
  address,
  purchasedProducts,
  amountSpent,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1fr,1.5fr,1fr,1fr,.5fr] min-w-[600px] border-b-[2px] border-gray px-4 py-3">
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-semibold text-black-main text-[11px] capitalize">
          {name}
        </p>
      </div>
      {/* order Id here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {address}
        </p>
      </div>
      {/*quantiti here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {purchasedProducts}
        </p>
      </div>
      {/* order status here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {amountSpent} $
        </p>
      </div>
      <div className="w-full flex items-center justify-start">
        <IconButton>
          <button
            onClick={() => {}}
            className="h-[24px] w-[24px] flex items-center justify-center text-black-main rounded-[5px] bg-gray"
          >
            <BsThreeDots size={15} />
          </button>
        </IconButton>
      </div>
    </div>
  );
};

export default RecentBuyerRow;
