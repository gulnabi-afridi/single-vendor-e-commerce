import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  picture: string;
  price: number;
  title: string;
  sale?: string;
  soldout?: boolean;
  newArrival?: boolean;
}

const ProductCard: React.FC<Props> = ({
  picture,
  price,
  title,
  sale,
  soldout,
  newArrival,
}) => {
  const [favourite, setFavourite] = useState<boolean>(false);

  return (
    <div className="w-full bg-white-main  overflow-hidden relative productCard cursor-pointer group">
      <div className="w-full flex flex-col items-center justify-start gap-4 relative">
        {/* Image  */}
        <div className="w-full h-[350px] overflow-hidden relative">
          <Image className="" src={picture} alt="" fill />
          {/* tags */}
          {sale && (
            <p className="h-[24px] w-[56px] flex items-center absolute left-0 top-[10px] text-white-main text-[12px] font-inter font-[500] bg-main-secondary px-1">
              {sale}
            </p>
          )}
          {soldout && (
            <p className="h-[24px] w-[56px] flex items-center absolute left-0 top-[40px] text-white-main text-[12px] font-inter font-[500] bg-[#E12727] px-1">
              Sold Out
            </p>
          )}

          {newArrival && (
            <p className="h-[24px] w-[56px] flex items-center absolute left-0 top-[10px] text-white-main text-[12px] font-inter font-[500] bg-[#FFAA65] px-1">
              New
            </p>
          )}
          <button
            onClick={() => setFavourite((prevvalue) => !prevvalue)}
            className="absolute top-[15px] right-[15px] opacity-0 group-hover:opacity-100 group-hover:duration-500 group-hover:transition-all"
          >
            {favourite ? (
              <AiFillHeart size={25} />
            ) : (
              <AiOutlineHeart size={25} />
            )}
          </button>
          <button className="w-full h-[46px] font-inter font-semibold z-10 text-[14px] absolute -bottom-[70px] group-hover:bottom-0 group-hover:transition-all group-hover:duration-700 bg-main-secondary before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out text-white-main">
            See Details
          </button>
        </div>
        {/* Product Details  */}
        <div className="w-full flex flex-col items-center justify-center gap-2 ">
          <p className="text-base text-center font-semibold font-inter text-black-main w-full">
            {title}
          </p>
          <p className="w-full text-center font-inter font-[600] text-[14px] text-black-main leading-[26px]">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
