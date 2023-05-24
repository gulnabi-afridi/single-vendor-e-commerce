import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import Link from "next/link";
import React, { useState } from "react";
import Header from "./Header";
import TextInput from "@/components/shared/Inputs/TextInput";
import MuiDropdown from "@/components/shared/DropDown/MuiDropDown";

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
      <Header />
      <Wrapper style="md:py-9 py-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full h-full flex flex-col gap-6 items-start justify-start font-inter p-4 md:py-6 md:px-10"
        >
          <p className="font-medium text-black-main text-[24px]">
            Billing & Shipping
          </p>
          <div className="w-full border-[2px] flex flex-col gap-10 md:px-8 md:py-[50px] p-4">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-10">
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
            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-10">
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
            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-10">
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

          {/* Password setting here */}
          <p className="font-medium text-black-main text-[24px]">
            Password Change
          </p>
          <div className="w-full border-[2px] flex flex-col gap-10 md:px-8 md:py-[50px] p-4">
            <TextInput
              state={inputs.currentPassword}
              IsCompulsory={true}
              placeholder="Leave blank to leave unchanged"
              Type="password"
              Name="currentPassword"
              SetState={handleInputs}
              label="Current Password"
            />

            <TextInput
              state={inputs.newPassword}
              IsCompulsory={true}
              placeholder="Leave blank to leave unchanged"
              Type="password"
              Name="newPassword"
              SetState={handleInputs}
              label="New Password"
            />
            <TextInput
              state={inputs.confirmPassword}
              IsCompulsory={true}
              placeholder="Confirm New Password"
              Type="password"
              Name="confirmPassword"
              SetState={handleInputs}
              label="Confirm Password"
            />
          </div>
          <div className="w-full h-[50px] flex items-center justify-center">
            {" "}
            <button
              type="submit"
              className="h-full sm:w-[350px] w-full relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default CheckOut;
