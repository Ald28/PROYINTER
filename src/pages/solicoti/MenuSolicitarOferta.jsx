import React from 'react';

const MenuSolicitarOferta = ({ onClose }) => {
  return (
    <div className="menu-container">
      <h2>Seleccione una forma de solicitar su oferta</h2>
      <button onClick={() => alert("Seleccionar modelo")}>Seleccionar modelo</button>
      <button onClick={() => alert("Completar datos de formulario")}>Completar datos de formulario</button>
      <button onClick={() => alert("Reunión con un Asesor")}>Reunión con un Asesor</button>
      <button onClick={() => alert("Completar solicitud de oferta previa")}>Completar solicitud de oferta previa</button>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default MenuSolicitarOferta;
