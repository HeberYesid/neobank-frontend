import React from 'react';
import { ArrowUpRight, ArrowDownLeft, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import CreditCard from '../components/features/CreditCard';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    const transactions = [
        { id: 1, name: 'Netflix Subscription', date: 'Hoy, 10:00 AM', amount: -15.99, type: 'expense' },
        { id: 2, name: 'Transferencia de Juan', date: 'Ayer, 4:30 PM', amount: 250.00, type: 'income' },
        { id: 3, name: 'Supermercado', date: '28 Nov, 6:15 PM', amount: -85.50, type: 'expense' },
        { id: 4, name: 'Spotify', date: '28 Nov, 9:00 AM', amount: -9.99, type: 'expense' },
    ];

    return (
        <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${user.balance.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">+20.1% del mes pasado</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
                        <ArrowDownLeft className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$4,250.00</div>
                        <p className="text-xs text-muted-foreground">+12% del mes pasado</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Gastos</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1,450.00</div>
                        <p className="text-xs text-muted-foreground">+4% del mes pasado</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ahorros</CardTitle>
                        <TrendingUp className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$8,000.00</div>
                        <p className="text-xs text-muted-foreground">+2.5% interés anual</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Mis Tarjetas</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                            <CreditCard variant="black" />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <CreditCard variant="gradient" type="mastercard" number="•••• •••• •••• 8899" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Movimientos Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {transactions.map((t) => (
                                <div key={t.id} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                            {t.type === 'income' ? <ArrowDownLeft className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium leading-none">{t.name}</p>
                                            <p className="text-xs text-muted-foreground">{t.date}</p>
                                        </div>
                                    </div>
                                    <div className={`font-medium ${t.type === 'income' ? 'text-emerald-600' : 'text-slate-900'}`}>
                                        {t.type === 'income' ? '+' : ''}{t.amount.toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
