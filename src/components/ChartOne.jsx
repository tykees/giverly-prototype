"use client"

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00F7AE', 'pink'];

const data = [
  {
    name: 'Customers',
    Pro: 4000,
    Record: 2400,
    amt: 2400,
  },
  {
    name: 'Brands',
    Pro: 3000,
    Record: 1398,
    amt: 2210,
  },
  {
    name: 'Charity',
    Pro: 2000,
    Record: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    Pro: 2780,
    Record: 3908,
    amt: 2000,
  },
  {
    name: 'Brands',
    Pro: 1890,
    Record: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    Pro: 2390,
    Record: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    Pro: 3490,
    Record: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    <BarChart
      width={500}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="Record" fill="#00F7AE" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
