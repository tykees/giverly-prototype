import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Customer A', Act: 5000, Record: 2400, amt: 2400 },
  { name: 'Customer B', Act: 3000, Record: 1398, amt: 2210 },
  { name: 'Customer C', Act: 2000, Record: 2000, amt: 2290 },
  { name: 'Customer D', Act: 2780, Record: 3908, amt: 2000 },
  
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
    <Bar dataKey="Record" fill="#8884d8" />
    <Bar dataKey="Act" fill="orange" />
  </BarChart>
);

export default ChartThree;
