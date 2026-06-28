import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Coffee, ShoppingCart, FileText, Settings, Image, MessageSquare, ChevronDown } from 'lucide-react';

const Sidebar = ({ onLogout }) => {
    const location = useLocation();
    const [cmsOpen, setCmsOpen] = useState(location.pathname.includes('/cms'));

    const navItems = [
        { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/products', name: 'Products', icon: <Coffee size={20} /> },
        { path: '/orders', name: 'Orders', icon: <ShoppingCart size={20} /> },
    ];

    const bottomItems = [
        { path: '/gallery', name: 'Gallery', icon: <Image size={20} /> },
        { path: '/messages', name: 'Messages', icon: <MessageSquare size={20} /> },
        { path: '/settings', name: 'Settings', icon: <Settings size={20} /> },
    ];

    return (
        <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed top-0 left-0">
            <div className="h-16 flex items-center px-6 border-b border-gray-200">
                <span className="text-xl font-bold text-primary">Matcha Time</span>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1">
                    {/* Main Items */}
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                                        isActive && item.path !== '#'
                                            ? 'bg-primary/10 text-primary border-r-4 border-primary'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                    }`
                                }
                            >
                                {item.icon}
                                {item.name}
                            </NavLink>
                        </li>
                    ))}

                    {/* CMS Dropdown Menu */}
                    <li>
                        <button 
                            onClick={() => setCmsOpen(!cmsOpen)}
                            className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors ${
                                location.pathname.includes('/cms') ? 'text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <FileText size={20} />
                                Content / CMS
                            </div>
                            <ChevronDown size={16} className={`transition-transform duration-200 ${cmsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-200 ${cmsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul className="bg-gray-50/50 py-1">
                                <li>
                                    <NavLink
                                        to="/cms/hero"
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 pl-12 pr-6 py-2.5 text-sm font-medium transition-colors ${
                                                isActive
                                                    ? 'text-primary bg-primary/5 border-r-4 border-primary'
                                                    : 'text-gray-500 hover:text-primary'
                                            }`
                                        }
                                    >
                                        Header & Hero
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/cms/about"
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 pl-12 pr-6 py-2.5 text-sm font-medium transition-colors ${
                                                isActive
                                                    ? 'text-primary bg-primary/5 border-r-4 border-primary'
                                                    : 'text-gray-500 hover:text-primary'
                                            }`
                                        }
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/cms/testimonial"
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 pl-12 pr-6 py-2.5 text-sm font-medium transition-colors ${
                                                isActive
                                                    ? 'text-primary bg-primary/5 border-r-4 border-primary'
                                                    : 'text-gray-500 hover:text-primary'
                                            }`
                                        }
                                    >
                                        Testimonials
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/cms/visit"
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 pl-12 pr-6 py-2.5 text-sm font-medium transition-colors ${
                                                isActive
                                                    ? 'text-primary bg-primary/5 border-r-4 border-primary'
                                                    : 'text-gray-500 hover:text-primary'
                                            }`
                                        }
                                    >
                                        Visit Our Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/cms/footer"
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 pl-12 pr-6 py-2.5 text-sm font-medium transition-colors ${
                                                isActive
                                                    ? 'text-primary bg-primary/5 border-r-4 border-primary'
                                                    : 'text-gray-500 hover:text-primary'
                                            }`
                                        }
                                    >
                                        Footer Settings
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Bottom Items */}
                    {bottomItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-primary/10 text-primary border-r-4 border-primary'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                    }`
                                }
                            >
                                {item.icon}
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="p-4 border-t border-gray-200">
                <button 
                    onClick={onLogout}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
