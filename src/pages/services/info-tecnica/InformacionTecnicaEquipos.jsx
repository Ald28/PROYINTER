import React from 'react';
import { Link } from 'react-router-dom';
import '../info-tecnica/Informacion.css';

const InformacionTecnicaEquipos = () => {
    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/ver-base-instalada">Base Instalada</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/servicio">Servicio</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Información Técnica de Equipos</li>
                </ol>
            </nav>
            <h2>Servicio de Procura de Tanques de Fibra de Vidrio para Cianuro y Sulfatos</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/equipos" className="btn btn-primary custom-btn">
                        Equipos
                    </Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/dossier-de-calidad" className="btn btn-primary custom-btn">
                        Dossier
                    </Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/certificado-garantia" className="btn btn-primary custom-btn">
                        Certificado de Garantía
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InformacionTecnicaEquipos;
