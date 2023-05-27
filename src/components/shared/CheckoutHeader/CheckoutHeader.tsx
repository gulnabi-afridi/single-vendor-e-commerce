import React from "react";
import Link from "next/link";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
const CheckoutHeader = () => {
  return (
    <div className="w-full h-[80px] flex items-center justify-center bg-[#F1F2F4]">
      <Wrapper>
        <div className="w-full h-full flex items-center justify-between">
          <p className="font-[400] text-black-main text-[18px]">Checkout</p>{" "}
          <div className="h-full flex items-center justify-center gap-2 font-[500] text-[12px]">
            <Link
              href={"/"}
              className="text-gray-400 hover:text-black-main hover:duration-300"
            >
              Home
            </Link>
            <p className="font-semibold">{`>`}</p>
            <p className="text-black-main">Checkout</p>
          </div>
        </div>{" "}
      </Wrapper>
    </div>
  );
};

export default CheckoutHeader;

