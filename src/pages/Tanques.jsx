import React from 'react';
import { Link } from 'react-router-dom';

const Tanques = () => {
    return (
        <div className="installed-base">
            <h2>Tanques</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="/cliente/despacho/tanques/0.5m3">Tanque de almacenamiento de 0.5m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/tanques/2m3">Tanque de preparación de 2m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/tanques/agitador">Agitador para tanque de preparación de 2m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/tanques/boya">Boya para tanque de almacenamiento de 0.5m3</Link>
                </div>
            </div>
        </div>
    );
};

export default Tanques;
