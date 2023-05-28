import React from "react";
import StatsSnippet from "../../src/components/Admin/Snippets/Stats";
import SalesSnippet from "../../src/components/Admin/Snippets/Sales";
import { Data } from "../../constants/Data/JSON";
import RecentOrders from "@/components/Admin/Snippets/RecentOrders";
import RecentBuyer from "@/components/Admin/Snippets/RecentBuyer";

const Dashboard = () => {

  const { ordersData } = Data.AdminData;

  return (
    <div className="w-full flex flex-col gap-6 sm:p-4 p-2">
      <div className="w-full grid lg:grid-cols-3 gap-4">
        <StatsSnippet
          dataKey="orders"
          Data={ordersData}
          Title="Orders"
          Figure={40}
        />
        <StatsSnippet
          dataKey="orders"
          Data={ordersData}
          Title="Sales"
          Figure={1400}
        />
        <StatsSnippet
          dataKey="orders"
          Data={ordersData}
          Title="New Buyers"
          Figure={130}
        />
      </div>
      <SalesSnippet />
      <RecentOrders />
      {/* ===> recent buyer here */}
      <RecentBuyer/>
    </div>
  );
};

export default Dashboard;
