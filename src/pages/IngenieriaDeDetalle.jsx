import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/IngenieriaDeDetalle.css';

const documentos = [
    { id: 1, nombre: 'MB_QC_PRUEB ACEPT TALLER_001.pdf', url: '/files/MB_QC_PRUEB ACEPT TALLER_001.pdf' },
    { id: 2, nombre: 'Certificado de garantia - Tanques de fibra de vidrio Bateas 2024.pdf', url: '/files/Certificado de garantia - Tanques de fibra de vidrio Bateas 2024.pdf' },
    // Agrega más documentos según sea necesario
];

const IngenieriaDeDetalle = () => {
    return (
        <div className="detalle-page">
            <h2>Ingeniería de Detalle</h2>
            <ul className="document-list">
                {documentos.map(doc => (
                    <li key={doc.id} className="document-item">
                        <a href={doc.url} download>{doc.nombre}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngenieriaDeDetalle;