import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {}[];
  yaxisDataKey: string;
  xaxisDatakey: string;
}
const SalesChart: React.FC<Props> = ({
  data,
  xaxisDatakey,
  yaxisDataKey,
}: Props) => {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <AreaChart data={data}>
    
        <XAxis
          tick={{ fontFamily: "Inter", fontSize: "12px" }}
          dataKey={xaxisDatakey}
        />
        <YAxis
          dataKey="sellers"
          tick={{ fontFamily: "Inter", fontSize: "12px" }}
        />
        <Tooltip />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00D994" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00D994" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey={yaxisDataKey}
          stroke="#00D994"
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
