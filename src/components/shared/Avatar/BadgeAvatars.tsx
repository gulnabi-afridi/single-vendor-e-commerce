import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { FiEdit } from "react-icons/fi";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
  "&:hover .Edit": {
    opacity: 1,
    pointerEvents: "auto",
    cursor: "pointer",
  },
}));

interface Props {
  img?: string;
  size?: {
    width: number;
    height: number;
  };
  alt: string;
}

export default function BadgeAvatars({
  img,
  alt,
  size = { width: 56, height: 56 },
}: Props) {
  const EditPicture = () => {};

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <Avatar
        sx={{ width: size.width, height: size.height }}
        alt={alt}
        src={img}
      />
      <button
        onClick={EditPicture}
        className="w-full h-full opacity-0 absolute bg-black-main/60 flex justify-center items-center pointer-events-none rounded-full transition-all duration-300 Edit"
      >
        <FiEdit color="white" />
      </button>
    </StyledBadge>
  );
}
