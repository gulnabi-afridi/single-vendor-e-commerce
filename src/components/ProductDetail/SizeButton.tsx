import React from "react";

interface Props {
  size: string;
  setState: any;
  state: any;
}

const SizeButton: React.FC<Props> = ({ size, setState, state }) => {
  return (
    <div
      className={`h-[46px] w-[34px] ${
        state ? "border-[1.5px] border-black-main" : "border-[1.5px]"
      } p-[3px]`}
    >
      <button
        onClick={setState}
        className={`w-full h-full bg-gray-200 font-inter font-semibold text-[14px] text-black-main`}
      >
        {size}
      </button>
    </div>
  );
};

export default SizeButton;
