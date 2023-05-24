import React from "react";
import Link from "next/link";
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
        <div className="w-full lg:w-[80%] flex flex-col items-center justify-center gap-12 mx-auto overflow-auto">
          {Data.CartItems.map((item: any, index: number) => (
            <AddToCart
              key={index}
              picture={item.picture}
              name={item.name}
              price={item.price}
            />
          ))}
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <NavigationButton
              route="/checkout"
              event={onClose}
              style="h-[50px] md:w-[350px] w-full"
              text="Proceed to cehckout"
            />

            <Link
              href="/cart"
              onClick={onClose}
              className="capitalize text-black-main text-[16px] font-[500] relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-black-main hover:after:w-full after:duration-200"
            >
              View Cart
            </Link>
          </div>
        </div>
      </DialougeWrapper>
    </div>
  );
};

export default Cart;
