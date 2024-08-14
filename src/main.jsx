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
import Equipos from './pages/services/info-tecnica/equipos/Equipos';
import DossierdeCalidad from './pages/services/info-tecnica/DossierdeCalidad';
import CertificadoGarantia from './pages/services/info-tecnica/CertificadoGarantia';
import ProtectedRoute from './Routes/PrivateRoute';
// Importar los componentes específicos para cada equipo
import AgitadorTanque from './pages/services/info-tecnica/equipos/agitador/AgitadorTanque';
import Cianuro from './pages/services/info-tecnica/equipos/tanque_almacenamiento/opciones_cianuro';
import Sulfatos from './pages/services/info-tecnica/equipos/tanque_almacenamiento/opciones_sulfatos';
import CianuroP from './pages/services/info-tecnica/equipos/tanque_preparacion/opciones_cianuro';
import SulfatosP from './pages/services/info-tecnica/equipos/tanque_preparacion/opciones_sulfatos';
import Datasheet from './pages/services/info-tecnica/equipos/agitador/datasheet';
import Planos_Almacenamiento_Cianuro from './pages/services/info-tecnica/equipos/tanque_almacenamiento/planos_cianuro';
import Planos_Almacenamiento_Sulfatos from './pages/services/info-tecnica/equipos/tanque_almacenamiento/planos_sulfatos';
import Planos_Preparacion_Cianuro from './pages/services/info-tecnica/equipos/tanque_preparacion/planos_cianuro';
import Planos_Preparacion_Sulfatos from './pages/services/info-tecnica/equipos/tanque_preparacion/planos_sulfatos';
import Soporte_tecnico from './pages/SoporteTecnico';
import FormSoporteTec from './pages/FormSoporteTec';
import ContSoporteTec from './pages/ContSoporteTec';

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
          <Route path="soporte-tecnico" element={<Soporte_tecnico/>}/>
          <Route path="soporte-tecnico/Formulario" element={<FormSoporteTec/>} />
          <Route path="soporte-tecnico/contacto" element={<ContSoporteTec/>} />

          {/* Rutas para los componentes específicos de cada equipo */}
          <Route path="informacion-tecnica-equipos/equipos/1" element={<Cianuro />} />
          <Route path="informacion-tecnica-equipos/equipos/2" element={<Sulfatos />} />
          <Route path="informacion-tecnica-equipos/equipos/3" element={<CianuroP />} />
          <Route path="informacion-tecnica-equipos/equipos/4" element={<SulfatosP />} />
          <Route path="informacion-tecnica-equipos/equipos/5" element={<AgitadorTanque />} />

          <Route path="informacion-tecnica-equipos/equipos/5/datasheet" element={<Datasheet />} />

          <Route path="informacion-tecnica-equipos/equipos/1/planos" element={<Planos_Almacenamiento_Cianuro />} />
          <Route path="informacion-tecnica-equipos/equipos/2/planos" element={<Planos_Almacenamiento_Sulfatos/>} />
          <Route path="informacion-tecnica-equipos/equipos/3/planos" element={<Planos_Preparacion_Cianuro />} />
          <Route path="informacion-tecnica-equipos/equipos/4/planos" element={<Planos_Preparacion_Sulfatos />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
 