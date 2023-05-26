import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "@/components/shared/Inputs/TextInput";
import MuiDropdown from "@/components/shared/DropDown/MuiDropdown";
import { BsCheck } from "react-icons/bs";
import CheckoutHeader from "@/components/shared/CheckoutHeader/CheckoutHeader";

const CheckOut = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    displayName: "userName1212",
    email: "userName@gmail.com",
    orderNotes: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    bankTransfer: false,
    cashOnDelivery: true,
  });
  const handleInputs = (e: any) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const states = [
    {
      name: "Punjab",
      value: "Punjab",
    },
    {
      name: "Sindh",
      value: "Sindh",
    },
    {
      name: "NWFP",
      value: "NWFP",
    },
    {
      name: "Balochistan",
      value: "Balochistan",
    },
  ];
  return (
    <div className="w-full font-inter">
      <CheckoutHeader />
      <Wrapper style="md:py-9 py-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full h-full flex flex-col gap-6 items-start justify-start font-inter p-0 sm:p-4 md:py-6 md:px-10"
        >
          <p className="font-medium text-black-main text-[24px]">
            Billing & Shipping
          </p>
          <div className="w-full border-[2px] flex flex-col gap-4 md:gap-10 md:px-8 md:py-[50px] p-4">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-4 md:gap-10">
              <TextInput
                state={inputs.firstName}
                IsCompulsory={true}
                placeholder="Enter FirstName Here"
                Type="text"
                Name="firstName"
                SetState={handleInputs}
                label="First Name"
              />
              <TextInput
                state={inputs.lastName}
                IsCompulsory={true}
                placeholder="Enter LastName Here"
                Type="text"
                Name="lastName"
                SetState={handleInputs}
                label="Last Name"
              />
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-4  md:gap-10">
              <TextInput
                state={inputs.streetAddress}
                IsCompulsory={true}
                placeholder="Enter Your Street Address Here"
                Type="text"
                Name="streetAddress"
                SetState={handleInputs}
                label="Street Address"
              />
              <TextInput
                state={inputs.city}
                IsCompulsory={true}
                placeholder="Enter Your City Here"
                Type="text"
                Name="city"
                SetState={handleInputs}
                label="City"
              />
            </div>
            <MuiDropdown
              DropdownItem={states}
              value={inputs.state}
              placeholder="Select Your State"
              Size="medium"
              InputChange={(e: any) =>
                setInputs({ ...inputs, state: e.target.value })
              }
            />
            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-4 md:gap-10">
              <TextInput
                state={inputs.email}
                IsCompulsory={true}
                placeholder="Enter Your Email Here"
                Type="email"
                Name="email"
                SetState={handleInputs}
                label="Email"
              />
              <TextInput
                state={inputs.phone}
                IsCompulsory={true}
                placeholder="Enter Phone No Here"
                Type="phone"
                Name="phone"
                SetState={handleInputs}
                label="Phone"
              />
            </div>
            <TextInput
              state={inputs.orderNotes}
              IsCompulsory={false}
              placeholder="Notes About Your order. e.g special notes for delievry (optional)"
              Type="text"
              Name="orderNotes"
              SetState={handleInputs}
              Multiline
              Rows={5}
              label="Additional Notes"
            />
          </div>

          {/* Total bill here */}
          <p className="font-medium text-black-main text-[24px]">Your Order</p>
          <div className="w-full border-[2px] flex flex-col gap-10 md:px-8 md:py-[50px] p-4">
            <div className="w-full flex items-center justify-between text-black-main py-4 border-b-[1.5px]">
              <p className="text-[15px] font-semibold">
                EVERYTHING IS TEMPORARY SHORT SLEEVE TEE{" "}
              </p>
              <p className="font-[500] text-[14px]">Qty:1</p>
              <p className="font-[500] text-[14px]">$32</p>
            </div>
            <div className="w-full flex items-center justify-between text-black-main py-4 border-b-[1.5px]">
              <p className="text-[15px] font-semibold">Subtotal </p>
              <p className="font-[500] text-[14px]">$32</p>
            </div>
            <div className="w-full flex items-center justify-between text-black-main py-4 border-b-[1.5px]">
              <p className="text-[15px] font-semibold">Shipping </p>

              <p className="font-[500] text-[14px]">Delivery Charges:$12</p>
            </div>
            <div className="w-full flex items-center justify-between text-black-main py-4 border-b-[1.5px]">
              <p className="text-[15px] font-semibold">Total </p>

              <p className="font-[500] text-[14px]">$122</p>
            </div>
            {/* =====> payments option */}
            {/* 1) direct bank transfer */}
            <div className="flex flex-col gap-3 py-4 border-b-[1.5px]">
              <div
                onClick={() =>
                  setInputs({
                    ...inputs,
                    cashOnDelivery: false,
                    bankTransfer: !inputs.bankTransfer,
                  })
                }
                className="flex justify-start cursor-pointer items-center gap-3"
              >
                {/* ===> checkbox */}
                <div
                  className={`w-[25px] h-[25px] ${
                    inputs.bankTransfer
                      ? "bg-white-main border-[1px] border-black-main"
                      : "bg-gray-cool"
                  }  flex justify-center items-center`}
                >
                  {inputs.bankTransfer && (
                    <BsCheck className="text-black-main text-[30px]" />
                  )}
                </div>
                <p className="text-[15px] select-none text-black-main uppercase">
                  direct bank transfer
                </p>
              </div>
              {inputs.bankTransfer && (
                <p className="text-[14px] text-white-cool">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference and WhatsApp the
                  screenshot of payment slip at x0332-xxxxxxx. Your order will
                  not be shipped until the funds have cleared in our account.
                </p>
              )}
            </div>
            {/* 1) cash on dilvery */}
            <div className="flex flex-col py-4 border-b-[1.5px] gap-3">
              <div
                onClick={() =>
                  setInputs({
                    ...inputs,
                    bankTransfer: false,
                    cashOnDelivery: !inputs.cashOnDelivery,
                  })
                }
                className="flex justify-start cursor-pointer items-center gap-3"
              >
                {/* ===> checkbox */}
                <div
                  className={`w-[25px] h-[25px] ${
                    inputs.cashOnDelivery
                      ? "bg-white-main border-[1px] border-black-main"
                      : "bg-gray-cool"
                  }  flex justify-center items-center`}
                >
                  {inputs.cashOnDelivery && (
                    <BsCheck className="text-black-main text-[30px]" />
                  )}
                </div>
                <p className="text-[15px] select-none text-black-main uppercase">
                  cash on delivery
                </p>
              </div>
              {inputs.cashOnDelivery && (
                <p className="text-[14px] text-white-cool">
                  Pay with cash upon delivery.
                </p>
              )}
            </div>
          </div>
          <div className="w-full h-[50px] flex items-center justify-center">
            {" "}
            <button
              type="submit"
              className="h-full sm:w-[350px] w-full relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize"
            >
              Place Order
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default CheckOut;
