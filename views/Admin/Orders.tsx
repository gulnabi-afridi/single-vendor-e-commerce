import React, { useState } from "react";
import TableGrid from "@/components/shared/TableGrid/TableGrid";
import { Data } from "../../constants/Data/JSON";
import RecentOrdersRow from "@/components/Admin/Rows/OrdersRow";
import DashboardDialougeWrapper from "@/components/shared/DialogueWrapper/DashboardDialougeWrapper";

const Orders = () => {
  const { ordersData } = Data.AdminData;

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
      <div className="w-full flex flex-col items-start justify-center gap-[20px] bg-[#F7F7F7] p-4 rounded-[5px] Shadow">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <TableGrid
            Title="Orders"
            TableHeaders={[
              "product",
              "order id",
              "purchased date",
              "qty",
              "status",
              "",
            ]}
            GridCols="grid-cols-[1.5fr,1fr,1fr,1fr,1fr,.5fr]"
            State={search}
            SetState={(e: any) => setSearch(e.target.value)}
            Pages={10}
            CurrentPage={page}
            OnPageChange={handlePageChange}
          >
            <div className="w-full h-[calc(100vh-260px)]  min-w-[500px] overflow-auto HideScroll">
              {ordersData.map((item, index) => {
                return (
                  <RecentOrdersRow
                    key={index}
                    picture={item.pic}
                    event={() => setOpenDialogue(true)}
                    name={item.productName}
                    orderId={item.orderId}
                    qty={item.qty}
                    status={item.status}
                    purchasedData={item.purchasedDate}
                  />
                );
              })}
            </div>
          </TableGrid>
        </div>
      </div>
      <DashboardDialougeWrapper
        Open={openDialogue}
        CloseEvent={() => setOpenDialogue(false)}
        Title="Order Details"
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
              Order details
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            {/* 1 product */}
            {numberofProducts.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-between items-center"
                >
                  <p className="font-inter capitalize font-medium text-black-main text-[14px]">
                    product {item.number}:
                  </p>
                  <p className="font-inter font-medium text-black-main text-[14px]">
                    {item.description}
                  </p>
                </div>
              );
            })}

            <div className="w-full flex justify-between items-center">
              <p className="font-inter capitalize font-medium text-black-main text-[14px]">
                Purchased date:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                03/05/2023
              </p>
            </div>
            {/* ==> qty date */}
            <div className="w-full flex justify-between items-center">
              <p className="font-inter capitalize font-medium text-black-main text-[14px]">
                quantity:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                03
              </p>
            </div>
            {/* => payement  */}
            <div className="w-full flex justify-between items-center">
              <p className="font-inter capitalize font-medium text-black-main text-[14px]">
                payment method:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                cash on delivery
              </p>
            </div>
            {/* ==> status */}
            <div className="w-full flex justify-between items-center">
              <p className="font-inter capitalize font-medium text-black-main text-[14px]">
                status:
              </p>
              <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center gap-2">
                  {/* 1) process */}
                  <input
                    type="radio"
                    id="process"
                    name="status"
                    value="process"
                  />
                  <label htmlFor="process">process</label>
                </div>
                {/* 2) deliverd */}
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    id="deliver"
                    name="status"
                    value="deliver"
                  />
                  <label htmlFor="deliver">deliverd</label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start justify-start">
            <p className="font-inter font-semibold text-[15px]  text-black-main">
              Order By
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <p className="font-inter capitalize font-medium text-black-main text-[14px]">
                name:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                gulnabi afridi
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                email:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                gulnabifdi@gmail.com
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="font-inter capitalize font-medium text-black-main text-[14px]">
                address:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                uet, taxila ali hall room number 19
              </p>
            </div>

            <div className="w-full flex justify-between items-center">
              <p className="font-inter font-medium text-black-main text-[14px]">
                phone#:
              </p>
              <p className="font-inter font-medium text-black-main text-[14px]">
                0313-xxx-xxx
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

const numberofProducts = [
  {
    number: "1",
    description: " t-shirt, yellow color, medium size",
  },
  {
    number: "2",
    description: " t-shirt, yellow color, medium size",
  },
];

export default Orders;
