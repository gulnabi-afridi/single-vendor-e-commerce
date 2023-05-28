import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
interface Props {
  data: {}[];
  dataKey: string;
}
const MiniChart: React.FC<Props> = ({ data, dataKey }: Props) => {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00D994" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00D994" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#00D994"
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MiniChart;
