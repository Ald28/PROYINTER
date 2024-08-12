import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faScrewdriverWrench, faSquarePollVertical, faBook, faMap } from '@fortawesome/free-solid-svg-icons';
import '../../../../../assets/styles/Servicio.css';

const OpcionesCianuro = () => {
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
                        Tanque de Cianuro
                    </li>
                </ol>
            </nav>
            <p>Tanque de Almacenamiento de 0.5m³ para cianuro</p>
            <div className="info-section">
                <div className="info-item">
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>No se cuenta con Data Sheet</Tooltip>}
                    >
                        <Link className="btn degradado secondary-btn">
                            <FontAwesomeIcon icon={faSquarePollVertical} /> Data Sheet
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="info-item">
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>No se cuenta con manual</Tooltip>}
                    >
                        <Link className="btn degradado secondary-btn">
                            <FontAwesomeIcon icon={faBook} /> Manual
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="info-item">
                        <Link className="btn degradado">
                            <FontAwesomeIcon icon={faMap} /> Planos
                        </Link>
                </div>
                <div className="info-item">
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>No se cuenta con una oferta</Tooltip>}
                    >
                        <Link className="btn degradado secondary-btn">
                            <FontAwesomeIcon icon={faHandHoldingDollar} /> Solicitar Oferta
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="info-item">
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>No se cuenta con mantenimiento</Tooltip>}
                    >
                        <Link className="btn degradado secondary-btn">
                            <FontAwesomeIcon icon={faScrewdriverWrench} /> Mantenimiento
                        </Link>
                    </OverlayTrigger>
                </div>
            </div>
        </div>
    );
};

export default OpcionesCianuro;
