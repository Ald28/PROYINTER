// src/pages/InstalledBase.jsx
import React, { useState } from 'react';
import UpdateModal from '../components/common/UpdateModal';
import '../assets/styles/InstalledBase.css';

const InstalledBase = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="installed-base">
            <h2>Vista principal de funcionalidad – base instalada</h2>
            <div className="offer-details">
                <h3>Funcionalidad de la oferta 18000009 - David Pariasca - IX c150TCNTB2</h3>
                <div className="offer-info">
                    <p><strong>Nro Oferta:</strong> 18000009</p>
                    <p><strong>Reactivo:</strong> Cloruro férrico</p>
                    <p><strong>Caudal:</strong> 10.00 L/h</p>
                    <p><strong>Presión:</strong> 2.00 Bar</p>
                </div>
                <div className="offer-links">
                    <a href="#">Visualizar oferta</a>
                    <a href="#">Descargar PDF</a>
                </div>
                <button className="btn btn-primary" onClick={handleShow}>Actualizar información</button>
                <button className="btn btn-secondary">Volver</button>
            </div>
            <UpdateModal show={showModal} handleClose={handleClose} />
        </div>
    );
};

export default InstalledBase;
