import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  styles?: string;
}

function H1Heading({ children, styles }: props) {
  return (
    <div className="text-main-brand font-poppins font-semibold text-[36px]">
      {children}
    </div>
  );
}

export default H1Heading;
