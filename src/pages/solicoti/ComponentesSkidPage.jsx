import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentesSkidPage.css';

const ComponentesSkidPage = () => {
  return (
    <div className="tabla-componentes-skid">
      <h2>Solicitud de Oferta para un Skid de Dosificación: Componentes del Skid</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="text-left">N°</th>
            <th className="text-left">Componentes del Skid</th>
            <th className="text-left">Descripción de la sección de datos</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">1</td>
            <td className="text-left">Equipos de Dosificación</td>
            <td className="text-left">Bomba Dosificadora, Válvula, Manómetros y Amortiguador</td>
            <td className="text-center">
              <Link to="/cliente/solicitar-cotizacion/procura/oferta/componentes-skid/equipos-dosificacion">
                <button className="btn-abrir-seccion">Abrir sección</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="text-left">2</td>
            <td className="text-left">------------------</td>
            <td className="text-left">Cabina protectora, tableros eléctricos y canalización</td>
            <td className="text-center">
              <Link to="/cliente/solicitar-cotizacion/procura/oferta/componentes-skid/cabina-protectora">
                <button className="btn-abrir-seccion">Abrir sección</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="text-left">3</td>
            <td className="text-left">------------------</td>
            <td className="text-left">Tanques, bomba de trasvase, estructura de Skid y otros...</td>
            <td className="text-center">
              <Link to="/cliente/solicitar-cotizacion/procura/oferta/componentes-skid/tanques">
                <button className="btn-abrir-seccion">Abrir sección</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComponentesSkidPage;
