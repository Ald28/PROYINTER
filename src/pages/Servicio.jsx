import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Servicio = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    useEffect(() => {
        // Cualquier lógica de efecto secundario necesaria
    }, []);

    return (
        <div className="servicio">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn btn-link p-0" onClick={() => handleLinkClick('/cliente')}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Base Instalada</li>
                    <li className="breadcrumb-item active" aria-current="page">Servicio</li>
                </ol>
            </nav>
            <p>Servicio de Procura de tanques de fibra de vidrio para cianuro y sulfatos</p>
            <div className="button-container mt-5">
                <div className="button-group mb-3">
                    <button className="btn btn-primary custom-btn" onClick={() => handleLinkClick('#')}>Orden de Compra</button>
                </div>
                <div className="button-group mb-3">
                    <button className="btn btn-primary custom-btn" onClick={() => handleLinkClick('/cliente/ofertaDeVenta')}>Oferta de Venta</button>
                </div>
                <div className="button-group mb-3">
                    <button className="btn btn-primary custom-btn" onClick={() => handleLinkClick('#')}>Información técnica de equipos</button>
                </div>
                <div className="button-group mb-3">
                    <button className="btn btn-primary custom-btn" onClick={() => handleLinkClick('#')}>Ingenieria de detalle</button>
                </div>
                <div className="button-group mb-3">
                    <button className="btn btn-primary custom-btn" onClick={() => handleLinkClick('#')}>Despacho</button>
                </div>
            </div>
            
        </div>
    );
};

export default Servicio;
