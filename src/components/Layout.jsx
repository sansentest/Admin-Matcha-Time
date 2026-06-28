import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ onLogout }) => {
    return (
        <div className="flex h-screen bg-[#f5f1ea] font-sans">
            <Sidebar onLogout={onLogout} />
            
            <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
