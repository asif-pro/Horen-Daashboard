import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";


function BellChart({chartData}){
 

  return (
    <>    { chartData?.length > 0 && (
      <LineChart
      width={450}
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
      <XAxis dataKey="hornCount" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="honkers"
        stroke="#f7cf47"
        strokeWidth={4}
      
      />
      <ReferenceLine x={50} strokeWidth={4} stroke={"green"} style={{color:"#000000"}} colorProfile="#000000"/>
      
    </LineChart>)
   

    }
     </>
    
  )
}

export default BellChart;
