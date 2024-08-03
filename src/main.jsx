import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage';
import ClientePage from './pages/ClientePage';
import ReclamosPage from './pages/ReclamosPage';
import InstalledBase from './pages/InstalledBase';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cliente" element={<ClientePage />}>
          <Route path="ver-base-instalada" element={<InstalledBase />} />
          <Route path="reclamos" element={<ReclamosPage />} /> {/* Agregar la ruta para Reclamos */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
