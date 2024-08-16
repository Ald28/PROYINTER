import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faPen, faPersonDigging, faFileCircleCheck,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../solicoti/SolicitarCotizacion.css';

const SolicitarCotizacion = () => {
    return (
        <div className="servicio">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Solicitar Cotizacion</li>
                </ol>
            </nav>
            <h3>Servicio disponibles</h3>
            <div className="info-section">
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/solicitar-cotizacion/asesoria'>
                        <FontAwesomeIcon icon={faFileCircleCheck} /> Asesoria
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/solicitar-cotizacion/estudios'>
                    <FontAwesomeIcon icon={faGraduationCap} /> Estudios
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/solicitar-cotizacion/ingenierias'>
                    <FontAwesomeIcon icon={faUserGroup} /> Ingenierías
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/solicitar-cotizacion/procura'>
                        <FontAwesomeIcon icon={faPen} /> Procura
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/solicitar-cotizacion/personal-campo'>
                        <FontAwesomeIcon icon={faPersonDigging} /> Personal de Campo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SolicitarCotizacion;
