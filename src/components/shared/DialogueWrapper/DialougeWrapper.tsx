import React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { RxCross2 } from "react-icons/rx";
import Button from "@mui/material/Button";

interface Props {
  open: boolean;
  setState: any;
  children: React.ReactNode;
  title:string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialougeWrapper: React.FC<Props> = ({ open, setState, children,title }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={setState}
      TransitionComponent={Transition}
    >
      <div className="w-full flex flex-col gap-8 p-4 sm:p-8">
        <div className="w-full flex justify-between items-center">
            <p className="font-inter font-[400] text-black-main text-[24px]">{title}</p>
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
