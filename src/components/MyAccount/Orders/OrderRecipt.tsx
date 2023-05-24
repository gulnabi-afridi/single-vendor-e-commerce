import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
const OrderRecipt = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-4">
      <p className="font-[400] text-black-main text-[14px]">
        Order <span className="font-semibold">#2121</span> was Placed on{" "}
        <span className="font-semibold">22-3-23</span> and is{" "}
        <span className="font-semibold">Processing</span>.
      </p>
      <p className="font-medium text-black-main text-[20px]">Order Details</p>
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
          <p className="font-[500] text-black-main text-[14px]">SubTotal:</p>
          <p className="font-[500] text-black-main text-[14px]">$54</p>
        </div>
        <div className="w-full flex items-center justify-between py-4 border-t">
          <p className="font-[500] text-black-main text-[14px]">Shipping:</p>
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
      <p className="font-medium text-black-main text-[20px]">Billing Address</p>
      <div className="w-full md:px-8 md:py-[40px] p-4 border-[2px]">
        <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
          <p className="font-[400] text-black-main text-[14px]">userName1213</p>
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
  );
};

export default OrderRecipt;
