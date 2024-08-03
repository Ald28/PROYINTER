import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ReclamosPage.css';
import InspectionForm from './InspectionForm'; // Importar el componente existente
import InspectionSinForm from './InspectionSinForm'; // Importar el nuevo componente

// Función para calcular la fecha de un mes a partir de hoy
const getExpiryDate = () => {
    const currentDate = new Date();
    const expiryDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    return expiryDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD
};

const ReclamosPage = () => {
    const [view, setView] = useState('main'); // Estado para controlar la vista
    const [showForm, setShowForm] = useState(null); // Estado para controlar la visibilidad de los formularios
    const navigate = useNavigate();
    const expiryDate = getExpiryDate();

    const handleVolverClick = () => {
        navigate('/cliente');
    };

    const handleQuejasClick = () => {
        setView('quejas'); // Cambiar a la vista de quejas
    };

    const handleFormClick = (formType) => {
        setShowForm(formType); // Mostrar el formulario correspondiente
    };

    const handleCloseForm = () => {
        setShowForm(null); // Cerrar el formulario
    };

    if (showForm === 'conInforme') {
        return <InspectionForm onClose={handleCloseForm} />;
    }

    if (showForm === 'sinInforme') {
        return <InspectionSinForm onClose={handleCloseForm} />;
    }

    if (view === 'main') {
        return (
            <div className="reclamos-page">
                <h1 className="reclamos-title">RECLAMOS</h1>
                <div className="reclamos-content">
                    <h2>PROYECTOS E INGENIERIA INTERNACIONALES</h2>
                    <div className="info-box">
                        <p>Tu equipo se encuentra dentro del período de garantía, recuerda que tu garantía expira el <strong>{expiryDate}</strong></p>
                    </div>
                    <button className="reclamos-button" onClick={handleQuejasClick}>Quejas/Reclamos</button>
                    <div className="info-box">
                        <p>Recuerda: Toda reclamo fuera del período de garantía será atendida como oferta de reparación.</p>
                    </div>
                    <button className="volver-button" onClick={handleVolverClick}>Volver</button>
                </div>
            </div>
        );
    } else if (view === 'quejas') {
        return (
            <div className="reclamos-page">
                <h1 className="reclamos-title">RECLAMOS</h1>
                <div className="reclamos-content">
                    <h2>PROYECTOS E INGENIERIA INTERNACIONALES</h2>
                    <div className="info-box">
                        <p>Por favor elige una opción para ingresar tu reclamo...</p>
                    </div>
                    <button className="form-button-green" onClick={() => handleFormClick('conInforme')}>Formulario para informe de inspección</button>
                    <button className="form-button-red" onClick={() => handleFormClick('sinInforme')}>Formulario sin informe de inspección</button>
                    <div className="info-box">
                        <p>Recuerda: Toda reclamo fuera del período de garantía será atendida como oferta de reparación.</p>
                    </div>
                    <button className="volver-button" onClick={() => setView('main')}>Volver</button>
                </div>
            </div>
        );
    }
};

export default ReclamosPage;
