import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/services/InstalledBase.css'

const InstalledBase = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn btn-link p-0" onClick={() => handleLinkClick('/cliente')}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Base Instalada</li>
                </ol>
            </nav>
            <h2>Base Instalada</h2>
            <table id="myTable" className="display">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Tipo de Servicio</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td  onClick={() => handleLinkClick('/cliente/servicio')}>Servicio de Procura</td>
                        <td>Fabricación de Tanques</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Servicio de Procura</td>
                        <td>Fabricación de Tanques</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InstalledBase;
