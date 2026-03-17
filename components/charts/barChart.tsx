"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  { country: 'South Sudan', update: 3},
  { country: 'Kenya', update: 12},
  { country: 'Rwanda', update: 2},
  { country: 'Uganda', update: 9},
  { country: 'Tanzania', update: 7},
  { country: 'Burundi', update: 6},
  { country: 'Ethiopia', update: 2},
    { country: 'Horn of Africa', update: 5},
];

// #endregion
const BarCharts = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto', height:300, aspectRatio: 1.6 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="update" fill="blue" activeBar={{ fill: 'blue', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
    </BarChart>
  );
};

export default BarCharts;