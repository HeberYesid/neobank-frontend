import React, { useState } from 'react';
import { Plus, Lock, Eye, MoreHorizontal, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import CreditCard from '../components/features/CreditCard';
import { Card, CardContent } from '../components/ui/Card';

const Cards = () => {
    const [cards, setCards] = useState([
        { id: 1, type: 'visa', number: '•••• •••• •••• 4242', holder: 'ALEX MORGAN', expiry: '12/28', variant: 'black', status: 'active' },
        { id: 2, type: 'mastercard', number: '•••• •••• •••• 8899', holder: 'ALEX MORGAN', expiry: '10/26', variant: 'gradient', status: 'active' },
    ]);

    const toggleCardStatus = (id) => {
        setCards(cards.map(card =>
            card.id === id ? { ...card, status: card.status === 'active' ? 'locked' : 'active' } : card
        ));
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Mis Tarjetas</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Nueva Tarjeta
                </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                    <div key={card.id} className="space-y-4">
                        <div className={`transition-all duration-300 ${card.status === 'locked' ? 'opacity-75 grayscale' : ''}`}>
                            <CreditCard {...card} />
                        </div>

                        <Card>
                            <CardContent className="p-4 grid grid-cols-3 gap-2">
                                <Button variant="ghost" className="flex flex-col h-auto py-3 gap-2" onClick={() => toggleCardStatus(card.id)}>
                                    <Lock className={`h-5 w-5 ${card.status === 'locked' ? 'text-red-500' : ''}`} />
                                    <span className="text-xs">{card.status === 'active' ? 'Bloquear' : 'Desbloquear'}</span>
                                </Button>
                                <Button variant="ghost" className="flex flex-col h-auto py-3 gap-2">
                                    <Eye className="h-5 w-5" />
                                    <span className="text-xs">Ver Datos</span>
                                </Button>
                                <Button variant="ghost" className="flex flex-col h-auto py-3 gap-2">
                                    <MoreHorizontal className="h-5 w-5" />
                                    <span className="text-xs">Opciones</span>
                                </Button>
                            </CardContent>
                        </Card>

                        {card.status === 'locked' && (
                            <div className="flex items-center justify-center p-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                                <ShieldCheck className="mr-2 h-4 w-4" />
                                Tarjeta Bloqueada Temporalmente
                            </div>
                        )}
                    </div>
                ))}

                <button className="flex flex-col items-center justify-center w-full aspect-[1.586] rounded-2xl border-2 border-dashed border-slate-200 hover:border-primary/50 hover:bg-slate-50 transition-all group">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <Plus className="h-6 w-6" />
                    </div>
                    <span className="mt-4 font-medium text-slate-600 group-hover:text-primary">Solicitar Nueva Tarjeta</span>
                </button>
            </div>
        </div>
    );
};

export default Cards;
