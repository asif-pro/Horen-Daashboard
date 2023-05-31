import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function HornsPerDay({chartData}){


  return (
    <>    { chartData?.length > 0 && (
      <LineChart
      width={950}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 10,
        left: 10,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="horns"
        stroke="#f7cf47"
        strokeWidth={4}
      
      />
      
    </LineChart>)
   

    }
     </>
    
  )
}
export default HornsPerDay;
