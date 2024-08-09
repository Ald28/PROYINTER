import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';

const DossierdeCalidad = () => {
    const dossierList = [
        { id: 1, name: 'MB_QC_PRUEB ACEPT TALLER_001', fecha: '11 jul. 2024', link: '/files/MB_QC_PRUEB ACEPT TALLER_001.pdf' },
    ];

    useEffect(() => {
        $(document).ready(function() {
            $('#dossierTable').DataTable();
        });
    }, []);

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/ver-base-instalada">Base Instalada</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/servicio">Servicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/InformacionTec">Información Técnica de Equipos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Dossier de Calidad</li>
                </ol>
                <h3>Dossier de Calidad</h3>
                <table id="dossierTable" className="display">
                    <thead>
                        <tr>
                            <th>Dossier</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dossierList.map(dossier => (
                            <tr key={dossier.id}>
                                <td>
                                    <div className="info-section">
                                        <div className="info-item">
                                            <a href={dossier.link} download target="_blank" rel="noopener noreferrer">
                                                {dossier.name}
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>{dossier.fecha}</td>
                                <td>
                                    <a href={dossier.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mr-2">
                                        Previsualizar
                                    </a>
                                    <a href={dossier.link} download className="btn btn-secondary btn-sm">
                                        Descargar
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </nav>
        </div>
    );
};

export default DossierdeCalidad;
