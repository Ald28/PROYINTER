import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck, faPen, faUserGroup, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from './Breadcrumb';
import './Breadcrumb.css';  // Estilos para el breadcrumb
import './SolicitarOfertaPage.css';  // El nuevo archivo CSS exclusivo para SolicitarOfertaPage

const SolicitarOfertaPage = () => {
  const breadcrumbPaths = [
    { label: 'Cliente', link: '/cliente' },
    { label: 'Solicitar Cotización', link: '/cliente/solicitar-cotizacion' },
    { label: 'Procura', link: '/cliente/solicitar-cotizacion/procura' },
    { label: 'Suministro y/o Fabricación', link: '' }
  ];

  return (
    <div className="servicio">
      {/* Breadcrumb */}
      <Breadcrumb paths={breadcrumbPaths} />

      {/* Título alineado a la izquierda */}
      <h2 className="form-title">Seleccione una forma de solicitar su oferta</h2>

      {/* Botones */}
      <div className="info-section">
        <div className="info-item">
          <Link className="solicitar-oferta-btn fw-bold" to='#'>
            <FontAwesomeIcon icon={faFileCircleCheck} /> Seleccionar modelo
          </Link>
        </div>
        <div className="info-item">
        <Link className="solicitar-oferta-btn fw-bold" to='/cliente/solicitar-cotizacion/procura/oferta/formulario'>
            <FontAwesomeIcon icon={faGraduationCap} /> Completar datos de formulario
        </Link>
        </div>      

        <div className="info-item">
          <Link className="solicitar-oferta-btn fw-bold" to='#'>
            <FontAwesomeIcon icon={faUserGroup} /> Reunión con un Asesor
          </Link>
        </div>
        <div className="info-item">
          <Link className="solicitar-oferta-btn fw-bold" to='#'>
            <FontAwesomeIcon icon={faPen} /> Completar solicitud de oferta previa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolicitarOfertaPage;




