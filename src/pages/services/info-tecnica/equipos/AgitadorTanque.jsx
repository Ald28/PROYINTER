import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faScrewdriverWrench, faSquarePollVertical, faBook, faMap } from '@fortawesome/free-solid-svg-icons';
import '../../../Servicio.css'; // Asegúrate de crear e importar el archivo CSS

const AgitadorTanque = () => {
    return (
        <div className="servicio">
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
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/InformacionTec">Información Técnica de Equipos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/informacion-tecnica-equipos/equipos">Equipos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        Tanque de 2m³
                    </li>
                </ol>
            </nav>
            <p>Agitador para el tanque de Preparación de 2m³</p>
            <div className="info-section">
                <div className="info-item">
                    <Link className="btn degradado">
                        <FontAwesomeIcon icon={faSquarePollVertical} /> Data Sheet
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado">
                        <FontAwesomeIcon icon={faBook} /> Manual
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado">
                        <FontAwesomeIcon icon={faMap} /> Planos
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado" >
                        <FontAwesomeIcon icon={faHandHoldingDollar} /> Solicitar Oferta
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado" >
                        <FontAwesomeIcon icon={faScrewdriverWrench} /> Mantenimiento
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AgitadorTanque;
