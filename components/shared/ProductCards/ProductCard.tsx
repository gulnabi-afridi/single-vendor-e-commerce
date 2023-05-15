import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ProductCard = () => {
  const [favourite, setFavourite] = useState<boolean>(false);

  return (
    <div className="w-full bg-white-main  overflow-hidden relative cursor-pointer group">
      <div className="w-full flex flex-col items-center justify-start gap-4 relative">
        {/* Image  */}
        <div className="w-full h-[350px] relative">
          <Image src="/Assets/home/shirt.jpg" alt="" fill />
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

          <button className="w-full h-[46px] font-inter font-semibold text-[14px] absolute -bottom-[10px] opacity-0 z-[-10] group-hover:bottom-0 group-hover:z-[10] group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 bg-main-secondary before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out text-white-main">
            Add To Cart
          </button>
        </div>
        {/* Product Details  */}
        <div className="w-full flex flex-col items-center justify-center pt-2 pb-4 px-[6px] gap-2 ">
          <p className="text-base text-center font-semibold font-inter text-black-main w-full">
            Slim Fit White Cotton Tee Shirt
          </p>
          <p className="w-full text-center font-inter font-[600] text-[14px] text-black-main leading-[26px]">
            $30.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
