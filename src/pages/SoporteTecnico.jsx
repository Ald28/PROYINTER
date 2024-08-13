import React from 'react';
import '../assets/styles/ClientePage.css';
import { FaWpforms, FaHeadset } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom'; // Asegúrate de importar Link aquí

const Soporte_tecnico = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
        <div className="cliente-welcome text-start">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Soporte Técnico</li>
                </ol>
            </nav>
            <div className="button-grid">
                <button 
                    className="grid-button fw-bold degradado espacio" 
                    onClick={() => handleLinkClick('/cliente/soporte-tecnico/Formulario')}
                >
                    <FaWpforms className='icon-size' size={45} />
                    Completar <br /> Formulario
                </button>
            </div>
            <div className='button-grid'>
                <button 
                    className="grid-button fw-bold degradado espacio"
                    onClick={() => handleLinkClick('/contacto')}
                >
                    <FaHeadset className='icon-size' size={42} />
                    Contactarse <br /> con un asesor
                </button>
            </div>
        </div>
    );
};

export default Soporte_tecnico;
