import React, { useState } from "react";
import MiniGrid from "@/components/shared/TableGrid/MiniGrid";

import { Data } from "../../../../constants/Data/JSON";
import RecentBuyerRow from "../Rows/BuyerRow";

const { buyerData } = Data.AdminData;

const RecentBuyer = () => {
  return (
    <MiniGrid
      Title="Recent Buyers"
      ViewMoreLink="/admin/orders"
      GridCols="grid-cols-[1fr,1.5fr,1fr,1fr,.5fr]"
      TableHeaders={[
        "buyer",
        "address",
        "purchased Products",
        "amount Spent",
        "",
      ]}
    >
      {/* rows here */}
      <div className="w-full min-w-[600px] overflow-auto HideScroll">
        {buyerData.map(
          (item: any, index: number) =>
            index < 5 && (
              <RecentBuyerRow
                key={index}
                name={item.name}
                address={item.address}
                purchasedProducts={item.purchasedProducts}
                amountSpent={item.amountSpent}
              />
            )
        )}
      </div>
    </MiniGrid>
  );
};

export default RecentBuyer;
