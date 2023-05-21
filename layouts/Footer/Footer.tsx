import React from "react";
import Link from "next/link";
import LargeText from "@/components/shared/CustomTypography/LargeText";
import SmallText from "@/components/shared/CustomTypography/SmallText";
import { Data } from "../../constants/Data/JSON";

function Footer() {
  return (
    <div className="w-full h-[260px] bg-main-brand mt-10">
      <div className="w-full max-w-[1150px] h-full justify-center items-center flex  m-auto md:px-8 px-4">
        <div className="w-full grid  grid-cols-4">
          {/* =====> About us */}
          {Data.footer.map((item, index) => {
            return (
                <div key={index} className="w-full flex flex-col gap-3">
                  {/* heading */}
                  <LargeText styles="text-white-main mb-4 capitalize">
                    {item.title}
                  </LargeText>
                  {item.title === "find us" ? (
                    item.links?.map((link, index) => {
                      return (
                        <div key={index} className="w-full flex flex-col gap-3">
                          <SmallText styles="text-white-main">
                            {link.name}
                          </SmallText>
                        </div>
                      );
                    })
                  ) : item.title === "follow us" ? (
                    <div className="w-full flex gap-4">
                      {item.links?.map((link, index) => {
                        return <Link key={index} href="#">{link.name}</Link>;
                      })}
                    </div>
                  ) : (
                    item.links?.map((link, index) => {
                      return (
                        <Link key={index} href={"#"}>
                          {" "}
                          <SmallText styles="text-white-main capitalize max-w-max relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-white-main hover:after:w-full after:duration-200">
                            {link.name}
                          </SmallText>
                        </Link>
                      );
                    })
                  )}
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
