import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClienteWelcome = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
        <div className="cliente-welcome">
            <h2>Bienvenido, Aldo</h2><br />
            <div className="button-grid">
                <button className="grid-button" onClick={() => handleLinkClick('/cliente/solicitar-cotizacion')}>
                    Solicitar Cotización
                </button>
                <button className="grid-button" onClick={() => handleLinkClick('/cliente/ver-base-instalada')}>
                    Ver Base Instalada
                </button>
                <button className="grid-button" onClick={() => handleLinkClick('/cliente/soporte-tecnico')}>
                    Soporte Técnico
                </button>
                <button className="grid-button" onClick={() => handleLinkClick('/cliente/reclamos')}>
                    Reclamos
                </button>
            </div>
        </div>
    );
};

export default ClienteWelcome;
