import React, { useState } from "react";
import TextInput from "@/components/shared/Inputs/TextInput";
import Button from "@/components/shared/Button/Button";

const AccountSettings = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    displayName: "userName1212",
    email: "userName@gmail.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleInputs = (e: any) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full h-full flex flex-col gap-6 items-start justify-start font-inter p-4 md:py-6 md:px-10"
    >
      <p className="font-medium text-black-main text-[24px]">Account Details</p>
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
            state={inputs.displayName}
            IsCompulsory={true}
            placeholder="This will be will be displayed in the account section"
            Type="text"
            Name="displayName"
            SetState={handleInputs}
            label="Display Name"
          />
          <TextInput
            state={inputs.email}
            IsCompulsory={true}
            placeholder="Enter Email Here"
            Type="email"
            Name="email"
            SetState={handleInputs}
            label="Email"
          />
        </div>
      </div>

      {/* Password setting here */}
      <p className="font-medium text-black-main text-[24px]">Password Change</p>
      <div className="w-full border-[2px] flex flex-col gap-10 md:px-8 md:py-[50px] p-4">
        <TextInput
          state={inputs.currentPassword}
          IsCompulsory={false}
          placeholder="Leave blank to leave unchanged"
          Type="password"
          Name="currentPassword"
          SetState={handleInputs}
          label="Current Password"
        />

        <TextInput
          state={inputs.newPassword}
          IsCompulsory={false}
          placeholder="Leave blank to leave unchanged"
          Type="password"
          Name="newPassword"
          SetState={handleInputs}
          label="New Password"
        />
        <TextInput
          state={inputs.confirmPassword}
          IsCompulsory={false}
          placeholder="Confirm New Password"
          Type="password"
          Name="confirmPassword"
          SetState={handleInputs}
          label="Confirm Password"
        />
      </div>
      <div className="w-full h-[50px] flex items-center justify-center">
        {" "}
        <Button typeOf="submit" event={()=>{}} text="Save Changes" />
        
      </div>
    </form>
  );
};

export default AccountSettings;
