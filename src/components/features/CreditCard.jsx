import React from 'react';
import { cn } from '../../utils/cn';

const CreditCard = ({ className, type = 'visa', number = '•••• •••• •••• 4242', holder = 'ALEX MORGAN', expiry = '12/28', variant = 'black' }) => {
    const variants = {
        black: 'bg-slate-900 text-white',
        gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white',
        blue: 'bg-blue-600 text-white',
    };

    return (
        <div className={cn("relative w-full aspect-[1.586] rounded-2xl p-6 shadow-xl flex flex-col justify-between overflow-hidden", variants[variant], className)}>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            <div className="flex justify-between items-start z-10">
                <div className="w-12 h-8 bg-white/20 rounded-md backdrop-blur-sm border border-white/10"></div>
                <span className="text-lg font-bold tracking-widest italic opacity-90">{type.toUpperCase()}</span>
            </div>

            <div className="z-10">
                <div className="text-2xl font-mono tracking-widest mb-4 drop-shadow-md">{number}</div>
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-xs opacity-75 mb-1">Titular</div>
                        <div className="font-medium tracking-wide uppercase">{holder}</div>
                    </div>
                    <div>
                        <div className="text-xs opacity-75 mb-1">Expira</div>
                        <div className="font-medium tracking-wide">{expiry}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
