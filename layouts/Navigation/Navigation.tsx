import React from "react";
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";
import AllCategoriesMenu from "./AllCategoryMenu";
import { Data } from "../../constants/Data/JSON";
import Link from "next/link";


function Navigation() {

  return (
    <React.Fragment>
      <div className="lg:block hidden w-full bg-main-brand h-[60px]">
        <Wrapper style="h-full">
          <div className="w-full h-full relative flex justify-between items-center ">
            <div className="h-full md:flex justify-center items-center gap-10">
              {/* All Categories */}
              <AllCategoriesMenu />
              {Data.topSection.Menu.map((item: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className="font-inter font-medium text-[16px] capitalize leading-[1.25rem] text-white-main relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-white-main hover:after:w-full after:duration-200"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            {/* =====> contact us button */}
            <button className="text-[18px flex justify-center items-center leading-[1.25rem] w-[150px] h-[40px] font-inter font-semibold bg-white-main text-white-off capitalize whitespace-nowrap ">
              contact us
            </button>
          </div>
        </Wrapper>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
