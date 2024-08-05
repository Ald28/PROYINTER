import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../assets/styles/Minifuncionalidades.css';

const TanqueAlmacenamiento = () => {
    return (
        <div className="minifuncionalidad-page">
            <h2>Tanque de Almacenamiento de 0.5m3</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="cianuro">Planos de Tanque de 0.5m3 de Cianuro</Link>
                </div>
                <div className="info-item">
                    <Link to="sulfatos">Planos de Tanque de 0.5m3 de Sulfatos</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default TanqueAlmacenamiento;
