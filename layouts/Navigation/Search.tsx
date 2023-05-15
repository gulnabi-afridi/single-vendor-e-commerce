import React, { useState } from "react";
import Divider from "../../components/shared/Divider/Divider";
import Dropdown from "../../components/shared/DropDown/DropDown";
import { Data } from "../../constants/Data/JSON.js";

function Search() {
  const [SearchedCategory, setSearchCategory] = useState<string | null>(
    "all categories"
  );
  const [SearchInput, setSearchInput] = useState<string | null>(
    "all categories"
  );
  return (
    <div className="md:w-[520px] w-full h-[44px] border-[1px] border-main-brand bg-gray-lightGray grid grid-cols-[38%_1px_calc(100%-38%-95px)_94px]">
      <div className="w-full h-full">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className={`placeholder:text-[1rem] placeholder:font-normal placeholder:text-input w-full h-full bg-transparent border-none outline-none font-inter font-medium text-[1.1rem] text-main-brand leading-[1rem] pl-4 `}
          placeholder="Search products..."
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Divider styles="w-[1px] bg-main-brand h-[22px]" />
      </div>
      <div className="w-full h-full">
        <Dropdown
          Title="all categories"
          item={Data.SearchHeader.SearchCategory}
          Event={setSearchCategory}
        />
      </div>
      <div className="w-full h-full">
        <button className="w-full h-full bg-main-brand font-inter font-medium text-[1rem] text-white-main leading-[1.25rem] capitalize ">
          search
        </button>
      </div>
    </div>
  );
}

export default Search;
