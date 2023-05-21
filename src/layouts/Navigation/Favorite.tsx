import React from "react";
import Badge from "@mui/material/Badge";
import { MdFavoriteBorder } from "react-icons/md";

function Favorite() {
  return (
    <div>
      <Badge
        badgeContent={4}
    
      >
        <MdFavoriteBorder className="text-[26px] sm:text-[30px] cursor-pointer" />
      </Badge>
    </div>
  );
}

export default Favorite;
