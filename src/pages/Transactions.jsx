import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { ArrowUpRight, ArrowDownLeft, Search, Filter } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const Transactions = () => {
    const transactions = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        name: i % 3 === 0 ? 'Transferencia Recibida' : i % 2 === 0 ? 'Supermercado' : 'Restaurante',
        date: `2${i} Nov, 2023`,
        amount: i % 3 === 0 ? 150.00 : -(20 + i * 5),
        type: i % 3 === 0 ? 'income' : 'expense',
        category: i % 3 === 0 ? 'Transferencias' : 'Alimentación'
    }));

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight">Movimientos</h2>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" placeholder="Buscar movimientos..." />
                    </div>
                    <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Concepto</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Categoría</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Fecha</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Monto</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {transactions.map((t) => (
                                    <tr key={t.id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-4 align-middle">
                                            <div className="flex items-center gap-3">
                                                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                                    {t.type === 'income' ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                                                </div>
                                                <span className="font-medium">{t.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle text-muted-foreground">{t.category}</td>
                                        <td className="p-4 align-middle text-muted-foreground">{t.date}</td>
                                        <td className={`p-4 align-middle text-right font-medium ${t.type === 'income' ? 'text-emerald-600' : 'text-slate-900'}`}>
                                            {t.type === 'income' ? '+' : ''}{t.amount.toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Transactions;
