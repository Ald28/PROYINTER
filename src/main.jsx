import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage';
import ClientePage from './pages/ClientePage';
import ReclamosPage from './pages/ReclamosPage';
import InstalledBase from './pages/InstalledBase';
import InformacionTecnicaEquipos from './pages/InformacionTecnicaEquipos';
import Equipos from './pages/Equipos';
import EquipoDetalles from './pages/EquipoDetalles';
import OrdenDeCompra from './pages/OrdenDeCompra';
import OfertaDeVenta from './pages/OfertaDeVenta';
import CertificadoGarantia from './pages/CertificadoGarantia';
import Despacho from './pages/Despacho';
import GuiaRemision from './pages/GuiaRemision';
import PackingList from './pages/PackingList';
import TanqueAlmacenamiento from './pages/TanqueAlmacenamiento';
import TanquePreparacion from './pages/TanquePreparacion';
import Agitador from './pages/Agitador';
import Boya from './pages/Boya';
import IngenieriaDeDetalle from './pages/IngenieriaDeDetalle';
import Tanques from './pages/Tanques';
import Tanque05m3 from './pages/Tanque05m3';
import PlanosCianuro from './pages/PlanosCianuro';
import PlanosSulfatos from './pages/PlanosSulfatos';
import Tanque2m3 from './pages/Tanque2m3';
import PlanosTanque2m3Cianuro from './pages/PlanosTanque2m3Cianuro';
import PlanosTanque2m3Sulfatos from './pages/PlanosTanque2m3Sulfatos';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cliente" element={<ClientePage />}>
          <Route path="ver-base-instalada" element={<InstalledBase />} />
          <Route path="orden-de-compra" element={<OrdenDeCompra />} />
          <Route path="oferta-de-venta" element={<OfertaDeVenta />} />
          <Route path="informacion-tecnica-equipos" element={<InformacionTecnicaEquipos />} />
          <Route path="informacion-tecnica-equipos/equipos" element={<Equipos />} />
          <Route path="informacion-tecnica-equipos/equipos/:id" element={<EquipoDetalles />} />
          <Route path="informacion-tecnica-equipos/certificado-garantia" element={<CertificadoGarantia />} />
          <Route path="ingenieria-de-detalle" element={<IngenieriaDeDetalle />} />
          <Route path="despacho" element={<Despacho />}>
            <Route path="guia-remision" element={<GuiaRemision />} />
            <Route path="packing-list" element={<PackingList />} />
            <Route path="tanque-almacenamiento" element={<TanqueAlmacenamiento />}>
              <Route path="cianuro" element={<PlanosCianuro />} />
              <Route path="sulfatos" element={<PlanosSulfatos />} />
            </Route>
            <Route path="tanque-preparacion" element={<TanquePreparacion />}>
              <Route path="cianuro" element={<PlanosTanque2m3Cianuro />} />
              <Route path="sulfatos" element={<PlanosTanque2m3Sulfatos />} />
            </Route>
            <Route path="agitador" element={<Agitador />} />
            <Route path="boya" element={<Boya />} />
          </Route>
          <Route path="despacho/tanques" element={<Tanques />} />
          <Route path="despacho/tanques/0.5m3" element={<Tanque05m3 />}>
            <Route path="cianuro" element={<PlanosCianuro />} />
            <Route path="sulfatos" element={<PlanosSulfatos />} />
          </Route>
          <Route path="despacho/tanques/2m3" element={<Tanque2m3 />}>
            <Route path="cianuro" element={<PlanosTanque2m3Cianuro />} />
            <Route path="sulfatos" element={<PlanosTanque2m3Sulfatos />} />
          </Route>
          <Route path="reclamos" element={<ReclamosPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
