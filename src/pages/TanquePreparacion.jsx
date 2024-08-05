import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Minifuncionalidades.css';

const TanquePreparacion = () => {
    return (
        <div className="minifuncionalidad-page">
            <h2>Tanque de Preparación de 2m3</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="/cliente/despacho/tanque-preparacion/cianuro">Tanque de 2m3 de Cianuro</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/tanque-preparacion/sulfatos">Tanque de 2m3 de Sulfatos</Link>
                </div>
            </div>
        </div>
    );
};

export default TanquePreparacion;
