"use client"
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { Month: 'Jan', updates: 0 },
  { Month: 'Feb', updates: 5 },
  { Month: 'Mar', updates: 10 },
  { Month: 'Apr', updates: 27 },
  { Month: 'May', updates: 18 },
  { Month: 'Jun', updates: 23 },
  { Month: 'Jul', updates: 34 },
  { Month: 'Aug', updates: 34 },
  { Month: 'Sept', updates: 49 },
  { Month: 'Oct', updates: 10 },
  { Month: 'Nov', updates: 30 },
  { Month: 'Dec', updates: 50 },
];

export default function LineChats() {
  return (
      <AreaChart
        style={{ width: '100%', maxHeight: "300", maxWidth: "auto",  height: 300 }}
        responsive
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis width={"auto"} />
        <Tooltip />
        <Area type="monotoneX" dataKey="updates" stroke="#0000FF" fill='#0000ff' />
      </AreaChart>
  );
}