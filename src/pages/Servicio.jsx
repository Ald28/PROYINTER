import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Servicio = () => {
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
                    <li className="breadcrumb-item active" aria-current="page">Servicio</li>
                </ol>
            </nav>
            <p>Servicio de Procura de tanques de fibra de vidrio para cianuro y sulfatos</p>
            <div className="info-section">
                <div className="info-item">
                    <Link className="btn btn-primary custom-btn" to='/cliente/ordenDeCompra'>Orden de Compra</Link>
                </div>
                <div className="info-item">
                    <Link className="btn btn-primary custom-btn" to='/cliente/ofertaDeVenta'>Oferta de Venta</Link>
                </div>
                <div className="info-item">
                    <Link className="btn btn-primary custom-btn" to='/cliente/InformacionTec'>Información técnica de equipos</Link>
                </div>
                <div className="info-item">
                    <Link className="btn btn-primary custom-btn" to='/cliente/IngieneriaDeDetalle'>Ingenieria de detalle</Link>
                </div>
                <div className="info-item">
                    <Link className="btn btn-primary custom-btn" to='/cliente/despacho'>Despacho</Link>
                </div>
            </div>
        </div>
    );
};

export default Servicio;
