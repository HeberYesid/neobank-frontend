import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';
import { Bell } from 'lucide-react';

const Layout = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex h-screen bg-slate-50">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                    <h1 className="text-xl font-semibold text-slate-800">
                        Hola, {user.name.split(' ')[0]}
                    </h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-9 w-9 rounded-full border border-slate-200"
                        />
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
