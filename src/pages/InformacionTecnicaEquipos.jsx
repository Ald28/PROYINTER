import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/InstalledBase.css';

const InformacionTecnicaEquipos = () => {
    return (
        <div className="installed-base">
            <h2>Servicio de Procura de Tanques de Fibra de Vidrio para Cianuro y Sulfatos</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/equipos">Equipos</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/Dossier-de-Calidad">Dossier</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/certificado-garantia">Certificado de Garantía</Link>
                </div>
            </div>
        </div>
    );
};

export default InformacionTecnicaEquipos;
