import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faFileInvoice, faInfoCircle, faCog, faBox,faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Servicio.css';

const Servicio = () => {
    return (
        <div className="servicio">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item ">
                        <Link className="btn btn-black fw-bold p-0 " to="/cliente/ver-base-instalada">Servicios Adquiridos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Procura Tanque Fibra</li>
                </ol>
            </nav>
            <p>Servicio de Procura de tanques de fibra de vidrio para cianuro y sulfatos</p>
            <div className="info-section">
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/ordenDeCompra'>
                        <FontAwesomeIcon icon={faFileCircleCheck} /> Orden de Compra
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/ofertaDeVenta'>
                        <FontAwesomeIcon icon={faFileInvoice} /> Oferta de Venta
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/InformacionTec'>
                        <FontAwesomeIcon icon={faInfoCircle} /> Información técnica de equipos
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/IngieneriaDeDetalle'>
                        <FontAwesomeIcon icon={faCog} /> Ingenieria de detalle
                    </Link>
                </div>
                <div className="info-item">
                    <Link className="btn degradado fw-bold" to='/cliente/despacho'>
                        <FontAwesomeIcon icon={faBox} /> Despacho
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Servicio;
