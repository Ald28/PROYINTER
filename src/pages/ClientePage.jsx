import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/images/Logo_proyinter.png';
import '../assets/styles/ClientePage.css';

const ClientePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="cliente-page">
            <header className="header d-flex align-items-center justify-content-between px-4 py-2">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="Proyinter Logo" className="logo me-2" />
                </div>
                <div className="position-relative">
                    <button className="btn btn-link" onClick={toggleMenu}>
                        <FaUserCircle size={30} />
                    </button>
                    {menuOpen && (
                        <div className="dropdown-menu dropdown-menu-end show">
                            <button className="dropdown-item">Ver mi perfil</button>
                            <button className="dropdown-item text-danger">Cerrar sesión</button>
                            <button className="dropdown-item">Editar mi perfil</button>
                        </div>
                    )}
                </div>
            </header>
            <div className="d-flex">
                <nav className="sidebar p-3">
                <h1 className="h4 mb-0">Cliente</h1>
                    <button className="btn btn-link">Inicio</button>
                    <button className="btn btn-link">Solicitar Cotización</button>
                    <button className="btn btn-link">Ver base instalada</button>
                    <button className="btn btn-link">Soporte técnico</button>
                    <button className="btn btn-link">Reclamos</button>
                    <button className="btn btn-link">Mantenimiento</button>
                    <button className="btn btn-link">Notificaciones</button>
                </nav>
                <main className="main-content flex-grow-1 p-4">
                    <div className="content">
                        <h2>Bienvenido al portal del cliente</h2>
                        {/* Contenido adicional aquí */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ClientePage;
