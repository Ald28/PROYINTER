import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faScrewdriverWrench, faSquarePollVertical, faBook, faMap } from '@fortawesome/free-solid-svg-icons';
import '../../../../../assets/styles/Servicio.css';

const AgitadorTanque = () => {
    const [isPlanosHovered, setIsPlanosHovered] = useState(false);

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
                        Agitador para el tanque
                    </li>
                </ol>
            </nav>
            <p>Agitador para el tanque de Preparación de 2m³</p>
            <div className="info-section">
                <div className="info-item">
                    <Link className="btn degradado" to='/cliente/informacion-tecnica-equipos/equipos/3/datasheet'>
                        <FontAwesomeIcon icon={faSquarePollVertical} /> Data Sheet
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado">
                        <FontAwesomeIcon icon={faBook} /> Manual
                    </Link>
                </div>
                <div className="info-item">
                    <div className="secondary-container">
                        <Link
                            className="btn degradado secondary-btn"
                            onMouseEnter={() => setIsPlanosHovered(true)}
                            onMouseLeave={() => setIsPlanosHovered(false)}
                        >
                            <FontAwesomeIcon icon={faMap} /> Planos
                        </Link>
                        {isPlanosHovered && (
                            <div className="message">
                                No se cuenta con planos
                            </div>
                        )}
                    </div>
                </div>
                <div className="info-item">
                    <Link className="btn degradado">
                        <FontAwesomeIcon icon={faHandHoldingDollar} /> Solicitar Oferta
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado">
                        <FontAwesomeIcon icon={faScrewdriverWrench} /> Mantenimiento
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AgitadorTanque;
