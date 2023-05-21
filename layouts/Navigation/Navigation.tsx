import React from "react";
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";
import AllCategoriesMenu from "./AllCategoryMenu";
import { Data } from "../../constants/Data/JSON";
import Link from "next/link";
import Text from "../../components/shared/CustomTypography/Text";

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
                  <Link key={index} href="#">
                    <Text styles="capitalize text-white-main relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-white-main hover:after:w-full after:duration-200">
                      {item.name}
                    </Text>
                  </Link>
                );
              })}
            </div>
            {/* =====> contact us button */}
            <button className="flex justify-center items-center w-[150px] h-[40px] bg-white-main">
              <Text styles=" capitalize">contact us</Text>
            </button>
          </div>
        </Wrapper>
      </div>
    </React.Fragment>
  );
}

export default Navigation;