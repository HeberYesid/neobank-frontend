import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            if (login(email, password)) {
                navigate('/');
            }
            setIsLoading(false);
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
                    <CardTitle className="text-2xl font-bold">Bienvenido de nuevo</CardTitle>
                    <p className="text-sm text-muted-foreground">Ingresa tus credenciales para acceder</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="nombre@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="password">Contraseña</label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit" isLoading={isLoading}>
                            Iniciar Sesión
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        <span className="text-muted-foreground">¿No tienes cuenta? </span>
                        <a href="#" className="text-primary font-medium hover:underline">Regístrate</a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
