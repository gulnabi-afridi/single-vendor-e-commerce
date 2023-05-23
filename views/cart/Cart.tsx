import React, { useState } from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import { Data } from "../../constants/Data/JSON";
import AddToCart from "@/components/shared/ProductCards/AddToCart";

const Cart = () => {
  return (
    <Wrapper style="md:py-12 py-8">
      <div className="w-full overflow-auto">
        {/* headers */}
        <div className="w-full h-[46px] grid grid-cols-[2.5fr,1fr,1.5fr,1fr] min-w-[840px]">
          <p className="font-inter font-medium text-black-main text-[16px]">
            Product
          </p>
          <p className="font-inter font-medium text-black-main text-[16px]">
            Price
          </p>
          <p className="font-inter font-medium text-black-main text-[16px]">
            Quantity
          </p>
          <p className="font-inter font-medium text-black-main text-[16px]">
            Subtotal
          </p>
        </div>
        {/* childrens */}
        <div className="w-full">
          {Data.CartItems.map((item: any, index: number) => (
            <AddToCart
              key={index}
              name={item.name}
              price={item.price}
              picture={item.picture}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
