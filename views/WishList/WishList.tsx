import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import React from "react";
import { Data } from "../../constants/Data/JSON";
import WishListCard from "@/components/shared/ProductCards/WishListCard";
import NavigationButton from "@/components/shared/Button/NavigationButton";

const WishList = () => {
  return (
    <Wrapper style="md:py-12 py-8">
      {Data.WishListItems.length == 0 && (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <p className="font-inter font-[400] text-black-main text-[14px]">
            No Items In Your Wishlist Currently
          </p>
          <NavigationButton route="/" text="Return To Shop" />
        </div>
      )}
      {Data.WishListItems.length > 0 && (
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
