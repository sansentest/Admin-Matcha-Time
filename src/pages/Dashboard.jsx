import React from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 1200 },
  { name: 'Tue', revenue: 2100 },
  { name: 'Wed', revenue: 1800 },
  { name: 'Thu', revenue: 2400 },
  { name: 'Fri', revenue: 2800 },
  { name: 'Sat', revenue: 3200 },
  { name: 'Sun', revenue: 3800 },
];

const StatCard = ({ title, value, icon, trend, trendValue }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute -right-6 -top-6 text-gray-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
            {React.cloneElement(icon, { size: 120 })}
        </div>
        <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {icon}
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                        {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                        {trendValue}%
                    </div>
                )}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
            <p className="text-sm font-medium text-gray-500">{title}</p>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Revenue" value="$4,850.00" icon={<DollarSign size={24} />} trend="up" trendValue="12.5" />
                <StatCard title="Total Orders" value="156" icon={<ShoppingBag size={24} />} trend="up" trendValue="8.2" />
                <StatCard title="Total Products" value="24" icon={<TrendingUp size={24} />} trend="up" trendValue="2.4" />
                <StatCard title="Total Customers" value="89" icon={<Users size={24} />} trend="down" trendValue="1.5" />
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Revenue Overview (Last 7 Days)</h2>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3d7c47" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#3d7c47" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} tickFormatter={(value) => `$${value}`} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                formatter={(value) => [`$${value}`, 'Revenue']}
                            />
                            <Area type="monotone" dataKey="revenue" stroke="#3d7c47" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders Table */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
                        <button className="text-sm font-medium text-primary hover:text-primary-dark">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-100 text-sm text-gray-400">
                                    <th className="pb-3 font-medium">Order ID</th>
                                    <th className="pb-3 font-medium">Customer</th>
                                    <th className="pb-3 font-medium">Amount</th>
                                    <th className="pb-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-50">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 font-semibold text-gray-900">#ORD-092</td>
                                    <td className="py-4 text-gray-600">Sokha N.</td>
                                    <td className="py-4 font-semibold text-gray-900">$12.50</td>
                                    <td className="py-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                                            <CheckCircle2 size={14} /> Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 font-semibold text-gray-900">#ORD-093</td>
                                    <td className="py-4 text-gray-600">Minea K.</td>
                                    <td className="py-4 font-semibold text-gray-900">$8.00</td>
                                    <td className="py-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-semibold">
                                            <Clock size={14} /> Pending
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 font-semibold text-gray-900">#ORD-094</td>
                                    <td className="py-4 text-gray-600">Rath T.</td>
                                    <td className="py-4 font-semibold text-gray-900">$15.50</td>
                                    <td className="py-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                                            <Clock size={14} /> Processing
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Popular Items / Activity Feed */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Top Selling Items</h2>
                    <div className="space-y-6">
                        {[
                            { name: 'Iced Matcha Latte', sales: '142 orders', price: '$4.50', color: 'bg-green-100 text-green-600' },
                            { name: 'Caffè Americano', sales: '98 orders', price: '$3.00', color: 'bg-orange-100 text-orange-600' },
                            { name: 'Strawberry Matcha', sales: '84 orders', price: '$5.50', color: 'bg-red-100 text-red-600' },
                            { name: 'Peach Soda', sales: '56 orders', price: '$3.50', color: 'bg-pink-100 text-pink-600' }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${item.color}`}>
                                        #{index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                                        <p className="text-xs text-gray-500 font-medium">{item.sales}</p>
                                    </div>
                                </div>
                                <span className="font-bold text-sm text-gray-900">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
