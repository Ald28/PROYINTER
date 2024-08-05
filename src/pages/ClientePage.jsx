import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { BiHome, BiMessageAltDetail, BiStoreAlt, BiSupport, BiBell, BiWrench } from 'react-icons/bi';
import logo from '../assets/images/Logo_proyinter.png';
import '../assets/styles/ClientePage.css';

const ClientePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [cliente, setCliente] = useState('');
    const navigate = useNavigate();

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

    const handleLinkClick = (path) => {
        if (window.innerWidth <= 768) {
            setSidebarOpen(false); // Cierra el sidebar solo en vista móvil
        }
        navigate(path); // Navega a la página deseada
    };

    return (
        <div className={`cliente-page ${sidebarOpen ? 'sidebar-open' : ''}`}>
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
                <nav className={`sidebar p-3 ${!sidebarOpen && 'sidebar-hidden'}`}>
                    <h1 className="h4 mb-3">Cliente</h1>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente')}>
                        <BiHome size={20} /> Inicio
                    </button>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/solicitar-cotizacion')}>
                        <BiMessageAltDetail size={20} /> Solicitar Cotización
                    </button>
                    <div className="submenu">
                        <button className="btn btn-link" onClick={toggleSubMenu}>
                            <BiStoreAlt size={20} /> Ver Base Instalada {subMenuOpen ? '▲' : '▼'}
                        </button>
                        {subMenuOpen && (
                            <div className="submenu-links">
                                <button className="btn btn-link submenu-item" onClick={() => handleLinkClick('/cliente/ver-base-instalada')}>
                                    Vista Principal
                                </button>
                                <button className="btn btn-link submenu-item" onClick={() => handleLinkClick('/cliente/orden-de-compra')}>
                                    Orden de Compra
                                </button>
                                <button className="btn btn-link submenu-item" onClick={() => handleLinkClick('/cliente/oferta-de-venta')}>
                                    Oferta de Venta
                                </button>
                                <button className="btn btn-link submenu-item" onClick={() => handleLinkClick('/cliente/informacion-tecnica-equipos')}>
                                    Información Técnica de los Equipos
                                </button>
                                <button className="btn btn-link submenu-item" onClick={() => handleLinkClick('/cliente/ingenieria-de-detalle')}>
                                    Ingeniería de Detalle
                                </button>
                                <button className="btn btn-link submenu-item" onClick={() => handleLinkClick('/cliente/despacho')}>
                                    Despacho
                                </button>
                            </div>
                        )}
                    </div>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/soporte-tecnico')}>
                        <BiSupport size={20} /> Soporte Técnico
                    </button>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/reclamos')}>
                        <BiWrench size={20} /> Reclamos
                    </button>
                    <div className="help-section">
                        <h2 className="h5 mb-3">Ayuda</h2>
                        <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/mantenimiento')}>
                            <BiWrench size={20} /> Mantenimiento
                        </button>
                        <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/notificaciones')}>
                            <BiBell size={20} /> Notificaciones
                        </button>
                    </div>
                </nav>
                <main className={`main-content flex-grow-1 p-4 ${!sidebarOpen && 'expanded'}`}>
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
