import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-start justify-center border-t border-b py-9">
      <p className="font-inter font-semibold text-black-main text-[26px]">
        Return/Exchange Policy
      </p>
      <div className="w-full px-6">
        <ul className="flex flex-col gap-3">
          <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <span className="font-bold font-inter">
              Qui ducimus ratione suscipit enim saepe aliquam voluptatum itaque,
            </span>
            asperiores eaque, repudiandae inventore deleniti! Consequatur at
            repellat voluptas a harum id aliquid.
          </li>
          <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            assumenda consequuntur cupiditate ab placeat, exercitationem
            deleniti.
          </li>
          <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            temporibus!{" "}
            <span className="font-bold font-inter">
              Ut obcaecati incidunt, cupiditate illo,
            </span>{" "}
            consectetur architecto blanditiis odio
          </li>
          <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
            <span className="font-bold font-inter">Rs.400/-</span> will be
            charged for Hassle-free exchange at your doorstep. (Only in major
            cities)
          </li>
          <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
            Returning items will be returned at{" "}
            <span className="font-bold font-inter">customer’s cost</span> if
            product sent was as per order.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReturnPolicy;
