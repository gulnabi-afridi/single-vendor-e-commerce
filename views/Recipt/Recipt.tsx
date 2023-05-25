import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import CheckoutHeader from "@/components/shared/CheckoutHeader/CheckoutHeader";

const Recipt = () => {
  return (
    <div className="w-full">
        <CheckoutHeader/>
      <Wrapper style="">
        <div className="w-full flex flex-col py-14 px-0 md:px-24 gap-6">
          <p className="text-black-main font-inter text-[16px]">
            Thank you. Your order has been received.
          </p>
          {/*  */}
          <div className="w-ful overflow-auto flex justify-center items-center py-4">
            <div className="min-w-[820px] grid gap-5 grid-cols-[1fr,1fr,1.8fr,0.8fr,1.6fr]">
              {/* 1) order number */}
              <div className="flex flex-col gap-1 border-r border-dotted">
                <p className="text-[12px] uppercase font-medium text-black-main">
                  order number
                </p>
                <p className="text-[16px] font-bold font-inter text-black-main">
                  1273
                </p>
              </div>
              {/* 2) Date */}
              <div className="flex flex-col gap-1 border-r border-dotted">
                <p className="text-[12px] uppercase font-medium text-black-main">
                  date
                </p>
                <p className="text-[16px] font-bold font-inter text-black-main">
                  May 25, 2023
                </p>
              </div>
              {/* 3) email */}
              <div className="flex flex-col gap-1 border-r border-dotted">
                <p className="text-[12px] uppercase font-medium text-black-main">
                  email:
                </p>
                <p className="text-[16px] font-bold font-inter text-black-main">
                  gulnabifdi@gmail.com
                </p>
              </div>
              {/* 4) total */}
              <div className="flex flex-col gap-1 border-r border-dotted">
                <p className="text-[12px] uppercase font-medium text-black-main">
                  total:
                </p>
                <p className="text-[16px] font-bold font-inter text-black-main">
                  $120
                </p>
              </div>
              {/* 5) payment method */}
              <div className="flex flex-col gap-1">
                <p className="text-[12px] uppercase font-medium text-black-main">
                  payement method:
                </p>
                <p className="text-[16px] font-bold font-inter text-black-main">
                  Direct bank transfer
                </p>
              </div>
            </div>
          </div>
          {/* ===> order detail */}
          <p className="font-medium text-black-main text-[20px]">
            Order Details
          </p>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="font-[500] text-black-main text-[16px]">Product</p>
              <p className="font-[500] text-black-main text-[16px]">Total</p>
            </div>
            <div className="w-full flex items-center justify-between py-4 border-t">
              <p className="font-[400] text-black-main text-[14px]">
                Slim Fit Cotton TEE <span className="font-semibold">x1</span>
              </p>
              <p className="font-[400] text-black-main text-[14px]">$32</p>
            </div>
            <div className="w-full flex items-center justify-between py-4 border-t">
              <p className="font-[400] text-black-main text-[14px]">
                Slim Black Cotton TEE <span className="font-semibold">x1</span>
              </p>
              <p className="font-[400] text-black-main text-[14px]">$22</p>
            </div>
            <div className="w-full flex items-center justify-between py-4 border-t">
              <p className="font-[500] text-black-main text-[14px]">
                SubTotal:
              </p>
              <p className="font-[500] text-black-main text-[14px]">$54</p>
            </div>
            <div className="w-full flex items-center justify-between py-4 border-t">
              <p className="font-[500] text-black-main text-[14px]">
                Shipping:
              </p>
              <p className="font-[500] text-black-main text-[14px]">$14</p>
            </div>
            <div className="w-full flex items-center justify-between py-4 border-t">
              <p className="font-[500] text-black-main text-[14px]">Total:</p>
              <p className="font-[500] text-black-main text-[14px]">$64</p>
            </div>
            <div className="w-full flex items-center justify-between py-4 border-t">
              <p className="font-[500] text-black-main text-[14px]">Note:</p>
              <p className="font-[500] text-black-main text-[14px]">
                Lorem, ipsum dolor sit
              </p>
            </div>
          </div>
          {/* ==> billing address */}
          <p className="font-medium text-black-main text-[20px]">
            Billing Address
          </p>
          <div className="w-full md:px-8 md:py-[40px] p-4 border-[2px]">
            <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
              <p className="font-[400] text-black-main text-[14px]">
                userName1213
              </p>
              <p className="font-[400] text-black-main text-[14px]">
                house no 4, street no 22, las Santos,America
              </p>
              <div className="w-full flex items-center justify-start gap-2">
                <FiPhone size={15} />
                <p className="font-[400] text-black-main text-[14px]">
                  97334123412
                </p>
              </div>
              <div className="w-full flex items-center justify-start gap-2">
                <FiMail size={15} />
                <p className="font-[400] text-black-main text-[14px]">
                  userName3121@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Recipt;
