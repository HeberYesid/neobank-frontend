import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ArrowRightLeft, CreditCard, Settings, HelpCircle, LogOut, Wallet } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../utils/cn';

const Sidebar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const links = [
        { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/transactions', icon: ArrowRightLeft, label: 'Movimientos' },
        { to: '/transfers', icon: Wallet, label: 'Transferencias' },
        { to: '/cards', icon: CreditCard, label: 'Tarjetas' },
        { to: '/settings', icon: Settings, label: 'Configuración' },
        { to: '/support', icon: HelpCircle, label: 'Soporte' },
    ];

    return (
        <div className="flex h-screen w-64 flex-col bg-white border-r border-slate-200">
            <div className="flex h-16 items-center px-6 border-b border-slate-100">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-xl font-bold text-slate-900">NeoBank</span>
            </div>

            <nav className="flex-1 space-y-1 px-3 py-4">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            cn(
                                'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors',
                                isActive
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            )
                        }
                    >
                        <link.icon className="mr-3 h-5 w-5" />
                        {link.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center px-3 py-2.5 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                    <LogOut className="mr-3 h-5 w-5" />
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
