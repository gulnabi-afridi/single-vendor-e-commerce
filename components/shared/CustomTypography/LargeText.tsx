import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  styles?: string;
}

function LargeText({ children, styles = "" }: props) {
  return (
    <div
      className={`text-main-brand font-inter font-semibold text-[18px] ${styles}`}
    >
      {children}
    </div>
  );
}

export default LargeText;
