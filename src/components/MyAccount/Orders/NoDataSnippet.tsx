import React from "react";
import NavigationButton from "@/components/shared/Button/NavigationButton";
const NoDataSnippet = () => {
  return (
    <div className="w-full md:px-8 md:py-[50px] p-4 border-[2px]">
      <div className="w-full h-full flex lg:flex-row flex-col gap-4 items-center justify-between">
        <p className="font-semibold text-black-main text-[20px]">
          No order has been made yet.
        </p>
        <NavigationButton
          text="Browse Products"
          route="/product-category/Tshirt"
          style="h-[50px] w-[250px]"
        />
      </div>
    </div>
  );
};

export default NoDataSnippet;
