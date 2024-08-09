import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import LoginPage from './pages/LoginPage';
import ClientePage from './pages/ClientePage';
import InstalledBase from './pages/InstalledBase';
import ClienteWelcome from './pages/ClienteWelcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Servicio from './pages/Servicio';
import OfertaDeVenta from './pages/services/OfertaDeVenta';
import OrdenDeCompra from './pages/services/OrdenDeCompra';
import Despacho from './pages/services/despacho/Despacho';
import GuiaRemision from './pages/services/despacho/GuiaRemision';
import PackingList from './pages/services/despacho/PackingList';
import InformacionTecnicaEquipos from './pages/services/info-tecnica/InformacionTecnicaEquipos';
import IngieneriaDetalle from './pages/services/IngieneriaDetalle';
import Equipos from './pages/services/info-tecnica/Equipos';
import DossierdeCalidad from './pages/services/info-tecnica/DossierdeCalidad';
import CertificadoGarantia from './pages/services/info-tecnica/CertificadoGarantia';
import ProtectedRoute from './Routes/PrivateRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/cliente" 
          element={
            <ProtectedRoute>
              <ClientePage />
            </ProtectedRoute>
          }
        >
          <Route index element={<ClienteWelcome />} />
          <Route path="ver-base-instalada" element={<InstalledBase />} />
          <Route path="servicio" element={<Servicio />} />
          <Route path="ofertaDeVenta" element={<OfertaDeVenta />} />
          <Route path="ordenDeCompra" element={<OrdenDeCompra />} />
          <Route path="informacionTec" element={<InformacionTecnicaEquipos />} />
          <Route path="informacion-tecnica-equipos/equipos" element={<Equipos />} />
          <Route path="informacion-tecnica-equipos/dossier-de-calidad" element={<DossierdeCalidad />} />
          <Route path="informacion-tecnica-equipos/certificado-garantia" element={<CertificadoGarantia />} />
          <Route path="despacho" element={<Despacho />} />
          <Route path="despacho/guia-remision" element={<GuiaRemision />} />
          <Route path="despacho/packing-list" element={<PackingList />} />
          <Route path="ingieneriaDeDetalle" element={<IngieneriaDetalle />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
