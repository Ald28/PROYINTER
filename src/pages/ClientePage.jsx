import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/images/Logo_proyinter.png';
import '../assets/styles/ClientePage.css';

const ClientePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [cliente, setCliente] = useState('');

    useEffect(() => {
        const correoCliente = localStorage.getItem('cliente');
        if (correoCliente) {
            const nombreCliente = correoCliente.split('@')[0];
            setCliente(nombreCliente);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="cliente-page">
            <header className="header d-flex align-items-center justify-content-between px-4 py-2">
                <div className="d-flex align-items-center">
                    <button className="btn btn-link" onClick={toggleSidebar}>
                        <FaBars size={30} />
                    </button>
                    <img src={logo} alt="Proyinter Logo" className="logo me-2" />
                </div>
                <div className="position-relative">
                    <button className="btn btn-link" onClick={toggleMenu}>
                        <FaUserCircle size={30} />
                    </button>
                    {menuOpen && (
                        <div className="dropdown-menu dropdown-menu-end show">
                            <button className="dropdown-item">Ver mi perfil</button>
                            <Link to="/"><button className="dropdown-item text-danger">Cerrar sesión</button></Link>
                            <button className="dropdown-item">Editar mi perfil</button>
                        </div>
                    )}
                </div>
            </header>
            <div className="d-flex">
                {sidebarOpen && (
                    <nav className="sidebar p-3">
                        <h1 className="h4 mb-0">Cliente</h1>
                        <Link to="/cliente"><button className="btn btn-link">Inicio</button></Link>
                        <Link to="/cliente/solicitar-cotizacion"><button className="btn btn-link">Solicitar Cotización</button></Link>
                        <Link to="/cliente/ver-base-instalada"><button className="btn btn-link">Ver base instalada</button></Link>
                        <Link to="/cliente/soporte-tecnico"><button className="btn btn-link">Soporte técnico</button></Link>
                        <Link to="/cliente/reclamos"><button className="btn btn-link">Reclamos</button></Link> {/* Enlace a Reclamos */}
                        <Link to="/cliente/mantenimiento"><button className="btn btn-link">Mantenimiento</button></Link>
                        <Link to="/cliente/notificaciones"><button className="btn btn-link">Notificaciones</button></Link>
                    </nav>
                )}
                <main className="main-content flex-grow-1 p-4">
                    <div className="content">
                        <h2>Bienvenido al portal del Cliente, {cliente}</h2><br />
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ClientePage;
