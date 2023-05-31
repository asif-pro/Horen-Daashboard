import React from "react";
import ReactApexChart from "react-apexcharts";
import { bellChartData, bellChartOptions } from "variables/charts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
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
      
    </LineChart>)
   

    }
     </>
    
  )
}

export default BellChart;
