import React from "react";
import Badge from "@mui/material/Badge";
import { MdFavoriteBorder } from "react-icons/md";
import DialougeWrapper from "@/components/shared/DialogueWrapper/DialougeWrapper";
import { Data } from "../../../constants/Data/JSON";
import WishListCard from "@/components/shared/ProductCards/WishListCard";

interface Props {
  open: boolean;
  setOpen: any;
  onClose: any;
}

const Favorite: React.FC<Props> = ({ open, setOpen, onClose }: Props) => {
  return (
    <div>
      <Badge badgeContent={4}>
        <MdFavoriteBorder
          onClick={setOpen}
          className="text-[26px] sm:text-[30px] cursor-pointer"
        />
      </Badge>
      <DialougeWrapper open={open} setState={onClose} title="My Wishlist">
        <div className="w-full lg:w-[80%] flex flex-col items-center justify-center gap-4 mx-auto overflow-auto">
          {Data.WishListItems.map((item: any, index: number) => (
            <WishListCard
              key={index}
              name={item.name}
              picture={item.picture}
              price={item.price}
              status={item.status}
              seeDetails={onClose}
            />
          ))}
        </div>
      </DialougeWrapper>
    </div>
  );
};

export default Favorite;
