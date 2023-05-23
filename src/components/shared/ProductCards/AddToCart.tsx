import React, { useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import IconButton from "@mui/material/IconButton";

interface Props {
  picture: string;
  name: string;
  price: number;
}

const AddToCart: React.FC<Props> = ({ picture, name, price}) => {
  const [productCount, setProductCount] = useState<number>(1);
  const handleDescreaseProductCount: () => void = () => {
    productCount > 0 ? setProductCount((o) => o - 1) : setProductCount(0);
  };

  //   Increase product count handler
  const handleIncreaseProductCount: () => void = () => {
    setProductCount((o) => o + 1);
  };

  return (
    <div className="w-full grid grid-cols-[2.5fr,1fr,1.5fr,1fr] min-w-[840px] border-t py-5">
      {/* product name and image here */}
      <div className="w-full flex items-center justify-start gap-6">
        <div className="w-[100px] h-[120px] relative">
          <Image src={picture} alt="" fill />
        </div>
        <div className="flex items-center justify-start">
          <p className="font-inter font-[400] text-black-main text-[15px]">
            {name}
          </p>
        </div>
      </div>
      {/* price here*/}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-[400] text-black-main text-[15px]">
          ${price}
        </p>
      </div>
      {/* Quantity here */}
      <div className="w-full flex items-center justify-start gap-2">
        <p className="font-inter font-[400] text-gray-400 ">QTY:</p>
        <div className="h-[56px] w-[150px] flex items-center justify-between gap-5 text-black-main text-xl hover:border-black-main duration-300 border-[1px] border-solid px-4">
          <button
            onClick={handleDescreaseProductCount}
            className="bg-transparent border-none text-[40px] font-[400] font-inter cursor-pointer"
          >
            -
          </button>
          <span className="text-[16px] font-[400] font-inter text-black-main">
            {productCount < 0 ? 0 : productCount}
          </span>
          <button
            onClick={handleIncreaseProductCount}
            className="bg-transparent border-none text-[30px] font-[400] font-inter cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      {/* subtotal here */}
      <div className="w-full flex items-center justify-between">
        <p className="font-inter font-[400] text-black-main text-[15px]">
          ${price*productCount}
        </p>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => {}}
          aria-label="close"
        >
          <RxCross2 size={20} />
        </IconButton>
      </div>
    </div>
  );
};

export default AddToCart;
