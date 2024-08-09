// src/pages/PackingList.jsx
import React from 'react';
import '../InstalledBase.css'

const documentos = [
    { id: 1, nombre: 'MB_DC_PACKING LIST TANK FIB. VIDR._001.pdf', url: '/files/MB_DC_PACKING LIST TANK FIB. VIDR._001.pdf' },
];

const PackingList = () => {
    return (
        <div className="installed-base">
            <h2>Packing List</h2>
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

export default PackingList;
