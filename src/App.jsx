import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Transfers from './pages/Transfers';
import Cards from './pages/Cards';
import Settings from './pages/Settings';
import Support from './pages/Support';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="transfers" element={<Transfers />} />
        <Route path="cards" element={<Cards />} />
        <Route path="settings" element={<Settings />} />
        <Route path="support" element={<Support />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
