"use client"
import { Pie, PieChart, Tooltip } from 'recharts';

// #region Sample data
const data = [
  { name: 'Fast', value: 3, fill: '#0088FE' },
  { name: 'Medium', value: 2, fill: '#00C49F' },
  { name: 'Slow', value: 3, fill: '#FFBB28' },
  { name: 'In-Active', value: 1, fill: '#FF8042' },
];

// #endregion
export default function PieCharts({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <div className='flex w-full items-center justify-center pb-8'>
        <PieChart style={{ width: '70%', height: 200}} responsive >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={isAnimationActive}
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}