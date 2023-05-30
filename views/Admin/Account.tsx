import React, { useState, useEffect } from "react";
import Image from "next/image";
import DialogueWrapper from "../../src/components/shared/DialogueWrapper/DashboardDialougeWrapper"
import { MdModeEdit, MdLocationOn } from "react-icons/md";
import InputField from "../../src/components/shared/Inputs/TextInput"
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Logo from "@/components/shared/Avatar/Logo";

const Account = () => {
  const [editProfile, setEditProfile] = useState<boolean>(false);
  // state for form inputs
  const [Inputs, SetInputs] = useState<{
    Email: string;
    FullName: string;
    ProfileDescription: string;
    Phone: string;
    Address: string;
    Avatar: string;
    Cover: string;
  }>({
    Email: "",
    FullName: "",
    ProfileDescription: "",
    Phone: "",
    Address: "",
    Avatar: "",
    Cover: "",
  });
  const handleInputs = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };
  const EditShopLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    //SetInputs({...Inputs,Avatar:event.target.files[0]})
  };
  const EditShopCover = (event: React.ChangeEvent<HTMLInputElement>) => {
    //SetInputs({...Inputs,Avatar:event.target.files[0]})
  };
  return (
    <div className="w-full">
      {/* Cover Photo here */}
      <div className="w-full flex flex-col items-center justify-start">
        <div className="w-full h-[300px] Shadow relative rounded-[8px]">
          <Image
            className="object-cover rounded-[8px]"
            src={"/Assets/Admin/ShopCover.jpg"}
            alt=""
            fill
          />
        </div>
        <div className="w-full  px-[15px]">
          <div className="w-full flex flex-col items-center justify-start -translate-y-[30px] z-10 gap-[30px] bg-[#F7F7F7] Shadow rounded-[8px] p-[15px]">
            {/* shop logo and name here */}
            <div className="w-full flex items-center justify-between ">
              <div className="w-full flex items-center justify-start gap-4 ">
                <Avatar
                  sx={{ width: "60px", height: "60px" }}
                  alt="Sahal Imran"
                  src=""
                />
                {/* shop name and address here */}
                <div className="flex flex-col items-start justify-start gap-1">
                  <p className="font-inter font-semibold text-black-main text-[16px]">
                    Adam jhons
                  </p>
                  {/* adress here */}
                  <div className="flex items-center justify-start gap-1">
                    <MdLocationOn size={15} />
                    <p className="font-inter font-medium text-black-soft/70 text-[13px]">
                      St Paul street usa Ny Jersy
                    </p>
                  </div>
                </div>
              </div>
              <IconButton onClick={() => setEditProfile(true)}>
                <MdModeEdit size={25} className="text-black-main" />
              </IconButton>
            </div>
            {/* personal and professional information here */}
            <div className="w-full grid md:grid-cols-2 gap-[24px]">
              {/* Personal information here */}
              <div className="w-full flex flex-col gap-4 justify-start items-start">
                <p className="font-inter font-semibold text-[14px] text-black-main">
                  Personal Informaiton
                </p>
                <div className="w-full flex justify-between items-center">
                  <p className="font-inter font-semibold text-[12px] text-black-main">
                    Name:
                  </p>
                  <p className="font-inter font-medium text-[12px] text-black-main/80">
                    Adam Jhons
                  </p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="font-inter font-semibold text-[12px] text-black-main">
                    Email:
                  </p>
                  <p className="font-inter font-medium text-[12px] text-black-main/80">
                    jhonMckay@gamil.com
                  </p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="font-inter font-semibold text-[12px] text-black-main">
                    Phone:
                  </p>
                  <p className="font-inter font-medium text-[12px] text-black-main/80">
                    +92347623212
                  </p>
                </div>
              </div>
              {/* Professionaal information here */}
              <div className="w-full flex flex-col gap-4 justify-start items-start">
                <p className="font-inter font-semibold text-[14px] text-black-main">
                  Professional Informaiton
                </p>

                <div className="w-full flex justify-between items-center">
                  <p className="font-inter font-semibold text-[12px] text-black-main">
                    Address:
                  </p>
                  <p className="font-inter font-medium text-[12px] text-black-main/80">
                    St Paul street usa Ny Jersy, USA
                  </p>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <p className="font-inter font-semibold text-[12px] text-black-main">
                    Description:
                  </p>
                  <p className="font-inter font-medium text-[12px] text-black-main/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis at consectetur lorem donec massa sapien
                    faucibus et.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* edit your profile dialog here */}
        <DialogueWrapper
          Open={editProfile}
          CloseEvent={() => setEditProfile(false)}
          Title="Edit your Profile"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditProfile(false);
            }}
            className="w-full flex flex-col gap-8 items-center justify-center"
          >
            <div className="w-full flex flex-col items-start justify-center">
              {/* edit Cover here */}
              <div className="w-full h-[150px] rounded-[8px] relative">
                <Image
                  className="rounded-[8px] object-cover"
                  src={"/Assets/Admin/ShopCover.jpg"}
                  alt=""
                  fill
                />
                <label
                  htmlFor="inputTag"
                  className="w-[36px] h-[36px] flex rounded-full bg-white-main text-white-main justify-center items-center absolute bottom-2 right-4 border-[1px] border-main-brand cursor-pointer"
                >
                  <MdModeEdit
                    size={20}
                    className="text-main-brand cursor-pointer hover:text-black-main/50"
                  />
                  <input
                    id="inputTag"
                    type="file"
                    onChange={EditShopCover}
                    className="hidden"
                  />
                 
                </label>
              
              </div>
              {/* edit logo here */}
              <div className="-mt-10 ">
                <Logo
                  src="/Assets/Admin/Logo.webp"
                  GetImageSource={EditShopLogo}
                />
              </div>
            </div>

            <div className="w-full flex items-start justify-start">
              <p className="font-inter font-semibold text-[14px]  text-black-main">
                Personal Informaiton
              </p>
            </div>
            <InputField
              Name="FullName"
              state={Inputs.FullName}
              SetState={handleInputs}
              Type="email"
              label="Full Name"
              placeholder="Full Name"
              IsCompulsory={true}
            />

            <InputField
              Name="Email"
              state={Inputs.Email}
              SetState={handleInputs}
              Type="email"
              label="Email Address"
              placeholder="Email"
              IsCompulsory={true}
            />
             <InputField
              Name="Phone"
              state={Inputs.Phone}
              SetState={handleInputs}
              Type="number"
              label="Phone No"
              placeholder="Enter Your Phone No"
              IsCompulsory={true}
            />
            <div className="w-full flex items-start justify-start">
              <p className="font-inter font-semibold text-[14px]  text-black-main">
                Professional Informaiton
              </p>
            </div>

            <InputField
              Name="Address"
              state={Inputs.Address}
              SetState={handleInputs}
              Type="text"
              label="Address"
              placeholder="Your Address Here"
              IsCompulsory={true}
            />
            <InputField
              Name="ProfileDescription"
              state={Inputs.ProfileDescription}
              SetState={handleInputs}
              Type="text"
              label="Description"
              placeholder="Profile Description"
              Multiline={true}
              Rows={5}
              IsCompulsory={true}
            />
            <div className="w-full flex items-center justify-end gap-6">
              <button
                type="button"
                onClick={() => setEditProfile(false)}
                className="w-[140px] h-[40px] text-center text-[14px] text-white-main font-inter font-medium rounded-md bg-red-main"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-center text-[14px] font-inter font-medium rounded-md border-[1px] border-black-off text-black-off w-[140px] h-[40px] hover:bg-black-main hover:text-white-main"
              >
                Save
              </button>
            </div>
          </form>
        </DialogueWrapper>
      </div>
    </div>
  );
};

export default Account;
