import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faTachometerAlt, faCogs, faVial } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from './Breadcrumb';  // Usamos el Breadcrumb que ya tienes
import './FormularioMenu.css';  // Estilos específicos para este componente

const FormularioMenu = () => {
  // Define las rutas del breadcrumb
  const breadcrumbPaths = [
    { label: 'Cliente', link: '/cliente' },
    { label: 'Solicitar Cotización', link: '/cliente/solicitar-cotizacion' },
    { label: 'Procura', link: '/cliente/solicitar-cotizacion/procura' },
    { label: 'Completar datos de formulario', link: '#' }
  ];

  return (
    <div className="servicio">
      {/* Usamos el breadcrumb y le pasamos las rutas */}
      <Breadcrumb paths={breadcrumbPaths} />
      
      <h2 className="form-title">Seleccione una aplicación para solicitar oferta</h2>
      <div className="info-section">
        <div className="info-item">
          <Link className="btn degradado fw-bold" to='#'>
            <FontAwesomeIcon icon={faFlask} /> Planta de Reactivos Químicos
          </Link>
        </div>
        <div className="info-item">
          <Link className="btn degradado fw-bold" to='#'>
            <FontAwesomeIcon icon={faTachometerAlt} /> Planta de Dosificación para un Reactivo Químico
          </Link>
        </div>
        <div className="info-item">
          <Link className="btn degradado fw-bold" to='#'>
            <FontAwesomeIcon icon={faCogs} /> Sistema de Dosificación
          </Link>
        </div>
        <div className="info-item">
        <Link className="btn degradado fw-bold" to='/cliente/solicitar-cotizacion/procura/oferta/skid-dosificacion'>
            <FontAwesomeIcon icon={faVial} /> Skid de Dosificación
        </Link>
        </div>
      </div>
    </div>
  );
};

export default FormularioMenu;
