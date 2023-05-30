import React from "react";
import Badge from "@mui/material/Badge";
import { MdFavoriteBorder } from "react-icons/md";
import DialougeWrapper from "@/components/shared/DialogueWrapper/DialougeWrapper";
import { Data } from "../../../constants/Data/JSON";
import WishListCard from "@/components/shared/ProductCards/WishListCard";
import NavigationButton from "@/components/shared/Button/NavigationButton";

interface Props {
  open: boolean;
  setOpen: any;
  onClose: any;
}

const Favorite: React.FC<Props> = ({ open, setOpen, onClose }: Props) => {
  return (
    <div>
      <Badge badgeContent={3}>
        <MdFavoriteBorder
          onClick={setOpen}
          className="text-[26px] sm:text-[30px] cursor-pointer"
        />
      </Badge>
      <DialougeWrapper open={open} setState={onClose} title="My Wishlist">
        <div className="w-full lg:w-[80%] flex flex-col items-start justify-center ThinScrollbar gap-4 mx-auto overflow-auto">
          {Data.WishListItems.length == 0 && (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
              <p className="font-inter font-[400] text-black-main text-[14px]">
                No Items In Your Wishlist Currently
              </p>
              <NavigationButton
                event={onClose}
                route="/"
                text="Return To Shop"
              />
            </div>
          )}

          {Data.WishListItems.length > 0 &&
            Data.WishListItems.map((item: any, index: number) => (
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
