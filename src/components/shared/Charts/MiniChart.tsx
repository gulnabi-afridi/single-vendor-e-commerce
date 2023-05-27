import React from 'react'
import { AreaChart, Area ,  ResponsiveContainer,} from "recharts";
interface Props{
    data:{}[];
    dataKey:string;
}
const MiniChart:React.FC<Props> = ({data,dataKey}:Props) => {
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
                <Area
                  type="monotone"
                  dataKey={dataKey}
                  stroke="#5F6D7E"
                  fill="#E9EBEE"
                />
              </AreaChart>
              </ResponsiveContainer>
  )
}

export default MiniChart