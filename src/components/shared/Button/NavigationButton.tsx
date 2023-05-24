import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  route: string;
  event?: any;
  style?: string;
}

const NavigationButton: React.FC<Props> = ({
  text,
  route,
  event = () => {},
  style = "h-[50px] sm:w-[350px] w-full",
}) => {
  return (
    <Link
      href={route}
      onClick={event}
      className={`${style} flex items-center justify-center relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize`}
    >
      {text}
    </Link>
  );
};

export default NavigationButton;
