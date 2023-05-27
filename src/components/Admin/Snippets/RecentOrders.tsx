import React, { useState } from "react";
import MiniGrid from "@/components/shared/Grids/MiniGrid";

import { Data } from "../../../../constants/Data/JSON";
import RecentOrdersRow from "../TableRows/RecentOrdersRow";
import Image from "next/image";

const { sellers } = Data.AdminData;

const RecentOrders = () => {
  const [filteredSeller, setFilteredSeller] = useState({
    name: "",
    id: 1,
    logo: "",
    cancelled: "",
    products: 1,
    cover: "",
    address: "",
    phone: "",
    email: "",
    personalWebsite: "",
    category: "",
    shopName: "",
    earnings: 3400,
    orders: 12,
    joiningDate: "",
  });
  const [isOpen, setIsOpen] = useState({
    sellerDialog: false,
    agentDialog: false,
    buyerDialog: false,
  });
  const filterSeller = (x: any) => {
    const filtered = sellers.filter((item: any) => item.id === x.id);
    setFilteredSeller(filtered[0]);
  };
  return (
    <MiniGrid
      Title="Recent Orders"
      ViewMoreLink="/admin/orders"
      GridCols="grid-cols-[1.5fr,1fr,1fr,1fr,.5fr]"
      TableHeaders={["Seller", "Seller ID", "Products", "Cancellation", ""]}
    >
      {/* rows here */}
      <div className="w-full min-w-[600px] overflow-auto HideScroll">
        {sellers.map(
          (item: any, index: number) =>
            index < 5 && (
              <RecentOrdersRow
                key={index}
                OnClick={() => {
                  filterSeller(item);
                  setIsOpen({
                    sellerDialog: true,
                    agentDialog: false,
                    buyerDialog: false,
                  });
                }}
                Picture={item.logo}
                Products={item.products}
                Id={item.id}
                Name={item.name}
                Cancellation={item.cancelled}
              />
            )
        )}
      </div>
    </MiniGrid>
  );
};

export default RecentOrders;
