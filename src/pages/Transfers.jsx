import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { User, DollarSign, Send } from 'lucide-react';

const Transfers = () => {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleTransfer = (e) => {
        e.preventDefault();
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setAmount('');
            setRecipient('');
            alert('Transferencia realizada con éxito (Simulación)');
        }, 1500);
    };

    const recentContacts = [
        { name: 'Maria Garcia', avatar: 'MG' },
        { name: 'Juan Perez', avatar: 'JP' },
        { name: 'Ana Lopez', avatar: 'AL' },
        { name: 'Carlos Ruiz', avatar: 'CR' },
    ];

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">Realizar Transferencia</h2>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-muted-foreground">Contactos Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {recentContacts.map((contact, i) => (
                                <button key={i} className="flex flex-col items-center space-y-2 min-w-[80px] p-2 rounded-lg hover:bg-slate-50 transition-colors" onClick={() => setRecipient(contact.name)}>
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                        {contact.avatar}
                                    </div>
                                    <span className="text-xs font-medium text-center truncate w-full">{contact.name}</span>
                                </button>
                            ))}
                            <button className="flex flex-col items-center space-y-2 min-w-[80px] p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                <div className="h-12 w-12 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                                    <User className="h-6 w-6" />
                                </div>
                                <span className="text-xs font-medium text-center">Nuevo</span>
                            </button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <form onSubmit={handleTransfer} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Destinatario</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        className="pl-10"
                                        placeholder="Nombre, email o teléfono"
                                        value={recipient}
                                        onChange={(e) => setRecipient(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Monto</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        className="pl-10 text-lg font-semibold"
                                        type="number"
                                        placeholder="0.00"
                                        min="0.01"
                                        step="0.01"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button className="w-full h-12 text-lg" type="submit" isLoading={isSending}>
                                    <Send className="mr-2 h-5 w-5" />
                                    Enviar Dinero
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Transfers;
