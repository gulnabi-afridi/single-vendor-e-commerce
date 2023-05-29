import React from "react";

interface Props {
  title: string;
  event?: any;
  typeOf: "submit" | "button";

  styles?: string;
}

const SampleButton = ({
  title,
  event = () => {},
  typeOf,
  styles = "w-[120px] bg-black-main",
}: Props) => {
  return (
    <button
      onClick={event}
      className={`  h-[44px] text-white-main hover:opacity-90 rounded-[10px] ${styles}`}
      type={typeOf}
    >
      {title}
    </button>
  );
};

export default SampleButton;
