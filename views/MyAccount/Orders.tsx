import React, { useState } from "react";
import { Data } from "../../constants/Data/JSON";
import OrdersRow from "@/components/MyAccount/Orders/OrdersRow";
import OrderRecipt from "@/components/MyAccount/Orders/OrderRecipt";
import NoDataSnippet from "@/components/MyAccount/Orders/NoDataSnippet";

const Orders = () => {
  const [orderRecipt, setOrderRecipt] = useState<boolean>(false);
  return (
    <div className="w-full h-full font-inter p-4 md:py-6 md:px-10">
      {/* if there are no recent orders thn this will display */}
      {Data.RecentOrders.length == 0 && <NoDataSnippet />}

      {/* if there are recent orders thn this will display */}
      {!orderRecipt && Data.RecentOrders.length > 0 && (
        <div className="w-full h-full flex flex-col gap-2">
          {/* grid headers */}
          <div className="w-full HideScroll overflow-auto">
            <div className="w-full grid grid-cols-[.9fr,1fr,1fr,1.5fr,.5fr] min-w-[800px]">
              <div className="w-full flex items-center justify-start">
                <p className="font-medium text-black-main text-[16px]">Orders #</p>
              </div>
              <div className="w-full flex items-center justify-start">
                <p className="font-medium text-black-main text-[16px]">Date</p>
              </div>
              <div className="w-full flex items-center justify-start">
                <p className="font-medium text-black-main text-[16px]">
                  Status
                </p>
              </div>
              <div className="w-full flex items-center justify-start">
                <p className="font-medium text-black-main text-[16px]">Total</p>
              </div>
              <div className="w-full flex items-center justify-start">
                <p className="font-medium text-black-main text-[16px]">
                  Action
                </p>
              </div>
            </div>
          </div>
          {/* childrens here */}
          <div className="w-full overflow-auto ThinScrollbar">
            {Data.RecentOrders.map((item: any, index: number) => (
              <OrdersRow
                key={index}
                order={item.order}
                date={item.date}
                status={item.status}
                total={item.total}
                viewDetail={() => setOrderRecipt(true)}
              />
            ))}
          </div>
        </div>
      )}
      {orderRecipt && Data.RecentOrders.length > 0 && <OrderRecipt />}
    </div>
  );
};

export default Orders;
