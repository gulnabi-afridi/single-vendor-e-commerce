import React from "react";
import Badge from "@mui/material/Badge";
import { MdFavoriteBorder } from "react-icons/md";
import DialougeWrapper from "@/components/shared/DialogueWrapper/DialougeWrapper";
interface Props{
  open:boolean;
  setOpen:any;
  onClose:any;
}

const Favorite:React.FC<Props>=({open,setOpen,onClose}:Props)=> {
  return (
    <div>
      <Badge badgeContent={4}>
        <MdFavoriteBorder onClick={setOpen} className="text-[26px] sm:text-[30px] cursor-pointer" />
      </Badge>
      <DialougeWrapper
          open={open}
          setState={onClose}
          title="My Wishlist"
        >
          <div className="w-full md:w-[40%] flex flex-col items-center justify-center gap-12 mx-auto"></div>
        </DialougeWrapper>
    </div>
  );
}

export default Favorite;
