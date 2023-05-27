import React from "react";

interface Props {
  order: number;
  date: string;
  status: string;
  total: string;
  viewDetail: any;
}

const OrdersRow: React.FC<Props> = ({
  order,
  date,
  status,
  total,
  viewDetail,
}) => {
  return (
    <div className="min-w-[800px] grid grid-cols-[.9fr,1fr,1fr,1.5fr,.5fr] border-t py-4">
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">#{order}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{date}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{status}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{total}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <button
          onClick={viewDetail}
          className="font-medium text-black-main text-[14px] relative after:absolute after:w-0 after:h-[2px] after:bg-black-main hover:after:w-full after:bottom-0 after:left-0 after:duration-300"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default OrdersRow;
