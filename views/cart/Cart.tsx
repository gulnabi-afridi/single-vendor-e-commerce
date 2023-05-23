import React, { useState } from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import Link from "next/link";
import { Data } from "../../constants/Data/JSON";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import IconButton from "@mui/material/IconButton";
import AddToCart from "@/components/shared/ProductCards/AddToCart";
const Cart = () => {
  const [productCount, setProductCount] = useState<number>(1);
  const handleDescreaseProductCount: () => void = () => {
    productCount > 0 ? setProductCount((o) => o - 1) : setProductCount(0);
  };

  //   Increase product count handler
  const handleIncreaseProductCount: () => void = () => {
    setProductCount((o) => o + 1);
  };
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
