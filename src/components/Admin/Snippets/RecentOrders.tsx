import React, { useState } from "react";
import MiniGrid from "@/components/shared/TableGrid/MiniGrid";

import { Data } from "../../../../constants/Data/JSON";
import RecentOrdersRow from "../Rows/OrdersRow";

const { ordersData } = Data.AdminData;

const RecentOrders = () => {
  return (
    <MiniGrid
      Title="Recent Orders"
      ViewMoreLink="/admin/orders"
      GridCols="grid-cols-[1.5fr,1fr,1fr,1fr,1fr,.5fr]"
      TableHeaders={[
        "product",
        "order id",
        "Purchased Date",
        "qty",
        "status",
        "",
      ]}
    >
      {/* rows here */}
      <div className="w-full min-w-[600px] overflow-auto HideScroll">
        {ordersData.map(
          (item: any, index: number) =>
            index < 5 && (
              <RecentOrdersRow
                key={index}
                picture={item.pic}
                name={item.productName}
                orderId={item.orderId}
                qty={item.qty}
                status={item.status}
                purchasedData={item.purchasedDate}
              />
            )
        )}
      </div>
    </MiniGrid>
  );
};

export default RecentOrders;
