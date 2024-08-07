import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/fallos.css';

const FallosPage = () => (
  <div>
    <header>
      <nav>
        <ul className="nav">
          <li className="nav-item bg-success"><a className="nav-link text-white" href="/cliente/soporte-tecnico/reclamo">Soporte</a></li>
          <li className="nav-item bg-danger"><a className="nav-link text-white" href="/cliente/soporte-tecnico/manuales">Manuales</a></li>
          <li className="nav-item bg-warning"><a className="nav-link text-white" href="/cliente/soporte-tecnico/fallos">Modos de fallo</a></li>
          <li className="nav-item bg-info"><a className="nav-link text-white" href="/cliente/soporte-tecnico/historial">Historial</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Modos de fallo</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Modo de Falla</th>
              <th scope="col">Descripción</th>
              <th scope="col">Causa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vibración excesiva</td>
              <td>La bomba vibra excesivamente durante el funcionamiento</td>
              <td>Desbalanceo, alineación incorrecta, etc.</td>
            </tr>
            <tr>
              <td>Fuga</td>
              <td>Fuga de líquido en las juntas</td>
              <td>Empaquetadura desgastada, tornillos sueltos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
);

export default FallosPage;
