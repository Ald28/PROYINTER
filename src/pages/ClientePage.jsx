import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { BiHome, BiBell, BiCog } from 'react-icons/bi';
import { FaChartLine, FaCalendarCheck, FaUserCog, FaBook } from 'react-icons/fa';
import logo from '../assets/images/Logo_proyinter_final-03.png';
import '../assets/styles/ClientePage.css';
import ClienteWelcome from './ClienteWelcome';

const ClientePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [cliente, setCliente] = useState('');
    const [selectedButton, setSelectedButton] = useState('');
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

    const handleLinkClick = (path, buttonName) => {
        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        }
        setSelectedButton(buttonName);
        navigate(path);
    };

    const handleLogout = () => {
        localStorage.removeItem('cliente');
        navigate('/');
    };

    return (
        <div className={`cliente-page ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <header className="header d-flex align-items-center justify-content-between px-4 py-2">
                <div className="d-flex align-items-center">
                <img src={logo} alt="Proyinter Logo" width="170" onClick={() => handleLinkClick('/cliente', 'inicio')} />
                    <button className="btn btn-link ms-2" onClick={toggleSidebar} style={{ paddingLeft: '5px' }}>
                        <FaBars className='hamburguesa' size={30} />
                    </button>
                </div>
                <div className="position-relative d-flex align-items-center">
                    <button className='btn btn-link'>
                        <BiBell size={35} className='notificaciones' />
                    </button>
                    <button className="btn btn-link" onClick={toggleMenu}>
                        <FaUserCircle size={35} className="icon-gray"/>
                    </button>
                    {menuOpen && (
                        <div className="dropdown-menu dropdown-menu-end show">
                            <button className="dropdown-item">Ver mi perfil</button>
                            <button className="dropdown-item text-danger" onClick={handleLogout}>Cerrar sesión</button>
                            <button className="dropdown-item ">Editar mi perfil</button>
                        </div>
                    )}
                </div>
            </header>
            <div className="d-flex">
                <nav className={`sidebar p-3 ${!sidebarOpen && 'sidebar-hidden'}`}>
                    <button
                        className={`btn btn-link fw-semibold borde border-2  ${selectedButton === 'inicio' && 'boton-activo'}`} style={{color:'#004B70' }}
                        onClick={() => handleLinkClick('/cliente', 'inicio')}
                    >
                        <BiHome size={20} /> Inicio
                    </button>
                    <h2 className="sidebar-title ">Cliente</h2>
                    <button 
                        className={`btn btn-link fw-semibold borde border-2 ${selectedButton === 'cotizacion' && 'boton-activo'}`} style={{color:'#004B70' }}
                        onClick={() => handleLinkClick('/cliente/solicitar-cotizacion', 'cotizacion')}>
                        <FaChartLine size={20} /> Solicitar Cotización
                    </button>
                    <button
                        className={`btn btn-link fw-semibold borde border-2 ${selectedButton === 'servicios' && 'boton-activo'} `} style={{color:'#004B70' }}
                        onClick={() => handleLinkClick('/cliente/ver-base-instalada', 'servicios')}
                    >
                        <FaCalendarCheck size={20} /> Servicios Adquiridos
                    </button>
                    <button 
                        className={`btn btn-link fw-semibold borde border-2 ${selectedButton === 'soporte' && 'boton-activo'}`} style={{color:'#004B70' }}
                        onClick={() => handleLinkClick('/cliente/soporte-tecnico', 'soporte')}>
                        <FaUserCog size={20} /> Soporte Técnico
                    </button>
                    <button 
                        className={`btn btn-link fw-semibold borde border-2 ${selectedButton === 'garantias' && 'boton-activo'} `} style={{color:'#004B70' }}
                        onClick={() => handleLinkClick('/cliente/reclamos','garantias')}>
                        <FaBook size={20} /> Garantías y Reclamos
                    </button>
                    <h2 className="sidebar-title ">Usuario</h2>
                    <button 
                      className={`btn btn-link fw-semibold borde border-2 ${selectedButton ==='editar' && 'boton-activo'}`}
                      style={{color:'#004B70' }} /* Usa el color específico aquí */
                     onClick={() => handleLinkClick('/cliente/editar-perfil','editar')}>
                    <FaUserCircle size={20} /> Editar perfil
                  </button>
                    <button 
                        className={`btn btn-link fw-semibold borde border-2 ${selectedButton === 'notificaciones' && 'boton-activo'}`} style={{color:'#004B70' }}
                        onClick={() => handleLinkClick('/cliente/notificaciones','notificaciones')}>
                        <BiBell size={20} /> Notificaciones
                    </button>
                    <button 
                        className={`btn btn-link fw-semibold borde border-2 ${selectedButton === 'ayuda' && 'boton-activo'}`} style={{color:'#004B70' }}
                        onClick={() => handleLinkClick('/cliente/ayuda','ayuda')}>
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
