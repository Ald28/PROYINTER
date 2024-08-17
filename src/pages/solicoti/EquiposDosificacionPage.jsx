import React from 'react';

const EquiposDosificacionPage = () => {
  return (
    <div className="tabla-componentes-skid">
      <h2>Equipos de Dosificación</h2>
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
            <td>Bomba Dosificadora</td>
            <td>Operación</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Válvula</td>
            <td>Alivio</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Manómetros</td>
            <td>Por circuito</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Amortiguador de pulso</td>
            <td>Por circuito</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Columna de Calibración</td>
            <td>Por circuito</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EquiposDosificacionPage;
