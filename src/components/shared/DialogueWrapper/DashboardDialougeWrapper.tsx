import React from "react";
import Dialog from "@mui/material/Dialog";
import { RxCross1 } from "react-icons/rx";

interface props {
  Open: boolean;
  CloseEvent: () => void;
  style?: string;
  children: React.ReactNode;
  Title: string;
}

function DashboardDialougeWrapper({
  Open,
  CloseEvent,
  style,
  children,
  Title,
}: props) {
  return (
    <Dialog
      open={Open}
      sx={{
        "& .MuiPaper-root": {
          background: "#FFFFFF",
          borderRadius: "8px",
          maxWidth: "unset",
        },
        "& ::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
        },
      }}
    >
      <div className={`sm:w-[600px] ${style}`}>
        <div className="w-full bg-main-brand h-[60px] flex sm:gap-0 gap-4 justify-between items-center p-4 sm:p-6">
          <h2 className="font-inter font-semibold text-lg text-white-main text-center capitalize">
            {Title}
          </h2>
          <button
            type="button"
            onClick={CloseEvent}
            className="font-semibold p-1.5 bg-red-main text-white-main rounded-full"
          >
            <RxCross1 size={18}/>
          </button>
        </div>
        <div className="p-4 sm:p-6 max-h-[530px] overflow-auto">{children}</div>
      </div>
    </Dialog>
  );
}

export default DashboardDialougeWrapper;
