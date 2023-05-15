
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

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

  console.log(Title);

  return (
    <div className="w-full h-full inline-block MyDropdown relative">
      <div className="w-full h-full flex justify-between items-center px-4">
        <p className="font-inter font-medium text-[.75rem] leading-[1rem] capitalize text-input ">
          {DropdownTitle}
        </p>
        <FiChevronDown className="" />
      </div>

      <div className="w-full hidden absolute left-0 right-0 p-4 bg-white-main item-shadow gap-3 justify-center items-start flex-col z-50">
        {item?.map((item: any, index: number) => {
          return (
            <p
              onClick={() => {
                Event(item.Value);
                setDropdownTitle(item.Title);
              }}
              key={index}
              className="font-inter font-normal text-black-cool text-[.875rem] leading-[1.25rem] hover:underline hover:text-main-brand cursor-pointer"
            >
              {item.Title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
