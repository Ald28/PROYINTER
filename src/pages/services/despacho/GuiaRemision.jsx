// src/pages/GuiaRemision.jsx
import React from 'react';
import '../../../assets/styles/InstalledBase.css';

const documentos = [
    { id: 1, nombre: '20601436036-09-EG07-7.pdf', url: '/files/20601436036-09-EG07-7.pdf' },
    { id: 2, nombre: '20601436036-09-EG07-6.pdf', url: '/files/20601436036-09-EG07-6.pdf' },
];

const GuiaRemision = () => {
    return (
        <div className="installed-base">
            <h2>Guía de Remisión</h2>
            <div className="info-section">
                {documentos.map(doc => (
                    <a 
                        key={doc.id} 
                        href={doc.url} 
                        download
                    >
                        {doc.nombre}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default GuiaRemision;
