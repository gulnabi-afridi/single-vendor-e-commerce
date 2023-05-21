import React, { useState } from "react";
import Divider from "../../components/shared/Divider/Divider";
import Dropdown from "../../components/shared/DropDown/DropDown";
import { Data } from "../../../constants/Data/JSON";
import Text from "../../components/shared/CustomTypography/Text";


function Search() {
  const [SearchedCategory, setSearchCategory] = useState<string | null>(
    "all categories"
  );
  const [SearchInput, setSearchInput] = useState<string | null>(
    "all categories"
  );
  return (
    <div className="w-full md:w-[700px] lg:w-[560px] h-[40px] sm:h-[44px] border-[1px] border-main-brand bg-gray-lightGray grid grid-cols-[38%_1px_calc(100%-38%-95px)_94px]">
      <div className="w-full h-full">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className={`flex justify-center capitalize items-center placeholder:text-[12px] sm:placeholder:text-[1rem] placeholder:font-normal placeholder:text-input w-full h-full bg-transparent border-none outline-none font-inter font-normal text-[14px] sm:text-[1.1rem] text-main-brand pl-2 sm:pl-4 `}
          placeholder="Search products..."
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Divider styles="w-[1px] bg-main-brand h-[22px]" />
      </div>
      <div className="w-full h-full">
        <Dropdown
          Title="all categories"
          item={Data.topSection.SearchCategory}
          Event={setSearchCategory}
        />
      </div>
      <div className="w-full h-full">
        <button className="w-full h-full bg-main-brand">
          <Text styles="text-white-main capitalize">search</Text>
        </button>
      </div>
    </div>
  );
}

export default Search;
