import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Customers', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Brands', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Charity', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'All', uv: 2780, pv: 3908, amt: 2000 },
 
];

const ChartTwo = () => (
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
    <Bar dataKey="pv" fill="#00F7AE" />
    <Bar dataKey="uv" fill="red" />
  </BarChart>
);

export default ChartTwo;
