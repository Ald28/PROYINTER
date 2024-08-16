import React from 'react';
import './SolicitarCotizacion.css';

const SolicitarCotizacion = () => {
    const handleButtonClick = (buttonName) => {
        console.log(`Button ${buttonName} clicked`);
        // Aquí puedes agregar la lógica para cada botón
    };

    return (
        <div className="solicitar-cotizacion">
            <button
                className="btn-custom"
                onClick={() => handleButtonClick('Button 1')}
            >
                Button 1
            </button>
            <button
                className="btn-custom"
                onClick={() => handleButtonClick('Button 2')}
            >
                Button 2
            </button>
            <button
                className="btn-custom"
                onClick={() => handleButtonClick('Button 3')}
            >
                Button 3
            </button>
            <button
                className="btn-custom"
                onClick={() => handleButtonClick('Button 4')}
            >
                Button 4
            </button>
            <button
                className="btn-custom"
                onClick={() => handleButtonClick('Button 5')}
            >
                Button 5
            </button>
        </div>
    );
};

export default SolicitarCotizacion;
