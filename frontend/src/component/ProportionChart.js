import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = JSON.parse(localStorage.getItem('items'));
// [
//   { name: 'Kamala Srinivasa', ETH: '26' },
//   { name: 'Padma Sridhar', ETH: '8', SOL: '32' }
// ];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
        <BarChart
          width={800}
          height={370}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ETH" fill="#8884d8" />
          <Bar dataKey="SOL" fill="#82ca9d" />
          <Bar dataKey="BNC" fill="#8884d8" />
          <Bar dataKey="BTC" fill="#82ca9d" />
        </BarChart>
    );
  }
}
