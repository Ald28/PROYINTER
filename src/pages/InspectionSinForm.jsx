import React from 'react';
import '../assets/styles/InspectionSinForm.css';

const InspectionSinForm = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
        alert("Solicitud enviada.");
        onClose();
    };

    return (
        <div className="inspection-sin-form-page">
            <h1 className="form-title">FORMULARIO SIN INFORME DE INSPECCIÓN</h1>
            <div className="form-content">
                <h2>PROYECTOS E INGENIERIA INTERNACIONALES</h2>
                <div className="info-box">
                    <p>Recuerda: Toda reclamo fuera del período de garantía será atendida como oferta de reparación.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="reclamo">Reclamo:</label>
                        <textarea id="reclamo" name="reclamo" rows="4" required></textarea>
                    </div>
                    <div className="button-group">
                        <button type="button" className="volver-button" onClick={onClose}>Volver</button>
                        <button type="submit" className="enviar-button">Enviar Solicitud</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InspectionSinForm;
