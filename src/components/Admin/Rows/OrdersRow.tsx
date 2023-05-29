import React from "react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { IconButton } from "@mui/material";

interface Props {
  picture: string;
  name: string;
  orderId: string;
  qty: number;
  status: string;
  purchasedData: string;
}

const RecentOrdersRow: React.FC<Props> = ({
  picture,
  name,
  orderId,
  qty,
  status,
  purchasedData,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1fr,1fr,1fr,1fr,.5fr] min-w-[600px] border-b-[2px] border-gray px-4 py-1">
      <div className="w-full flex items-center justify-start gap-2">
        <div className=" w-[36px]  h-[36px] rounded-full relative">
          <Image className="rounded-full" src={picture} alt="" fill />
        </div>
        <p className="font-inter font-semibold text-black-main text-[11px]">
          {name}
        </p>
      </div>
      {/* order Id here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {orderId}
        </p>
      </div>
      {/* => purchase date here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {purchasedData}
        </p>
      </div>

      {/*quantiti here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {qty}
        </p>
      </div>
      {/* order status here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {status}
        </p>
      </div>
      <div className="w-full flex items-center justify-start">
        <IconButton>
          <BsThreeDots size={15} className="text-black-main" />
        </IconButton>
      </div>
    </div>
  );
};

export default RecentOrdersRow;
