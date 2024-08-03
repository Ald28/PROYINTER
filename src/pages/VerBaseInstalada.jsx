import React from 'react';

const VerBaseInstalada = () => {
    return (
        <div>
            <h2>Vista principal de funcionalidad – base instalada</h2>
            <div className="offer-details">
                <h3>Funcionalidad de la oferta 18000009 - David Pariasca - IX c150TCNTB2</h3>
                <p>Nro Oferta: 18000009</p>
                <p>Reactivo: Cloruro férrico</p>
                <p>Caudal: 10.00 L/h</p>
                <p>Presión: 2.00 Bar</p>
                <a href="#!" className="link">Visualizar oferta</a>
                <a href="#!" className="link">Descargar PDF</a>
                <button className="btn btn-primary">Actualizar información</button>
                <button className="btn btn-secondary">Volver</button>
            </div>
            <div className="update-data">
                <h3>Actualización de datos de la operación</h3>
                <input type="text" placeholder="Cloruro férrico" />
                <input type="text" placeholder="Caudal (En L/h)" />
                <input type="text" placeholder="Presión (En Bar)" />
                <button className="btn btn-primary">Actualizar</button>
            </div>
        </div>
    );
};

export default VerBaseInstalada;
