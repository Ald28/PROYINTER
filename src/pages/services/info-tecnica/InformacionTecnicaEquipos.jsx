import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/Informacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faFileLines, faGear } from '@fortawesome/free-solid-svg-icons';

const InformacionTecnicaEquipos = () => {
    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente/ver-base-instalada">Servicios Adquiridos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente/servicio">Procura Tanque Fibra</Link>
                    </li>
                    <li className="breadcrumb-item active " aria-current="page">Información Técnica de Equipos</li>
                </ol>
            </nav>
            <h2>Servicio de Procura de Tanques de Fibra de Vidrio para Cianuro y Sulfatos</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/equipos" className="btn degradado">
                        <FontAwesomeIcon icon={faGear} />
                        Equipos
                    </Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/dossier-de-calidad" className="btn degradado">
                        <FontAwesomeIcon icon={faFileLines} />
                        Dossier
                    </Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/certificado-garantia" className="btn degradado">
                        <FontAwesomeIcon icon={faMedal} />
                        Certificado de Garantía
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InformacionTecnicaEquipos;
