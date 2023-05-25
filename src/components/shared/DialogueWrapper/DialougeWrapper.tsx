import React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { RxCross2 } from "react-icons/rx";

interface Props {
  open: boolean;
  setState: (e: any) => void;
  children: React.ReactNode;
  title: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialougeWrapper: React.FC<Props> = ({
  open,
  setState,
  children,
  title,
}) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={setState}
      TransitionComponent={Transition}
    >
      <div className="w-full flex flex-col gap-12 p-4 sm:p-8">
        <div className="w-full flex justify-between items-center">
          <p className="font-inter font-[400] text-black-main text-[28px]">
            {title}
          </p>
          <IconButton
            edge="start"
            color="inherit"
            onClick={setState}
            aria-label="close"
          >
            <RxCross2 size={25} />
          </IconButton>
        </div>
        {children}
      </div>
    </Dialog>
  );
};

export default DialougeWrapper;
