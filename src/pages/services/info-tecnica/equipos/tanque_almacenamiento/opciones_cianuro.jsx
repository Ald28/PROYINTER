import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faScrewdriverWrench, faSquarePollVertical, faBook, faMap } from '@fortawesome/free-solid-svg-icons';
import '../../../../../assets/styles/Servicio.css'; // Asegúrate de crear e importar el archivo CSS

const OpcionesCianuro = () => {
    const [isManualHovered, setIsManualHovered] = useState(false);

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
                        <Link className="btn btn-link p-0" to="/cliente/informacion-tecnica-equipos/equipos/1">Tanque de 0.5m3</Link>
                    </li>
                    <li className="breadcrumb-item">
                        Tanque de Cianuro
                    </li>
                </ol>
            </nav>
            <p>Tanque de Almacenamiento de 0.5m³ para cianuro</p>
            <div className="info-section">
                <div className="info-item">
                    <Link className="btn degradado">
                        <FontAwesomeIcon icon={faSquarePollVertical} /> Data Sheet
                    </Link>
                </div>
                <div className="info-item">
                    <div className="secondary-container">
                        <Link
                            className="btn degradado secondary-btn"
                            onMouseEnter={() => setIsManualHovered(true)}
                            onMouseLeave={() => setIsManualHovered(false)}
                        >
                            <FontAwesomeIcon icon={faBook} /> Manual
                        </Link>
                        {isManualHovered && (
                            <div className="message">
                                No se cuenta con manual
                            </div>
                        )}
                    </div>
                </div>
                <div className="info-item">
                    <Link className="btn degradado">
                        <FontAwesomeIcon icon={faMap} /> Planos
                    </Link>
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

export default OpcionesCianuro;
