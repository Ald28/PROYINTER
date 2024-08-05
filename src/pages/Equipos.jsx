import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/InstalledBase.css';

const Equipos = () => {
    return (
        <div className="installed-base">
            <h2>Servicio de Procura de Tanques de Fibra de Vidrio para Cianuro y Sulfatos</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/equipos/1">Tanque de almacenamiento de 0.5m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/equipos/2">Tanque de preparación de 1.7m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/equipos/3">Agitador para tanque de preparación de 1.7m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/informacion-tecnica-equipos/equipos/4">Boya para tanque de almacenamiento de 0.5m3</Link>
                </div>
            </div>
        </div>
    );
};

export default Equipos;
