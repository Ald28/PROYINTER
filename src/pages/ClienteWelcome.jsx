import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ClientePage.css';


const ClienteWelcome = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
        <div className="cliente-welcome text-start ">
            <h2>Bienvenido, {localStorage.getItem('cliente').split('@')[0]}</h2><br />
            <div className="button-grid">
                <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/solicitar-cotizacion')}>
                    Solicitar <br /> Cotización
                </button>
                <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/ver-base-instalada')}>
                    Servicios <br /> Adquiridos
                </button>
                <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/soporte-tecnico')}>
                    Soporte <br /> Técnico
                </button>
                <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/reclamos')}>
                    Reclamos
                </button>
            </div>
        </div>
    );
};

export default ClienteWelcome;
