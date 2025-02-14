
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  date: string;
  clients: number;
  conversions: number;
  users: number;
}

interface MainChartProps {
  data: ChartData[];
}

const MainChart: React.FC<MainChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="clients" stroke="#8884d8" />
      <Line type="monotone" dataKey="conversions" stroke="#82ca9d" />
      <Line type="monotone" dataKey="users" stroke="#ffc658" />
    </LineChart>
  </ResponsiveContainer>
);

export default MainChart;