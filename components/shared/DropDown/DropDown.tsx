import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import SmallText from "../CustomTypography/SmallText";

interface props {
  item: Array<object>;
  Title: string;
  Event: (e: string) => void;
}

const Dropdown: React.FC<props> = ({ item, Title, Event }: props) => {
  const [DropdownTitle, setDropdownTitle] = useState<string | null>(null);

  useEffect(() => {
    setDropdownTitle(Title);
  }, []);

  return (
    <div className="w-full h-full inline-block MyDropdown relative">
      <button
        className={`font-inter font-normal text-[12px] sm:text-[1rem] leading-[1rem] capitalize ${
          DropdownTitle === "all categories" ? "text-input" : "text-main-band"
        } w-full h-full flex justify-between items-center px-4`}
      >
        {DropdownTitle}
        <FiChevronDown className="" />
      </button>

      <div className="w-full hidden absolute left-0 right-0 p-4 bg-white-main item-shadow gap-3 justify-center items-start flex-col z-50">
        {item?.map((item: any, index: number) => {
          return (
            <button
              onClick={() => {
                Event(item.Value);
                setDropdownTitle(item.name);
              }}
              key={index}
              className=" text-black-cool"
            >
              <SmallText styles="capitalize hover:underline hover:text-main-brand cursor-pointer">
                {item.name}
              </SmallText>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
