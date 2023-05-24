import React, { useState } from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import { Data } from "../../constants/Data/JSON";
import AddToCart from "@/components/shared/ProductCards/AddToCart";
import Link from "next/link";

const Cart = () => {
  return (
    <Wrapper style="md:py-12 py-8 font-inter">
      <div className="w-full flex flex-col items-start justify-center gap-8">
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
        {/* Proceed to checkout section here */}
        <div className="w-full border-[2px] flex flex-col md:flex-row md:gap-0 gap-8 md:px-8 md:py-[50px] p-4">
          <div className="w-full h-full md:w-[30%] flex items-center justify-start">
            <p className="font-medium text-black-main text-[20px]">
              Cart Totals
            </p>
          </div>
          {/* right div */}
          <div className="w-full md:w-[70%] flex flex-col items-start justify-start gap-6">
            {/* total here */}
            <div className="w-full flex items-center justify-between md:grid md:grid-cols-[1fr,2fr] border-b-[1.5px] py-4">
              <p className="uppercase font-medium text-black-main text-[14px]">
                Subtotal
              </p>
              <p className="uppercase font-medium text-black-main text-[14px]">
                $120
              </p>
            </div>
            {/* Shipping Charges */}
            <div className="w-full flex items-center justify-between md:grid md:grid-cols-[1fr,2fr] border-b-[1.5px] py-4">
              <p className="uppercase font-medium text-black-main text-[14px]">
                Shipping
              </p>
              <p className="uppercase font-medium text-black-main text-[14px]">
                $10
              </p>
            </div>
            {/* total */}
            <div className="w-full flex items-center justify-between md:grid md:grid-cols-[1fr,2fr] border-b-[1.5px] py-4">
              <p className="uppercase font-medium text-black-main text-[14px]">
                Total
              </p>
              <p className="uppercase font-medium text-black-main text-[14px]">
                $130
              </p>
            </div>
            <Link
              href={"/checkout"}
              className="h-[50px] w-full flex items-center justify-center relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
