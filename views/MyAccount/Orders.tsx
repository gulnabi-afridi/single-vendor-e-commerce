import React from "react";
import { Data } from "../../constants/Data/JSON";
import OrdersRow from "@/components/MyAccount/OrdersRow";

const Orders = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 font-inter p-4 md:py-6 md:px-10">
      {/* grid headers */}
      <div className="w-full overflow-auto">
        <div className="w-full grid grid-cols-[.5fr,1fr,1fr,1.5fr,.5fr] min-w-[700px]">
          <div className="w-full flex items-center justify-start">
            <p className="font-medium text-black-main text-[16px]">Order</p>
          </div>
          <div className="w-full flex items-center justify-start">
            <p className="font-medium text-black-main text-[16px]">Date</p>
          </div>
          <div className="w-full flex items-center justify-start">
            <p className="font-medium text-black-main text-[16px]">Status</p>
          </div>
          <div className="w-full flex items-center justify-start">
            <p className="font-medium text-black-main text-[16px]">Total</p>
          </div>
          <div className="w-full flex items-center justify-start">
            <p className="font-medium text-black-main text-[16px]">Action</p>
          </div>
        </div>
      </div>
      {/* childrens here */}
      <div className="w-full overflow-auto ThinScroll">
        {Data.RecentOrders.map((item: any, index: number) => (
          <OrdersRow
            key={index}
            order={item.order}
            date={item.date}
            status={item.status}
            total={item.total}
            viewDetail={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
