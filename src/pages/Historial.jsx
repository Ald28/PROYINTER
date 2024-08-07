import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/historial.css';

const Historial = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="nav">
            <li className="nav-item bg-success">
              <a className="nav-link text-white" href="/cliente/soporte-tecnico/reclamo">Soporte</a>
            </li>
            <li className="nav-item bg-danger">
              <a className="nav-link text-white" href="/cliente/soporte-tecnico/manuales">Manuales</a>
            </li>
            <li className="nav-item bg-warning">
              <a className="nav-link text-white" href="/cliente/soporte-tecnico/fallos">Modos de fallo</a>
            </li>
            <li className="nav-item bg-info">
              <a className="nav-link text-white" href="/cliente/soporte-tecnico/historial">Historial</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="historial">
          <h2>Historial de Solicitudes de Soporte</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Solicitud</th>
                  <th>Fecha</th>
                  <th>Problema</th>
                  <th>Respuesta</th>
                </tr>
              </thead>
              <tbody id="historial-solicitudes">
                {/* Ejemplo de solicitud pasada */}
                <tr>
                  <td>Solicitud 1</td>
                  <td>2024-07-30</td>
                  <td>Descripción del problema</td>
                  <td>Descripción de la respuesta</td>
                </tr>
                {/* Agregar más solicitudes aquí */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Historial;
