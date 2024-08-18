import React from 'react';
import { Link } from 'react-router-dom';
import iconoAbrirSeccion from "/src/assets/images/iconoAbrirSeccion.png";
import Breadcrumb from './Breadcrumb';  // Asegúrate de que esta ruta sea correcta
import './SkidDosificacionPage.css';

const SkidDosificacionPage = () => {
  // Definir las rutas del breadcrumb
  const breadcrumbPaths = [
    { label: 'Cliente', link: '/cliente' },
    { label: 'Solicitar Cotización', link: '/cliente/solicitar-cotizacion' },
    { label: 'Procura', link: '/cliente/solicitar-cotizacion/procura' },
    { label: 'Skid de Dosificación', link: '#' }
  ];

  return (
    <div className="skid-dosificacion-page">
      {/* Breadcrumb */}
      <Breadcrumb paths={breadcrumbPaths} />
      
      <h1 className="form-title">Solicitud de Oferta para un Skid de Dosificación:</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">N°</th>
            <th className="text-center">Sección de datos</th>
            <th className="text-center">Descripción de la sección de datos</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">1</td>
            <td className="text-left">Datos de Operación</td>
            <td className="text-left">Fluidos, Concentración de fluidos, Caudal, Presión y otros...</td>
            <td className="text-center">
              <Link to="/cliente/solicitar-cotizacion/procura/oferta/datos-operacion">
                <button className="btn-acciones">
                  <img src={iconoAbrirSeccion} alt="Abrir sección" className="icono-acciones" />
                  <span>Abrir sección</span>
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="text-left">2</td>
            <td className="text-left">Componentes del Skid</td>
            <td className="text-left">Componentes del Skid: Bomba Dosificadora, Cabina Protectora y otros...</td>
            <td className="text-center">
              <Link to="/cliente/solicitar-cotizacion/procura/oferta/componentes-skid">
                <button className="btn-acciones">
                  <img src={iconoAbrirSeccion} alt="Abrir sección" className="icono-acciones" />
                  <span>Abrir sección</span>
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkidDosificacionPage;
