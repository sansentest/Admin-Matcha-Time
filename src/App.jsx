import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import CMS from './pages/CMS';
import Gallery from './pages/Gallery';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" replace /> : <Login onLogin={() => setIsAuthenticated(true)} />
        } />

        <Route path="/" element={
          isAuthenticated ? <Layout onLogout={() => setIsAuthenticated(false)} /> : <Navigate to="/login" replace />
        }>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="messages" element={<Messages />} />
          <Route path="cms" element={<Navigate to="/cms/hero" replace />} />
          <Route path="cms/hero" element={<CMS activeTab="hero" />} />
          <Route path="cms/about" element={<CMS activeTab="about" />} />
          <Route path="cms/testimonial" element={<CMS activeTab="testimonial" />} />
          <Route path="cms/visit" element={<CMS activeTab="visit" />} />
          <Route path="cms/footer" element={<CMS activeTab="footer" />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

