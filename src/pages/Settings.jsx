import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { User, Mail, Phone, MapPin, Bell, Shield } from 'lucide-react';

const Settings = () => {
    return (
        <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">Configuración</h2>

            <div className="grid gap-8 md:grid-cols-[250px_1fr]">
                <nav className="flex flex-col space-y-1">
                    <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary">
                        <User className="mr-3 h-4 w-4" />
                        Perfil
                    </button>
                    <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50">
                        <Bell className="mr-3 h-4 w-4" />
                        Notificaciones
                    </button>
                    <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50">
                        <Shield className="mr-3 h-4 w-4" />
                        Seguridad
                    </button>
                </nav>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Información Personal</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Nombre</label>
                                    <Input defaultValue="Alex" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Apellido</label>
                                    <Input defaultValue="Morgan" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input className="pl-9" defaultValue="alex.morgan@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Teléfono</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input className="pl-9" defaultValue="+1 (555) 123-4567" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Dirección</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input className="pl-9" defaultValue="123 Main St, New York, NY" />
                                </div>
                            </div>
                            <div className="pt-4">
                                <Button>Guardar Cambios</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Settings;
