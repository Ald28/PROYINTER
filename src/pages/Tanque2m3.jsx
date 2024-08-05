import React from 'react';
import { Link } from 'react-router-dom';

const Tanque02m3 = () => {
    return (
        <div className="installed-base">
            <h2>Tanque de almacenamiento de 0.5m3</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="/cliente/despacho/tanques/0.5m3/cianuro">Planos de Tanque de 0.5m3 de cianuro</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/tanques/0.5m3/sulfatos">Planos de Tanque de 0.5m3 de sulfatos</Link>
                </div>
            </div>
        </div>
    );
};

export default Tanque02m3;
