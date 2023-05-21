import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  styles?: string;
}

function SmallText({ children, styles }: props) {
  return (
    <div
      className={` font-inter font-normal text-main-brand text-[14px] ${styles}`}
    >
      {children}
    </div>
  );
}

export default SmallText;