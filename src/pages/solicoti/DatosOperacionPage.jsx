import React from 'react';

const DatosOperacionPage = () => {
  return (
    <div className="tabla-datos-operacion">
      <h2>Solicitud de Oferta para un Skid de Dosificación: Datos de Operación</h2>
      <table className="table">
        <thead>
          <tr>
            <th>N°</th>
            <th>Datos de Operación</th>
            <th>Seleccionar datos de Operación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Fluidos</td>
            <td>Seleccionar Fluido</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Concentración de Fluido</td>
            <td>Seleccionar concentración del fluido</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Caudal</td>
            <td>Seleccionar caudal</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Presión</td>
            <td>Seleccionar presión</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ambiente de Operación</td>
            <td>Seleccionar Ambiente de Operación</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Temperatura</td>
            <td>Seleccionar temperatura</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Altitud de Operación</td>
            <td>Seleccionar Altitud de Operación</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Humedad relativa de Operación</td>
            <td>Seleccionar humedad relativa de operación</td>
            <td><button className="btn-guardar">Guardar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatosOperacionPage;
