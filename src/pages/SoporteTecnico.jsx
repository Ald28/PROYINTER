import React from 'react';
import '../assets/styles/SoporteTecnico.css';
import { FaWpforms, FaHeadset } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Soporte_tecnico = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);  // Navega hacia atrás en la historia
    };

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

            {/* Botón de atrás */}
            <div className="d-flex justify-content-start mb-3 position-relative">
                <button className="circle-button-back" onClick={handleBackClick}>
                    <i className="fa fa-arrow-left"></i>
                    <span className='text-black'>Atrás</span>
                </button>
            </div>

            {/* Contenedor con utilidad de Bootstrap para centrar los botones */}
            <div className="d-flex flex-column align-items-center">
                <button 
                    className=" btn btn-primary fw-bold degradado p-3 mb-3  d-flex align-items-center justify-content-center rounded-3" 
                    onClick={() => handleLinkClick('/cliente/soporte-tecnico/Formulario')}
                    style={{ width: '100%', maxWidth: '360px' }}
                >
                    <FaWpforms className='me-4' size={39} />
                    <span>Completar <br /> Formulario</span>
                </button>

                <button 
                    className="btn btn-primary fw-bold degradado p-3 d-flex align-items-center justify-content-center rounded-3" 
                    onClick={() => handleLinkClick('/cliente/soporte-tecnico/contacto')}
                    style={{ width: '100%', maxWidth: '360px' }}
                >
                    <FaHeadset className='me-4' size={39} />
                    <span>Contactarse <br /> con un asesor</span>
                </button>
            </div>
        </div>
    );
};

export default Soporte_tecnico;
