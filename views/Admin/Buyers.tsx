import React, { useState } from "react";
import TableGrid from "@/components/shared/TableGrid/TableGrid";
import { Data } from "../../constants/Data/JSON";
import BuyerRow from "@/components/Admin/Rows/BuyerRow";
import DashboardDialougeWrapper from "@/components/shared/DialogueWrapper/DashboardDialougeWrapper";

const Buyers = () => {
  const { buyerData } = Data.AdminData;

  const [search, setSearch] = useState("");
  const [openDialogue, setOpenDialogue] = useState(false);

  // state to pagination
  const [page, setPage] = useState(1);
  //  handle pagination
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <TableGrid
          Title="Buyers"
          TableHeaders={[
            "buyer",
            "address",
            "purchased products",
            "amount spent",
            "",
          ]}
          GridCols="grid-cols-[1fr,1.5fr,1fr,1fr,.5fr]"
          State={search}
          SetState={(e: any) => setSearch(e.target.value)}
          Pages={10}
          CurrentPage={page}
          OnPageChange={handlePageChange}
        >
          <div className="w-full h-[calc(100vh-260px)] min-w-[500px] overflow-auto HideScroll">
            {buyerData.map((item: any, index: number) => (
              <BuyerRow
                key={index}
                event={() => setOpenDialogue(true)}
                name={item.name}
                address={item.address}
                purchasedProducts={item.purchasedProducts}
                amountSpent={item.amountSpent}
              />
            ))}
          </div>
        </TableGrid>
      </div>

      {/* ====> dialogue */}
      <DashboardDialougeWrapper
        Open={openDialogue}
        CloseEvent={() => setOpenDialogue(false)}
        Title="Buyer Detail"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpenDialogue(false);
          }}
          className="w-full flex flex-col gap-5 items-center justify-center"
        >
          <div className="w-full flex items-start justify-start">
            <p className="font-inter font-semibold text-[15px]  text-black-main">
              Personal Information
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                Name:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                gulnabi afridi
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                Email:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                gulnabifdi@gmail.com
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                Phone:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                0313-xxx-xxxx
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                Address:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                uet taxila ali hall room number 19, punjab
              </p>
            </div>
          </div>
          <div className="w-full flex items-start justify-start">
            <p className="font-inter font-semibold text-[15px]  text-black-main">
              Professional Information
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                Purchased Products:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                30
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                Amount Spent:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                $400
              </p>
            </div>

            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                Joinig Date:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                02/04/2022
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-end gap-6">
            <button
              type="button"
              onClick={() => setOpenDialogue(false)}
              className="w-[140px] h-[40px] text-center text-[14px] text-white-main font-inter font-medium rounded-md bg-red-main"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-center text-[14px] font-inter font-medium rounded-md border-[1px] border-black-off text-black-off hover:text-white-main w-[140px] h-[40px] hover:bg-black-main"
            >
              Save
            </button>
          </div>
        </form>
      </DashboardDialougeWrapper>
    </React.Fragment>
  );
};

export default Buyers;
