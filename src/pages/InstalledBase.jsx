import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/styles/InstalledBase.css';

const InstalledBase = () => {
    return (
        <div className="installed-base">
            <h2>Servicio de Procura de Tanques de Fibra de Vidrio para Cianuro y Sulfatos</h2>
            <Outlet />
        </div>
    );
};

export default InstalledBase;
