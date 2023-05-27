import React, { useState } from "react";
import { salesMapTypes } from "../../../../types/types";
import SalesChart from "@/components/shared/Charts/SalesChart";
import { Data } from "../../../../constants/Data/JSON";

const { monthlySales, weeklySales, yearlySales } = Data.AdminData;

const Sales = () => {
  const [sellerChartStates, setSellerChartStates] = useState<salesMapTypes>({
    weekly: false,
    monthly: true,
    yearly: false,
  });
  return (
    <div className="w-full flex flex-col items-start justify-between bg-[#F7F7F7] border-[1px] border-[#D1D9E2] Shadow p-4 rounded-[8px]  gap-4">
      <div className="w-full flex items-center justify-between">
        <p className="text-black-main text-[16px] text-left font-semibold font-inter">
          Sales
        </p>
        <div className="flex gap-2">
          <button
            onClick={() =>
              setSellerChartStates({
                weekly: true,
                monthly: false,
                yearly: false,
              })
            }
            className={`h-[30px] w-[100px] flex items-center justify-center font-inter font-medium text-black-main text-[13px] rounded-[5px] ${
              sellerChartStates.weekly
                ? "bg-black-main text-white-main"
                : "hover:bg-white-main/60"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() =>
              setSellerChartStates({
                weekly: false,
                monthly: true,
                yearly: false,
              })
            }
            className={`h-[30px] w-[100px] flex items-center justify-center font-inter font-medium text-black-main text-[13px] rounded-[5px] ${
              sellerChartStates.monthly
                ? "bg-black-main text-white-main"
                : "hover:bg-white-main/60"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() =>
              setSellerChartStates({
                weekly: false,
                monthly: false,
                yearly: true,
              })
            }
            className={`h-[30px] w-[100px] flex items-center justify-center font-inter font-medium text-black-main text-[13px] rounded-[5px] ${
              sellerChartStates.yearly
                ? "bg-black-main text-white-main"
                : "hover:bg-white-main/60"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="w-full h-[350px] flex flex-col gap-4 items-center justify-center  bg-[#F7F7F7] ">
        {sellerChartStates.monthly && (
          <SalesChart
            data={monthlySales}
            xaxisDatakey="month"
            yaxisDataKey="sellers"
          />
        )}
        {sellerChartStates.weekly && (
          <SalesChart
            data={weeklySales}
            xaxisDatakey="week"
            yaxisDataKey="sellers"
          />
        )}
        {sellerChartStates.yearly && (
          <SalesChart
            data={yearlySales}
            xaxisDatakey="year"
            yaxisDataKey="sellers"
          />
        )}
      </div>
    </div>
  );
};

export default Sales;
