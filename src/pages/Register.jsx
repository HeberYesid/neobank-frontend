import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/login');
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">N</span>
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">Crear una cuenta</CardTitle>
                    <p className="text-sm text-muted-foreground">Ingresa tus datos para comenzar</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none" htmlFor="name">Nombre</label>
                                <Input id="name" placeholder="Juan" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none" htmlFor="lastname">Apellido</label>
                                <Input id="lastname" placeholder="Perez" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
                            <Input id="email" type="email" placeholder="nombre@ejemplo.com" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="password">Contraseña</label>
                            <Input id="password" type="password" required />
                        </div>
                        <Button className="w-full" type="submit" isLoading={isLoading}>
                            Registrarse
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        <span className="text-muted-foreground">¿Ya tienes cuenta? </span>
                        <a href="/login" className="text-primary font-medium hover:underline">Inicia Sesión</a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
