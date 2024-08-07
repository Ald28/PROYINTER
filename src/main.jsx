import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage';
import ClientePage from './pages/ClientePage';
import ReclamosPage from './pages/ReclamosPage';
import InstalledBase from './pages/InstalledBase';
import ClienteWelcome from './pages/ClienteWelcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Servicio from './pages/Servicio';
import OfertaDeVenta from './pages/OfertaDeVenta';
import OrdenDeCompra from './pages/OrdenDeCompra';  // Importa el nuevo componente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cliente" element={<ClientePage />}>
          <Route index element={<ClienteWelcome />} /> {/* Página principal del cliente */}
          <Route path="ver-base-instalada" element={<InstalledBase />} />
          <Route path="reclamos" element={<ReclamosPage />} />
          <Route path="servicio" element={<Servicio />} />
          <Route path="ofertaDeVenta" element={<OfertaDeVenta />}/>
          <Route path="ordenDeCompra" element={<OrdenDeCompra />} /> {/* Nueva ruta */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
