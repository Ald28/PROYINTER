import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { BiHome, BiMessageAltDetail, BiStoreAlt, BiSupport, BiBell, BiWrench, BiUser, BiCog } from 'react-icons/bi';
import logo from '../assets/images/Logo_proyinter.png';
import '../assets/styles/ClientePage.css';

const ClientePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
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

    const handleLinkClick = (path) => {
        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        }
        navigate(path);
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
                <div className="position-relative d-flex align-items-center">
                    <button className='btn btn-link'>
                        <IoNotifications size={30} />
                    </button>
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
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente')}>
                        <BiHome size={20} /> Inicio
                    </button>
                    <h2 className="sidebar-title">Cliente</h2>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/solicitar-cotizacion')}>
                        <BiMessageAltDetail size={20} /> Solicitar Cotización
                    </button>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/ver-base-instalada')}>
                        <BiStoreAlt size={20} /> Ver Base Instalada
                    </button>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/soporte-tecnico')}>
                        <BiSupport size={20} /> Soporte Técnico
                    </button>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/reclamos')}>
                        <BiWrench size={20} /> Reclamos
                    </button>
                    <h2 className="sidebar-title">Usuario</h2>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/editar-perfil')}>
                        <BiUser size={20} /> Editar perfil
                    </button>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/notificaciones')}>
                        <BiBell size={20} /> Notificaciones
                    </button>
                    <button className="btn btn-link" onClick={() => handleLinkClick('/cliente/ayuda')}>
                        <BiCog size={20} /> Ayuda
                    </button>
                </nav>
                <main className={`main-content flex-grow-1 p-4 ${!sidebarOpen && 'expanded'}`}>
                    <div className="content">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ClientePage;
