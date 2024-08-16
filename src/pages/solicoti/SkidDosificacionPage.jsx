import React from 'react';
import { Link } from 'react-router-dom';
import iconoAbrirSeccion from "/src/assets/images/iconoAbrirSeccion.png";
import './SkidDosificacionPage.css';

const SkidDosificacionPage = () => {
  return (
    <div className="skid-dosificacion-page">
      <h2 className="form-title">Solicitud de Oferta para un Skid de Dosificación:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>N°</th>
            <th>Sección de datos</th>
            <th>Descripción de la sección de datos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Datos de Operación</td>
            <td>Fluidos, Concentración de fluidos, Caudal, Presión y otros...</td>
            <td>
              <Link to="/cliente/solicitar-cotizacion/procura/oferta/datos-operacion">
                <button className="btn-acciones">
                  <img src={iconoAbrirSeccion} alt="Abrir sección" className="icono-acciones" />
                  <span>Abrir sección</span>
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Componentes del Skid</td>
            <td>Componentes del Skid: Bomba Dosificadora, Cabina Protectora y otros...</td>
            <td>
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

