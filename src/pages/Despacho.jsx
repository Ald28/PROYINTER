import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../assets/styles/InstalledBase.css';

const Despacho = () => {
    return (
        <div className="installed-base">
            <h2>Despacho</h2>
            <div className="info-section">
                <div className="info-item">
                    <Link to="/cliente/despacho/guia-remision">Guía de Remisión</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/packing-list">Packing List</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/tanque-almacenamiento">Tanque de almacenamiento de 0.5m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/tanque-preparacion">Tanque de preparación de 2m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/agitador">Agitador para tanque de preparación de 2m3</Link>
                </div>
                <div className="info-item">
                    <Link to="/cliente/despacho/boya">Boya para tanque de almacenamiento de 0.5m3</Link>
                </div>
            </div>
            <Outlet /> {}
        </div>
    );
};

export default Despacho;
