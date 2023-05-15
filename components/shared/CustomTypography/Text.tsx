import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  styles?: string;
}

function Text({ children, styles = "text-white-main" }: props) {
  return (
    <div className={`text-main-brand font-inter font-semibold text-[16px] ${styles}`}>
      {children}
    </div>
  );
}

export default Text;
