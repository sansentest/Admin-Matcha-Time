import React, { useState } from 'react';
import { Eye, Edit2, ChevronLeft, ChevronRight } from 'lucide-react';

const generateDummyOrders = () => {
    const statuses = ['Completed', 'Pending', 'Processing', 'Cancelled'];
    const names = ['Sokha N.', 'Minea K.', 'Rath T.', 'Chansy P.', 'Vireak V.', 'Bopha C.', 'Dara H.', 'Nita S.', 'Kosal L.', 'Sopheap M.'];
    const itemsList = ['Iced Matcha Latte (2)', 'Caffè Americano (1), Peach Soda (1)', 'Strawberry Matcha (1)', 'Espresso (2)', 'Hot Latte (1)', 'Green Tea (3)', 'Mocha (1)', 'Matcha Frappe (2)'];
    
    return Array.from({ length: 25 }, (_, i) => ({
        id: `#ORD-${String(92 + i).padStart(3, '0')}`,
        customer: names[i % names.length],
        items: itemsList[i % itemsList.length],
        total: Math.floor(Math.random() * 20) + 5 + 0.5,
        date: `Oct ${24 - (i % 5)}, 2024`,
        status: statuses[i % statuses.length],
    }));
};

const Orders = () => {
    const [orders] = useState(generateDummyOrders());
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700';
            case 'Pending': return 'bg-yellow-100 text-yellow-700';
            case 'Processing': return 'bg-blue-100 text-blue-700';
            case 'Cancelled': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Orders Management</h1>
            
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <th className="px-4 py-3 font-medium">Order ID</th>
                                <th className="px-4 py-3 font-medium">Customer</th>
                                <th className="px-4 py-3 font-medium">Items</th>
                                <th className="px-4 py-3 font-medium">Total</th>
                                <th className="px-4 py-3 font-medium">Date</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                                <th className="px-4 py-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {currentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-2.5 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-4 py-2.5 text-gray-700">{order.customer}</td>
                                    <td className="px-4 py-2.5 text-gray-500 max-w-[200px] truncate">{order.items}</td>
                                    <td className="px-4 py-2.5 font-medium">${order.total.toFixed(2)}</td>
                                    <td className="px-4 py-2.5 text-gray-500">{order.date}</td>
                                    <td className="px-4 py-2.5">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2.5 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors" title="View details"><Eye size={16} /></button>
                                            <button className="p-1.5 text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-md transition-colors" title="Update status"><Edit2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <p className="text-sm text-gray-500">
                        Showing <span className="font-semibold text-gray-900">{startIndex + 1}</span> to <span className="font-semibold text-gray-900">{Math.min(startIndex + itemsPerPage, orders.length)}</span> of <span className="font-semibold text-gray-900">{orders.length}</span> entries
                    </p>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 rounded-md text-sm font-medium transition-colors ${
                                    currentPage === page 
                                        ? 'bg-primary text-white border-primary' 
                                        : 'border border-gray-200 text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
