import React, { useState } from "react";
import TableGrid from "@/components/shared/TableGrid/TableGrid";
import { Data } from "../../constants/Data/JSON";
import RecentOrdersRow from "@/components/Admin/Rows/OrdersRow";

const Orders = () => {
  const { ordersData } = Data.AdminData;

  const [search, setSearch] = useState("");

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
    </React.Fragment>
  );
};

export default Orders;
