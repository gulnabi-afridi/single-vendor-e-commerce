import React from "react";
import Badge from "@mui/material/Badge";
import { HiOutlineShoppingBag } from "react-icons/hi";
import DialougeWrapper from "@/components/shared/DialogueWrapper/DialougeWrapper";
import AddToCart from "@/components/shared/ProductCards/AddToCart";
import { Data } from "../../../constants/Data/JSON";
import NavigationButton from "@/components/shared/Button/NavigationButton";
interface Props {
  open: boolean;
  setOpen: any;
  onClose: any;
}

const Cart: React.FC<Props> = ({ open, setOpen, onClose }) => {
  return (
    <div className="fon-inter">
      <Badge badgeContent={2} color="primary">
        <HiOutlineShoppingBag
          onClick={setOpen}
          className="text-[30px] cursor-pointer"
        />
      </Badge>
      <DialougeWrapper open={open} setState={onClose} title="My Cart">
        <div className="w-full lg:w-[80%] flex flex-col items-start ThinScrollbar justify-center gap-12 mx-auto overflow-auto">
          {Data.CartItems.length == 0 && (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
              <p className="font-inter font-[400] text-black-main text-[14px]">
                No Items In Your Cart Currently
              </p>
              <NavigationButton
                event={onClose}
                text="Return To Shop"
                route="/"
              />
            </div>
          )}
          {Data.CartItems.length > 0 &&
            Data.CartItems.map((item: any, index: number) => (
              <AddToCart
                key={index}
                picture={item.picture}
                name={item.name}
                price={item.price}
              />
            ))}
        </div>
        {Data.CartItems.length > 0 && (
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <NavigationButton
              route="/checkout"
              event={onClose}
              style="h-[50px] md:w-[350px] w-full"
              text="Proceed to cehckout"
            />
          </div>
        )}
      </DialougeWrapper>
    </div>
  );
};

export default Cart;
