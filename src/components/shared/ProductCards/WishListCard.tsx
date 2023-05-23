import React from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

interface Props {
  name: string;
  price: number;
  picture: string;
  status: string;
}

const WishListCard: React.FC<Props> = ({ name, price, picture, status }) => {
  return (
    <div className="w-full grid grid-cols-[2.5fr,1fr,2fr,] min-w-[840px] border-t py-5">
      {/* product name and image here */}
      <div className="w-full flex items-center justify-start gap-4">
       
          <RxCross2 className="cursor-pointer hover:scale-110 hover:duration-300" size={20} />
       
        <div className="w-[100px] h-[120px] relative">
          <Image src={picture} alt="" fill />
        </div>
        <div className="flex items-center justify-start">
          <p className="font-inter font-[400] text-black-main text-[16px]">
            {name}
          </p>
        </div>
      </div>
      {/* price here*/}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-[400] text-black-main text-[16px]">
          ${price}
        </p>
      </div>
      {/* Stock and select option here here */}
      <div className="w-full flex items-center justify-start gap-16">
        <p className="font-inter font-[400] text-[16px] text-gray-400">
          {status}
        </p>
        <Link
          href={"/productdetails"}
          className="w-[200px] h-[50px] flex items-center justify-center font-inter font-semibold z-10 text-[14px] relative bg-main-secondary before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out text-white-main"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default WishListCard;
