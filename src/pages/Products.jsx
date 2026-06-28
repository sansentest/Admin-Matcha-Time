import React, { useState } from 'react';
import { Edit2, Trash2, Image as ImageIcon, UploadCloud } from 'lucide-react';

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Iced Matcha Latte', category: 'Matcha', price: 4.50, stock: 12, status: 'In Stock' },
        { id: 2, name: 'Caffè Americano', category: 'Coffee', price: 3.00, stock: 0, status: 'Out of Stock' },
        { id: 3, name: 'Peach Soda', category: 'Tea & Soda', price: 3.50, stock: 24, status: 'In Stock' },
    ]);

    const [formData, setFormData] = useState({
        name: '',
        category: 'Matcha',
        price: '',
        stock: '',
        status: 'In Stock'
    });
    
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImagePreview(url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: products.length + 1,
            name: formData.name,
            category: formData.category,
            price: parseFloat(formData.price) || 0,
            stock: parseInt(formData.stock) || 0,
            status: formData.status
        };
        setProducts([...products, newProduct]);
        
        // Reset form
        setFormData({ name: '', category: 'Matcha', price: '', stock: '', status: 'In Stock' });
        setImagePreview(null);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>

            {/* Add Product Form (Medium Size) */}
            <div className="mb-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        
                        {/* Input Fields on Left (Takes 2 columns) */}
                        <div className="md:col-span-2 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                    placeholder="e.g. Strawberry Matcha"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select 
                                        value={formData.category}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                    >
                                        <option>Matcha</option>
                                        <option>Coffee</option>
                                        <option>Tea & Soda</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                                    <input 
                                        type="number" 
                                        step="0.01"
                                        required
                                        value={formData.price}
                                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                        placeholder="0.00"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                                    <input 
                                        type="number" 
                                        required
                                        value={formData.stock}
                                        onChange={(e) => setFormData({...formData, stock: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                        placeholder="Enter amount"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <select 
                                        value={formData.status}
                                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                    >
                                        <option>In Stock</option>
                                        <option>Out of Stock</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="pt-2">
                                <button 
                                    type="submit" 
                                    className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors"
                                >
                                    Save Product
                                </button>
                            </div>
                        </div>

                        {/* Image Upload on Right (Takes 1 column) */}
                        <div className="md:col-span-1 flex flex-col">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                            <div className="flex-1 border-2 border-dashed border-gray-400 rounded-lg p-3 text-center hover:border-primary transition-colors relative flex flex-col items-center justify-center bg-transparent min-h-[160px]">
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleImageChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                />
                                {imagePreview ? (
                                    <div className="absolute inset-0 w-full h-full p-2">
                                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-md shadow-sm" />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-gray-500 pointer-events-none">
                                        <UploadCloud size={28} className="mb-2 text-primary" />
                                        <span className="text-sm font-medium">Click to upload image</span>
                                        <span className="text-xs mt-1 text-gray-400">JPG, PNG up to 2MB</span>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-fit">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h2 className="text-lg font-bold text-gray-900">All Products</h2>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{products.length} Items</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-200">
                            <tr className="text-[11px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100">
                                <th className="p-4 rounded-tl-lg">Product Info</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Stock</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right rounded-tr-lg">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                                <ImageIcon size={20} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{product.name}</p>
                                                <p className="text-xs text-gray-500">{product.category}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 font-semibold text-gray-900">${product.price.toFixed(2)}</td>
                                    <td className="p-4 text-gray-700">{product.stock}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                            product.status === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Products;
