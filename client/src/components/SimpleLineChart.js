import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Consumption: 2200, Production: 3400 },
  { name: 'Tue', Consumption: 1280, Production: 2398 },
  { name: 'Wed', Consumption: 5000, Production: 4300 },
  { name: 'Thu', Consumption: 4780, Production: 2908 },
  { name: 'Fri', Consumption: 5890, Production: 4800 },
  { name: 'Sat', Consumption: 4390, Production: 3800 },
  { name: 'Sun', Consumption: 4490, Production: 4300 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Consumption" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Production" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;