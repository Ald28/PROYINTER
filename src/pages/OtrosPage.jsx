import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/otros.css';

const OtrosPage = () => {
  const [problema, setProblema] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [problemaError, setProblemaError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setProblemaError(false);
    setDescripcionError(false);

    let isValid = true;

    if (!problema.trim()) {
      setProblemaError(true);
      isValid = false;
    }

    if (!descripcion.trim()) {
      setDescripcionError(true);
      isValid = false;
    }

    if (isValid) {
      alert('Formulario enviado exitosamente!');
      // Aquí puedes agregar el código para enviar el formulario, por ejemplo usando fetch o XMLHttpRequest
    }
  };

  return (
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
        <section className="form-section">
          <h2>Otros</h2>
          <h3>DAVID PARIASCA - ALH650000-NR</h3>
          <form id="supportForm" onSubmit={handleSubmit}>
            <div className="mb-3 position-relative">
              <label htmlFor="problema" className="form-label">Indica el problema de la Bomba:</label>
              <input
                type="text"
                className="form-control"
                id="problema"
                placeholder="Problema"
                value={problema}
                onChange={(e) => setProblema(e.target.value)}
              />
              {problemaError && (
                <div className="alert alert-danger" role="alert">
                  Por favor, ingrese el problema.
                </div>
              )}
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="descripcion" className="form-label">Descripción:</label>
              <textarea
                className="form-control"
                id="descripcion"
                rows="3"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
              {descripcionError && (
                <div className="alert alert-danger" role="alert">
                  Por favor, ingrese la descripción.
                </div>
              )}
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <button type="submit" className="btn btn-primary">Enviar</button>
              <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>Volver</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default OtrosPage;
