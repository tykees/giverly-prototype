import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Customers', Growth: 4000, Proj: 2400, amt: 2400 },
  { name: 'Brands', Growth: 3000, Proj: 1398, amt: 2210 },
  { name: 'Charity', Growth: 2000, Proj: 9800, amt: 2290 },
  { name: 'All', Growth: 2780, Proj: 3908, amt: 2000 },
 
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
    <Bar dataKey="Proj" fill="#00F7AE" />
    <Bar dataKey="Growth" fill="red" />
  </BarChart>
);

export default ChartTwo;
