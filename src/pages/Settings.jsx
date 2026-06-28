import React, { useState } from 'react';
import { Save, User, Lock, Globe, Bell, Store } from 'lucide-react';

const Settings = () => {
    const handleSave = (e) => {
        e.preventDefault();
        alert('Settings saved successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-12">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Store Settings</h1>
                <button 
                    onClick={handleSave} 
                    className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm"
                >
                    <Save size={18} /> Save Changes
                </button>
            </div>

            <form className="space-y-8" onSubmit={handleSave}>
                
                {/* Account Settings */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
                        <User className="text-primary" size={20} />
                        <h2 className="text-lg font-bold text-gray-900">Administrator Profile</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 border border-gray-200">
                                <User size={40} />
                            </div>
                            <div>
                                <button type="button" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                    Change Avatar
                                </button>
                                <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    defaultValue="Admin User"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    defaultValue="admin@matchatime.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* General Store Settings */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
                        <Store className="text-primary" size={20} />
                        <h2 className="text-lg font-bold text-gray-900">General Preferences</h2>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Default Currency</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                                    <option value="usd">USD ($)</option>
                                    <option value="khr">KHR (៛)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                                    <option value="ict">Indochina Time (ICT) - UTC+7</option>
                                    <option value="utc">Universal Time Coordinated (UTC)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
                        <Bell className="text-primary" size={20} />
                        <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">New Order Alerts</h3>
                                <p className="text-xs text-gray-500">Receive an email when a new order is placed.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Customer Messages</h3>
                                <p className="text-xs text-gray-500">Receive an email when a customer sends a message.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
                        <Lock className="text-primary" size={20} />
                        <h2 className="text-lg font-bold text-gray-900">Security & Password</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <input 
                                type="password" 
                                placeholder="••••••••"
                                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input 
                                type="password" 
                                placeholder="Leave blank to keep current"
                                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Settings;
