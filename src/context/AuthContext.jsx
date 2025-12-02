import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Mock login
        if (email && password) {
            setUser({
                name: 'Alex Morgan',
                email: email,
                avatar: 'https://ui-avatars.com/api/?name=Alex+Morgan&background=6366f1&color=fff',
                balance: 12450.50
            });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
