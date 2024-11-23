import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Share2, Filter } from 'lucide-react';

const data = [
  { name: 'Jan', value: 4000, sales: 2400, revenue: 2400 },
  { name: 'Feb', value: 3000, sales: 1398, revenue: 2210 },
  { name: 'Mar', value: 2000, sales: 9800, revenue: 2290 },
  { name: 'Apr', value: 2780, sales: 3908, revenue: 2000 },
  { name: 'May', value: 1890, sales: 4800, revenue: 2181 },
  { name: 'Jun', value: 2390, sales: 3800, revenue: 2500 },
];

const pieData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

export default function Dashboard() {
  const [activeChart, setActiveChart] = useState('line');

  return (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <div className="flex space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Revenue Trends</h2>
              <select 
                className="border-gray-300 rounded-md text-sm"
                value={activeChart}
                onChange={(e) => setActiveChart(e.target.value)}
              >
                <option value="line">Line Chart</option>
                <option value="bar">Bar Chart</option>
                <option value="area">Area Chart</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                {activeChart === 'line' ? (
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                  </LineChart>
                ) : activeChart === 'bar' ? (
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                    <Bar dataKey="sales" fill="#82ca9d" />
                  </BarChart>
                ) : (
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="sales" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Total Revenue', 'Active Users', 'Conversion Rate'].map((metric) => (
            <div key={metric} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">{metric}</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {metric === 'Total Revenue' && '$128,430'}
                {metric === 'Active Users' && '12,345'}
                {metric === 'Conversion Rate' && '64.5%'}
              </p>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-green-600">↑ 12.5%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}