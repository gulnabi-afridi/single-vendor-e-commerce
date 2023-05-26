import Button from "@/components/shared/Button/Button";
import MuiDropdown from "@/components/shared/DropDown/MuiDropdown";
import TextInput from "@/components/shared/Inputs/TextInput";
import React, { useState } from "react";

const Address = () => {
  const [edit, setEdit] = useState(true);

  //   ====> inputs
  const [inputs, setInputs] = useState({
    firstName: "gulnabi",
    lastName: "afridi",
    streetAdress: "uet, taxila, Ali hall, room number 19",
    city: "islamabad",
    province: "punjab",
    phone: "0313-xxx-xxxx",
    email: "gulnabifdi@gmail.com",
  });

  const handleInputs = (e: any) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="w-full h-full px-0 sm:px-4 md:px-10 md:py-0 py-4">
      {edit ? (
        <div className="w-full h-full flex justify-start items-start border-[2px] p-10 gap-10 sm:gap-24">
          <p className="text-[14px] text-black-main font-inter capitalize">
            billing address
          </p>
          <div className="flex flex-col gap-1">
            {/* => name */}
            <p className="text-[14px] text-black-main">gulnabi afridi</p>
            {/* ==> address */}
            <p className="text-[14px] text-black-main">
              uet taxila, punjab Ali hall room number 19
            </p>
            {/* ===> city */}
            <p className="text-[14px] text-black-main">islamabad</p>
            {/* ==> state */}
            <p className="text-[14px] text-black-main">punjab</p>
            {/* ==> edit button */}
            <Button
              text="Edit"
              typeOf="button"
              style="max-w-[200px] h-[50px] w-full mt-6"
              event={() => {
                setEdit(false);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-6">
          <p className="text-[26px] font-medium text-black-main font-inter capitalize">
            billing address
          </p>
          {/* form */}
          <form className="grid grid-cols-1 sm:grid-cols-[0.7fr,3fr] gap-4 sm:gap-8 p-4 sm:p-8 py-10 sm:py-12 border-[2px]">
            {/* => name */}
            <p className="text-black-main capitalize text-[16px]">name</p>
            <div className="flex md:flex-row flex-col justify-center items-center gap-4 sm:gap-6">
              <TextInput
                state={inputs.firstName}
                SetState={handleInputs}
                Type="text"
                Name="firstName"
                label="first name"
              />
              <TextInput
                state={inputs.lastName}
                SetState={handleInputs}
                Type="text"
                Name="lastName"
                label="last name"
              />
            </div>
            {/* ===> country */}
            <p className="text-black-main capitalize text-[16px] ">country</p>
            <p className="capitalize font-semibold font-inter">United state</p>
            {/* ===> street address */}
            <p className="text-black-main capitalize text-[16px] ">
              street address
            </p>
            <TextInput
              state={inputs.streetAdress}
              Name="streetAdress"
              SetState={handleInputs}
              Type="text"
              label="street address"
            />
            {/* ===> city */}
            <p className="text-black-main capitalize text-[16px] ">city</p>
            <TextInput
              state={inputs.city}
              Name="city"
              SetState={handleInputs}
              Type="text"
              label="city"
            />
            {/* ===> state/provance */}
            <p className="text-black-main capitalize text-[16px] ">
              State / province
            </p>
            <MuiDropdown
              value={inputs.province}
              placeholder="state/provance"
              InputChange={(e: any) => {
                setInputs({
                  ...inputs,
                  province: e.target.value,
                });
              }}
              DropdownItem={provance}
              Size="medium"
            />
            {/* ===> phone number */}
            <p className="text-black-main capitalize text-[16px] ">phone</p>
            <TextInput
              state={inputs.phone}
              Name="phone"
              SetState={handleInputs}
              Type="text"
              label="phone"
            />
            {/* ===> email address */}
            <p className="text-black-main capitalize text-[16px] ">
              email address
            </p>
            <TextInput
              state={inputs.email}
              Name="email"
              SetState={handleInputs}
              Type="email"
              label="phone"
            />
            {/* ==> save changes button */}
            <div className="col-span-1 sm:col-span-2 flex justify-center items-center mt-4">
              <Button text="Save Changes" event={() => {}} typeOf="submit" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const provance = [
  {
    name: "fata",
    value: "fata",
  },
  {
    name: "punjab",
    value: "punjab",
  },
  {
    name: "wazirstan",
    value: "wazirstan",
  },
  {
    name: "balochistan",
    value: "balochistan",
  },
];

export default Address;
