import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Customer A', uv: 5000, qv: 2400, amt: 2400 },
  { name: 'Customer B', uv: 3000, qv: 1398, amt: 2210 },
  { name: 'Customer C', uv: 2000, qv: 2000, amt: 2290 },
  { name: 'Customer D', uv: 2780, qv: 3908, amt: 2000 },
  
];

const ChartThree = () => (
  <BarChart
    width={500}
    height={230}
    data={data}
    margin={{
      top: 10, right: 40, left: 5, bottom: 10,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="qv" fill="#8884d8" />
    <Bar dataKey="uv" fill="orange" />
  </BarChart>
);

export default ChartThree;
