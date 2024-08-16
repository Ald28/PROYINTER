import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faTachometerAlt, faCogs, faVial } from '@fortawesome/free-solid-svg-icons';
import './FormularioMenu.css';  // Estilos específicos para este componente
import './BreadcrumbCustom.css';

const FormularioMenu = () => {
  return (
    <div className="servicio">
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
