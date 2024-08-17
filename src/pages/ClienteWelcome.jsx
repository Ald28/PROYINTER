import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ClienteWelcome.css';
import { FaCalendarCheck, FaUserCog, FaBook, FaChartLine } from 'react-icons/fa';

const ClienteWelcome = () => {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
        <div className="cliente-welcome">
            <h2>Bienvenido, {localStorage.getItem('cliente').split('@')[0]}</h2><br />
            <div className="container">
                <div className="button-grid">
                    <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/solicitar-cotizacion')}>
                        <FaChartLine className='icon-size' size={50} />
                        Solicitar <br /> Cotización
                    </button>
                    <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/ver-base-instalada')}>
                        <FaCalendarCheck className='icon-size' size={50} />
                        Servicios <br /> Adquiridos
                    </button>
                    <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/soporte-tecnico')}>
                        <FaUserCog className='icon-size' size={50} />
                        Soporte <br /> Técnico
                    </button>
                    <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/garantias-reclamos')}>
                        <FaBook className='icon-size' size={50} />
                        Garantías y <br /> Reclamos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClienteWelcome;