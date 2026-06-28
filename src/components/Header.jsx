import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 w-full">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
                <Search size={18} className="text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search anything..." 
                    className="bg-transparent border-none outline-none ml-2 text-sm w-full"
                />
            </div>
            
            <div className="flex items-center gap-6">
                <button className="relative text-gray-500 hover:text-primary transition-colors">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                        3
                    </span>
                </button>
                
                <Link to="/settings" className="flex items-center gap-3 border-l pl-6 border-gray-200 hover:opacity-80 transition-opacity cursor-pointer">
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-800">Admin User</p>
                        <p className="text-xs text-gray-500">Store Manager</p>
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <User size={20} />
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
