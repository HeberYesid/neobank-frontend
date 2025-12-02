import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { MessageCircle, Phone, Mail, FileQuestion, Send, CheckCircle2 } from 'lucide-react';

const Support = () => {
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

    const faqs = [
        { q: "¿Cómo bloqueo mi tarjeta?", a: "Puedes bloquear tu tarjeta instantáneamente desde la sección 'Tarjetas' en el menú principal." },
        { q: "¿Cuáles son los límites de transferencia?", a: "El límite diario estándar es de $5,000. Puedes solicitar un aumento desde Configuración." },
        { q: "¿Cómo cambio mi PIN?", a: "Por seguridad, el cambio de PIN debe realizarse en un cajero automático de la red." },
    ];

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/mblnyopq", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                setTimeout(() => {
                    setIsEmailModalOpen(false);
                    setFormStatus('idle');
                }, 2000);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">¿Cómo podemos ayudarte?</h2>
                <p className="text-muted-foreground">Estamos aquí para resolver tus dudas las 24 horas del día.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-6 space-y-4">
                        <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                            <MessageCircle className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold">Chat en Vivo</h3>
                        <p className="text-sm text-muted-foreground">Habla con un agente ahora mismo.</p>
                        <Button variant="outline" className="w-full">Iniciar Chat</Button>
                    </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-6 space-y-4">
                        <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                            <Phone className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold">Llámanos</h3>
                        <p className="text-sm text-muted-foreground">Soporte telefónico prioritario.</p>
                        <Button variant="outline" className="w-full">Ver Números</Button>
                    </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-6 space-y-4">
                        <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-sm text-muted-foreground">Respuesta en menos de 24h.</p>
                        <Button variant="outline" className="w-full" onClick={() => setIsEmailModalOpen(true)}>Enviar Correo</Button>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6 pt-8">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <FileQuestion className="h-5 w-5" />
                    Preguntas Frecuentes
                </h3>
                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <Card key={i}>
                            <CardContent className="p-6">
                                <h4 className="font-medium mb-2">{faq.q}</h4>
                                <p className="text-sm text-muted-foreground">{faq.a}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={isEmailModalOpen}
                onClose={() => setIsEmailModalOpen(false)}
                title="Enviar Mensaje a Soporte"
            >
                {formStatus === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-slate-900">¡Mensaje Enviado!</h4>
                            <p className="text-slate-500 mt-2">Te responderemos a tu correo lo antes posible.</p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Tu Email</label>
                            <Input id="email" name="email" type="email" placeholder="ejemplo@correo.com" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Asunto</label>
                            <Input id="subject" name="subject" placeholder="¿En qué podemos ayudarte?" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Describe tu problema o consulta..."
                                required
                            ></textarea>
                        </div>
                        {formStatus === 'error' && (
                            <p className="text-sm text-red-500">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
                        )}
                        <div className="flex justify-end pt-2">
                            <Button type="submit" isLoading={formStatus === 'submitting'}>
                                <Send className="mr-2 h-4 w-4" />
                                Enviar Mensaje
                            </Button>
                        </div>
                    </form>
                )}
            </Modal>
        </div>
    );
};

export default Support;
