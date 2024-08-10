import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ClientePage.css';
import { FaCalendarCheck, FaUserCog, FaBook, FaChartLine  } from 'react-icons/fa';


const ClienteWelcome = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
      <div className="cliente-welcome text-start ">
      <h2>Bienvenido, {localStorage.getItem('cliente').split('@')[0]}</h2><br />
      <div className="button-grid">
          <button className="grid-button fw-bold degradado " onClick={() => handleLinkClick('/cliente/solicitar-cotizacion')}>
              <FaChartLine className='icon-size' size={40} />
              {/* <BiEdit className='icon-size' size={40} /> */}
              {/* <i class="fa-regular fa-calendar"></i> */}
              Solicitar <br /> Cotización
          </button>
          <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/ver-base-instalada')}>
              <FaCalendarCheck className='icon-size' size={33} />
              Servicios <br /> Adquiridos
          </button>
          <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/soporte-tecnico')}>
          <FaUserCog className='icon-size' size={40} />
              Soporte <br /> Técnico
          </button>
          <button className="grid-button fw-bold degradado" onClick={() => handleLinkClick('/cliente/reclamos')}>
          <FaBook className='icon-size' size={33} />
              Reclamos
          </button>
      </div>
  </div>
    );
};

export default ClienteWelcome;
