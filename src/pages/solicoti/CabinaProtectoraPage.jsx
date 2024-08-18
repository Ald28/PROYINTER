import React from 'react';
import './ComponentesSkidPage.css';

const CabinaProtectoraPage = () => {
  return (
    <div className="tabla-componentes-skid">
      <h2>Cabina Protectora</h2>
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
            <td>Tablero Eléctrico de fuerza</td>
            <td>Fuerza</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Canalización Eléctrica</td>
            <td>Fuerza</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cabina Protectora</td>
            <td>Para todo el skid</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Medidor de Flujo</td>
            <td>Por circuito</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CabinaProtectoraPage;
