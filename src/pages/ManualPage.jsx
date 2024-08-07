import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/manuales.css';

const ManualPage = () => (
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
      <section id="manuales">
        <h2>Manuales y Documentación</h2>
        <ul>
          <li>
            Manual de Mantenimiento
            <div className="icons">
              <a href="manual_mantenimiento.pdf" target="_blank" className="icon view">👁️</a>
              <a href="manual_mantenimiento.pdf" download className="icon download">⬇️</a>
            </div>
          </li>
          <li>
            Datasheet
            <div className="icons">
              <a href="datasheet.pdf" target="_blank" className="icon view">👁️</a>
              <a href="datasheet.pdf" download className="icon download">⬇️</a>
            </div>
          </li>
          <li>
            Despiece
            <div className="icons">
              <a href="despiece.pdf" target="_blank" className="icon view">👁️</a>
              <a href="despiece.pdf" download className="icon download">⬇️</a>
            </div>
          </li>
          <li>
            Repuestos
            <div className="icons">
              <a href="repuestos.pdf" target="_blank" className="icon view">👁️</a>
              <a href="repuestos.pdf" download className="icon download">⬇️</a>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
);

export default ManualPage;
