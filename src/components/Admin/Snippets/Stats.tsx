import React from "react";
import MiniChart from "@/components/shared/Charts/MiniChart";
interface Props {
  Title: string;
  Data: Array<object>;
  dataKey: string;
  Figure: number;
}
const Stats: React.FC<Props> = ({ Title, dataKey, Data, Figure }) => {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-between h-[162px] border-[1px] border-[#D1D9E2] bg-[#F7F7F7] Shadow rounded-[8px] p-4">
      <div className="w-full">
        <p className="text-black-main text-[16px] font-inter font-medium">
          {Title}
        </p>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex flex-col gap-2">
          <p className="text-black-main font-inter text-[28px] font-semibold">
            {Title === 'Sales' ? "$" + Figure : Figure}
          </p>
          <p className="text-[14px] text-black-cool font-inter font-medium">
            Today
          </p>
        </div>
        <MiniChart data={Data} dataKey={dataKey} />
      </div>
    </div>
  );
};

export default Stats;
