import React from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {BiCheck} from "react-icons/bi";
import {RxCross2} from "react-icons/rx";

interface Props {
  name: string;
  pic: string;
  stock: number;
  price: number;
  newProduct: boolean;
  qtySold: number;
  sale: number;
  date: string;
}

const ProductRow = ({
  name,
  pic,
  stock,
  price,
  newProduct,
  qtySold,
  sale,
  date,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] min-w-[600px] border-b-[2px] border-gray px-4 py-1">
      {/* 1) product name with image */}
      <div className="w-full flex items-center justify-start gap-2">
        <div className="w-[40px] h-[40px] relative rounded-full">
          <Image className="rounded-full" src={pic} alt="" fill />
        </div>
        <p className="font-inter font-semibold text-black-main text-[11px]">
          {name}
        </p>
      </div>
      {/* 2 date here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {date}
        </p>
      </div>
      {/* 3 Price here */}
      <div className="w-full flex items-center justify-start">
        <div className="font-inter font-medium text-black-main text-[11px]">
            {stock===0?<p className="text-red-main text-[16px] font-inter">sold out</p>:stock}
        </div>
      </div>
      {/* 4 stock here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {price}$
        </p>
      </div>
      {/* 5 new product */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {qtySold}
        </p>
      </div>
      {/*  qty sold */}
      <div className="w-full flex items-center justify-start">
        {newProduct?<BiCheck className="text-main-secondary text-[26px]"/>:<RxCross2 className="text-black-main text-[26px]"/>}
        
      </div>
      {/*  sale on product */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter text-red-main font-medium text-[11px]">
          {sale} %off
        </p>
      </div>
      {/* ==> edit icons */}
      <div className="w-full flex items-center justify-start">
      <IconButton onClick={() => {}}>
        <EditIcon className="text-main-brand" />
      </IconButton>

      </div>
    </div>
  );
};

export default ProductRow;
