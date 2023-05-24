import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import React from "react";
import { Data } from "../../constants/Data/JSON";
import WishListCard from "@/components/shared/ProductCards/WishListCard";
import Link from "next/link";

const WishList = () => {
  return (
    <Wrapper style="md:py-12 py-8">
      {Data.WishListItems.length==0 && (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <p className="font-inter font-[400] text-black-main text-[14px]">
            No Items In Your Wishlist Currently
          </p>
          <Link
            href="/"
            className="h-[50px] sm:w-[350px] w-full flex items-center justify-center relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize"
          >
            Return To Shop
          </Link>
        </div>
      )}
      {Data.WishListItems.length>0 && (
        <div className="w-full overflow-auto ThinScrollbar">
          {/* headers */}
          <div className="w-full h-[46px] grid grid-cols-[2.5fr,1fr,2fr] min-w-[840px]">
            <p className="font-inter font-medium text-black-main text-[16px]">
              Product
            </p>
            <p className="font-inter font-medium text-black-main text-[16px]">
              Price
            </p>
            <p className="font-inter font-medium text-black-main text-[16px]">
              Stock Status
            </p>
          </div>
          {/* childrens */}
          <div className="w-full">
            {Data.WishListItems.map((item: any, index: number) => (
              <WishListCard
                key={index}
                price={item.price}
                picture={item.picture}
                status={item.status}
                name={item.name}
              />
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default WishList;
