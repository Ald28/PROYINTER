import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../InstalledBase.css'

const Despacho = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    useEffect(() => {}, []);

    return (
        <div className="installed-base">
            <h2>Despacho</h2>
            <div className="button-group mb-3">
                <button className="btn btn-primary custom-btn" onClick={() => handleLinkClick('/cliente/despacho/guia-remision')}>Guía de Remisión</button>
            </div>
            <div className="button-group mb-3">
                <button className="btn btn-primary custom-btn" onClick={() => handleLinkClick('/cliente/despacho/packing-list')}>Packing List</button>
            </div>
        </div>
    );
};

export default Despacho;
