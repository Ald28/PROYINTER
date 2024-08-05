import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { BiHome, BiMessageAltDetail, BiStoreAlt, BiSupport, BiBell, BiWrench } from 'react-icons/bi';
import logo from '../assets/images/Logo_proyinter.png';
import '../assets/styles/ClientePage.css';

const ClientePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const [cliente, setCliente] = useState('');

    useEffect(() => {
        const correoCliente = localStorage.getItem('cliente');
        if (correoCliente) {
            const nombreCliente = correoCliente.split('@')[0];
            setCliente(nombreCliente.charAt(0).toUpperCase() + nombreCliente.slice(1));
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
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
                        <h1 className="h4 mb-3">Cliente</h1>
                        <Link to="/cliente"><button className="btn btn-link"><BiHome size={20} /> Inicio</button></Link>
                        <Link to="/cliente/solicitar-cotizacion"><button className="btn btn-link"><BiMessageAltDetail size={20} /> Solicitar Cotización</button></Link>
                        <div className="submenu">
                            <button className="btn btn-link" onClick={toggleSubMenu}>
                                <BiStoreAlt size={20} /> Ver Base Instalada {subMenuOpen ? '▲' : '▼'}
                            </button>
                            {subMenuOpen && (
                                <div className="submenu-links">
                                    <Link to="/cliente/ver-base-instalada"><button className="btn btn-link submenu-item">Vista Principal</button></Link>
                                    <Link to="/cliente/orden-de-compra"><button className="btn btn-link submenu-item">Orden de Compra</button></Link>
                                    <Link to="/cliente/oferta-de-venta"><button className="btn btn-link submenu-item">Oferta de Venta</button></Link>
                                    <Link to="/cliente/informacion-tecnica-equipos"><button className="btn btn-link submenu-item">Información Técnica de los Equipos</button></Link>
                                    <Link to="/cliente/ingenieria-de-detalle"><button className="btn btn-link submenu-item">Ingeniería de Detalle</button></Link>
                                    <Link to="/cliente/despacho"><button className="btn btn-link submenu-item">Despacho</button></Link>
                                </div>
                            )}
                        </div>
                        <Link to="/cliente/soporte-tecnico"><button className="btn btn-link"><BiSupport size={20} /> Soporte Técnico</button></Link>
                        <Link to="/cliente/reclamos"><button className="btn btn-link"><BiWrench size={20} /> Reclamos</button></Link>
                        <div className="help-section">
                            <h2 className="h5 mb-3">Ayuda</h2>
                            <Link to="/cliente/mantenimiento"><button className="btn btn-link"><BiWrench size={20} /> Mantenimiento</button></Link>
                            <Link to="/cliente/notificaciones"><button className="btn btn-link"><BiBell size={20} /> Notificaciones</button></Link>
                        </div>
                    </nav>
                )}
                <main className="main-content flex-grow-1 p-4">
                    <div className="content">
                        <h2>Bienvenido, {cliente}</h2><br />
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ClientePage;
