import React from 'react';

const ComponentesSkidPage = () => {
  return (
    <div className="tabla-componentes-skid">
      <h2>Solicitud de Oferta para un Skid de Dosificación: Componentes del Skid</h2>
      <table className="table">
        <thead>
          <tr>
            <th>N°</th>
            <th>Componentes del Skid</th>
            <th>Descripción de la sección de datos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Equipos de Dosificación</td>
            <td>Bomba Dosificadora, Válvula, Manómetros y Amortiguador</td>
            <td><button className="btn-abrir-seccion">Abrir sección</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>--------------</td>
            <td>Cabina protectora, tableros eléctricos y canalización</td>
            <td><button className="btn-abrir-seccion">Abrir sección</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>----------------</td>
            <td>Tanques, bomba de trasvase, estructura de Skid y otros...</td>
            <td><button className="btn-abrir-seccion">Abrir sección</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComponentesSkidPage;
