
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  style?: string;
}

const Wrapper: React.FC<Props> = ({ children, style }: Props) => {
  return (
    <div className={`w-full ${style}`}>
      <div className="w-full h-full max-w-[1400px] m-auto md:px-8 px-4">
        {children}
      </div>
    </div>
  ); 
};

export default Wrapper;
