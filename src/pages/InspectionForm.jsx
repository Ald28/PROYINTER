import React from 'react';
import '../assets/styles/InspectionForm.css';

const InspectionForm = ({ onClose }) => {
  return (
    <div className="inspection-form-page">
      <h1 className="inspection-form-title">RECLAMOS</h1>
      <div className="inspection-form-content">
        <h2>PROYECTOS E INGENIERIA INTERNACIONALES</h2>
        <div className="info-box">
          <p>Tu equipo se encuentra dentro del período de garantía, recuerda que tu garantía expira el <strong>2024-07-31</strong></p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="reclamo">Reclamo:</label>
            <textarea id="reclamo" className="form-control" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="archivo">Sube el archivo de inspección:</label>
            <input type="file" id="archivo" className="form-control-file" />
          </div>
          <div className="form-group">
            <label htmlFor="modo-fallo">Indica el modo de fallo:</label>
            <select id="modo-fallo" className="form-control">
              <option>Otros</option>
              <option>Recalentamiento de motor</option>
              <option>Pérdida de caudal</option>
              <option>Fuga de glicerina o lubricante</option>
              <option>Obstrucción en la descarga</option>
              <option>Ruptura de manguera</option>
            </select>
          </div>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Volver</button>
          <button type="submit" className="btn btn-primary">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
};

export default InspectionForm;
