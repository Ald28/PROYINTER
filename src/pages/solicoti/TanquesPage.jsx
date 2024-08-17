import React from 'react';

const TanquesPage = () => {
  return (
    <div className="tabla-componentes-skid">
      <h2>Tanques y Otros</h2>
      <table className="table">
        <thead>
          <tr>
            <th>N°</th>
            <th>Tipo de Componente</th>
            <th>Selección de Componentes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tanques</td>
            <td>Almacenamiento</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bomba de Trasvase</td>
            <td>Preparación/Dilución de fluido</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Estructura de Skid</td>
            <td>---</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Otros</td>
            <td>---</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TanquesPage;
