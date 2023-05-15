import React from "react";
import Badge from "@mui/material/Badge";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Cart() {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <HiOutlineShoppingBag className="text-[26px] sm:text-[30px] cursor-pointer" />
      </Badge>
    </div>
  );
}

export default Cart;
